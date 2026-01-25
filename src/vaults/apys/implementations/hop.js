const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { hopRewards, token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (rewardPool, chain, reduction) => {
  const web3 = await getWeb3(chain)
  const { methods, contract } = hopRewards
  const {
    methods: { getDecimals },
    contract: { abi: tokenAbi },
  } = tokenContractData
  const rewardInstance = getCachedContract({
    web3,
    abi: contract.abi,
    address: rewardPool,
  })

  const secondsPerYear = 3600 * 24 * 265
  const now = Date.now() / 1000
  const finishTime = await methods.getPeriodFinish(rewardInstance)
  if (now > finishTime) {
    return '0'
  }

  const rewardPerSec = new BigNumber(await methods.getRewardRate(rewardInstance))
  const totalSupply = new BigNumber(await methods.getTotalSupply(rewardInstance))

  const rewardToken = await methods.getRewardToken(rewardInstance)
  const rewardTokenInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: rewardToken,
  })
  const rewardDecimals = await getDecimals(rewardTokenInstance)
  const rewardPrice = await getTokenPrice(rewardToken, chain)

  const stakingToken = await methods.getStakingToken(rewardInstance)
  const stakingTokenInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: stakingToken,
  })
  const stakingDecimals = await getDecimals(stakingTokenInstance)
  const stakingPrice = await getTokenPrice(stakingToken, chain)

  const rewardPerYearUsd = rewardPerSec
    .times(secondsPerYear)
    .times(rewardPrice)
    .div(new BigNumber(10).pow(Number(rewardDecimals)))
  const totalSupplyUsd = totalSupply
    .times(stakingPrice)
    .div(new BigNumber(10).pow(Number(stakingDecimals)))

  const apy = rewardPerYearUsd.div(totalSupplyUsd).times(reduction)

  return apy.multipliedBy(100).toFixed(2, 1)
}

module.exports = {
  getApy,
}
