---
sidebar_position: 1
---

# Entities

Entities for the Foundry subgraph are all listed below.

## Foundry

| Field           | Type       | Description              |
| :-------------- | :--------- | :----------------------- |
| `id`            | ID         | foundry address          |
| `nvlsServed`    | BigInt     | all time NVLS served     |
| `totalServings` | BigDecimal | total amount of servings |
| `servers`       | [Server]   | array of servers         |
| `servings`      | [Serving]  | array of servings        |
| `block`         | BigInt     | block                    |
| `timestamp`     | BigInt     | timestamp                |

## Server

| Field           | Type       | Description              |
| :-------------- | :--------- | :----------------------- |
| `id`            | ID         | foundry address          |
| `foundry`       | Foundry    | foundry                  |
| `nvlsServed`    | BigDecimal | NVLS served              |
| `totalServings` | BigDecimal | total amount of servings |
| `servings`      | [Serving]  | array of servings        |
| `block`         | BigInt     | block                    |
| `timestamp`     | BigInt     | timestamp                |

## Serving

| Field         | Type    | Description                                 |
| :------------ | :------ | :------------------------------------------ |
| `id`          | ID      | pair address concatenated with block number |
| `foundry`     | Foundry | foundry                                     |
| `server`      | Server  | server                                      |
| `tx`          | Bytes   | transaction                                 |
| `token0`      | Bytes   | half of pair                                |
| `token1`      | Bytes   | half of pair                                |
| `amount0`     | BigInt  | amount of token0                            |
| `amount1`     | BigInt  | amount of token1                            |
| `amountNvls`  | Big Int | amount of NVLS served                       |
| `block`       | Big Int | block                                       |
| `timestmap`   | Big Int | timestamp                                   |
