/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VaultHubPermission,
  VaultHubPermissionInterface,
} from "../../../libraries/Permission.sol/VaultHubPermission";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "getLabelExistPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "getLabelNamePermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "hasMintedPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "hasRegisterPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "initPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "cryptoLabel",
        type: "string",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "mintSavePermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "queryByIndexPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "queryByNamePermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "queryPrivateVaultAddressPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "cryptoLabel",
        type: "string",
      },
      {
        internalType: "address",
        name: "labelHash",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "saveWithoutMintPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "DOMAIN_SEPARATOR",
        type: "bytes32",
      },
    ],
    name: "totalSavedItemsPermit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61126661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100b35760003560e01c806379861a051161007b57806379861a051461011957806394f82d811461012c57806395781f1f1461013f578063d5d7653814610152578063dd181b5614610165578063f2ae01de1461017857600080fd5b806301c190bd146100b857806315960843146100cd57806315b2755f146100e05780631a49dda4146100f3578063560ee72b14610106575b600080fd5b6100cb6100c6366004610cac565b61018b565b005b6100cb6100db366004610d04565b610278565b6100cb6100ee366004610cac565b61035f565b6100cb610101366004610cac565b61041d565b6100cb610114366004610cac565b6104f8565b6100cb610127366004610d04565b6105cc565b6100cb61013a366004610d84565b6106a9565b6100cb61014d366004610e6e565b6107af565b6100cb610160366004610f3d565b61089f565b6100cb610173366004610f6f565b6109a5565b6100cb610186366004610cac565b610a8b565b6001600160a01b0386166101ba5760405162461bcd60e51b81526004016101b19061102c565b60405180910390fd5b428510156101da5760405162461bcd60e51b81526004016101b190611056565b604051600090610214908890889085907f21b7e085fb49739c78b83ddb0a8a7e4b469211d08958f57d52ff68325943de0490602001611084565b60405160208183030381529060405280519060200120905061026f87828787876040518060400160405280601f81526020017f764875623a71756572792061646472657373207065726d6974204552524f5200815250610b62565b50505050505050565b6001600160a01b03871661029e5760405162461bcd60e51b81526004016101b19061102c565b428510156102be5760405162461bcd60e51b81526004016101b190611056565b6040516000906102fa9089908990899086907fac1275bd89417f307b1ae27de4967e4910dfab4abd173eb3e6a3352c21ae42fe906020016110ae565b60405160208183030381529060405280519060200120905061035588828787876040518060400160405280601d81526020017f764875623a6c61626c65206578697374207065726d6974204552524f52000000815250610b62565b5050505050505050565b6001600160a01b0386166103855760405162461bcd60e51b81526004016101b19061102c565b428510156103a55760405162461bcd60e51b81526004016101b190611056565b6040516000906103df908890889085907ff65e93839555276acb1b1c33eb49dff5fa6a88c6991b9b84b680dc961b85f84790602001611084565b60405160208183030381529060405280519060200120905061026f878287878760405180606001604052806021815260200161123960219139610b62565b6001600160a01b0386166104435760405162461bcd60e51b81526004016101b19061102c565b428510156104635760405162461bcd60e51b81526004016101b190611056565b60405160009061049d908890889085907fdbd66a895de1fdf2e44b84c83cf1e4f482f647eb80397d069bf7763a583ce1a590602001611084565b60405160208183030381529060405280519060200120905061026f87828787876040518060400160405280601c81526020017f764875623a686173206d696e746564207065726d6974204552524f5200000000815250610b62565b6001600160a01b03861661051e5760405162461bcd60e51b81526004016101b19061102c565b4285101561053e5760405162461bcd60e51b81526004016101b190611056565b604051600090610578908890889085907fef93604cd5c5e7d35e7ef7d38e1cac9e1cc450e49bc931effd1f65a5a993121d90602001611084565b60405160208183030381529060405280519060200120905061026f8782878787604051806040016040528060168152602001753b243ab11d34b734ba103832b936b4ba1022a92927a960511b815250610b62565b6001600160a01b0387166105f25760405162461bcd60e51b81526004016101b19061102c565b428510156106125760405162461bcd60e51b81526004016101b190611056565b60405160009061064e9089908990899086907fab4ac209d4a97678c29d0f2f4ef3539a24e0ce6dbd2dd481c818134b61d28ecc906020016110ae565b60405160208183030381529060405280519060200120905061035588828787876040518060400160405280601c81526020017f764875623a6e616d65207175657279207065726d6974204552524f5200000000815250610b62565b6001600160a01b0387166106cf5760405162461bcd60e51b81526004016101b19061102c565b428610156106ef5760405162461bcd60e51b81526004016101b190611056565b6040516001600160601b0319606089901b166020820152603481018790526001600160c01b031960c087901b166054820152605c81018290527fbd5bc3ca2c7ea773b900edfe638ad04ce3697bf85885abdbe90a2f7c1266d9ee607c820152600090609c0160405160208183030381529060405280519060200120905061035588828787876040518060400160405280602081526020017f764875623a676574206c61626c65206e616d65207065726d6974204552524f52815250610b62565b6001600160a01b038a166107d55760405162461bcd60e51b81526004016101b19061102c565b428510156107f55760405162461bcd60e51b81526004016101b190611056565b604051600090610837908c908c908c908c908c908c9089907fe4f65c557ffdb3934e9fffd9af8d365eca51b20601a53082ce10b1e0ac04461f90602001611114565b6040516020818303038152906040528051906020012090506108928b828787876040518060400160405280601b81526020017f764875623a6d696e742073617665207065726d6974204552524f520000000000815250610b62565b5050505050505050505050565b6001600160a01b0387166108c55760405162461bcd60e51b81526004016101b19061102c565b428510156108e55760405162461bcd60e51b81526004016101b190611056565b6040516001600160601b0319606089901b1660208201526001600160c01b031960c088901b166034820152603c8101869052605c81018290527fbcb00634c612072a661bb64fa073e7806d31f3790f1c827cd20f95542b5af679607c820152600090609c0160405160208183030381529060405280519060200120905061035588828787876040518060400160405280601d81526020017f764875623a696e646578207175657279207065726d6974204552524f52000000815250610b62565b6001600160a01b0389166109cb5760405162461bcd60e51b81526004016101b19061102c565b428510156109eb5760405162461bcd60e51b81526004016101b190611056565b604051600090610a2b908b908b908b908b908b9088907f25f3fe064ef39028ecb8ad22c47a4f382a81ca1f21d802b4fdb8c3e213b9df7290602001611191565b604051602081830303815290604052805190602001209050610a7f8a82878787604051806040016040528060168152602001753b243ab11d39b0bb32903832b936b4ba1022a92927a960511b815250610b62565b50505050505050505050565b6001600160a01b038616610ab15760405162461bcd60e51b81526004016101b19061102c565b42851015610ad15760405162461bcd60e51b81526004016101b190611056565b604051600090610b0b908890889085907f5a14c87645febe5840f128409acb12772ff89f3398b05142d7e039c76e0844e890602001611084565b60405160208183030381529060405280519060200120905061026f87828787876040518060400160405280601a81526020017f764875623a7265676973746572207065726d6974204552524f520000000000008152505b600085604051602001610b7791815260200190565b604051602081830303815290604052805190602001209050600081604051602001610bce91907f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff891691830191909152606082018790526080820186905291506001600160a01b0389169060019060a0016020604051602081039080840390855afa158015610c41573d6000803e3d6000fd5b505050602060405103516001600160a01b0316148390610c745760405162461bcd60e51b81526004016101b19190611205565b505050505050505050565b80356001600160a01b0381168114610c9657600080fd5b919050565b803560ff81168114610c9657600080fd5b60008060008060008060c08789031215610cc557600080fd5b610cce87610c7f565b955060208701359450610ce360408801610c9b565b9350606087013592506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215610d1f57600080fd5b610d2888610c7f565b9650610d3660208901610c7f565b955060408801359450610d4b60608901610c9b565b9699959850939660808101359560a0820135955060c0909101359350915050565b803567ffffffffffffffff81168114610c9657600080fd5b600080600080600080600060e0888a031215610d9f57600080fd5b610da888610c7f565b965060208801359550610dbd60408901610d6c565b9450610d4b60608901610c9b565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610df257600080fd5b813567ffffffffffffffff80821115610e0d57610e0d610dcb565b604051601f8301601f19908116603f01168101908282118183101715610e3557610e35610dcb565b81604052838152866020858801011115610e4e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806000806000806000806101408b8d031215610e8e57600080fd5b610e978b610c7f565b995060208b013567ffffffffffffffff80821115610eb457600080fd5b610ec08e838f01610de1565b9a5060408d0135915080821115610ed657600080fd5b50610ee38d828e01610de1565b985050610ef260608c01610c7f565b9650610f0060808c01610c7f565b955060a08b01359450610f1560c08c01610c9b565b935060e08b013592506101008b013591506101208b013590509295989b9194979a5092959850565b600080600080600080600060e0888a031215610f5857600080fd5b610f6188610c7f565b9650610d3660208901610d6c565b60008060008060008060008060006101208a8c031215610f8e57600080fd5b610f978a610c7f565b985060208a013567ffffffffffffffff80821115610fb457600080fd5b610fc08d838e01610de1565b995060408c0135915080821115610fd657600080fd5b50610fe38c828d01610de1565b975050610ff260608b01610c7f565b955060808a0135945061100760a08b01610c9b565b935060c08a0135925060e08a013591506101008a013590509295985092959850929598565b60208082526010908201526f764875623a63616c6c6572205a45524f60801b604082015260600190565b6020808252601490820152731d921d588e995e1958dd5d19481d1a5b595bdd5d60621b604082015260600190565b60609490941b6001600160601b031916845260148401929092526034830152605482015260740190565b6001600160601b0319606096871b811682529490951b909316601485015260288401919091526048830152606882015260880190565b60005b838110156110ff5781810151838201526020016110e7565b8381111561110e576000848401525b50505050565b60006bffffffffffffffffffffffff19808b60601b168352895161113f816014860160208e016110e4565b895190840190611156816014840160208e016110e4565b6060998a1b8316601492909101918201529690971b909616602886015250603c840192909252605c830152607c820152609c01949350505050565b60006bffffffffffffffffffffffff19808a60601b16835288516111bc816014860160208d016110e4565b8851908401906111d3816014840160208d016110e4565b60609890981b919091169601601481019690965250506028840192909252604883015260688201526088019392505050565b60208152600082518060208401526112248160408501602087016110e4565b601f01601f1916919091016040019291505056fe764875623a67657420746f74616c207361766564207065726d6974204552524f52a164736f6c634300080c000a";

type VaultHubPermissionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultHubPermissionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VaultHubPermission__factory extends ContractFactory {
  constructor(...args: VaultHubPermissionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultHubPermission> {
    return super.deploy(overrides || {}) as Promise<VaultHubPermission>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VaultHubPermission {
    return super.attach(address) as VaultHubPermission;
  }
  override connect(signer: Signer): VaultHubPermission__factory {
    return super.connect(signer) as VaultHubPermission__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultHubPermissionInterface {
    return new utils.Interface(_abi) as VaultHubPermissionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultHubPermission {
    return new Contract(address, _abi, signerOrProvider) as VaultHubPermission;
  }
}