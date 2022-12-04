---
sidebar_position: 9
---

# Interfaces

Listed below are all of the interfaces used in the aforementioned core contracts.

## IERC20

```solidity
interface IERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
}
```

Standard ERC20 interface; source code can be found [here](https://github.com/nevellusdex).

## IEnceladus

```solidity
interface IEnceladus {
    using BoringERC20 for IERC20;
    struct UserInfo {
        uint256 amount;     // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
    }

    struct PoolInfo {
        IERC20 lpToken;           // Address of LP token contract.
        uint256 allocPoint;       // How many allocation points assigned to this pool. NVLS to distribute per block.
        uint256 lastRewardBlock;  // Last block number that NVLS distribution occurs.
        uint256 accNvlsPerShare; // Accumulated NVLS per share, times 1e12. See below.
    }

    function poolInfo(uint256 pid) external view returns (IEnceladus.PoolInfo memory);
    function pendingNvls(uint256 _pid, address _user) external view returns (uint256);
    function deposit(uint256 _pid, uint256 _amount) external;
    function withdraw(uint256 _pid, uint256 _amount) external;
}
```

Enceladus contract interface; source code can be found [here](https://github.com/nevellusdex).

## IDioneV2

```solidity
interface IDioneV2 {
    struct UserInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    struct PoolInfo {
        uint128 accNvlsPerShare;
        uint64 lastRewardTime;
        uint64 allocPoint;
    }

    function poolLength() external view returns (uint256);
    function updatePool(uint256 pid) external returns (IDioneV2.PoolInfo memory);
    function userInfo(uint256 _pid, address _user) external view returns (uint256, uint256);
    function deposit(uint256 pid, uint256 amount, address to) external;
    function withdraw(uint256 pid, uint256 amount, address to) external;
    function harvest(uint256 pid, address to) external;
    function withdrawAndHarvest(uint256 pid, uint256 amount, address to) external;
    function emergencyWithdraw(uint256 pid, address to) external;
}
```

Dione contract interface; source code can be found [here](https://github.com/nevellusdex).

## IRewarder

```solidity
interface IRewarder {
    using BoringERC20 for IERC20;
    function onNvlsReward(uint256 pid, address user, address recipient, uint256 nvlsAmount, uint256 newLpAmount) external;
    function pendingTokens(uint256 pid, address user, uint256 nvlsAmount) external view returns (IERC20[] memory, uint256[] memory);
}
```

Rewarder contract interface; source code can be found [here](https://github.com/nevellusdex).
