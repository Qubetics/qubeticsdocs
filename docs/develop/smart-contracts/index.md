# Smart Contracts

Since the introduction of Ethereum in 2015,
the ability to control digital assets through [smart contracts](https://ethereum.org/en/smart-contracts/)
has attracted a large community of developers
to build decentralized applications on the Ethereum Virtual Machine (EVM).
This community is continuously creating extensive tooling and introducing standards,
which are further increasing the adoption rate of EVM-compatible technology.

Whether you are building new use cases on Qubetics
or porting an existing dApp from another EVM-based chain (e.g. Ethereum),
you can easily build and deploy EVM  smart contracts on Qubetics to implement the core business logic of your dApp.
Qubetics is fully compatible with the EVM,
so it allows you to use the same tools (Solidity, Remix, qubecode IDE, Oracles,cosmjs-evm, etc.)
and APIs (i.e. Ethereum JSON-RPC) that are available on the EVM.

Leveraging the interoperability of Cosmos chains,
Qubetics enables you to build scalable cross-chain applications within a familiar EVM  environment.
Learn about the essential components when building and deploying EVM smart contracts on Qubetics below.

## Build with Solidity

You can develop EVM smart contracts on Qubetics using [Solidity](https://github.com/ethereum/solidity).
Solidity is also used to build smart contracts on Ethereum.
So if you have deployed smart contracts on Ethereum (or any other EVM-compatible chain)
you can use the same contracts on Qubetics.

Since it is the most widely used smart contract programming language in Blockchain,
Solidity comes with well-documented and rich language support.
Head over to our list of Tools and IDE Plugins to help you get started.

## Deploy with Ethereum JSON-RPC

Qubetics is fully compatible with the [Ethereum JSON-RPC](./../../develop/api/ethereum-json-rpc/) APIs,
allowing you to deploy and interact with smart contracts on qubetics
and connect with existing Ethereum-compatible web3 tooling.
This gives you direct access to reading Ethereum-formatted transactions
or sending them to the network which otherwise wouldn't be possible on a Cosmos chain, such as qubetics.

You can connect to the Qubetics [Testnet](./testnet)
to deploy and test your smart contracts before moving to Mainnet.



### Block Explorers

You can use [block explorers](./block-explorers)
to view and debug interactions with your smart contracts deployed on qubetics.
Block explorers index blocks and their transactions
so that you can search for real-time and historical information about the blockchain,
including data related to blocks, transactions, addresses, and more.

### Contract Verification

Once deployed, smart contract data is deployed as non-human readable EVM bytecode.
You can use [contract verification tools](./tools/contract-verifications)
that publish and verify your original Solidity code
to prove to users that they are interacting with the correct smart contract.

