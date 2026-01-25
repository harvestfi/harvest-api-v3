const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../../lib/web3')
const { syncswapStaking } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getApy: getMerklApy } = require('./merkl')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, strategyAddr, stakingPool, reduction) => {
  const web3 = web3ZKSYNC
  const { methods: stakingMethods, contract: stakingContract } = syncswapStaking

  let stakingAPY = 0
  if (stakingPool) {
    const secondsPerYear = 60 * 60 * 24 * 365
    const rewardInstance = getCachedContract({
      web3,
      abi: stakingContract.abi,
      address: stakingPool,
    })

    const rewardLength = await stakingMethods.getRewardLength(rewardInstance)

    let rewardUsdPerYear = new BigNumber(0)
    for (let i = 0; i < rewardLength; i++) {
      const rewardToken = await stakingMethods.getRewardToken(i, rewardInstance)
      const rewardData = await stakingMethods.getRewardData(rewardToken, rewardInstance)
      const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.ZKSYNC)
      let rewardPerYear = new BigNumber(0)
      if (rewardData.rewardAmount > 0) {
        rewardPerYear = new BigNumber(rewardData.rewardRate).times(secondsPerYear).div(1e18)
      }
      rewardUsdPerYear = rewardUsdPerYear.plus(rewardPerYear.times(rewardPrice))
    }

    const totalStaked = new BigNumber(await stakingMethods.getTotalStaked(rewardInstance))
    const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ZKSYNC)

    const totalStakedUsd = totalStaked.times(underlyingPrice).div(1e18)
    stakingAPY = rewardUsdPerYear.div(totalStakedUsd).times(reduction).times(100)
  }

  const merklAPY = new BigNumber(await getMerklApy(strategyAddr, underlying, 324, reduction))

  return merklAPY.plus(stakingAPY).toFixed()
}

module.exports = {
  getApy,
}
