import {ethers, Signature} from 'ethers';
import {syncScrypt} from "scrypt-js";
import CryptoJS from 'crypto-js';
import {hashMessage} from "@ethersproject/hash";
import {
	DOMAIN_SEPARATOR,
	GET_LABEL_NAME_BY_INDEX,
	GET_PRIVATE_DATA_BY_INDEX_PERMIT_TYPE_HASH,
	GET_PRIVATE_DATA_BY_NAME_PERMIT_TYPE_HASH,
	HAS_MINTED_PERMIT_TYPE_HASH,
	INDEX_QUERY_PERMIT_TYPE_HASH,
	INIT_VAULT_PERMIT_TYPE_HASH, LABEL_NAME_PERMIT_TYPE_HASH,
	MINT_SAVE_PERMIT_TYPE_HASH,
	NAME_QUERY_PERMIT_TYPE_HASH,
	QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH,
	SAVE_PERMIT_TYPE_HASH,
	SAVE_WITH_MINTING_PERMIT_TYPE_HASH,
	SAVE_WITHOUT_MINTING_PERMIT_TYPE_HASH,
	TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH,
	VAULT_HAS_REGISTER_PERMIT_TYPE_HASH
} from "../constants/contract";

class CryptoMachine {
	CHARS:string = "1qaz!QAZ2w?sx@WSX.(=]3ec#EDC/)P:4rfv$RF+V5t*IK<9og}b%TGB6OL>yhn^YHN-[d'_7ujm&UJ0p;{M8ik,l|";
	LABEL_SALT_LEN:number = 32;
	CONTENT_PASSWORD_SALT_LEN:number = 32;

	calculateOnceHash(str:string):string{
		return this.calculateMultiHash(str,1);
	}

	calculateMultiHash(str:string, n:number):string{
		var sha256Value = "";
		var tmpStr = str;
		for (var i=0;i<n;i++){
			sha256Value = ethers.utils.sha256(ethers.utils.toUtf8Bytes(tmpStr));
			tmpStr = sha256Value;
		}
		return sha256Value
	}

	getHashStep0_8(keyspace:string, password:string, label:string):number {
		const onceHash = this.calculateOnceHash(keyspace+password+label);
		let deep = onceHash.substring(0,6)+onceHash.substring(onceHash.length-4);
		let step = parseInt(deep, 16)%8;
		return step === 0?8 : step;
	}

	getHashStep8_16(keyspace:string):number {
		const onceHash = this.calculateOnceHash(keyspace);
		let deep = onceHash.substring(0,6)+onceHash.substring(onceHash.length-4);
		let step = parseInt(deep, 16)%8;
		return step+8;
	}

	getLabelHashStep32_64(str:string):number {
		const onceHash = this.calculateOnceHash(str);
		let deep = onceHash.substring(0,6)+onceHash.substring(onceHash.length-4);
		let step = parseInt(deep, 16)%32;
		return step+32;
	}

	getHashStep32_64(str1:string, str2:string):number {
		const onceHash = this.calculateOnceHash(str1+str2);
		let deep = onceHash.substring(0,6)+onceHash.substring(onceHash.length-4);
		let step = parseInt(deep, 16)%32;
		return step+32;
	}


	calculatePairsBaseOnSeed(seed:string):{privKey:string, pubKey:string}{
		let secp256k1=require('secp256k1');
		seed = hashMessage(seed)
		let privKey = Buffer.from(seed.slice(2),'hex');
		//let privkey = ethers.utils.toUtf8Bytes(seed.slice(2))
		let pubKey=secp256k1.publicKeyCreate(privKey,false).slice(1);

		return {privKey:'0x'+privKey.toString("hex"), pubKey: pubKey.toString()};

	}

	getSaltChar(onceHash:string):string {
		let deep = onceHash.substring(0,6)+onceHash.substring(onceHash.length-4);
		return this.CHARS[parseInt(deep, 16)%this.CHARS.length];
	}

