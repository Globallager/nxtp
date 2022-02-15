/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IFulfillInterpreterInterface extends utils.Interface {
  contractName: "IFulfillInterpreter";
  functions: {
    "execute(bytes32,address,address,address,uint256,bytes)": FunctionFragment;
    "getTransactionManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [BytesLike, string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionManager",
    data: BytesLike
  ): Result;

  events: {
    "Executed(bytes32,address,address,address,uint256,bytes,bytes,bool,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export type ExecutedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string, string, boolean, boolean],
  {
    transactionId: string;
    callTo: string;
    assetId: string;
    fallbackAddress: string;
    amount: BigNumber;
    callData: string;
    returnData: string;
    success: boolean;
    isContract: boolean;
  }
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface IFulfillInterpreter extends BaseContract {
  contractName: "IFulfillInterpreter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFulfillInterpreterInterface;

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
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTransactionManager(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  execute(
    transactionId: BytesLike,
    callTo: string,
    assetId: string,
    fallbackAddress: string,
    amount: BigNumberish,
    callData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTransactionManager(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, string] & {
        success: boolean;
        isContract: boolean;
        returnData: string;
      }
    >;

    getTransactionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Executed(bytes32,address,address,address,uint256,bytes,bytes,bool,bool)"(
      transactionId?: BytesLike | null,
      callTo?: null,
      assetId?: null,
      fallbackAddress?: null,
      amount?: null,
      callData?: null,
      returnData?: null,
      success?: null,
      isContract?: null
    ): ExecutedEventFilter;
    Executed(
      transactionId?: BytesLike | null,
      callTo?: null,
      assetId?: null,
      fallbackAddress?: null,
      amount?: null,
      callData?: null,
      returnData?: null,
      success?: null,
      isContract?: null
    ): ExecutedEventFilter;
  };

  estimateGas: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTransactionManager(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTransactionManager(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}