---
sidebar_position: 2
---

# Configuration

## Server Timezone

Make sure your server **timezone configuration is UTC**.
To know what is your current timezone, run the `timedatectl` command.

:::danger
🚨 **DANGER**: Having a different timezone configuration
may cause a `LastResultsHash` mismatch error.
This will take down your node!
:::

## Block Time

The timeout-commit value in the node config defines how long we wait after committing a block,
before starting on the new height
(this gives us a chance to receive some more pre-commits, even though we already have +2/3).
The current default value is `"6s"`.


## Peers

In `~/.tmp-qubeticsd/config/config.toml` you can set your peers.

See the  [Add Mainnet persistent peers section](./../mainnet#add-persistent-peers) and [Add Testnet persistent peers section](./../testnet#add-persistent-peers) in our docs for an automated method, but
field should look something like a comma separated string of peers (do not copy this, just an example):

## Mainnet persistent peers

```bash
persistent_peers = "ad8e2053470a347d87f5125d54fe04d86155f7c4@159.138.134.250:26656,1cb538b9950c4f3ce89848101e6698bbf68ad40c@150.40.237.123:26656,41f8e8b5479374a21e69be09911a0c0dc6f41b23@49.0.247.123:26656"
```


## Testnet persistent peers

```bash
persistent_peers = "b3262f53ab7bb3341807b853566a88415363bc42@114.119.184.52:26656,c4bd2d6b9b05cd2dc7e582d051168ffbdbcd4483@124.243.136.185:26656"
```


### Sharing your Peer

You can see and share your peer with the `tendermint show-node-id` command

```bash
qubeticsd tendermint show-node-id
ac29d21d0a6885465048a4481d16c12f59b2e58b
```

- **Peer Format**: `node-id@ip:port`
- **Example**: `b3262f53ab7bb3341807b853566a88415363bc42@114.119.184.52:26656`

### Healthy peers

If you are relying on just seed node and no persistent peers or a low amount of them,
please increase the following params in the `config.toml`:

```bash
# Maximum number of inbound peers
max_num_inbound_peers = 120

# Maximum number of outbound peers to connect to, excluding persistent peers
max_num_outbound_peers = 60
```
