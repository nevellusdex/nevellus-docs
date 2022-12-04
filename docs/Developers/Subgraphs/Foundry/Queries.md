# Queries

This page provides some sample query examples to help get you started with the Nevellus Foundry subgraph.

You can test any of the queries, or write your own, on the [Nevellus Foundry subgraph](https://thegraph.com/hosted-service/subgraph/fernandocfjr/).

## Foundry

This query grabs the first 25 Foundries and returns their ID, amount of NVLS served, total amount of NVLS served, and the servers along with their IDs (user addresses).

```
{
  foundries(first: 25) {
    id
    nvlsServed
    totalServings
    servers {
      id
    }
  }
}
```

## Server

This query grabs the first 50 servers and returns their ID (address) as well as the Foundry's ID (address), amount of NVLS they've served and the total amount of NVLS they've served.

```
{
  servers(first: 50) {
    id
    foundry {
      id
    }
    nvlsServed
    totalServings
  }
}
```

## Serving

This query grabs the first 100 servings and returns their ID, amount of NVLS, the txn data and the server who served that specific serving and their ID (address).

```
{
  servings(first: 100) {
    id
    amountNvls
    tx
    server {
      id
    }
  }
}
```
