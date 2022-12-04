---
sidebar_position: 1
---

# Entities

Entities for the NevellusStaking subgraph are all listed below.

## Bar

| Field                | Type       | Description                      |
| :------------------- | :--------- | :------------------------------- |
| `id`                 | ID         | id                               |
| `decimals`           | BigInt     | decimals                         |
| `name`               | String     | name                             |
| `nvls`               | Bytes      | address of nvls                  |
| `symbol`             | String     | symbol                           |
| `totalSupply`        | BigDecimal | total supply                     |
| `ratio`              | BigDecimal | ratio                            |
| `sNvlsMinted`        | BigDecimal | amount of sNVLS minted           |
| `sNVLSBurned`        | BigDecimal | amount of sNVLS burned           |
| `nvlsStaked`         | BigDecimal | amount of NVLS staked            |
| `nvlsStakedUSD`      | BigDecimal | amount of NVLS staked in USD     |
| `nvlsHarvested`      | BigDecimal | amount of NVLS harvested         |
| `nvlsHarvestedUSD`   | BigDecimal | amount of NVLS harvested in USD  |
| `sNvlsAge`           | BigDecimal | age of the sNVLS                 |
| `sNvlsAgeDestroyed`  | BigDecimal | sNVLS age destroyed              |
| `users`              | [Users]    | array of users                   |
| `updatedAt`          | BigInt     | timestamp bar was updated at     |

## User

| Field                | Type       | Description                        |
| :------------------- | :--------- | :--------------------------------- |
| `id`                 | ID         | id                                 |
| `sNvls`              | BigDecimal | sNVLS                              |
| `sNvlsIn`            | BigDecimal | amount of sNVLS in                 |
| `sNvlsOut`           | BigDecimal | amount of sNVLS out                |
| `sNvlsMinted`        | BigDecimal | amount of sNVLS minted             |
| `sNvlsBurned`        | BigDecimal | amount of sNVLS burned             |
| `sNvlsOffset`        | BigDecimal | sNVLS offset                       |
| `sNvlsAge`           | BigDecimal | age of the sNVLS                   |
| `sNvlsAgeDestroyed`  | BigDecimal | sNVLS age destroyed                |
| `nvlsStaked`         | BigDecimal | amount of NVLS staked              |
| `nvlsStakedUSD`      | BigDecimal | amount of NVLS staked in USD       |
| `nvlsHarvested`      | BigDecimal | amount of NVLS harvested           |
| `nvlsHarvestedUSD`   | BigDecimal | amount of NVLS harvested in USD    |
| `nvlsOut`            | BigDecimal | amount of NVLS out                 |
| `nvlsiIn`            | BigDecimal | amount of NVLS in                  |
| `usdOut`             | BigDecimal | amount of USD out                  |
| `usdIn`              | BigDecimal | amount of USD in                   |
| `nvlsOffset`         | BigDecimal | NVLS offset                        |
| `usdOffset`          | BigDecimal | USD offset                         |
| `createdAt`          | BigInt     | timestamp of when user was created |
| `createdAtBlock`     | BigInt     | block of when user was created     |
| `updatedAt`          | BigInt     | timestamp of when user was updated |
| `updatedAtBlock`     | BigInt     | block of when user was updated     |
