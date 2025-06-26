---
sidebar_position: 5
---

# Mempool

The mempool holds uncommitted transactions, which are not yet included in a block.
The default mempool implementation for Tendermint blockchains follows a first-in-first-out (FIFO) principle,
which means the ordering of transactions depends solely on the order in which they arrive at the node.
The first transaction to be received will be the first transaction to be processed.
This is true for gossiping the received transactions to the rest of the peers as well as including them in a block.


