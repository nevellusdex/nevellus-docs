---
sidebar_position: 7
---

# NevellusMigrator

NevellusMigrator helps migrate your existing Uniswap LP tokens to Nevellus LP tokens.

The full contract can be found [here](https://github.com/nevellusdex).

## Functions

### migrateWithPermit

```solidity
function migrateWithPermit(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public
```

Migrates existing Uniswap LP tokens to Nevellus LP tokens and permits the move in the same function.

#### Parameters

| Name         | Type    | Description                                               |
| :----------- | :------ | :-------------------------------------------------------- |
| `tokenA`     | address | Uniswap LP token                                          |
| `tokenB`     | address | Nevellus LP token                                        |
| `liquidity`  | uint256 | amount of NVLS you have staked that you wish to withdraw |
| `amountAMin` | uint256 | minimum amount of Uniswap LP tokens to migrate            |
| `amountBMin` | uint256 | minimum amount of Nevellus LP tokens to migrate over to  |
| `deadline`   | uint256 | current timestamp                                         |
| `v`          | uint8   | recovery byte of the signature                            |
| `r`          | bytes32 | half of the ECDSA signature pair                          |
| `s`          | bytes32 | half of the ECDSA signature pair                          |

### migrate

```solidity
 function migrate(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        uint256 deadline
    ) public
```

Migrates approved `liquidity` amount of `tokenA` and `tokenB`.

#### Parameters

| Name         | Type    | Description                                              |
| :----------- | :------ | :------------------------------------------------------- |
| `tokenA`     | address | Uniswap LP token                                         |
| `tokenB`     | address | Nevellus LP token                                       |
| `liquidity`  | uint256 | amount of approved Uniswap LP you wish to migrate        |
| `amountAMin` | uint256 | minimum amount of Uniswap LP tokens to migrate           |
| `amountBMin` | uint256 | minimum amount of Nevellus LP tokens to migrate over to |
| `deadline`   | uint256 | current timestamp                                        |

### removeLiquidity

```solidity
function removeLiquidity(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        uint256 deadline
    ) internal returns (uint256 amountA, uint256 amountB)
```

Removes liquidity from old router. !!

#### Parameters

| Name         | Type    | Description                                              |
| :----------- | :------ | :------------------------------------------------------- |
| `tokenA`     | address | Uniswap LP token                                         |
| `tokenB`     | address | Nevellus LP token                                       |
| `liquidity`  | uint256 | amount of approved Uniswap LP you wish to migrate        |
| `amountAMin` | uint256 | minimum amount of Uniswap LP tokens to migrate           |
| `amountBMin` | uint256 | minimum amount of Nevellus LP tokens to migrate over to |
| `deadline`   | uint256 | current timestamp                                        |

#### Returns

| Name      | Type    | Description         |
| :-------- | :------ | :------------------ |
| `amountA` | uint256 | Uniswap LP amount   |
| `amountB` | uint256 | Nevellus LP amount |

### pairForOldRouter

```solidity
function pairForOldRouter(address tokenA, address tokenB) internal view returns (address pair)
```

Calculates the CREATE2 address for a pair without making any external calls.

#### Parameters

| Name     | Type    | Description        |
| :------- | :------ | :----------------- |
| `tokenA` | address | Uniswap LP token   |
| `tokenB` | address | Nevellus LP token |

#### Returns

| Name   | Type    | Description                  |
| :----- | :------ | :--------------------------- |
| `pair` | address | CREATE2 address for the pair |

### \_addLiquidity

```solidity
function _addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired
    ) internal returns (uint256 amountA, uint256 amountB)
```

Internal function that creates the token pair if it doesn't exist yet, to be added by `addLiquidity`.

#### Parameters

| Name             | Type    | Description                     |
| :--------------- | :------ | :------------------------------ |
| `tokenA`         | address | address of first token in pair  |
| `tokenB`         | address | address of second token in pair |
| `amountADesired` | uint256 | amount of `tokenA` to add       |
| `amountBDesired` | uint256 | amount of `tokenB` to add       |

#### Returns

| Name      | Type    | Description              |
| :-------- | :------ | :----------------------- |
| `amountA` | uint256 | amount of `tokenA` added |
| `amountB` | uint256 | amount of `tokenB` added |

### addLiquidity

```solidity
function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired
    ) internal returns (uint amountA, uint amountB)
```

Internal function that calls `_addLiquidity` and actually makes the safe transfers.

#### Parameters

| Name             | Type    | Description                     |
| :--------------- | :------ | :------------------------------ |
| `tokenA`         | address | address of first token in pair  |
| `tokenB`         | address | address of second token in pair |
| `amountADesired` | uint256 | amount of `tokenA` to add       |
| `amountBDesired` | uint256 | amount of `tokenB` to add       |

#### Returns

| Name      | Type    | Description              |
| :-------- | :------ | :----------------------- |
| `amountA` | uint256 | amount of `tokenA` added |
| `amountB` | uint256 | amount of `tokenB` added |
