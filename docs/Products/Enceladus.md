# Enceladus

## Encelauds V1 & Enceladus V2

Enceladus V1 was originally designed to give incentives to users for providing liquidity on Nevellus. This version actually works fairly well. The allocation distribution in Enceladus V1 is quite precise and dependable; it enables the NevellusOps wallet to give allocations to different liquidity pools, which in turn represent the amount of NVLS this liquidity pool will receive in relation to the total liquidity in Enceladus. The distribution is also quite manageable; the pools to be rewarded are cyclically reassessed by the DAO and the core team, and a new rewards distribution is created for the liquidity pairs that have garnered confidence and positive sentiment. All that being said, after taking feedback from users and the DAO.

### Cheaper Gas

In the past when users interacted with the Enceladus V1 contract, three functions were called, each of which used a single storage slot. Storage slots on Ethereum are quite expensive, so the cost of gas for using Enceladus V1 was somewhat high. Reducing the cost of contract interactions is quite important since lower gas fees enable users to interact more often, and of course save money. Hence, in Enceladus V2, these units of storage have been optimized and the total number of storage slots has been reduced from three to one. Transactions on Enceladus V2 are much cheaper now than in Enceladus V1, especially when withdrawing and depositing NVLP tokens.

### Double Rewards

The second improvement of the Enceladus contract has to do with allowing other projects to add incentives from their own treasuries on top of the $NVLS rewards. In the original version of Enceladus, adding incentives from another project was technically difficult, and not necessarily intuitive for other projects. In this sense, giving developers more tools to add their own rewards was clearly advantageous, as higher rewards promise increased liquidity, which would in turn lower slippage, and increase the overall profitability of the network. Thus, in Enceladus V2, the rewards contract can be used to easily add in rewards from other projects. These rewards can either be configured as a multiple of the $NVLS rewards, or they can be configured to another standard, such as block hash and block timestamp. Projects who would like to add their own incentives will need to be whitelisted to guarantee that our contracts are used correctly. We’ll have more specific guidance on the application process very soon, as well as a high-level overview to help developers implement double rewards.

### Claiming On-Demand

The final major improvement has to do with the way users claim rewards. In the original Enceladus contract, whenever you would deposit a token into into it, the $NVLS you accumulated beforehand would automatically be sent out to you. Since ERC-20 transfers are expensive, this is not necessarily behavior that the user wants, especially if the user is just depositing LP tokens. Therefore, in Enceladus V2, the user can choose when and how to harvest their rewards. The contract does not automatically harvest their $NVLS rewards when the user deposits NVLP tokens, and the user is able to harvest their rewards independent of withdrawing. In combination with the improvement of gas efficiency, users may now choose to claim more often, and they can always do it when they choose!
