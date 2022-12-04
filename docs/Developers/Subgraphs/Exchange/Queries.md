# Queries

This page provides some sample query examples to help get you started with the Nevellus Exchange subgraph.

You can test any of the queries, or write your own, on the [Nevellus Exchange subgraph](https://thegraph.com/hosted-service/subgraph/fernandocfjr/exchange-goerli).

## Factory

### All Time Liquidity, Volume and Transactions

This query gets a factory by its id (factory address), which in this case is the Nevellus Factory contract address.

```
{
 factory(
  id: "0xb1b5B3f949D03b251CA23Cb365F18CB32a87e70a"
 ) {
  volumeUSD
  liquidityUSD
  txCount
 }
}
```

## Bundle

### Ethereum Price

This query gets a bundle by its id, which in this case is simply "1".

```
{
 bundle(
  id: "1"
 ) {
  ethPrice
 }
}
```

## Pair

### Pair By ID

This query gets a pair by its id (contract address), which in this case is the NVLS/ETH pair contract address.

_address bellow is from goerli testnet_

```
{
 pair(
  id: "0x60344f6f86dE7497fa4A0c196e98F6fd1b80aF46"
 ) {
  id
  token0 {
   id
   symbol
  }
  token1 {
   id
   symbol
  }
 }
}
```

### Pairs

This query lists the first 1,000 pairs.

```
{
 pairs(
  first: 1000
 ) {
  id
 }
}
```

### Pairs Ordered by Liquidity

This query lists the first 1,000 pairs, ordered by liquidity in descending order.

```
{
 pairs(
  first: 1000,
  orderBy: reserveUSD,
  orderDirection: desc
 ) {
  id
 }
}
```

### Subset of Pairs

This query gets a subset of pairs where ID is in an array of ID's (pair contract addresses), which in this case is the addresses of the NVLS/ETH and NVLS/USDT pairs.

_addresses bellow is from goerli testnet_

```
{
 pairs(
  where: {
   id_in: [
    "0x60344f6f86dE7497fa4A0c196e98F6fd1b80aF46",
    "0x9C93244A5a6b2eb29cd772D77953f2F8235E2472"
   ]
  }
 ) {
  id
  token0 {
   id
   symbol
  }
  token1 {
   id
   symbol
  }
 }
}
```

## Pair Day Data

This query lists pair day data, where the pairAddress is the NVLS/ETH pair contract address, ordered by date in ascending direction.

_address bellow is from goerli testnet_

```
{
 pairDayDatas(
  orderBy: date,
  orderDirection: asc,
  where: {
   pairAddress: "0x60344f6f86dE7497fa4A0c196e98F6fd1b80aF46",
 ) {
  id
  date
  volumeUSD
 }
}
```

## Token

### Token by ID

This query gets a token by its ID (contract address), which in this case is the NVLS token contract address.

_address bellow is from goerli testnet_

```
{
 token(
  id: "0x0Ab29e108a4F1BeBa89326687F8a9fBCEba8369B"
 ) {
  name
  symbol
  decimals
  derivedETH
  volumeUSD
  liquidity
 }
}
```

### Tokens

This query the first 1,000 tokens.

```
{
 tokens(
  first: 1000
 ) {
  id
 }
}
```

### Tokens Ordered by Volume

This query the first 1,000 tokens, order by volume in descending order.

```
{
 tokens(
  first: 1000,
  orderBy: tradeVolumeUSD,
  orderDirection: desc
 ) {
  id
 }
}
```

### Subset of Tokens

This query gets a subset of tokens where ID is an array of IDs (token contract addresses), which in this case is the addresses of the Nevellus and Ethereum tokens.

```
{
 tokens(
  where: {
   id_in: [
    "0x0Ab29e108a4F1BeBa89326687F8a9fBCEba8369B",
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
   ]
  }
 ) {
  id
  symbol
 }
}
```

## Token Day Data

This query lists token day data, where the token is the NVLS token cotract address, ordered by date in ascending direction.

```
{
 tokenDayDatas(
  orderBy: date,
  orderDirection: asc,
  where: {
   token: "0x0Ab29e108a4F1BeBa89326687F8a9fBCEba8369B"
  }
 ) {
  id
  date
  volumeToken
  volumeETH
  volumeUSD
  txCount
  liquidityToken
  liquidityETH
  liquidityUSD
  priceUSD
 }
}
```

## User

### User by ID

This query gets a user by their ID (user address).

```
{
 user(
  id: "..."
 ) {
  id
 }
}
```

### Users

This query lists the first 1,000 users.

```
{
 users(
  first: 1000
 ) {
  id
 }
}
```

### Subset of Users

This query gets a subset of users where ID is an array of IDs (user addresses).

```
{
 users(
  where: { id_in: [ "one", "two", "three" ] }
 ) {
  id
 }
}
```
