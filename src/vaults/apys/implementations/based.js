const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { basedRewards, token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, rewardPool, reduction) => {
  const web3 = web3BASE
  const {
    methods: rewardMethods,
    contract: { abi: rewardAbi },
  } = basedRewards
  const {
    methods: { getBalance },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const rewardInstance = new web3.eth.Contract(rewardAbi, rewardPool)

  const now = Date.now() / 1000
  const epoch1 = await rewardMethods.getEpochFinishTime(0, rewardInstance)
  const epoch2 = await rewardMethods.getEpochFinishTime(1, rewardInstance)
  let rewardPerSecond
  if (now > epoch2) {
    return '0'
  } else if (now > epoch1) {
    rewardPerSecond = new BigNumber(await rewardMethods.getRewardRate(1, rewardInstance))
  } else {
    rewardPerSecond = new BigNumber(await rewardMethods.getRewardRate(0, rewardInstance))
  }

  const rewardToken = await rewardMethods.getRewardToken(rewardInstance)
  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const totalSupply = new BigNumber(await getBalance(rewardPool, underlyingInstance))

  const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.BASE)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)

  const rewardInUsdPerYear = new BigNumber(rewardPrice)
    .times(rewardPerSecond)
    .times(secondsPerYear)
    .div(1e18)
  const totalSupplyInUsd = totalSupply.times(underlyingPrice).div(1e18)

  let apy = rewardInUsdPerYear.div(totalSupplyInUsd).times(100).times(reduction)

  return apy.toFixed()
}

module.exports = {
  getApy,
}
