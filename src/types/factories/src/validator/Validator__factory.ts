/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Validator,
  ValidatorInterface,
} from "../../../src/validator/Validator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "isValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newWorker",
        type: "address",
      },
    ],
    name: "updateWorker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "worker",
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
];

const _bytecode =
  "0x6080604052600080546001600160a01b031916905534801561002057600080fd5b50600180546001600160a01b03191633179055610371806100426000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634d547ada1461005c57806380e4cc9d1461008c5780638b1b925f146100a15780638da5cb5b146100c4578063f2fde38b146100d7575b600080fd5b60005461006f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61009f61009a3660046102e2565b6100ea565b005b6100b46100af3660046102e2565b610191565b6040519015158152602001610083565b60015461006f906001600160a01b031681565b61009f6100e53660046102e2565b610247565b6001546001600160a01b031633146101495760405162461bcd60e51b815260206004820152601760248201527f56616c696461746f723a206175746820696e76616c696400000000000000000060448201526064015b60405180910390fd5b6001600160a01b03811661016f5760405162461bcd60e51b815260040161014090610312565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160a01b0382166101b95760405162461bcd60e51b815260040161014090610312565b6000546001600160a01b03166101d157506000919050565b60005460405163148aedc160e21b81526001600160a01b0384811660048301529091169063522bb704906024016020604051808303816000875af115801561021d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102419190610342565b92915050565b6001546001600160a01b0316331461029a5760405162461bcd60e51b815260206004820152601660248201527515985b1a59185d1bdc8e985d5d1a081a5b9d985b1a5960521b6044820152606401610140565b6001600160a01b0381166102c05760405162461bcd60e51b815260040161014090610312565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156102f457600080fd5b81356001600160a01b038116811461030b57600080fd5b9392505050565b60208082526016908201527556616c696461746f723a5a45524f206164647265737360501b604082015260600190565b60006020828403121561035457600080fd5b8151801515811461030b57600080fdfea164736f6c634300080c000a";

type ValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Validator__factory extends ContractFactory {
  constructor(...args: ValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Validator> {
    return super.deploy(overrides || {}) as Promise<Validator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Validator {
    return super.attach(address) as Validator;
  }
  override connect(signer: Signer): Validator__factory {
    return super.connect(signer) as Validator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidatorInterface {
    return new utils.Interface(_abi) as ValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Validator {
    return new Contract(address, _abi, signerOrProvider) as Validator;
  }
}
