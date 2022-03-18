/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {DefaultEncrypt__factory } from "../types";
import { ethers, Signer, BigNumber, PayableOverrides } from "ethers";
import type { Web3Provider, Provider } from "@ethersproject/providers";
import { randomInt } from "./math";
import detectEthereumProvider from "@metamask/detect-provider";

//const EVOLUTION_CONTRACT_ADDRESS = "0x49e0e90064256a92AfCA34c513925ef3a14026C7";
// const provider = new ethers.providers.JsonRpcProvider(RPC_HOST)

export interface IWalletInfo {
    address: string;
    networkName: string;
    chainId: number;
    balance: string;
}
// rinkeby id
export const contractChainId = 4;
export const contractChainName = "Rinkeby";

class EtherClient {
    seedlistContractAddress: string;
    winProvider?: any;
    provider?: Web3Provider;
    client?: SeedlistClient;
    //     readonly onAccountsDidChange = new Emitter<string[]>();
    //     onAccountsChange = this.onAccountsDidChange.event;

    constructor(seedlistContractAddress: string) {
        this.seedlistContractAddress = seedlistContractAddress;
    }

    async loadProvider() {
        if (this.provider) {
            return;
        }
        this.winProvider = await detectEthereumProvider();
        if (this.winProvider) {
            // change event bind
            this.winProvider.on("accountsChanged", (accounts: string[]) => {
                // this.onAccountsDidChange.fire(accounts);
            });
            this.winProvider.on("chainChanged", () => {
                window.location.reload();
            });
            this.provider = new ethers.providers.Web3Provider(this.winProvider);
            return;
        }
        throw new Error("there are no eth provider.");
    }

    async getWalletInfo(): Promise<IWalletInfo | undefined> {
        if (this.provider) {
            await this.winProvider.request({ method: "eth_requestAccounts" });
            const address = await this.provider.getSigner().getAddress();
            const balance = await this.provider.getBalance(address);
            const network = await this.provider.getNetwork();
            return {
                address,
                networkName: network.name,
                chainId: network.chainId,
                balance: ethers.utils.formatEther(balance),
            };
        }
        throw new Error("get wallet info failed");
    }

    connectSeedlistContract() {
        if (this.provider) {
            this.client = new SeedlistClient();
            this.client.connectProvider(this.seedlistContractAddress, this.provider);
            this.client.setWaitConfirmations(1);
        }
    }

    connectSigner() {
        if (this.client && this.provider) {
            this.client.setWaitConfirmations(1);
            const signer = this.provider.getSigner();
            this.client.connectSigner(signer);
        }
    }

    resetClientConfirmations() {
        if (this.client) {
            this.client.setWaitConfirmations(1); // set number of confirmations to wait default is 5 blocks
        }
    }
}

class SeedlistClient {
    private seedlist: any | undefined;
    private provider: Provider | undefined;
    private signer: Signer | undefined;
    private _waitConfirmations = 5;

    constructor() {
        this._waitConfirmations = 5;
    }

    public connectProvider(address: string, provider: Provider): SeedlistClient {
        this.provider = provider;
        this.seedlist = DefaultEncrypt__factory.connect(address, this.provider);
        return this;
    }

    public connectSigner(signer: Signer): SeedlistClient {
        this.signer = signer;
        return this;
    }

    public setWaitConfirmations(num: number): void {
        this._waitConfirmations = num;
    }

    public contract(): Promise<any> {
        if (this.provider === undefined || this.seedlist === undefined) {
            return Promise.reject("need to connect a valid provider");
        }
        return Promise.resolve(this.seedlist);
    }
	//add by Yihen.Liu
	//function initKeySpace(address addr, address addr0, bytes32 addrHash, bytes32 r, bytes32 s,uint8 v, uint256 randomNum) network canAdd override public returns(bool){
	public async initKeySpace(
		addr:string, addr0:string, addrHash:string,
		r:string, s:string, v:number, randomNum:BigNumber,
		config:PayableOverrides={}):Promise<any>{

	}

