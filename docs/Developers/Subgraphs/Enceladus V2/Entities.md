---
sidebar_position: 1
---

# Entities

Entities for the Enceladus V2 subgraph are all listed below.

## Enceladus

| Field             | Type    | Description                  |
| :---------------- | :------ | :--------------------------- |
| `id`              | ID      | enceladus address            |
| `totalAllocPoint` | BigInt  | total NVLS allocation point  |
| `pools`           | [Pools] | array of pools               |
| `poolCount`       | BigInt  | number of pools              |
| `timestamp`       | BigInt  | timestamp                    |
| `block`           | BigInt  | block                        |

## Pool

| Field              | Type       | Description                 |
| :----------------- | :--------- | :-------------------------- |
| `id`               | ID         | index of pool               |
| `enceladus`        | Enceladus  | Enceladus                   |
| `pair`             | Bytes      | pair address                |
| `rewarder`         | Rewarder   | rewarder                    |
| `allocPoint`       | BigInt     | allocation point            |
| `lastRewardBlock`  | BigInt     | last reward block           |
| `accNvlsPerShare`  | BigInt     | accumulated NVLS per share  |
| `users`            | [User]     | array of users              |
| `userCount`        | BigInt     | number of users             |
| `nvlpBalance`      | BigDecimal | NVLP balance                |
| `timestamp`        | BigInt     | timestamp                   |
| `block`            | BigInt     | block                       |

## Rewarder

| Field             | Type   | Description          |
| :---------------- | :----- | :------------------- |
| `id`              | ID     | rewarder address     |
| `rewardToken`     | Bytes  | reward token address |
| `rewardPerSecond` | BigInt | rewards per second   |
| `timestamp`       | BigInt | timestamp            |
| `block`           | BigInt | block                |

## User

| Field            | Type       | Description                            |
| :--------------- | :--------- | :------------------------------------- |
| `id`             | ID         | pool ID concatenated with user address |
| `address`        | Bytes      | user address                           |
| `pool`           | Pool       | pool                                   |
| `amount`         | BigInt     | amount                                 |
| `rewardDebt`     | BigInt     | amount of reward debt                  |
| `nvlsHarvested`  | BigDecimal | amount of NVLS harvested               |
| `timestamp`      | BigInt     | timestamp                              |
| `block`          | BigInt     | block                                  |
