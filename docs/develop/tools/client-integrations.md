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

- [cosmjs-evm](https://www.npmjs.com/org/cosmjs-evm) - is the official Qubetics client TypeScript library is a fork of the cosmjs TypeScript library. However, it extends its functionality by supporting `eth` and facilitating native `Qubetics` `address mapping` for signing native transactions. It contains

 several packages:
    - [@cosmjs-evm/amino](https://www.npmjs.com/package/@cosmjs-evm/amino)
    - [@cosmjs-evm/cli](https://www.npmjs.com/package/@cosmjs-evm/cli)
    - [@cosmjs-evm/cosmwasm-stargate](https://www.npmjs.com/package/@cosmjs-evm/cosmwasm-stargate)
    - [@cosmjs-evm/crypto](https://www.npmjs.com/package/@cosmjs-evm/crypto)
    - [@cosmjs-evm/encoding](https://www.npmjs.com/package/@cosmjs-evm/encoding)
    - [@cosmjs-evm/faucet](https://www.npmjs.com/package/@cosmjs-evm/faucet)
    - [@cosmjs-evm/faucet-client](https://www.npmjs.com/package/@cosmjs-evm/faucet-client)
    - [@cosmjs-evm/json-rpc](https://www.npmjs.com/package/@cosmjs-evm/json-rpc)
    - [@cosmjs-evm/ledger-amino](https://www.npmjs.com/package/@cosmjs-evm/ledger-amino)
    - [@cosmjs-evm/math](https://www.npmjs.com/package/@cosmjs-evm/math)
    - [@cosmjs-evm/proto-signing](https://www.npmjs.com/package/@cosmjs-evm/proto-signing)
    - [@cosmjs-evm/socket](https://www.npmjs.com/package/@cosmjs-evm/socket)
    - [@cosmjs-evm/stargate](https://www.npmjs.com/package/@cosmjs-evm/stargate)
    - [@cosmjs-evm/stream](https://www.npmjs.com/package/@cosmjs-evm/stream)
    - [@cosmjs-evm/tendermint-rpc](https://www.npmjs.com/package/@cosmjs-evm/tendermint-rpc)
    - [@cosmjs-evm/utils](https://www.npmjs.com/package/@cosmjs-evm/utils)



## Ethereum Client Integrations

EthersJS and Web3JS are two most commonly used libraries in dApp development. Developer uses these libraries to interact
with blockchain and query JSON-RPC data, for example. Additionally, both of these libraries contain utilities to aid in
task like converting large numbers (BigNumber).

- [Ethers.js](https://docs.ethers.org/v5/) is the latest JS library that aims to be a complete and compact library for
interacting with the Ethereum Blockchain and its ecosystem.
- [web3js](https://web3js.readthedocs.io/en/v1.8.2/) is a collection of libraries that allow you to interact with a local
or remote ethereum node using HTTP, IPC or WebSocket.
