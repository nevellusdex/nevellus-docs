---
sidebar_position: 1
---

# Entities

Entities for the Dione subgraph are all listed below.

## Dione

| Field             | Type    | Description                  |
| :---------------- | :------ | :--------------------------- |
| `id`              | ID      | dione address                |
| `nvls`            | BigInt  | total NVLS allocation point  |
| `nvlsPerSecond`   | [Pools] | NVLS served per second       |
| `totalAllocPoint` | BigInt  | total allocation point       |
| `pools`           | [Pool]  | array of pools               |
| `timestamp`       | BigInt  | timestamp                    |
| `block`           | BigInt  | block                        |

## Pool

| Field              | Type       | Description                 |
| :----------------- | :--------- | :-------------------------- |
| `id`               | ID         | index of pool               |
| `dione`            | Dione      | Dione                       |
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

## NativeRewarderPool

| Field             | Type   | Description            |
| :---------------- | :----- | :--------------------- |
| `id`              | ID     | rewarder address       |
| `rewardToken`     | Bytes  | reward token address   |
| `rewardPerSecond` | Bytes  | rewards per second     |
| `totalAllocPoint` | BigInt | total allocation point |
| `timestamp`       | BigInt | timestamp              |
| `block`           | BigInt | block                  |

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
