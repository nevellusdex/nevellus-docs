---
sidebar_position: 4
---

# NevellusStaking

You come in with some NVLS, and you leave with more! The longer you stay, the more NVLS you get, that is the logic.

The NevellusStaking contract handles swapping to and from sNVLS, Nevellus's staking token.

The full contract can be viewed [here](https://github.com/nevellusdex).

## Functions

### enter

```solidity
function enter(uint256 _amount) public
```

Locks NVLS and mints sNVLS.

#### Parameters

| Name     | Type    | Description                                 |
| :------- | :------ | :------------------------------------------ |
| `amount` | uint256 | amount of NVLS you wish to lock for sNVLS |

### leave

```solidity
function leave(uint256 _share) public
```

Unlocks the staked + gained NVLS and burns sNVLS.

#### Parameters

| Name     | Type    | Description                                               |
| :------- | :------ | :-------------------------------------------------------- |
| `_share` | uint256 | amount of NVLS you have staked that you wish to withdraw |
