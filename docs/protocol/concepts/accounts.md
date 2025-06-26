---
sidebar_position: 1
---

# Accounts

Crypto Wallets (or Accounts) can be created
and represented in unique ways on different blockchains.
For developers who interface with account types on Qubetics,
e.g. during wallet integration on their dApp frontend,
it is therefore important to understand that accounts on Qubetics are implemented
to be compatible with Ethereum type addresses.

## Prerequisite Readings

- [Cosmos SDK Accounts](https://docs.cosmos.network/main/learn/beginner/accounts)
- [Ethereum Accounts](https://ethereum.org/en/whitepaper/#ethereum-accounts)

## Creating Accounts

To create one account you can either
create a private key, a keystore file (a private key protected by a password),
or a mnemonic phrase (a string of words that can access multiple private keys).

Aside from having different security features,
the biggest difference between each of these is
that a private key or keystore file only creates one account.
Creating a mnemonic phrase gives you control of many accounts,
all accessible with that same phrase.

Cosmos blockchains, like Qubetics, support creating accounts with mnemonic phrases,
otherwise known as
[hierarchical deterministic key generation](https://github.com/confio/cosmos-hd-key-derivation-spec) (HD keys).
This allows the user to create accounts on multiple blockchains
without having to manage multiple secrets.

HD keys generate addresses by taking the mnemonic phrase
and combining it with a piece of information called a [derivation path](https://learnmeabitcoin.com/technical/derivation-paths).
Blockchains can differ in which derivation path they support.
To access all accounts from an mnemonic phrase on a blockchain,
it is therefore important to use that blockchain's specific derivation path.

## Representing Accounts

The terms "account" and "address" are often used interchangeably to describe crypto wallets.
In the Cosmos SDK, an account designates a pair of public key (PubKey) and private key (PrivKey).
The derivation path defines what the private key, public key, and address would be.

The PubKey can be derived to generate various addresses in different formats,
which are used to identify users (among other parties) in the application.
A common address form for Cosmos chains is the bech32 format (e.g. `qubetics1...`).
Addresses are also associated with messages to identify the sender of the message.

The PrivKey is used to generate digital signatures to prove
that an address associated with the PrivKey approved of a given message.
The proof is performed by applying a cryptographic scheme to the PrivKey,
known as Elliptic Curve Digital Signature Algorithm (ECDSA),
to generate a PubKey that is compared with the address in the message.

## Qubetics Accounts

Qubetics defines `Account` type
to implement a HD wallet that is compatible with Ethereum type addresses.
It uses Ethereum's ECDSA secp256k1 curve for keys (`eth_secp265k1`)
and satisfies the [EIP84](https://github.com/ethereum/EIPs/issues/84)
for full [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) paths.
This cryptographic curve is not to be confused with [Bitcoin's ECDSA secp256k1](https://en.bitcoin.it/wiki/Secp256k1) curve.

The root HD path for Qubetics-based accounts is `m/44'/60'/0'/0`.
Qubetics uses the Coin type `60` to support Ethereum type accounts,
unlike many other Cosmos chains that use Coin type `118` ([list of coin types](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)


### Addresses and Public Keys

[BIP-0173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md) defines a new format for segregated witness
output addresses that contains a human-readable part that identifies the Bech32 usage. Qubetics uses the following
HRP (human readable prefix) as the base HRP:

| Network   | Mainnet | Testnet |
|-----------|---------|---------|
| Qubetics     | `qubetics` | `qubetics` |

There are 3 main types of HRP for the `Addresses`/`PubKeys` available by default on Qubetics:

- Addresses and Keys for **accounts**, which identify users (e.g. the sender of a `message`). They are derived using
 the **`eth_secp256k1`** curve.
- Addresses and Keys for **validator operators**, which identify the operators of validators. They are derived using
 the **`eth_secp256k1`** curve.
- Addresses and Keys for **consensus nodes**, which identify the validator nodes participating in consensus. They are
 derived using the **`ed25519`** curve.

|                    | Address bech32 Prefix | Pubkey bech32 Prefix | Curve           | Address byte length | Pubkey byte length |
|--------------------|-----------------------|----------------------|-----------------|---------------------|--------------------|
| Accounts           | `qubetics`               | `qubeticspub`           | `eth_secp256k1` | `20`                | `33` (compressed)  |
| Validator Operator | `qubeticsvaloper`        | `qubeticsvaloperpub`    | `eth_secp256k1` | `20`                | `33` (compressed)  |
| Consensus Nodes    | `qubeticsvalcons`        | `qubeticsvalconspub`    | `ed25519`       | `20`                | `32`               |

### Address formats for clients

`EthAccount` can be represented in both [Bech32](https://en.bitcoin.it/wiki/Bech32) (`qubetics1...`)
and hex (`0x...`) formats for Ethereum's Web3 tooling compatibility.

The Bech32 format is the default format for Cosmos-SDK queries and transactions through CLI and REST
clients. The hex format on the other hand, is the Ethereum `common.Address` representation of a
Cosmos `sdk.AccAddress`.

- **Address (Bech32)**: `qubetics16dh50k9twtjzkee0ld5auyy949cdn23c3gacq4`
- **Address ([EIP55](https://eips.ethereum.org/EIPS/eip-55) Hex)**: `0xd36F47d8Ab72e42B672FFB69De1085A970D9aa38`
- **Compressed Public Key**: `{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A9/aJHMclvZ1yqGroC2TC80vHL8CwWYxcZE71cD3u6Sl"}`

### Address conversion

The `qubeticsd debug addr <address>` can be used to convert an address between hex and bech32 formats. For example:

```bash title="Bech32"
 $ qubeticsd debug addr qubetics16dh50k9twtjzkee0ld5auyy949cdn23c3gacq4
  Address: [20 87 74 109 255 45 223 158 7 130 139 67 69 211 4 9 25 175 86 82]
  Address (hex): d36F47d8Ab72e42B672FFB69De1085A970D9aa38
  Bech32 Acc: qubetics16dh50k9twtjzkee0ld5auyy949cdn23c3gacq4
  Bech32 Val: qubeticsvaloper16dh50k9twtjzkee0ld5auyy949cdn23cf6zh8h
```

### Key output

:::tip
The Cosmos SDK Keyring output (i.e `qubeticsd keys`) only supports addresses and public keys in Bech32 format.
:::

We can use the `keys show` command of `qubeticsd` with the flag `--bech <type> (acc|val|cons)` to
obtain the addresses and keys as mentioned above,

```bash title="Accounts"
 $ qubeticsd keys show dev0 --bech acc
- name: dev0
  type: local
  address: qubetics16dh50k9twtjzkee0ld5auyy949cdn23c3gacq4
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AsV5oddeB+hkByIJo/4lZiVUgXTzNfBPKC73cZ4K1YD2"}'
  mnemonic: ""
```

```bash title="Validator"
 $ qubeticsd keys show dev0 --bech val
- name: dev0
  type: local
  address: qubeticsvaloper16dh50k9twtjzkee0ld5auyy949cdn23cf6zh8h
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AsV5oddeB+hkByIJo/4lZiVUgXTzNfBPKC73cZ4K1YD2"}'
  mnemonic: ""
```

```bash title="Consensus"
 $ qubeticsd keys show dev0 --bech cons
- name: dev0
  type: local
  address: qubeticsvalcons116dh50k9twtjzkee0ld5auyy949cdn23cf6zh8h
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A/fVLgIqiLykFQxum96JkSOoTemrXD0tFaFQ1B0cpB2c"}'
  mnemonic: ""
```