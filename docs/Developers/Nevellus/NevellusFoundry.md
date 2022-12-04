---
sidebar_position: 5
---

# NevellusFoundry

NevellusFoundry handles rewards for sNVLS holders by trading tokens collected from fees for NVLS.

The full contract can be found [here](https://github.com/nevellusdex).

## Functions

### bridgeFor

```solidity
function bridgeFor(address token) public view returns (address bridge)
```

Checks and returns address for a bridge to use. !!!

#### Parameters

| Name    | Type    | Description                                   |
| :------ | :------ | :-------------------------------------------- |
| `token` | address | address of token you wish to check bridge for |

### setBridge

```solidity
function setBridge(address token, address bridge) external onlyOwner
```

Sets the bridge to use. Can only be called by the owner of the contract. !!!

#### Parameters

| Name     | Type    | Description                             |
| :------- | :------ | :-------------------------------------- |
| `token`  | address | address of token you wish to bridge     |
| `bridge` | address | address of token bridge you wish to use |

### \_convert

```solidity
function _convert(address token0, address token1) internal
```

Internal function called by `convert`, which converts tokens to NVLS for sNVLS holders. !!!

#### Parameters

| Name     | Type    | Description                             |
| :------- | :------ | :-------------------------------------- |
| `token0` | address | address of token you wish to convert    |
| `token1` | address | address of token you wish to convert to |

### convert

```solidity
function convert(address token0, address token1) external onlyEOA()
```

Calls the above internal `_convert` function to convert tokens to NVLS for sNVLS holders. !!!

#### Parameters

| Name     | Type    | Description                             |
| :------- | :------ | :-------------------------------------- |
| `token0` | address | address of token you wish to convert    |
| `token1` | address | address of token you wish to convert to |

### convertMultiple

```solidity
function convertMultiple(
        address[] calldata token0,
        address[] calldata token1
    ) external onlyEOA()
```

Allows batch conversion of tokens to NVLS for sNVLS holders. !!!

#### Parameters

| Name     | Type      | Description                                         |
| :------- | :-------- | :-------------------------------------------------- |
| `token0` | address[] | array of addresses of tokens you wish to convert    |
| `token1` | address[] | array of addresses of tokens you wish to convert to |

### \_convertStep

```solidity
 function _convertStep(
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1
    ) internal returns (uint256 nvlsOut)
```

Private function that calculates and returns the amount of NVLS to be given after conversion. !!!

#### Parameters

| Name      | Type    | Description                             |
| :-------- | :------ | :-------------------------------------- |
| `token0`  | address | address of token you wish to convert    |
| `token1`  | address | address of token you wish to convert to |
| `amount0` | uint256 | amount of token to convert              |
| `amount1` | uint256 | amount of token to convert              |

### \_swap

```solidity
function _swap(
        address fromToken,
        address toToken,
        uint256 amountIn,
        address to
    ) internal returns (uint256 amountOut)
```

Internal function to swap tokens to NVLS for sNVLS holders. !!!

#### Parameters

| Name        | Type    | Description                             |
| :---------- | :------ | :-------------------------------------- |
| `fromToken` | address | address of token you wish to convert    |
| `toToken`   | address | address of token you wish to convert to |
| `amountIn`  | uint256 | amount of token to convert              |
| `addressTo` | address | address to send converted tokens to     |

#### Returns

| Name        | Type    | Description                |
| :---------- | :------ | :------------------------- |
| `amountOut` | uint256 | amount of tokens converted |

### \_toNVLS

```solidity
function _toNVLS(address token, uint256 amountIn)
        internal
        returns (uint256 amountOut)
```

Internal function that converts a given token to NVLS.

#### Parameters

| Name       | Type    | Description                                   |
| :--------- | :------ | :-------------------------------------------- |
| `token`    | address | address of token you wish to convert to NVLS |
| `amountIn` | uint256 | amount of tokens to convert to NVLS          |

#### Returns

| Name        | Type    | Description               |
| :---------- | :------ | :------------------------ |
| `amountOut` | uint256 | amount of NVLS converted |
