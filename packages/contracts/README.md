# NXTP Contracts

## System Overview

### Video Walkthrough

[Security walkthrough video](https://youtu.be/dQ64SOu5B2s)

### Summary

NXTP is designed to facilitate crosschain transactions via simple atomic swaps where one party provides the liquidity of `assetA` on `chainA` and the other provides the liquidity of `assetB` on `chainB`.

There are two main offchain agents:

1. **User**: The person initiating the crosschain transaction. Their ultimate desire is to move `assetA` on `chainA` to `assetB` on `chainB`. They are willing to pay a fee denominated in `assetA` on `chainA` to accomplish this, and may want to execute some contract call with `assetB` on `chainB` when they transfer. The system does not make any assumptions about their liveness or their ability to maintain a data store.
2. **Router**: The person providing liquidity to facilitate crosschain transactions. Routers earn fees on their available liquidity of `assetB` on `chainB` (continuing the above example), and they are willing to accept a fee denominated in `assetA` on `chainA`. There are no imposed storage requirements, though a router is assumed to be online through the duration of the transfer acceptance (via participation in an auction) to the provision of liquidity on the receiver chain.

When using NXTP to perform a crosschain swap, a user first locks liquidity of `assetA` on `chainA`, waits for the router to lock `assetB` on `chainB`, and finally is able to unlock the funds by providing a signature and submitting it to a contract that exists on `chainB`. The router can use this same signature to unlock the funds the user locked on `chainA`. If something goes wrong, or the payment expires, the transfer may also be cancelled, and the funds returned to their original owner.

For workflow overview, refer to [Workflow Overview](https://github.com/Auromony/nxtp#workflow-overview).

### Key Principles

- `TransactionManager` _is_ our data store. Neither participant should require a store to complete crosschain transactions. All information to `prepare`, `fulfill`, or `cancel` transactions should be retrievable through contract events. If a user goes offline and returns, they should be able to read the onchain data to determine which transactions require the actions, and the data needed to execute them.
- `TransactionManager` is also how we pass messages most of the time -- the events are used as a mechanism for broadcasting data to the counterparty. This removes the need for the majority messaging overhead.
- The user should be able to use relayers for any actions that need to be taken on the receiving chain. It should _not_ be assumed that they have gas on that chain.
- The `amount` and `expiry` should be decremented from the sending to the receiving chain. The `amount` is decremented to allow the router to take some profits for facilitating the transaction upon unlocking the sender-chain transfer. The `expiry` is decremented so the receiver-side is _guaranteed_ to be completed (either cancellable or fulfilled) before the sender-side.
- The signature should be constant between the sending and receiving chains, to allow the router to automatically fulfill on the sending-side once it has been revealed.
- Router keeps their funds on the contract itself. This should slightly reduce costs, make analytics much easier, and will separate gas funds from operating funds (e.g. xDai side running out of gas bc all our \$XDAI was drained).

### Detailed Flow

The more detailed flow can be seen below:

![Contracts Flow](../documentation/assets/ContractsFlow@2x.png)

There are three key functions in the contract: `prepare`, `fulfill`, and `cancel`.

Lets assume that by this point the user has already run the auction.

1. User calls `prepare` passing in all of the relevant data about the transfer on the sender side chain along with their funds for the transfer. The contract stores the funds and the hash of the data in its state. This call emits a `TransactionPrepared` event with the same data used to create the transaction.

2. Router hears this event (which includes its address) and calls the `prepare` function with the same calldata on the receiving chain (with decremented `amount` and `expiry`). This call emits another `TransactionPrepared` event.

3. User hears the `TransactionPrepared` event on receiver chain, alerting them that the transaction is ready to be `fulfilled` since both parties have locked up funds.

4. User validates the data:
   a. If it is invalid, they can `cancel` on the receiver-chain and wait for either the expiry to elapse and `cancel` on the sending chain, or for the router to `cancel` on the sending chain upon seeing the emittted `TransactionCancelled` event on the receiving chain.
   b. If the data is valid, they generate a signature that can be used to `fulfill` the transfer. The user can either call `fulfill` on the receiver-chain themselves, or broadcast their signature to a relayer who will submit the receiver `fulfill` transaction for a fee.

5. The router, upon seeing the `TransactionFulfilled` event on receiver side, collects the signature from the event data and submits `fulfill` to sender side. This claims the original `amount` sent by the user to the `TransactionManager` when the transaction was `prepared`.

**NOTE:** In both sender and receiver cases, `fulfill` must be called before the timeout expires. This acts as a failsafe against funds getting locked indefinitely if the counterparty is malicious. However, this also means expiry must be far enough away (w/ enough gap between both sides) to _make sure_ the tx will go through.

### Offline Protections

The `TransactionManager` contract and its associated events should contain sufficient information for both the user and the router to properly resume any active transfers if they have been offline. To accomplish this, the `prepare` function will take in more parameters than are strictly needed so the relevant data can be emitted through events. Then users and routers can rely on either subgraphs or event polling to determine the necessary active transfers, and gather all data needed to complete them.

## Error Codes

Error codes thrown by the contracts have the following structure:

```js
"#${prefix}:${code}";
```

where the `prefix` denotes which function or portion of the code the error is coming from and `code` corresponds to a given error message.

The error definitions can be found [here](./src/errors.ts).

## Development

### Building

First, install and build all the packages from the root:

```sh
nxtp$ yarn && yarn build:all
```

Then, if you are only making updates to the contracts package, rebuild by running:

```sh
nxtp$ yarn  workspace @connext/nxtp-contracts build
```

### Running the tests

To run the contract tests, run the following from the root directory:

```sh
nxtp$ yarn workspace @connext/nxtp-contracts test
```

This command will output the gas estimates, as well as test coverage of the suites by default. There is no need to deploy or build the repo before running the tests, which will run against a local [hardhat](https://hardhat.org) network.

To run the coverage tests, run the following from the root directory:

```sh
nxtp$ yarn workspace @connext/nxtp-contracts coverage
```

This command will output the coverage status instead of the gas estimates.

### Core Contract Deployment

Contracts are deployed via the [hardhat deploy](https://hardhat.org/plugins/hardhat-deploy.html). Before deploying any contracts, make sure the [deploy](./deploy/deploy.ts) script used is up to date with the contracts you will need deployed.

To deploy the core contracts:

1. Obtain a funded mnemonic, provider url, and the [chain id](https://chainid.network) for the network(s) you would like to deploy the contracts to. There is no ownership of the contracts, so the mnemonic is not systemically important. Run the following commands:

```sh
export MNEMONIC="<MNEMONIC_HERE>" # mnemonic of transaction calling EOA (e.g. deployer)
export MNEMONIC_ROUTER_FACTORY="<ROUTER_FACTORY_DEPLOYER_MNEMONIC_HERE>" # optional, for deploying router factory contract; can be the same as core contract deployer's mnemonic
export ETH_PROVIDER_URL="<PROVIDER_URL_HERE>" # RPC
export CHAIN_ID="<CHAIN_ID_HERE>"
export ETHERSCAN_API_KEY="<ETHERSCAN_API_KEY_HERE>" # optional, for contract verification
```

Alternatively, you can create a `.env` file in `packages/contracts` with the above env vars. `.env.example` is available in the directory for copying and modifying.

2. Once the proper environment variables are added to your environment, you can begin the contract deployments by running the following from the root directory:

```sh
yarn workspace @connext/nxtp-contracts hardhat deploy --network <NETWORK_NAME> # e.g. yarn workspace @connext/nxtp-contracts deploy --network goerli
```

You should use the `NETWORK_NAME` that corresponds to the correct network within the `hardhat.config.ts` file. Use:
* `harmonyTest` for Harmony Testnet
* `auroraTestnet` for Aurora Testnet

**Note:** To ease router operation with identical core contract addresses, the contracts must be deployed with the same deployer EOA at the same account nonce on different networks.

3. (Optional) To verify the core contracts (works with Etherscan-based networks):

```sh
yarn workspace @connext/nxtp-contracts hardhat etherscan-verify --solc-input --network <NETWORK_NAME>
```

If encountered with errors, you can alternatively run:

```sh
yarn workspace @connext/nxtp-contracts hardhat verify --network <NETWORK_NAME> <CONTRACT_ADDRESS> "<CONSTRUCTOR_ARGUMENT_1>"
```

4. Once the contracts have been deployed, export them using:

```sh
yarn workspace @connext/nxtp-contracts export
```

**NOTE:** For any necessary changes introduced by the deployed contracts, you will then need to update and redeploy the subgraphs. See [here](../subgraph) for details.

## Helper Tasks

There are helper tasks defined in the [`./src/tasks`](./src/tasks) directory. They  can be runned as follows:

### Whitelisting

After core contracts are deployed, the temporary core contract owner (i.e. deployer in previous step if no owner change) may whitelist routers and supported assets of the bridging service.

1. Whitelist router EOA using:

```sh
yarn workspace @connext/nxtp-contracts hardhat add-router --network <NETWORK_NAME> --router <ROUTER_ADDRESS>
```

2. Whitelist asset using:

```sh
yarn workspace @connext/nxtp-contracts hardhat add-asset --network <NETWORK_NAME> --asset-id <ASSET_ADDRESS>
```

#### Whitelisting for Multiple Networks

To whitelist a router on multiple networks:

```sh
yarn workspace @connext/nxtp-contracts whitelist <ROUTER_ADDRESS>
```

### Router Contract Deployment

To deploy a router contract:

1. (Optional) You may want to modify the `.env` file to deploy router contracts with a different deployer EOA mnemonic as to preserve the account nonce of core contract deployer.

2. Deploy the router contract:

```sh
yarn workspace @connext/nxtp-contracts hardhat create-router --network <NETWORK_NAME> --signer <ROUTER_ADDRESS> --recipient <RECIPIENT_ADDRESS>
```

The recipient is the address receiving the fees of routing service. The same `ROUTER_ADDRESS` can be used for `RECIPIENT_ADDRESS` for simplicity.

3. (Optional) To verify the router contract (works with Etherscan-based networks):

```sh
yarn workspace @connext/nxtp-contracts hardhat etherscan-verify --solc-input --network <NETWORK_NAME>
```

#### Router Contract Deployment for Multiple Networks

To deploy router contracts with the same router and recipient on multiple networks:

```sh
yarn workspace @connext/nxtp-contracts create-router <ROUTER_ADDRESS> <RECIPIENT_ADDRESS>
```

### Add Liquidity

Add liquidity to the bridging service. Called by whitelisted routers.

1. Modify the `.env` file to call the transaction with the router EOA mnemonic.

2. Add liquidity:

```sh
yarn workspace @connext/nxtp-contracts hardhat add-liquidity --network <NETWORK_NAME> --amount <AMOUNT> --router <ROUTER_ADDRESS> --asset-id <ASSET_ADDRESS>
```

**Note:** Supplement zeroes in `AMOUNT` to account for asset's decimals. E.g. `1000000000000000000` for 1 WETH (an asset with 18 decimals).

### Set Price Information in ConnextPriceOracle

Price Oracle fetches token price from chainlink protocol and decentralized exchanges such as uniswap, sushiswap, pancakeswap, etc.
There are two types of tokens. First ones are listed on Chainlink Protocol. But others aren't listed on Chainlink protocol.
You can get prices from chainlink by setting aggregators for tokens listed on Chainlink. See [here](https://docs.chain.link/docs/ethereum-addresses/)
You can get prices from DEx by setting price records for tokens not listed on Chainlink.

1. To use chainlink protocol, you need to set aggregators for tokens.

```sh
yarn workspace @connext/nxtp-contracts hardhat set-aggregator --token-addresses TOKEN_ADDRESSES --sources CHAINLINK_SOURCES --network NETWORK_NAME
# e.g. yarn workspace @connext/nxtp-contracts hardhat set-aggregator --token-addresses 0xc778417e063141139fce010982780140aa0cd5ab --sources 0x8a753747a1fa494ec906ce90e9f37563a8af630e --network rinkeby
```

2. To use decentralized exchanges, you need to set price records for tokens.

```sh
yarn workspace @connext/nxtp-contracts hardhat set-dex-price --token TOKEN_ADDRESS --base-token BASE_TOKEN_ADDRESS --lp-token LP_TOKEN_ADDRESS --active ACTIVE --network NETWORK
# e.g. yarn workspace @connext/nxtp-contracts hardhat set-dex-price --token 0x4AD6C49FC206C8070915151F31EAbE4c70016F55 --base-token 0xc778417E063141139Fce010982780140Aa0cD5Ab --lp-token 0x21F644B1433D1744a84dc0616C0BFfC04D3A45eb --active true --network rinkeby

# 0x4AD6C49FC206C8070915151F31EAbE4c70016F55: DogeToken on Rinkeby
# 0xc778417E063141139Fce010982780140Aa0cD5Ab: WETH on Rinkeby
# 0x21F644B1433D1744a84dc0616C0BFfC04D3A45eb: WETH-DOGE LP on Rinkeby

'TOKEN_ADDRESS': The token address that you want to fetch price of.

'BASE_TOKEN_ADDRESS': The base token address used to add liquidity on DEX. Its price should be able to be fetched from Chainlink protocol.

'LP_TOKEN_ADDRESS': TOKEN_ADDRESS-BASE_TOKEN_ADDRESS The pair address created by factory of DEX.

'ACTIVE': Shows price record status. If true, the price record will work.
```

3. To set token price directly and use it, you need to set direct price for tokens.

```sh
yarn workspace @connext/nxtp-contracts hardhat set-direct-price --token TOKEN_ADDRESS --price TOKEN_PRICE --network NETWORK
# e.g. yarn workspace @connext/nxtp-contracts hardhat set-direct-price --token 0x4AD6C49FC206C8070915151F31EAbE4c70016F55 --price 1000000000000000000 --network rinkeby

'TOKEN_ADDRESS': The token address that you want to fetch price of.

'TOKEN_PRICE': The direct price of token.
```
