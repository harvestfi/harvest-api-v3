const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../../lib/web3')
const { syncswapStaking } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, stakingPool, reduction) => {
  const web3 = web3ZKSYNC
  const { methods: stakingMethods, contract: stakingContract } = syncswapStaking

  const secondsPerYear = 60 * 60 * 24 * 365
  const rewardInstance = new web3.eth.Contract(stakingContract.abi, stakingPool)

  const rewardLength = await stakingMethods.getRewardLength(rewardInstance)

  let rewardUsdPerYear = new BigNumber(0)
  for (let i = 0; i < rewardLength; i++) {
    const rewardToken = await stakingMethods.getRewardToken(i, rewardInstance)
    const rewardData = await stakingMethods.getRewardData(rewardToken, rewardInstance)
    const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.ZKSYNC)
    const rewardPerYear = new BigNumber(rewardData.rewardRate).times(secondsPerYear).div(1e18)
    rewardUsdPerYear = rewardUsdPerYear.plus(rewardPerYear.times(rewardPrice))
  }

  const totalStaked = new BigNumber(await stakingMethods.getTotalStaked(rewardInstance))
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ZKSYNC)

  const totalStakedUsd = totalStaked.times(underlyingPrice).div(1e18)

  let apy = rewardUsdPerYear.div(totalStakedUsd).times(reduction).times(100)

  return apy.toFixed()
}

module.exports = {
  getApy,
}
