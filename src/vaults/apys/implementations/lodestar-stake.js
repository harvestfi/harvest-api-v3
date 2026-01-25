const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const stakingPool = require('../../../lib/web3/contracts/lodestar-staking/contract.json')
const {
  getRewardPerSecond,
  getStakingToken,
  getRewardToken,
  getTotalSupply,
} = require('../../../lib/web3/contracts/lodestar-staking/methods')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async reduction => {
  const web3 = web3ARBITRUM
  const rewardPoolInstance = getCachedContract({
    web3,
    abi: stakingPool.abi,
    address: stakingPool.address.mainnet,
  })

  const rewardPerSecond = new BigNumber(await getRewardPerSecond(rewardPoolInstance)).dividedBy(
    1e18,
  )
  const secondsPerYear = new BigNumber(31536000)
  const rewardPerYear = rewardPerSecond.times(secondsPerYear)
  const totalSupply = new BigNumber(await getTotalSupply(rewardPoolInstance)).dividedBy(1e18)

  const stakingToken = await getStakingToken(rewardPoolInstance)
  const rewardToken = await getRewardToken(rewardPoolInstance)

  const stakingPrice = await getTokenPrice(stakingToken, CHAIN_IDS.ARBITRUM_ONE)
  const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.ARBITRUM_ONE)

  let apy = rewardPerYear.times(rewardPrice).div(totalSupply.times(stakingPrice))

  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }

  return apy.multipliedBy(100).toFixed()
}

module.exports = {
  getApy,
}
