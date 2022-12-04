# Queries

This page provides some sample query examples to help get you started with the Nevellus Foundry V2 subgraph.

You can test any of the queries, or write your own, on the [Nevellus Foundry V2 subgraph](https://thegraph.com/hosted-service/subgraph/).

## Foundry

This query grabs the first 25 foundries and returns their ID (foundry address), amount of $NVLS served and the total amount of $NVLS served.

```
{
  foundries(first: 25) {
    id
    nvlsServed
    totalServings
  }
}
```

## Serving

This query grabs the first 50 servings and returns their IDs as well as the Foundry's ID (address), the transaction hash and the amount of $NVLS in the serving.

```
{
  servings(first: 50) {
    id
    foundry {
      id
    }
    tx
    amountNvls
  }
}
```
