---
sidebar_position: 1
---

# Entities

Entities for the Enceladus subgraph are all listed below.

## Enceladus

| Field             | Type       | Description                     |
| :---------------- | :--------- | :------------------------------ |
| `id`              | ID         | enceladus address               |
| `bonusMultiplier` | BigInt     | bonus multiplier                |
| `bonusEndBlock`   | BigInt     | block to end bonuses on         |
| `devaddr`         | Bytes      | dev fund address                |
| `migrator`        | Bytes      | migrator address                |
| `owner`           | Bytes      | owner address                   |
| `startBlock`      | BigInt     | start block                     |
| `nvls`            | Bytes      | NVLS token address              |
| `nvlsPerBlock`    | BigInt     | NVLS per block                  |
| `totalAllocPoint` | BigInt     | total NVLS allocation point     |
| `pools`           | [Pools]    | array of pools                  |
| `poolCount`       | BigInt     | number of pools                 |
| `nvlpBalance`     | BigDecimal | NVLP balance                    |
| `nvlpAge`         | BigDecimal | age of NVLP                     |
| `nvlpAgeRemoved`  | BigDecimal | NVLP age removed                |
| `nvlpDeposited`   | BigDecimal | amount of NVLP deposited        |
| `nvlpWithdrawn`   | BigDecimal | amount of NVLP withdrawn        |
| `history`         | [History]  | array of history                |
| `updatedAt`       | BigInt     | timestamp of most recent update |

## History

| Field           | Type       | Description                                |
| :-------------- | :--------- | :----------------------------------------- |
| `id`            | ID         | Enceladus ID concantenated with timestamp  |
| `owner`         | Bytes      | owner address (Enceladus, Pool, or User)  |
| `nvlpBalance`   | BigDecimal | NVLP balance                                |
| `nvlpAge`       | BigDecimal | age of NVLP                                 |
| `nvlpAgeRemoved`| BigDecimal | NVLP age removed                            |
| `nvlpDeposited` | BigDecimal | amount of NVLP deposited                    |
| `nvlpWithdrawn` | BigDecimal | amount of NVLP withdrawn                    |
| `timestamp`     | BigInt     | timestamp                                  |
| `block`         | BigInt     | block                                      |

## Pool

| Field               | Type       | Description                      |
| :------------------ | :--------- | :------------------------------- |
| `id`                | ID         | index of pool                    |
| `owner`             | Enceladus  | owner address                    |
| `pair`              | Bytes      | pair address                     |
| `allocPoint`        | BigInt     | allocation point                 |
| `lastRewardBlock`   | BigInt     | last reward block                |
| `accNvlsPerShare`   | BigInt     | accumulated NVLS per share       |
| `users`             | [User]     | array of users                   |
| `balance`           | BigInt     | NVLP token balance                |
| `userCount`         | BigInt     | number of users                  |
| `nvlpBalance`       | BigDecimal | NVLP balance                      |
| `nvlpAge`           | BigDecimal | age of NVLP                       |
| `nvlpAgeRemoved`    | BigDecimal | NVLP age removed                  |
| `nvlpDeposited`     | BigDecimal | amount of NVLP deposited          |
| `nvlpWithdrawn`     | BigDecimal | amount of NVLP withdrawn          |
| `nvlsHarvested`     | BigDecimal | amount of NVLS harvested        |
| `nvlsHarvestedUSD`  | BigDecimal | amount of NVLS harvested in USD |
| `entryUSD`          | BigDecimal | all time entries in USD          |
| `exitUSD`           | BigDecimal | all time exits in USD            |
| `timestamp`         | BigInt     | timestamp                        |
| `block`             | BigInt     | block                            |
| `updatedAt`         | BigInt     | timestamp of most recent update  |

## Pool History

| Field               | Type       | Description                                                               |
| :------------------ | :--------- | :------------------------------------------------------------------------ |
| `id`                | ID         | pool id concatenated with unix timestamp for the start of the day / 86400 |
| `pool`              | Pool       | pool                                                                      |
| `userCount`         | BigInt     | number of users                                                           |
| `nvlpBalance`        | BigDecimal | NVLP balance                                                               |
| `nvlpAge`            | BigDecimal | age of NVLP                                                                |
| `nvlpAgeRemoved`     | BigDecimal | NVLP age removed                                                           |
| `nvlpDeposited`      | BigDecimal | amount of NVLP deposited                                                   |
| `nvlpWithdrawn`      | BigDecimal | amount of NVLP withdrawn                                                   |
| `nvlsHarvested`    | BigDecimal | amount of NVLS harvested                                                 |
| `nvlsHarvestedUSD` | BigDecimal | amount of NVLS harvested in USD                                          |
| `entryUSD`          | BigDecimal | all time entries in USD                                                   |
| `exitUSD`           | BigDecimal | all time exits in USD                                                     |
| `timestamp`         | BigInt     | timestamp                                                                 |
| `block`             | BigInt     | block                                                                     |

## User

| Field               | Type       | Description                            |
| :------------------ | :--------- | :------------------------------------- |
| `id`                | ID         | pool ID concatenated with user address |
| `address`           | Bytes      | user address                           |
| `pool`              | Pool       | pool                                   |
| `amount`            | BigInt     | amount                                 |
| `rewardDebt`        | BigInt     | amount of reward debt                  |
| `entryUSD`          | BigDecimal | all time entries in USD                |
| `exitUSD`           | BigDecimal | all time exits in USD                  |
| `nvlsHarvested`     | BigDecimal | amount of NVLS harvested              |
| `nvlsHarvestedUSD`  | BigDecimal | amount of NVLS harvested in USD       |
| `timestamp`         | BigInt     | timestamp                              |
| `block`             | BigInt     | block                                  |
