/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PrivateVault, PrivateVaultInterface } from "../PrivateVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DOMAIN_NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GET_PRIVATE_DATA_BY_INDEX_PERMIT_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GET_PRIVATE_DATA_BY_NAME_PERMIT_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LABEL_NAME_PERMIT_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SAVE_WITHOUT_MINTING_PERMIT_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SAVE_WITH_MINTING_PERMIT_TYPE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
    ],
    name: "getPrivateDataByIndex",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "getPrivateDataByIndexDirectly",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "getPrivateDataByName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
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
    ],
    name: "getPrivateDataByNameDirectly",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
    ],
    name: "labelName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "labelNameDirectly",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "saveWithMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "saveWithMintingDirectly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "saveWithoutMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "saveWithoutMintingDirectly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d1338038062001d1383398101604081905262000034916200018c565b604080518082018252601981527f707269766174655661756c7440736565646c6973742e6f7267000000000000006020918201528151808301835260058152640312e302e360dc1b9082015281517fdad980a10e49615eb7fc5d7774307c8f04d959ac46349850121d52b1e409fc1e918101919091527f524897c45a2b08b64fa5a5db0ba55d51bd9bba5ea1fb261f9101b9f6b46f193f918101919091527f06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c606082015246608082018190523060a08301529060c00160408051601f19818403018152919052805160209091012060065550600080546001600160a01b039384166001600160a01b031990911617905560018054600580546001600160401b03191690556001600160a81b03191691909216179055620001c4565b80516001600160a01b03811681146200018757600080fd5b919050565b60008060408385031215620001a057600080fd5b620001ab836200016f565b9150620001bb602084016200016f565b90509250929050565b611b3f80620001d46000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063796f077b116100b8578063ad3d5e381161007c578063ad3d5e3814610346578063c0993eea14610359578063c4dfc5ad14610380578063e79c78ce14610393578063ee115796146103ba578063f2e4e484146103cd57600080fd5b8063796f077b146102995780638cd34364146102d55780638fac8b0f146102e8578063a21a0d76146102fb578063acb8cc491461032257600080fd5b80633644e5151161010a5780633644e515146101ff5780634a8bb379146102085780634f02c420146102285780635a724e271461024c578063763cd53b1461025f578063777c57eb1461028657600080fd5b806313706f10146101475780631bcbb1fe146101815780632296679914610196578063238ac933146101a95780632ddbd13a146101d4575b600080fd5b61016e7fd9066cfdcd2adeb7f91eaa0872abd8e0ce6c9e7c131f920e0b52e3b052a791c881565b6040519081526020015b60405180910390f35b61019461018f3660046115a9565b6103f4565b005b6101946101a43660046115a9565b6105ac565b6000546101bc906001600160a01b031681565b6040516001600160a01b039091168152602001610178565b6005546101e7906001600160401b031681565b6040516001600160401b039091168152602001610178565b61016e60065481565b61021b610216366004611634565b6106f3565b60405161017891906116b2565b60015461023c90600160a01b900460ff1681565b6040519015158152602001610178565b61021b61025a366004611634565b610843565b61016e7fdf412ff5be017ec35abe4df3f9a2b33c93ab92336a734ac392576c30bad057f581565b61021b6102943660046116e5565b61091a565b61021b6040518060400160405280601981526020017f707269766174655661756c7440736565646c6973742e6f72670000000000000081525081565b6101946102e3366004611735565b6109d6565b6101946102f6366004611735565b610b05565b61016e7fcbb2475c190d2e287f7de56c688846f7612f70b210a3856ad34c475cbad0dda781565b61021b604051806040016040528060058152602001640312e302e360dc1b81525081565b61021b6103543660046117c4565b610c9c565b61016e7fdad980a10e49615eb7fc5d7774307c8f04d959ac46349850121d52b1e409fc1e81565b61021b61038e3660046117c4565b610d8d565b61016e7f17558919af4007c4fb94572ba8e807922ff7db103814e127ad21ef481ca35d9881565b61021b6103c83660046117e6565b610ef8565b61016e7f83a9c8c05ed0fb1e4d4baaef671e3f96099729926f732e6aaac34a751230c7b881565b6001546001600160a01b031633146104275760405162461bcd60e51b815260040161041e90611822565b60405180910390fd5b600154600160a01b900460ff161561047b5760405162461bcd60e51b8152602060048201526017602482015276736565646c6973743a206d696e742068617320646f6e6560481b604482015260640161041e565b60008160405160200161048e919061184d565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600290935291205490915060ff16156104e05760405162461bcd60e51b815260040161041e90611869565b6001600160a01b038116600090815260046020908152604090912084516105099286019061146e565b506005546001600160401b0316600090815260036020908152604090912083516105359285019061146e565b50600580546001600160401b031690600061054f83611892565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600260205260409020805460ff19166001908117909155805460ff60a01b1916600160a01b1790555050565b6001546001600160a01b031633146105d65760405162461bcd60e51b815260040161041e90611822565b6000816040516020016105e9919061184d565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600290935291205490915060ff161561063b5760405162461bcd60e51b815260040161041e90611869565b6001600160a01b038116600090815260046020908152604090912084516106649286019061146e565b506005546001600160401b0316600090815260036020908152604090912083516106909285019061146e565b50600580546001600160401b03169060006106aa83611892565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600260205260409020805460ff191660011790555050565b6005546060906001600160401b038088169116116107485760405162461bcd60e51b815260206004820152601260248201527144617461206b657973206f766572666c6f7760701b604482015260640161041e565b6107558686868686610fd2565b6001600160401b0386166000908152600360209081526040808320905161077c9201611902565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600490935291208054919250906107b9906118c7565b80601f01602080910402602001604051908101604052809291908181526020018280546107e5906118c7565b80156108325780601f1061080757610100808354040283529160200191610832565b820191906000526020600020905b81548152906001019060200180831161081557829003601f168201915b505050505091505095945050505050565b6005546060906001600160401b039081169087161061086157600080fd5b61086e868686868661109b565b6001600160401b03861660009081526003602052604090208054610891906118c7565b80601f01602080910402602001604051908101604052809291908181526020018280546108bd906118c7565b801561090a5780601f106108df5761010080835404028352916020019161090a565b820191906000526020600020905b8154815290600101906020018083116108ed57829003601f168201915b5050505050905095945050505050565b6060610929868686868661115c565b60008660405160200161093c919061184d565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600290935291205490915060ff1615156001146109b35760405162461bcd60e51b815260206004820152600e60248201526d131858995b081b9bc8195e1a5cdd60921b604482015260640161041e565b6001600160a01b038116600090815260046020526040902080546107b9906118c7565b6109e4868686868686611200565b6000856040516020016109f7919061184d565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600290935291205490915060ff1615610a495760405162461bcd60e51b815260040161041e90611869565b6001600160a01b03811660009081526004602090815260409091208851610a72928a019061146e565b506005546001600160401b031660009081526003602090815260409091208751610a9e9289019061146e565b50600580546001600160401b0316906000610ab883611892565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600260205260409020805460ff19166001179055505050505050565b600154600160a01b900460ff1615610b595760405162461bcd60e51b8152602060048201526017602482015276736565646c6973743a206d696e742068617320646f6e6560481b604482015260640161041e565b610b678686868686866112ae565b600085604051602001610b7a919061184d565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600290935291205490915060ff1615610bcc5760405162461bcd60e51b815260040161041e90611869565b6001600160a01b03811660009081526004602090815260409091208851610bf5928a019061146e565b506005546001600160401b031660009081526003602090815260409091208751610c219289019061146e565b50600580546001600160401b0316906000610c3b83611892565b82546001600160401b039182166101009390930a9283029190920219909116179055506001600160a01b03166000908152600260205260409020805460ff19166001908117909155805460ff60a01b1916600160a01b179055505050505050565b6001546060906001600160a01b03163314610cc95760405162461bcd60e51b815260040161041e90611822565b6005546001600160401b0390811690831610610ce457600080fd5b6001600160401b03821660009081526003602052604090208054610d07906118c7565b80601f0160208091040260200160405190810160405280929190818152602001828054610d33906118c7565b8015610d805780601f10610d5557610100808354040283529160200191610d80565b820191906000526020600020905b815481529060010190602001808311610d6357829003601f168201915b505050505090505b919050565b6001546060906001600160a01b03163314610dba5760405162461bcd60e51b815260040161041e90611822565b6005546001600160401b03808416911611610e0e5760405162461bcd60e51b81526020600482015260146024820152734c6162656c73206b657973206f766572666c6f7760601b604482015260640161041e565b6001600160401b03821660009081526003602090815260408083209051610e359201611902565b60408051601f1981840301815291815281516020928301206001600160a01b038116600090815260049093529120805491925090610e72906118c7565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9e906118c7565b8015610eeb5780601f10610ec057610100808354040283529160200191610eeb565b820191906000526020600020905b815481529060010190602001808311610ece57829003601f168201915b5050505050915050919050565b6001546060906001600160a01b03163314610f255760405162461bcd60e51b815260040161041e90611822565b600082604051602001610f38919061184d565b60408051601f1981840301815291815281516020928301206001600160a01b0381166000908152600290935291205490915060ff161515600114610faf5760405162461bcd60e51b815260206004820152600e60248201526d131858995b081b9bc8195e1a5cdd60921b604482015260640161041e565b6001600160a01b03811660009081526004602052604090208054610e72906118c7565b42841015610ff25760405162461bcd60e51b815260040161041e9061199e565b60008054600654604051611039926001600160a01b03169189918991907f17558919af4007c4fb94572ba8e807922ff7db103814e127ad21ef481ca35d98906020016119ce565b604051602081830303815290604052805190602001209050611093818585856040518060400160405280601f81526020017f7661756c743a20696e646578206c6162656c207065726d6974204552524f520081525061134f565b505050505050565b428410156110bb5760405162461bcd60e51b815260040161041e9061199e565b60008054600654604051611102926001600160a01b03169189918991907fcbb2475c190d2e287f7de56c688846f7612f70b210a3856ad34c475cbad0dda7906020016119ce565b604051602081830303815290604052805190602001209050611093818585856040518060400160405280601e81526020017f7661756c743a206c6162656c206e616d65207065726d6974204552524f52000081525061134f565b4284101561117c5760405162461bcd60e51b815260040161041e9061199e565b600080546006546040516111c3926001600160a01b03169189918991907f83a9c8c05ed0fb1e4d4baaef671e3f96099729926f732e6aaac34a751230c7b890602001611a12565b60405160208183030381529060405280519060200120905061109381858585604051806060016040528060248152602001611b0f6024913961134f565b428410156112205760405162461bcd60e51b815260040161041e9061199e565b60008054600654604051611268926001600160a01b0316918a918a918a917fdf412ff5be017ec35abe4df3f9a2b33c93ab92336a734ac392576c30bad057f590602001611a5e565b6040516020818303038152906040528051906020012090506112a581858585604051806060016040528060288152602001611ac26028913961134f565b50505050505050565b428410156112ce5760405162461bcd60e51b815260040161041e9061199e565b60008054600654604051611316926001600160a01b0316918a918a918a917fd9066cfdcd2adeb7f91eaa0872abd8e0ce6c9e7c131f920e0b52e3b052a791c890602001611a5e565b6040516020818303038152906040528051906020012090506112a581858585604051806060016040528060258152602001611aea602591395b60008560405160200161136491815260200190565b6040516020818303038152906040528051906020012090506000816040516020016113bb91907f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60408051808303601f1901815282825280516020918201206000805490855291840180845281905260ff8a169284019290925260608301889052608083018790529092506001600160a01b03169060019060a0016020604051602081039080840390855afa158015611431573d6000803e3d6000fd5b505050602060405103516001600160a01b03161483906114645760405162461bcd60e51b815260040161041e91906116b2565b5050505050505050565b82805461147a906118c7565b90600052602060002090601f01602090048101928261149c57600085556114e2565b82601f106114b557805160ff19168380011785556114e2565b828001600101855582156114e2579182015b828111156114e25782518255916020019190600101906114c7565b506114ee9291506114f2565b5090565b5b808211156114ee57600081556001016114f3565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261152e57600080fd5b81356001600160401b038082111561154857611548611507565b604051601f8301601f19908116603f0116810190828211818310171561157057611570611507565b8160405283815286602085880101111561158957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156115bc57600080fd5b82356001600160401b03808211156115d357600080fd5b6115df8683870161151d565b935060208501359150808211156115f557600080fd5b506116028582860161151d565b9150509250929050565b80356001600160401b0381168114610d8857600080fd5b803560ff81168114610d8857600080fd5b600080600080600060a0868803121561164c57600080fd5b6116558661160c565b94506020860135935061166a60408701611623565b94979396509394606081013594506080013592915050565b60005b8381101561169d578181015183820152602001611685565b838111156116ac576000848401525b50505050565b60208152600082518060208401526116d1816040850160208701611682565b601f01601f19169190910160400192915050565b600080600080600060a086880312156116fd57600080fd5b85356001600160401b0381111561171357600080fd5b61171f8882890161151d565b9550506020860135935061166a60408701611623565b60008060008060008060c0878903121561174e57600080fd5b86356001600160401b038082111561176557600080fd5b6117718a838b0161151d565b9750602089013591508082111561178757600080fd5b5061179489828a0161151d565b955050604087013593506117aa60608801611623565b92506080870135915060a087013590509295509295509295565b6000602082840312156117d657600080fd5b6117df8261160c565b9392505050565b6000602082840312156117f857600080fd5b81356001600160401b0381111561180e57600080fd5b61181a8482850161151d565b949350505050565b60208082526011908201527010d85b1b195c881a5cc81a5b9d985b1a59607a1b604082015260600190565b6000825161185f818460208701611682565b9190910192915050565b6020808252600f908201526e131858995b081a185cc8195e1a5cdd608a1b604082015260600190565b60006001600160401b03808316818114156118bd57634e487b7160e01b600052601160045260246000fd5b6001019392505050565b600181811c908216806118db57607f821691505b602082108114156118fc57634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c91508083168061191e57607f831692505b602080841082141561193e57634e487b7160e01b86526022600452602486fd5b818015611952576001811461196357611990565b60ff19861689528489019650611990565b60008a81526020902060005b868110156119885781548b82015290850190830161196f565b505084890196505b509498975050505050505050565b6020808252601690820152751d985d5b1d0e88195e1958dd5d19481d1a5b595bdd5d60521b604082015260600190565b60609590951b6bffffffffffffffffffffffff1916855260c09390931b6001600160c01b0319166014850152601c840191909152603c830152605c820152607c0190565b6bffffffffffffffffffffffff198660601b16815260008551611a3c816014850160208a01611682565b6014920191820194909452603481019290925260548201526074019392505050565b6bffffffffffffffffffffffff198760601b16815260008651611a88816014850160208b01611682565b865190830190611a9f816014840160208b01611682565b016014810195909552505060348301919091526054820152607401939250505056fe7661756c743a207361766520776974686f7574206d696e74696e67207065726d6974204552524f527661756c743a20736176652077697468206d696e74696e67207065726d6974204552524f527661756c743a206765742064617461206279206e616d65207065726d6974204552524f52a164736f6c634300080c000a";

type PrivateVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrivateVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrivateVault__factory extends ContractFactory {
  constructor(...args: PrivateVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _signer: string,
    _caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PrivateVault> {
    return super.deploy(
      _signer,
      _caller,
      overrides || {}
    ) as Promise<PrivateVault>;
  }
  override getDeployTransaction(
    _signer: string,
    _caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_signer, _caller, overrides || {});
  }
  override attach(address: string): PrivateVault {
    return super.attach(address) as PrivateVault;
  }
  override connect(signer: Signer): PrivateVault__factory {
    return super.connect(signer) as PrivateVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrivateVaultInterface {
    return new utils.Interface(_abi) as PrivateVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrivateVault {
    return new Contract(address, _abi, signerOrProvider) as PrivateVault;
  }
}
