---
sidebar_position: 1
---

# Overview

The following pages contain everything you need to know about the Nevellus suite of subgraphs. Nevellus subgraphs are powered by [The Graph](https://thegraph.com/en/), a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.

If you are unfamiliar with GraphQL, we recommend taking a quick look through their docs first [here](https://graphql.org/learn/).

The Nevellus subgraph works by listening for events emitted by one or more data sources (Smart Contracts) on the various chains. It handles the indexing and caching of data which can later be queried using an exposed GraphQL API, providing an excellent developer experience.

Each subgraph is broken down into its own section and documented in two forms: by entity and by queries.

## Current Subgraph Locations

### Exchange

Includes all Nevellus Exchange data with Price Data, Volume, Users, etc.

-   [Goerli](https://thegraph.com/hosted-service/subgraph/fernandocfjr/exchange-goerli)

### Enceladus (not_deployed)

Indexes all Enceladus staking data.

[Mainnet not_deployed](https://thegraph.com/explorer/not_deployed)

### Enceladus V2 (not_deployed)

Indexes all Enceladus V2 staking data.

[Mainnet not_deployed](https://thegraph.com/hosted-service/)

### NevellusFoundry (not_deployed)

Indexes the NevellusFoundry contract, which handles the serving of exchange fees to the Nevellus Staking program.

[Mainnet not_deployed](https://thegraph.com/explorer/subgraph/not_deployed)

### NevellusFoundry V2 (not_deployed)

Indexes the NevellusFoundry V2 contract, which handles the serving of exchange fees to the Nevellus Staking program.

[Mainnet not_deployed](https://thegraph.com/hosted-service/subgraph/)

### Nevellus Timelock (not_deployed)

Includes all of the timelock transactions queried, executed and cancelled.

[Mainnet not_deployed](https://thegraph.com/explorer/subgraph/not_deployed)

### NevellusStaking (not_deployed)

Indexes the NevellusStaking, which includes all the data related to the stake program.

[Mainnet not_deployed](https://thegraph.com/explorer/subgraph/)


### Nevellus Vault (not_deployed)

Indexes all Nevellus Vault data.

[Mainnet not_deployed](https://thegraph.com/hosted-service/subgraph/)

### Dione (not_deployed)

Indexes the Dione contracts, which are used in place of Enceladus for alternate networks.

-   [Matic not_deployed](https://thegraph.com/hosted-service/subgraph/)

## Resources

[Nevellus Subgraph Explorer](https://thegraph.com/hosted-service/subgraph/fernandocfjr/exchange-goerli)

[The Graph](https://thegraph.com/docs/en/)

[GraphQL](https://graphql.org/learn/)
