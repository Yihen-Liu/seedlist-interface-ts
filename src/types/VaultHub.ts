/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface VaultHubInterface extends utils.Interface {
  functions: {
    "DOMAIN_NAME()": FunctionFragment;
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "DOMAIN_TYPE_HASH()": FunctionFragment;
    "DOMAIN_VERSION()": FunctionFragment;
    "GET_LABEL_NAME_BY_INDEX()": FunctionFragment;
    "HAS_MINTED_PERMIT_TYPE_HASH()": FunctionFragment;
    "INDEX_QUERY_PERMIT_TYPE_HASH()": FunctionFragment;
    "INIT_VAULT_PERMIT_TYPE_HASH()": FunctionFragment;
    "MINT_SAVE_PERMIT_TYPE_HASH()": FunctionFragment;
    "NAME_QUERY_PERMIT_TYPE_HASH()": FunctionFragment;
    "QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH()": FunctionFragment;
    "SAVE_PERMIT_TYPE_HASH()": FunctionFragment;
    "TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH()": FunctionFragment;
    "VAULT_HAS_REGISTER_PERMIT_TYPE_HASH()": FunctionFragment;
    "getLabelNameByIndex(address,uint256,uint64,uint8,bytes32,bytes32)": FunctionFragment;
    "hasMinted(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "initPrivateVault(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "queryPrivateDataByIndex(address,uint64,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateDataByName(address,string,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateVaultAddress(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithMinting(address,string,string,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithoutMinting(address,string,string,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "setTreasuryAddress(address)": FunctionFragment;
    "totalSavedItems(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "treasury()": FunctionFragment;
    "vaultHasRegister(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_NAME"
      | "DOMAIN_SEPARATOR"
      | "DOMAIN_TYPE_HASH"
      | "DOMAIN_VERSION"
      | "GET_LABEL_NAME_BY_INDEX"
      | "HAS_MINTED_PERMIT_TYPE_HASH"
      | "INDEX_QUERY_PERMIT_TYPE_HASH"
      | "INIT_VAULT_PERMIT_TYPE_HASH"
      | "MINT_SAVE_PERMIT_TYPE_HASH"
      | "NAME_QUERY_PERMIT_TYPE_HASH"
      | "QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH"
      | "SAVE_PERMIT_TYPE_HASH"
      | "TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH"
      | "VAULT_HAS_REGISTER_PERMIT_TYPE_HASH"
      | "getLabelNameByIndex"
      | "hasMinted"
      | "initPrivateVault"
      | "owner"
      | "queryPrivateDataByIndex"
      | "queryPrivateDataByName"
      | "queryPrivateVaultAddress"
      | "savePrivateDataWithMinting"
      | "savePrivateDataWithoutMinting"
      | "setTreasuryAddress"
      | "totalSavedItems"
      | "treasury"
      | "vaultHasRegister"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GET_LABEL_NAME_BY_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "HAS_MINTED_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INDEX_QUERY_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INIT_VAULT_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINT_SAVE_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NAME_QUERY_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SAVE_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VAULT_HAS_REGISTER_PERMIT_TYPE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLabelNameByIndex",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hasMinted",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initPrivateVault",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByIndex",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateDataByName",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPrivateVaultAddress",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateDataWithMinting",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "savePrivateDataWithoutMinting",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSavedItems",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaultHasRegister",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GET_LABEL_NAME_BY_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "HAS_MINTED_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INDEX_QUERY_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INIT_VAULT_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINT_SAVE_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NAME_QUERY_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SAVE_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VAULT_HAS_REGISTER_PERMIT_TYPE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLabelNameByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasMinted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initPrivateVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryPrivateDataByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryPrivateDataByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryPrivateVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "savePrivateDataWithMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "savePrivateDataWithoutMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSavedItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultHasRegister",
    data: BytesLike
  ): Result;

  events: {
    "Save(uint8,address)": EventFragment;
    "VaultInit(uint8,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Save"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultInit"): EventFragment;
}

export interface SaveEventObject {
  result: number;
  signer: string;
}
export type SaveEvent = TypedEvent<[number, string], SaveEventObject>;

export type SaveEventFilter = TypedEventFilter<SaveEvent>;

export interface VaultInitEventObject {
  result: number;
  signer: string;
}
export type VaultInitEvent = TypedEvent<[number, string], VaultInitEventObject>;

export type VaultInitEventFilter = TypedEventFilter<VaultInitEvent>;

export interface VaultHub extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultHubInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_NAME(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_VERSION(overrides?: CallOverrides): Promise<[string]>;

    GET_LABEL_NAME_BY_INDEX(overrides?: CallOverrides): Promise<[string]>;

    HAS_MINTED_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    INDEX_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    INIT_VAULT_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    MINT_SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    NAME_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<[string]>;

    TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    VAULT_HAS_REGISTER_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLabelNameByIndex(
      addr: string,
      deadline: BigNumberish,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    queryPrivateVaultAddress(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    vaultHasRegister(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DOMAIN_NAME(overrides?: CallOverrides): Promise<string>;

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  DOMAIN_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  DOMAIN_VERSION(overrides?: CallOverrides): Promise<string>;

  GET_LABEL_NAME_BY_INDEX(overrides?: CallOverrides): Promise<string>;

  HAS_MINTED_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  INDEX_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  INIT_VAULT_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  MINT_SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  NAME_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH(
    overrides?: CallOverrides
  ): Promise<string>;

  SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

  TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH(
    overrides?: CallOverrides
  ): Promise<string>;

  VAULT_HAS_REGISTER_PERMIT_TYPE_HASH(
    overrides?: CallOverrides
  ): Promise<string>;

  getLabelNameByIndex(
    addr: string,
    deadline: BigNumberish,
    index: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hasMinted(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initPrivateVault(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  queryPrivateDataByIndex(
    addr: string,
    index: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  queryPrivateDataByName(
    addr: string,
    label: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  queryPrivateVaultAddress(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  savePrivateDataWithMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    receiver: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  savePrivateDataWithoutMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryAddress(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSavedItems(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  vaultHasRegister(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DOMAIN_NAME(overrides?: CallOverrides): Promise<string>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    DOMAIN_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    DOMAIN_VERSION(overrides?: CallOverrides): Promise<string>;

    GET_LABEL_NAME_BY_INDEX(overrides?: CallOverrides): Promise<string>;

    HAS_MINTED_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    INDEX_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    INIT_VAULT_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    MINT_SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    NAME_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<string>;

    SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<string>;

    TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<string>;

    VAULT_HAS_REGISTER_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<string>;

    getLabelNameByIndex(
      addr: string,
      deadline: BigNumberish,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    queryPrivateVaultAddress(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;

    vaultHasRegister(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Save(uint8,address)"(
      result?: BigNumberish | null,
      signer?: string | null
    ): SaveEventFilter;
    Save(result?: BigNumberish | null, signer?: string | null): SaveEventFilter;

    "VaultInit(uint8,address)"(
      result?: BigNumberish | null,
      signer?: string | null
    ): VaultInitEventFilter;
    VaultInit(
      result?: BigNumberish | null,
      signer?: string | null
    ): VaultInitEventFilter;
  };

  estimateGas: {
    DOMAIN_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    GET_LABEL_NAME_BY_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    HAS_MINTED_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    INIT_VAULT_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    MINT_SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    NAME_QUERY_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    SAVE_PERMIT_TYPE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    VAULT_HAS_REGISTER_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLabelNameByIndex(
      addr: string,
      deadline: BigNumberish,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryPrivateVaultAddress(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    vaultHasRegister(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN_TYPE_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GET_LABEL_NAME_BY_INDEX(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    HAS_MINTED_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INDEX_QUERY_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INIT_VAULT_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINT_SAVE_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NAME_QUERY_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SAVE_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VAULT_HAS_REGISTER_PERMIT_TYPE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLabelNameByIndex(
      addr: string,
      deadline: BigNumberish,
      index: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasMinted(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initPrivateVault(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryPrivateDataByIndex(
      addr: string,
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryPrivateDataByName(
      addr: string,
      label: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryPrivateVaultAddress(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryAddress(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSavedItems(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultHasRegister(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