	//function spaceExist(address addr, bytes32 addrHash, bytes32 r, bytes32 s, uint8 v) network external override view returns(bool){
	public async spaceExist(addr:string, addrHash:string, r:string,
		s:string, v:number, config:PayableOverrides={}):Promise<any>{

	}
		//function addKey(address keyspace, address addr, address addr0, bytes32 addrHash, bytes32 r, bytes32 s, uint8 v,
	// address id, address kid, string memory cryptoKey, string memory labelName) network canAdd override external returns(bool){
	public async addKey(
		keyspace:string, addr:string, addr0:string, addrHash:string,
		r:string, s:string, v:number, id:string, kid:string,
		cryptoKey:string, labelName:string,
		config:PayableOverrides={}):Promise<any>{

	}

	//function addSplitKey(address keyspace, address addr, address addr0, bytes32 addrHash, bytes32 r, bytes32 s,
	// uint8 v, address id, address kid0,address kid1, string memory cryptoKey, string memory labelName) network canAdd external {
	public async addSplitKey(
		keyspace:string, addr:string, addr0:string, addrHash:string,
		r:string, s:string, v:number, id:string, kid0:string,
		kid1:string, cryptoKey:string, labelName:string,
		config:PayableOverrides={}):Promise<any>{

	}

	//function isLabelExist(address addr, bytes32 addrHash, bytes32 r, bytes32 s, uint8 v, address labelId) network external override view returns(bool) {
	public async isLabelExist(addr:string, addrHash:string, r:string,
	    s:string, v:number, labelId:string, config:PayableOverrides={}):Promise<any>{

	}

	//function getKey(address id, address addr, bytes32 addrHash, bytes32 r, bytes32 s, uint8 v) override external view returns(string memory){
	public async getKey(id:string, addr:string, addrHash:string,
		r:string, s:string, v:number ,config:PayableOverrides={}):Promise<any>{

	}

	//function getSplitKey(address addr, bytes32 addrHash, bytes32 r, bytes32 s, uint8 v, address kid0, address kid1) external view returns(string memory, string memory){
	public async getSplitKey( addr:string, addrHash:string, r:string,
		s:string, v:number ,kid0:string, kid1:string, config:PayableOverrides={}):Promise<any>{

	}

	//end
    public async mint(
        id: BigNumber,
        config: PayableOverrides = {}
    ): Promise<any> {
        if (
            this.provider === undefined ||
            this.seedlist === undefined ||
            this.signer === undefined
        ) {
            return Promise.reject("need to connect a valid provider and signer");
        }
        const gas = await this.seedlist.connect(this.signer).estimateGas.mint(id, { ...config });
        const transaction = await this.seedlist.connect(this.signer).mint(id, { gasLimit: gas.mul(13).div(10), ...config });
        const receipt = await transaction.wait(this._waitConfirmations);
        return receipt;
    }

    public async ownerOf(id: BigNumber, config: PayableOverrides = {}) {
        if (this.provider === undefined || this.seedlist === undefined) {
            return Promise.reject("need to connect a valid provider");
        }
        return this.seedlist.ownerOf(id, { ...config });
    }

    public async totalSupply(config: PayableOverrides = {}) {
        if (this.provider === undefined || this.seedlist === undefined) {
            return Promise.reject("need to connect a valid provider");
        }
        return this.seedlist.totalSupply({ ...config });
    }

    public async newMint(config: PayableOverrides = {}) {
        if (this.provider === undefined || this.seedlist === undefined) {
            return Promise.reject("need to connect a valid provider");
        }
        let id = randomInt(0, 9800);
        // console.log("newMint:", id);
        return this.mint(BigNumber.from(id), config);
    }
}

const INFURA_KEY = process.env.REACT_APP_ENCRYPT_CONTRACT_ADDR;
if (typeof INFURA_KEY === 'undefined') {
    throw new Error(`REACT_APP_ENCRYPT_CONTRACT_ADDR must be a defined environment variable`)
}

export const etherClient = new EtherClient(process.env.REACT_APP_ENCRYPT_CONTRACT_ADDR?process.env.REACT_APP_ENCRYPT_CONTRACT_ADDR:"");
