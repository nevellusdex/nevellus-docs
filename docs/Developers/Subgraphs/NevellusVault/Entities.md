---
sidebar_position: 1
---

# Entities

_Nevellus Vault subgraphs are under development/tests_

Entities for the Nevellus Vault subgraph are all listed below.

## Nevellus Vault

| Field             | Type             | Description                             |
| :---------------- | :--------------- | :-------------------------------------- |
| `id`              | ID               | id                                      |
| `users`           | [User]           | array of users                          |
| `tokens`          | [Token]          | array of tokens                         |
| `transactions`    | [VaultAction] | array containing all the transactions   |
| `flashLoans`      | [FlashLoan]      | array of Flash Loans                    |
| `masterContracts` | [MasterContract] | array of MasterContracts                |
| `totalTokens`     | BigInt           | total number of tokens in Vault      |
| `totalUsers`      | BigInt           | total number of users                   |
| `block`           | BigInt           | block                                   |
| `timestamp`       | BigInt           | timestamp                               |

## VaultAction

| Field       | Type               | Description                |
| :---------- | :----------------- | :------------------------- |
| `id`        | ID                 | id                         |
| `vault`  | Vault           | Vault                   |
| `type`      | vaultActionType | VaultActionType type    |
| `from`      | User               | user initiating the action |
| `to`        | User               | user receiving the action  |
| `token`     | Token              | token being used           |
| `amount`    | BigInt             | amount of token to use     |
| `share`     | BigInt             | amount of Vault shares  |
| `block`     | BigInt             | block action was taken on  |
| `timestamp` | BigInt             | timestamp                  |

## FlashLoan

| Field       | Type     | Description               |
| :---------- | :------- | :------------------------ |
| `id`        | ID       | id                        |
| `vault`  | Vault | Vault                  |
| `borrower`  | Bytes    | borrower's address        |
| `receiver`  | Bytes    | receiver's address        |
| `token`     | Token    | token being borrowed      |
| `amount`    | BigInt   | amount of token to borrow |
| `feeAmount` | BigInt   | fee for loan              |
| `block`     | BigInt   | block loan was taken on   |
| `timestamp` | BigInt   | timestamp                 |

## MasterContract

| Field                     | Type                     | Description                      |
| :------------------------ | :----------------------- | :------------------------------- |
| `id`                      | ID                       | id                               |
| `vault`                | Vault                 | Vault                         |
| `clones`                  | [Clone]                  | array of clones                  |
| `masterContractApprovals` | [MasterContractApproval] | array of masterContractApprovals |

## Clone

| Field            | Type           | Description                |
| :--------------- | :------------- | :------------------------- |
| `id`             | ID             | id                         |
| `vault`       | Vault       | Vault                   |
| `masterContract` | MasterContract | MasterContract             |
| `data`           | String         | data needed to build clone |
| `block`          | BigInt         | block clone was created on |
| `timestamp`      | BigInt         | timestamp                  |

## MasterContractApproval

| Field            | Type           | Description                                    |
| :--------------- | :------------- | :--------------------------------------------- |
| `id`             | ID             | concantenated user address with MasterContract |
| `masterContract` | MasterContract | MasterContract                                 |
| `user`           | User           | user                                           |
| `approved`       | Boolean        | MasterContract approved or not                 |

## Protocol

| Field | Type | Description |
| :---- | :--- | :---------- |
| `id`  | ID   | id          |

## Token

| Field                      | Type     | Description                                      |
| :------------------------- | :------- | :----------------------------------------------- |
| `id`                       | ID       | id                                               |
| `vault`                 | Vault | Vault                                         |
| `name`                     | String   | token's name                                     |
| `symbol`                   | String   | token's symbol                                   |
| `decimals`                 | BigInt   | token's amount of decimals                       |
| `totalSupplyElastic`       | BigInt   | total amount of elastic supply                   |
| `totalSupplyBase`          | BigInt   | total amount of base supply                      |
| `strategy`                 | Strategy | strategy                                         |
| `strategyTargetPercentage` | BigInt   | target percentage to set for the strategy chosen |
| `block`                    | BigInt   | block                                            |
| `timestamp`                | BigInt   | timestamp                                        |

## User

| Field                     | Type                     | Description                                         |
| :------------------------ | :----------------------- | :-------------------------------------------------- |
| `id`                      | ID                       | id                                                  |
| `vault`                | Vault                 | Vault                                            |
| `masterContractApprovals` | [MasterContractApproval] | array of MasterContractApprovals                    |
| `tokens`                  | [UserToken]              | array of tokens user owns                           |
| `withdrawals`             | [VaultAction]         | array containing all the withdrawals owner has made |
| `deposits`                | [VaultAction]         | array containing all the deposits owner has made    |
| `block`                   | BigInt                   | block user was created on                           |
| `timestamp`               | BigInt                   | timestamp                                           |

## UserToken

| Field       | Type   | Description                                  |
| :---------- | :----- | :------------------------------------------- |
| `id`        | ID     | concatenated user address with token address |
| `user`      | User   | user                                         |
| `token`     | Token  | token                                        |
| `share`     | BigInt | amount of shares user owns                   |
| `block`     | BigInt | block user token was created on              |
| `timestamp` | BigInt | timestamp                                    |


## Strategy

| Field         | Type              | Description                     |
| :------------ | :---------------- | :------------------------------ |
| `id`          | ID                | id                              |
| `token`       | Token             | token                           |
| `balance`     | BigInt            | token balance                   |
| `totalProfit` | BigInt            | strategy's total profit accrued |
| `harvests`    | [StrategyHarvest] | array of harvests               |
| `timestamp`   | BigInt            | timestamp                       |
| `block`       | BigInt            | block                           |

## StrategyHarvest

| Field          | Type     | Description                         |
| :------------- | :------- | :---------------------------------- |
| `id`           | ID       | id                                  |
| `strategy`     | Strategy | strategy                            |
| `profit`       | BigInt   | amount of profit accrued in harvest |
| `tokenElastic` | BigInt   | elastic supply of token             |
| `timestamp`    | BigInt   | timestamp                           |
| `block`        | BigInt   | block harvest was called on         |
