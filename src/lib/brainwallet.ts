import createHash from "create-hash";
import  {encode} from "bs58check"
import {entropyToMnemonic, mnemonicToSeedSync} from "bip39"
import {fromSeed, BIP32Interface} from "bip32";
import {pubToAddress, toChecksumAddress} from "ethereumjs-util";

function addr(node:BIP32Interface):string {
	let version = 0x0;
	let hash = node.identifier; // hash160 of the publicKey

	const payload = Buffer.allocUnsafe(21);
	payload.writeUInt8(version, 0);

	hash.copy(payload, 1);

	return  encode(payload);
}

export function GenBitcoinBrainWallet(from:number=0, end:number, puzzle:string, passphrase:string): string[]{
	let addrs:string[] = [];
	let entropy = createHash("sha256").update(puzzle).digest().toString("hex");
	console.log("entropy: " + entropy); //a8fd89fcc8496d1536b57d91ba60eda4069dbb4ec62bea889b2ca510c6419f14

	var mnemonic = entropyToMnemonic(entropy);
	console.log("mnemonic: " + mnemonic); //pottery unable left mountain nothing melody suspect quick museum spread derive elite hawk tank deposit shell tunnel dynamic sleep enforce arrest camp labor lucky

	var seed = mnemonicToSeedSync(mnemonic, passphrase);
	var master = fromSeed(seed); // m

// generate 10 btc addresses...
	for (let i = from; i < end; i++) {
		var node = master.derivePath("m/44'/0'/0'/1/" + i);
		var address = addr(node);
		console.log("BTC #" + i + ": " + address);
		addrs[i] =address
	}

	return addrs;
}

export function GenEthereumBrainWallet(from:number=0, end:number, puzzle:string, passphrase:string):string[] {
	let addrs:string[] = [];
	let entropy = createHash("sha256").update(puzzle).digest().toString("hex");
	console.log("entropy: " + entropy); //a8fd89fcc8496d1536b57d91ba60eda4069dbb4ec62bea889b2ca510c6419f14

	var mnemonic = entropyToMnemonic(entropy);
	console.log("mnemonic: " + mnemonic); //pottery unable left mountain nothing melody suspect quick museum spread derive elite hawk tank deposit shell tunnel dynamic sleep enforce arrest camp labor lucky

	var seed = mnemonicToSeedSync(mnemonic, passphrase);
	var master = fromSeed(seed); // m

// generate 10 eth addresses...
	for (let i = from; i < end; i++) {
		var node = master.derivePath("m/44'/60'/0'/0/" + i);
		var address = toChecksumAddress("0x"+pubToAddress(node.publicKey, true).toString("hex"));
		addrs[i] = address;
		console.log("ETH #" + i + ": " + address);

	}
	return addrs;

}