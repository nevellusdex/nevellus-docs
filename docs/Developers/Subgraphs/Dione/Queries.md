# Queries

This page provides some sample query examples to help get you started with the Nevellus Dione subgraph.

You can test any of the queries, or write your own, on any of the Nevellus Dione subgraphs (see [here](/docs/Developers/Subgraphs/Overview#dione-not_deployed) for a full list).

## Dione

```
{
  diones(first: 5) {
    id
    nvlsPerSecond
    totalAllocPoint
  }
}
```

This query grabs the first 5 Diones and returns each of their IDs, their NVLS per second and the total allocation points.

## Pool

```
{
  pools(first: 100) {
    id
    pair
    dione {
      id
    }
  }
}
```

This query grabs the first 100 pools and returns each of their IDs, the token pair associated wiht each, as well as the Dione ID of the rewards serving for those pools.

## Rewarder

```
{
    rewarder(id: "0xa3378ca78633b3b9b2255eaa26748770211163ae") {
        rewardToken
        rewardPerSecond
    }
  }
```

This query returns the grabs the rewarder with the given ID and returns its reward token and rewards per second.
