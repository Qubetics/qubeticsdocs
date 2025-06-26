---
sidebar_position: 6
---

# Qubetics Client Integrations

Client integration libraries play a crucial role in blockchain technology by making it easier for developers to interact
with the blockchain network. Libraries abstract away complexities and provide integrations and methods to allow developers
to create product in a more consistent manner.

## Qubetics-specific Client Integrations

Qubetics-specific libraries are useful in aiding developers speed up development by providing interfaces, types, and methods
to signing, address converter (between `eth` and `qubetics` addresses), and `EIP-712` transaction generator. Here is the
library binding, in Javascript/Typescript.

- [CosmJss](https://www.npmjs.com/org/cosmjss) - is the official Qubetics client TypeScript library is a fork of the cosmjs TypeScript library. However, it extends its functionality by supporting `eth` and facilitating native `Qubetics` `address mapping` for signing native transactions. It contains

 several packages:
    - [@cosmjss/amino](https://www.npmjs.com/package/@cosmjss/amino)
    - [@cosmjss/cli](https://www.npmjs.com/package/@cosmjss/cli)
    - [@cosmjss/cosmwasm-stargate](https://www.npmjs.com/package/@cosmjss/cosmwasm-stargate)
    - [@cosmjss/crypto](https://www.npmjs.com/package/@cosmjss/crypto)
    - [@cosmjss/encoding](https://www.npmjs.com/package/@cosmjss/encoding)
    - [@cosmjss/faucet](https://www.npmjs.com/package/@cosmjss/faucet)
    - [@cosmjss/faucet-client](https://www.npmjs.com/package/@cosmjss/faucet-client)
    - [@cosmjss/json-rpc](https://www.npmjs.com/package/@cosmjss/json-rpc)
    - [@cosmjss/ledger-amino](https://www.npmjs.com/package/@cosmjss/ledger-amino)
    - [@cosmjss/math](https://www.npmjs.com/package/@cosmjss/math)
    - [@cosmjss/proto-signing](https://www.npmjs.com/package/@cosmjss/proto-signing)
    - [@cosmjss/socket](https://www.npmjs.com/package/@cosmjss/socket)
    - [@cosmjss/stargate](https://www.npmjs.com/package/@cosmjss/stargate)
    - [@cosmjss/stream](https://www.npmjs.com/package/@cosmjss/stream)
    - [@cosmjss/tendermint-rpc](https://www.npmjs.com/package/@cosmjss/tendermint-rpc)
    - [@cosmjss/utils](https://www.npmjs.com/package/@cosmjss/utils)



## Ethereum Client Integrations

EthersJS and Web3JS are two most commonly used libraries in dApp development. Developer uses these libraries to interact
with blockchain and query JSON-RPC data, for example. Additionally, both of these libraries contain utilities to aid in
task like converting large numbers (BigNumber).

- [Ethers.js](https://docs.ethers.org/v5/) is the latest JS library that aims to be a complete and compact library for
interacting with the Ethereum Blockchain and its ecosystem.
- [web3js](https://web3js.readthedocs.io/en/v1.8.2/) is a collection of libraries that allow you to interact with a local
or remote ethereum node using HTTP, IPC or WebSocket.