	calculateValidSeed(str1:string, str2:string):string{
		const DEEPING = this.getHashStep32_64(str1, str2);
		let h1 = this.calculateMultiHash(str1, 2);
		let h2 = this.calculateMultiHash(str2, 2);
		for(var i=0; i<DEEPING; i++){
			let pair1 = this.calculatePairsBaseOnSeed(h1+h2);
			let pair2 = this.calculatePairsBaseOnSeed(h2+h1);

			let signer1 = new ethers.utils.SigningKey(pair1.privKey)
			h2 = ethers.utils.joinSignature(signer1.signDigest(hashMessage(h1+h2)))

			let signer2 = new ethers.utils.SigningKey(pair2.privKey)
			h1 = ethers.utils.joinSignature(signer2.signDigest(hashMessage(h1+h2)))
		}

		let saltStr = "";
		for(let i=0;i<this.LABEL_SALT_LEN; i++){
			let saltChar = this.getSaltChar(ethers.utils.sha256(ethers.utils.toUtf8Bytes(h1+h2+saltStr)));
			saltStr += saltChar;
		}

		let scryptRes = syncScrypt(ethers.utils.toUtf8Bytes(h1+h2), ethers.utils.toUtf8Bytes(saltStr), 32,64,16,64);

		return ethers.utils.sha256(scryptRes);
	}

	getKids(watchAddr:string, labelValue:string, id:string){
		let onceHash = this.calculateOnceHash(watchAddr+labelValue+id);
		let prefixNum = onceHash.substring(0,4);
		let res = parseInt(prefixNum, 16)%2;
		if(res===1){
			return this.calculateWalletAddressBaseOnSeed(this.calculateOnceHash(watchAddr+this.calculateMultiHash(labelValue, this.getLabelHashStep32_64(id))));
		}else{
			let kid0 = this.calculateWalletAddressBaseOnSeed(this.calculateOnceHash(watchAddr+this.calculateMultiHash(labelValue, this.getLabelHashStep32_64(id))));
			let kid1 = this.calculateWalletAddressBaseOnSeed(this.calculateOnceHash(id+this.calculateMultiHash(labelValue, this.getLabelHashStep32_64(watchAddr))));
			return [kid0, kid1];
		}
	}

	calculateWalletAddressBaseOnSeed(seed:string):string{
		return ethers.utils.computeAddress(seed);
	}


	calculateStringKeccak256(str:string):string{
		return ethers.utils.solidityKeccak256(['string'],[str]);
	}

	encryptMessage(message:string, password:string):string{
		return CryptoJS.AES.encrypt(message, password).toString();
	}

	decryptMessage(message:string, password:string):string{
		return CryptoJS.AES.decrypt(message,password).toString(CryptoJS.enc.Utf8)
	}

	async signMessage(message:string, privKey:string):Promise<Signature>{
		let wallet = new ethers.Wallet(privKey)
		let flatSig = await wallet.signMessage(message)
		return ethers.utils.splitSignature(flatSig)
	}

	getLabelPassword(keyspace:string):string {
		let deep = this.getHashStep8_16(keyspace);
		let password = this.calculateMultiHash(keyspace, deep);
		/*
			argon2i.hash(password).then(res=>{
			  console.log("argon2 hash:",res);
			}); //default is argon2i, 防止侧信道攻击
		*/
		let saltStr = "";
		for(let i=0;i<this.LABEL_SALT_LEN; i++){
			let saltChar = this.getSaltChar(ethers.utils.sha256(ethers.utils.toUtf8Bytes(password+saltStr)));
			saltStr += saltChar;
		}

		let s1 = syncScrypt(ethers.utils.toUtf8Bytes(password), ethers.utils.toUtf8Bytes(saltStr), 32,64,16,64);
		return s1.toString();
	}

	getEncryptLabel(keyspace:string, label:string):string {
		let password = this.getLabelPassword(keyspace);
		return this.encryptMessage(label, password);
	}

	getDecryptLabel(keyspace:string, cryptoLabel:string):string {
		let password = this.getLabelPassword(keyspace);
		return this.decryptMessage(cryptoLabel, password);
	}

