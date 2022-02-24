/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ITransactionManager,
  ITransactionManagerInterface,
} from "../ITransactionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_externalCallHash",
        type: "bytes32",
      },
    ],
    name: "reconcile",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class ITransactionManager__factory {
  static readonly abi = _abi;
  static createInterface(): ITransactionManagerInterface {
    return new utils.Interface(_abi) as ITransactionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransactionManager {
    return new Contract(address, _abi, signerOrProvider) as ITransactionManager;
  }
}