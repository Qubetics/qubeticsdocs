---
sidebar_position: 1
---

# Run a Validator

Learn how to run a validator node.

## Prerequisite Readings

- [Validator Overview](./../)
- [Validator Security](./../security/validator-security-checklist)


:::warning
:warning: **WARNING**: Make sure your server **timezone configuration is UTC**.
Having a different timezone configuration may cause a `LastResultsHash` mismatch error.
This will take down your node!
:::

## Create Your Validator

Your node consensus public key (`qubeticsvalconspub...`) can be used to create a new validator by staking qubetics tokens.
You can find your validator pubkey by running:

```bash
qubeticsd tendermint show-validator
```

To create your validator on testnet or mainnet through cli command or you can create validator thorugh our validator an delegator app, just use the following command:

```bash
qubeticsd tx staking create-validator \
  --amount=1000000000000000000tics \
  --pubkey=$(qubeticsd tendermint show-validator) \
  --moniker="choose a moniker" \
  --chain-id=<chain_id> \
  --commission-rate="0.05" \
  --commission-max-rate="0.10" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1000000" \
  --gas="auto" \
  --gas-prices="0.025tics" \
  --gas-adjustment="1.15" \
  --home="$HOME/.tmp-qubeticsd"
  --from=<key_name>
```

:::tip
When specifying commission parameters, the `commission-max-change-rate` is used
to measure % *point* change over the `commission-rate`,
e.g. 1% to 2% is a 100% rate increase, but only 1 percentage point.
:::

:::tip
`Min-self-delegation` is a strictly positive integer
that represents the minimum amount of self-delegated voting power your validator must always have.
A `min-self-delegation` of `25000000000000000000000` means your validator will never have a self-delegation lower than `25000 tics`.
:::

You can confirm that you are in the validator set by using a third party explorer.

## Edit Validator Description

You can edit your validator's public description.
This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to.
Make sure to provide input for every flag below.
If a flag is not included in the command the field will default to empty
(`--moniker` defaults to the machine name)
if the field has never been set or remain the same if it has been set in the past.

The <key_name> specifies which validator you are editing.
If you choose to not include certain flags, remember that the --from flag must be included to identify the validator to update.

The `--identity` can be used as to verify identity with systems like Keybase or UPort.
When using with Keybase `--identity` should be populated with a 16-digit string that is generated
with a [keybase.io](https://keybase.io) account.
It's a cryptographically secure method of verifying your identity across multiple online networks.
The Keybase API allows us to retrieve your Keybase avatar.
This is how you can add a logo to your validator profile.

```bash
qubeticsd tx staking edit-validator
  --moniker="choose a moniker" \
  --website="https://ticsscan.com/" \
  --identity=6A0D65E29A4CBC8E \
  --details="To infinity and beyond!" \
  --chain-id=<chain_id> \
  --gas="auto" \
  --gas-prices="0.025tics" \
  --from=<key_name> \
  --commission-rate="0.10" \
  --gas-adjustment="1.15" \
  --home="$HOME/.tmp-qubeticsd"
```

**Note**: The `commission-rate` value must adhere to the following invariants:

* Must be between 0 and the validator's `commission-max-rate`
* Must not exceed the validator's `commission-max-change-rate` which is maximum
  % point change rate **per day**. In other words, a validator can only change
  its commission once per day and within `commission-max-change-rate` bounds.

## View Validator Description

View the validator's information with this command:

```bash
qubeticsd query staking validator <account>
```

## Track Validator Signing Information

In order to keep track of a validator's signatures in the past you can do so by using the `signing-info` command:

```bash
qubeticsd query slashing signing-info <validator-pubkey>\
  --chain-id=<chain_id>
```

## Unjail Validator

When a validator is "jailed" for downtime, you must submit an `Unjail` transaction from the operator account
in order to be able to get block proposer rewards again
(depends on the zone fee distribution).

```bash
qubeticsd tx slashing unjail \
  --from=<key_name> \
  --chain-id=<chain_id>
```

## Confirm Your Validator is Running

Your validator is active if the following command returns anything:

```bash
qubeticsd query tendermint-validator-set | grep "$(qubeticsd tendermint show-address)"
```

You should now see your validator in one of Qubetics explorers.
You are looking for the `bech32` encoded `address` in the `~/.qubeticsd/config/priv_validator.json` file.

:::warning Note
To be in the validator set, you need to have more total voting power than the 100th validator.
:::

## Halting Your Validator

When attempting to perform routine maintenance or planning for an upcoming coordinated
upgrade, it can be useful to have your validator systematically and gracefully halt.
You can achieve this by either setting the `halt-height` to the height at which
you want your node to shutdown or by passing the `--halt-height` flag to `qubeticsd`.
The node will shutdown with a zero exit code at that given height after committing
the block.

## Common Problems

### Problem #1: My validator has `voting_power: 0`

Your validator has become jailed.
Validators get jailed, i.e. get removed from the active validator set,
if they do not vote on `50000` of the last `100000` blocks, or if they double sign.

If you got jailed for downtime, you can get your voting power back to your validator.
First, if `qubeticsd` is not running, start it up again:

```bash
qubeticsd start
```

Wait for your full node to catch up to the latest block.
Then, you can [unjail your validator](#unjail-validator)

Lastly, check your validator again to see if your voting power is back.

```bash
qubeticsd status
```

You may notice that your voting power is less than it used to be.
That's because you got slashed for downtime!

### Problem #2: My node crashes because of `too many open files`

The default number of files Linux can open (per-process) is `1024`. `qubeticsd` is known to open more than `1024` files.
This causes the process to crash.
A quick fix is to run `ulimit -n 4096` (increase the number of open files allowed)
and then restart the process with `qubeticsd start`.
If you are using `systemd` or another process manager to launch `qubeticsd` this may require some configuration at that level.
A sample `systemd` file to fix this issue is below:

```toml
# /etc/systemd/system/qubeticsd.service
[Unit]
Description=Qubetics Node
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu
ExecStart=/home/ubuntu/go/bin/qubeticsd start
Restart=on-failure
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
```