	getContentPassword(keyspace:string, password:string, label:string):string {
		let DEEPING = this.getHashStep0_8(keyspace, password, label);

		let h1 = this.calculateMultiHash(keyspace, 2);
		let h2 = this.calculateMultiHash(password, 2);
		let h3 = this.calculateMultiHash(label, 2);
		for(let i=0; i<DEEPING; i++){
			let pair1 = this.calculatePairsBaseOnSeed(h1+h2);
			let pair2 = this.calculatePairsBaseOnSeed(h2+h3);
			let pair3 = this.calculatePairsBaseOnSeed(h3+h1);

			let signer1	= new ethers.utils.SigningKey(pair1.privKey)
			h1 = ethers.utils.joinSignature(signer1.signDigest(hashMessage(h3+h2)))

			let signer2	= new ethers.utils.SigningKey(pair2.privKey)
			h1 = ethers.utils.joinSignature(signer2.signDigest(hashMessage(h1+h3)))

			let signer3	= new ethers.utils.SigningKey(pair3.privKey)
			h1 = ethers.utils.joinSignature(signer3.signDigest(hashMessage(h2+h1)))
		}

		let originHash = ethers.utils.sha256(ethers.utils.toUtf8Bytes(h1+h2+h3))


		let saltStr = "";
		for(let i=0;i<this.LABEL_SALT_LEN; i++){
			let saltChar = this.getSaltChar(ethers.utils.sha256(ethers.utils.toUtf8Bytes(originHash+saltStr)));
			saltStr += saltChar;
		}

		originHash = syncScrypt(ethers.utils.toUtf8Bytes(originHash), ethers.utils.toUtf8Bytes(saltStr), 32,64,16,64).toString();

		for(let i=0;i<this.CONTENT_PASSWORD_SALT_LEN; i++){
			let saltChar = this.getSaltChar(ethers.utils.sha256(ethers.utils.toUtf8Bytes(originHash)));
			let onceHash = this.calculateOnceHash(originHash);
			let random = onceHash.substring(0,6)+onceHash.substring(onceHash.length-4);
			let position = parseInt(random, 16)%originHash.length;
			originHash = originHash.substr(0, position)+ saltChar + originHash.substr(position, originHash.length-position);
		}

		return originHash;
	}

	getEncryptContent(keyspace:string, password:string, label:string, content:string):string {
		let pwd = this.getContentPassword(keyspace, password, label);
		return this.encryptMessage(content, pwd);  //VDF utilimate
	}

	getDecryptContent(keyspace:string, password:string, label:string, encryptContent:string):string{
		let pwd = this.getContentPassword(keyspace, password, label);
		return this.decryptMessage(encryptContent, pwd);
	}

	async getAddrAndEtherSignForStorage(keyspace:string, password:string) {
		let seed = this.calculateValidSeed(keyspace, password);
		let addr = this.calculateWalletAddressBaseOnSeed(seed);
		let addr0 = this.calculateWalletAddressBaseOnSeed(this.calculateOnceHash(addr+this.calculateOnceHash(keyspace+password)));
		let pairs = this.calculatePairsBaseOnSeed(this.calculateOnceHash(addr+this.calculateOnceHash(keyspace+password)));
		let message = "\x19Ethereum Signed Message:\n"+addr0.length+addr0;
		console.log("addr0.length:",addr0.length)
		let signature = await this.signMessage(message, pairs.privKey);
		let random256Num = ethers.utils.sha256(ethers.utils.toUtf8Bytes(addr0));

		return{
			Addr:  addr,
			Addr0: addr0,
			Sign:  signature,
			RandomNum:random256Num,
			SignMessageHash: ethers.utils.id(addr0)
		};
	}

	getAddrAndEtherSignForAddingKey(keyspace:string, password:string, label:string) {
		let seed = this.calculateValidSeed(keyspace, password);
		let addr = this.calculateWalletAddressBaseOnSeed(seed);
		let addr0 = this.calculateWalletAddressBaseOnSeed(this.calculateOnceHash(addr+this.calculateOnceHash(keyspace+password+label)));
		let pairs = this.calculatePairsBaseOnSeed(this.calculateOnceHash(addr+this.calculateOnceHash(keyspace+password+label)));
		let message = "\x19Ethereum Signed Message:\n"+addr0.length+addr0;
		let signature = this.signMessage(message, pairs.privKey);

		return{
			Addr:  addr,
			Addr0: addr0,
			Sign:  signature
		};
	}

	getAddrAndEtherSign(keyspace:string, password:string) {
		let seed = this.calculateValidSeed(keyspace, password);
		let addr = this.calculateWalletAddressBaseOnSeed(seed);
		let pairs = this.calculatePairsBaseOnSeed(seed);
		let message = "\x19Ethereum Signed Message:\n"+addr.length+addr;
		let signature = this.signMessage(message, pairs.privKey);

		return{
			Addr: addr,
			Sign: signature
		};
	}

	getAddressSign(seed:string):Promise<Signature> {
		let addr = this.calculateWalletAddressBaseOnSeed(seed);
		let pairs = this.calculatePairsBaseOnSeed(seed);
		let message = "\x19Ethereum Signed Message:\n"+addr.length+addr;
		let signature = this.signMessage(message, pairs.privKey);
		return signature
	}

	//////////////////////////////////
	calculateMainPairs(vaultName:string, password:string) {
		let seed = this.calculateValidSeed(vaultName, password);
		let addr = this.calculateWalletAddressBaseOnSeed(seed);
		return this.calculatePairsBaseOnSeed(this.calculateOnceHash(addr+this.calculateOnceHash(vaultName+password)));
	}

