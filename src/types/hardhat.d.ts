/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "DefaultEncrypt",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefaultEncrypt__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "IEncryptMachine",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEncryptMachine__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IRandomMask",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRandomMask__factory>;
    getContractFactory(
      name: "IRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRegistry__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;
    getContractFactory(
      name: "Permission",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Permission__factory>;
    getContractFactory(
      name: "Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Registry__factory>;

    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "DefaultEncrypt",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefaultEncrypt>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "IEncryptMachine",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEncryptMachine>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IRandomMask",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRandomMask>;
    getContractAt(
      name: "IRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRegistry>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Strings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;
    getContractAt(
      name: "Permission",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Permission>;
    getContractAt(
      name: "Registry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Registry>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}