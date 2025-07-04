---
sidebar_position: 4
---

# Key Management

A mnemonic phrase, also known as a seed phrase, is a set of words used to recover or restore a cryptocurrency wallet.
It acts as a backup to access your digital assets in case you lose access to the original wallet. The phrase is
typically a series of 12-24 words that are generated when you create a wallet, and it should be kept secure and
 private.

The importance of mnemonic phrases lies in the fact that cryptocurrencies are stored in a decentralized manner,
meaning that there is no central authority or institution that holds or controls your funds. This means that if
you lose access to your wallet (e.g. forget your password, lose your device), you will not be able to recover
your funds without the mnemonic phrase.

Therefore, it is crucial to store your mnemonic phrase in a safe and secure place, such as a physical paper or
a secure digital file. Additionally, it is recommended to make multiple copies and store them in different
locations, so that you can access your funds in case of any emergency.

:::note
**Mnemonic Phrase vs Private Key**
A seed phrase, also known as a recovery phrase or backup phrase, is a sequence of words used to generate a private
key. It is typically a set of 12 or 24 words, and it's used to recover or restore access to a cryptocurrency wallet
in case the original private key is lost or damaged. A seed phrase can be used to generate multiple private keys,
which can be used to access multiple cryptocurrency addresses and balances.

On the other hand, a private key is a long string of characters that is used to sign transactions and provide access
to your cryptocurrency funds. The private key is generated from the seed phrase and is unique to each cryptocurrency
address. It is used to create digital signatures for transactions, which ensure that the transaction is legitimate
and has been authorized by the rightful owner of the funds.

In conclusion, the security of your private keys and mnemonic phrase is of utmost importance. If your private keys
 are compromised, it can put all associated accounts at risk. However, the loss of your mnemonic phrase can have
 even more severe consequences as it is used to generate multiple private keys. Therefore, it is crucial to take
  proper measures to safeguard both your private keys and mnemonic phrase to avoid any catastrophic loss.

:::

## Mnemonics from the Qubetics CLI

:::note
Before proceeding with the CLI, please insure you have `qubeticsd` installed. Installation instruction are located [here](./../../protocol/qubetics-cli).
:::

When you create a new key, you'll receive a mnemonic phrase that can be used to restore that key. Backup the mnemonic phrase:

```bash
qubeticsd keys add dev0
{
  "name": "dev0",
  "type": "local",
  "address": "qubetics16dh50k9twtjzkee0ld5auyy949cdn23c3gacq4",
  "pubkey": '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AsV5oddeB+hkByIJo/4lZiVUgXTzNfBPKC73cZ4K1YD2"}',
  "mnemonic": ""
}

**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

# <24 word mnemonic phrase>
```

To restore the key:

```bash
$ qubeticsd keys add dev0-restored --recover
> Enter your bip39 mnemonic
banner genuine height east ghost oak toward reflect asset marble else explain foster car nest make van divide twice culture announce shuffle net peanut
{
  "name": "dev0-restored",
  "type": "local",
  "address": "qubetics16dh50k9twtjzkee0ld5auyy949cdn23c3gacq4",
  "pubkey": '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AsV5oddeB+hkByIJo/4lZiVUgXTzNfBPKC73cZ4K1YD2"}'
}
```

## Export Key


### Ethereum-Formatted Private Keys

:::tip
**Note**: These types of keys are MetaMask-compatible.
:::

To backup this type of key without the mnemonic phrase, do the following:

```bash
qubeticsd keys unsafe-export-eth-key dev0 > dev0.export
**WARNING** this is an unsafe way to export your unencrypted private key, are you sure? [y/N]: y
Enter keyring passphrase:
```

## Import Key

### Tendermint-Formatted Private Keys

```bash
$ qubeticsd keys import dev0-imported ./dev0.export
Enter passphrase to decrypt your key:
```

### Ethereum-Formatted Private Keys

```
$ qubeticsd keys unsafe-import-eth-key dev0-imported ./dev0.export
Enter passphrase to encrypt your key:
```

### Verification

Verify that your key has been restored using the following command:

```bash
$ qubeticsd keys list
[
  {
    "name": "dev0-imported",
    "type": "local",
    "address": "qubetics1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",
    "pubkey": '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}'
  },
  {
    "name": "dev0-restored",
    "type": "local",
    "address": "qubetics1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",
    "pubkey": '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}'
  },
  {
    "name": "dev0",
    "type": "local",
    "address": "qubetics1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",
    "pubkey": '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}'
  }
]
```