	async calculateVaultHasRegisterParams(vaultName:string, password:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint", "bytes32", "bytes32"],
			[address, deadline, DOMAIN_SEPARATOR, VAULT_HAS_REGISTER_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateInitVaultHubParams(vaultName:string, password:string) {
		let pairs = this.calculateMainPairs(vaultName, password);

		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString()) / 1000 + 300;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint", "bytes32", "bytes32"],
			[address, deadline, DOMAIN_SEPARATOR, INIT_VAULT_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return{
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateHasMintedParams(vaultName:string, password:string){
		let pairs = this.calculateMainPairs(vaultName, password);

		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString()) / 1000 + 300;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint", "bytes32", "bytes32"],
			[address,  deadline, DOMAIN_SEPARATOR, HAS_MINTED_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return{
			deadline: deadline,
			signature: sig,
			address: address
		}

	}

	async calculateSaveWithMintingParams(vaultName:string, password:string, content:string, label:string,receiver:string) {
		let pairs = this.calculateMainPairs(vaultName, password);

		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString()) / 1000 + 300;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "string", "string","address", "uint", "bytes32", "bytes32"],
			[address, content, label, receiver, deadline, DOMAIN_SEPARATOR, MINT_SAVE_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return{
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateSaveWithoutMintingParams(vaultName:string, password:string, content:string, label:string) {
		let pairs = this.calculateMainPairs(vaultName, password);

		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString()) / 1000 + 300;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "string","string", "uint", "bytes32", "bytes32"],
			[address, content, label, deadline, DOMAIN_SEPARATOR, SAVE_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return{
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateTotalSavedItemsParams(vaultName:string, password:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint", "bytes32", "bytes32"],
			[address, deadline, DOMAIN_SEPARATOR, TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateQueryByIndexParams(vaultName:string, password:string, index:number){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint64", "uint", "bytes32", "bytes32"],
			[address, index, deadline, DOMAIN_SEPARATOR, INDEX_QUERY_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateQueryByNameParams(vaultName:string, password:string, name:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "string", "uint", "bytes32", "bytes32"],
			[address, name, deadline, DOMAIN_SEPARATOR, NAME_QUERY_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateGetLabelNameByIndexParams(vaultName:string, password:string, index:number){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint", "uint64", "bytes32", "bytes32"],
			[address, deadline, index, DOMAIN_SEPARATOR, GET_LABEL_NAME_BY_INDEX],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculateQueryPrivateVaultAddressParams(vaultName:string, password:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint", "bytes32", "bytes32"],
			[address, deadline, DOMAIN_SEPARATOR, QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculatePrivateVaultSaveWithoutMintingParams(vaultName:string, password:string, data:string, label:string, domain:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+100;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "string", "string", "uint256", "bytes32", "bytes32"],
			[address, data, label, deadline, domain, SAVE_WITHOUT_MINTING_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculatePrivateVaultSaveWithMintingParams(vaultName:string, password:string, data:string, label:string, domain:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+100;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "string", "string", "uint256", "bytes32", "bytes32"],
			[address, data, label, deadline, domain, SAVE_WITH_MINTING_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculatePrivateVaultGetDataByIndexParams(vaultName:string, password:string, index:number, domain:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint64", "uint256", "bytes32", "bytes32"],
			[address, index, deadline, domain, GET_PRIVATE_DATA_BY_INDEX_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculatePrivateVaultGetDataByNameParams(vaultName:string, password:string, label:string, domain:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "string", "uint256", "bytes32", "bytes32"],
			[address, label, deadline, domain, GET_PRIVATE_DATA_BY_NAME_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}

	async calculatePrivateVaultLabelNameParams(vaultName:string, password:string, index:number, domain:string){
		let pairs = this.calculateMainPairs(vaultName, password);
		let wallet = new ethers.Wallet(pairs.privKey);
		let address = await wallet.getAddress();
		let deadline = Date.parse(new Date().toString())/1000+3;

		let combineMessage = ethers.utils.solidityKeccak256(
			["address", "uint64", "uint256", "bytes32", "bytes32"],
			[address, index, deadline, domain, LABEL_NAME_PERMIT_TYPE_HASH],
		);
		let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

		let messageHashBytes = ethers.utils.arrayify(messageHash);
		let flatSig = await wallet.signMessage(messageHashBytes);
		let sig = ethers.utils.splitSignature(flatSig);

		return {
			deadline: deadline,
			signature: sig,
			address: address
		}
	}
}

export {CryptoMachine}