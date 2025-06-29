---
sidebar_position: 0
---

# Technical Architecture

Qubetics is a scalable Proof-of-Stake blockchain that is fully compatible and
interoperable with the Ethereum Virtual Machine (EVM). It is built using the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk/)
which runs on top of the [CometBFT](https://github.com/cometbft/cometbft)
(a fork of [Tendermint Core](https://docs.tendermint.com/)) consensus engine,
to accomplish fast finality, high transaction throughput and short block times (~6 seconds).

This architecture allows users to perform Cosmos and EVM formatted transactions,
developers to scale EVM dApps cross-chain via [IBC](https://cosmos.network/ibc),
and tokens and assets in the network to come from different independent sources.

Qubetics enables these key features by:

* Leveraging [modules](https://docs.cosmos.network/v0.47/build/building-modules/intro)
and other mechanisms implemented by the [Cosmos SDK](https://docs.cosmos.network/).
* Implementing CometBFT's Application Blockchain Interface ([ABCI](https://docs.tendermint.com/master/spec/abci/))
to manage the blockchain.
* Utilizing [`geth`](https://github.com/ethereum/go-ethereum) as a library to promote code reuse and improve maintainability.
* Exposing a fully compatible Web3 [JSON-RPC](./../develop/api/ethereum-json-rpc/methods) layer
for interacting with existing Ethereum clients and tooling (Metamask, Remix, qubeqode, Truffle, Hardhat etc).

The sum of these features allows developers to leverage existing Ethereum ecosystem tooling and
software to seamlessly deploy smart contracts which interact with the rest of the Cosmos
[ecosystem](https://cosmos.network/ecosystem).

## Cosmos SDK

Qubetics enables the full composability and modularity of the [Cosmos SDK](https://docs.cosmos.network/).
As a Cosmos chain, Qubetics is a sovereign blockchain with its own native token,
that can connect to other chains through IBC. It includes standard modules from the Cosmos SDK,
that work side to side with Qubetics-specific modules, built by the Qubetics core development team.
Check out the [list of modules](modules/index.md) to get an overview of what each module is responsible for.

## CometBFT & ABCI

[CometBFT](https://github.com/cometbft/cometbft) consists of two chief technical components:
a blockchain consensus engine and a generic application interface.
The consensus engine ensures that the same transactions
are recorded on every machine in the same order.
The application interface, called the [Application Blockchain Interface (ABCI)](https://docs.tendermint.com/master/spec/abci/),
enables the transactions to be processed in any programming language.

CometBFT has evolved to be a general-purpose blockchain consensus engine that
can host arbitrary application states. Since it can replicate arbitrary
applications, it can be used as a plug-and-play replacement for the consensus
engines of other blockchains. Qubetics is an example of an ABCI application
replacing Ethereum's PoW via CometBFT's consensus engine.

Another example of a cryptocurrency application built on CometBFT is the Cosmos
network. CometBFT can decompose the blockchain design by offering a very
simple API (ie. the ABCI) between the application process and consensus process.


## EVM Compatibility

Qubetics enables EVM compatibility by implementing various components
that together support all the EVM state transitions
while ensuring the same developer experience as Ethereum:

- Ethereum's transaction format as a Cosmos SDK `Tx` and `Msg` interface
- Ethereum's `secp256k1` curve for the Cosmos Keyring (`ethsecp256k1`)
- `StateDB` interface for state updates and queries
- [JSON-RPC](../develop/api/ethereum-json-rpc) client for interacting with the EVM


