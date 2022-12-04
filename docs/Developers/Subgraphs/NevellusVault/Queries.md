# Queries

This page provides some sample query examples to help get you started with the Nevellus Vault subgraph.

You can test any of the queries, or write your own, on the [Nevellus Vault subgraph](https://thegraph.com/hosted-service/subgraph/fernandocfjr/nevellus-vault).

## Nevellus Vault

```
{
  vaults(first: 10) {
    id
    users {
      id
    }
    tokens {
      id
    }
    }
  }
}
```

This query grabs the first 10 Vaults and returns each of their IDs as well as the users, tokens associated with the given Vault, all with their IDs.

## FlashLoan

```
{
  flashLoans(first: 25) {
    id
    borrower
    receiver
    token {
      id
    }
    block
  }
}
```

This query grabs the first 25 Flash Loans and returns the ID for each, the addresses of the borrower and and receiver, as well as the token being loaned and its address, along with the block number the loan happened on.
