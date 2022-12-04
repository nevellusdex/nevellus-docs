---
sidebar_position: 1
---

# Entities

Entities for the Foundry V2 subgraph are all listed below.

## Foundry

| Field           | Type       | Description              |
| :-------------- | :--------- | :----------------------- |
| `id`            | ID         | foundry address          |
| `nvlsServed`    | BigInt     | all time NVLS served     |
| `totalServings` | BigDecimal | total amount of servings |
| `servings`      | [Serving]  | array of servings        |
| `block`         | BigInt     | block                    |
| `timestamp`     | BigInt     | timestamp                |

## Serving

| Field         | Type   | Description                                 |
| :------------ | :----- | :------------------------------------------ |
| `id`          | ID     | pair address concatenated with block number |
| `foundry`     | Foundry| foundry                                     |
| `tx`          | Bytes  | transaction                                 |
| `amountNvls`  | BigInt | amount of NVLS served                       |
| `block`       | BigInt | block                                       |
| `timestmap`   | BigInt | timestamp                                   |

## DayData

| Field           | Type       | Description            |
| :-------------- | :--------- | :--------------------- |
| `id`            | ID         | timestamp / 86,400     |
| `date`          | Int        | date                   |
| `servingsCount` | BigDecimal | amount of servings     |
| `amountNvls`    | BigInt     | amount of NVLS served  |
