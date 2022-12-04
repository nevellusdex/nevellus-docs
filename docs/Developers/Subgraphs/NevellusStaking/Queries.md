# Queries

This page provides some sample query examples to help get you started with the Nevellus NevellusStakin subgraph.

You can test any of the queries, or write your own, on the [Nevellus Stakin subgraph](https://thegraph.com/explorer/subgraph).

## Nevellus Staking

This query returns the ID (contract address), decimal count and name of the NevellusStakin, as well as the contract address of NVLS.

```
{
  stakings(first: 5) {
    id
    decimals
    name
    nvls
  }
}
```

## User

This query grabs the first 15 users of the NevellusStaking and returns the user ID (user's address), the NevellusStaking address, the user's total amount of sNVLS and how much (if any) sNVLS they deposited.

```
{
  users(first: 5) {
    id
    bar {
      id
    }
    sNvls
    sNvlsIn
  }
}
```
