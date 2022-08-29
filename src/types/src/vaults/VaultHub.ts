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
  PayableOverrides,
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
} from "../../common";

export interface VaultHubInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "fee()": FunctionFragment;
    "getLabelNameByIndex(address,uint256,uint64,uint8,bytes32,bytes32)": FunctionFragment;
    "hasMinted(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "initPrivateVault(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "labelExist(address,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "privateVaultPermissionLib()": FunctionFragment;
    "queryPrivateDataByIndex(address,uint64,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateDataByName(address,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryPrivateVaultAddress(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithMinting(address,string,string,address,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "savePrivateDataWithoutMinting(address,string,string,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setTreasuryAddress(address)": FunctionFragment;
    "totalSavedItems(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "vaultHasRegister(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "vaultHubPermissionLib()": FunctionFragment;
    "withdrawETH(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "fee"
      | "getLabelNameByIndex"
      | "hasMinted"
      | "initPrivateVault"
      | "labelExist"
      | "owner"
      | "privateVaultPermissionLib"
      | "queryPrivateDataByIndex"
      | "queryPrivateDataByName"
      | "queryPrivateVaultAddress"
      | "savePrivateDataWithMinting"
      | "savePrivateDataWithoutMinting"
      | "setFee"
      | "setTreasuryAddress"
      | "totalSavedItems"
      | "transferOwnership"
      | "treasury"
      | "vaultHasRegister"
      | "vaultHubPermissionLib"
      | "withdrawETH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
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
  encodeFunctionData(
    functionFragment: "labelExist",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "privateVaultPermissionLib",
    values?: undefined
  ): string;
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
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSavedItems",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaultHasRegister",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultHubPermissionLib",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLabelNameByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasMinted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initPrivateVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "labelExist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "privateVaultPermissionLib",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSavedItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultHasRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultHubPermissionLib",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
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
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    labelExist(
      addr: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    privateVaultPermissionLib(overrides?: CallOverrides): Promise<[string]>;

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
      labelHash: string,
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
      labelHash: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _fee: BigNumberish,
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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    vaultHasRegister(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    vaultHubPermissionLib(overrides?: CallOverrides): Promise<[string]>;

    withdrawETH(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

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

  labelExist(
    addr: string,
    labelHash: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  privateVaultPermissionLib(overrides?: CallOverrides): Promise<string>;

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
    labelHash: string,
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
    labelHash: string,
    receiver: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  savePrivateDataWithoutMinting(
    addr: string,
    data: string,
    cryptoLabel: string,
    labelHash: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _fee: BigNumberish,
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

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  vaultHasRegister(
    addr: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  vaultHubPermissionLib(overrides?: CallOverrides): Promise<string>;

  withdrawETH(
    receiver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

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

    labelExist(
      addr: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    privateVaultPermissionLib(overrides?: CallOverrides): Promise<string>;

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
      labelHash: string,
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
      labelHash: string,
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
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

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

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    vaultHasRegister(
      addr: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    vaultHubPermissionLib(overrides?: CallOverrides): Promise<string>;

    withdrawETH(
      receiver: string,
      amount: BigNumberish,
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
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

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

    labelExist(
      addr: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    privateVaultPermissionLib(overrides?: CallOverrides): Promise<BigNumber>;

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
      labelHash: string,
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
      labelHash: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      _fee: BigNumberish,
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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    vaultHubPermissionLib(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawETH(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    labelExist(
      addr: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    privateVaultPermissionLib(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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
      labelHash: string,
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
      labelHash: string,
      receiver: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    savePrivateDataWithoutMinting(
      addr: string,
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    vaultHubPermissionLib(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
