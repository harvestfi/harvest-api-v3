const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../../lib/web3')
const { zfFarm, token: tokenContractData } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (underlying, strategyAddr, pid, reduction) => {
  const web3 = web3ZKSYNC
  const { methods: farmMethods, contract: farmContract } = zfFarm
  const {
    methods: { getBalance },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const rewardInstance = new web3.eth.Contract(farmContract.abi, farmContract.address.mainnet)

  const rewardPerSecond = new BigNumber(await farmMethods.getRewardPerSec(rewardInstance))

  const rewardToken = await farmMethods.getRewardToken(rewardInstance)
  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)

  const poolInfo = await farmMethods.getPoolInfo(pid, rewardInstance)
  const allocPoint = poolInfo.allocPoint
  const totalAllocPoint = await farmMethods.getTotalAllocPoint(rewardInstance)
  const totalSupply = new BigNumber(
    await getBalance(farmContract.address.mainnet, underlyingInstance),
  )
  const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.ZKSYNC)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ZKSYNC)

  const rewardInUsdPerYear = new BigNumber(rewardPrice)
    .times(rewardPerSecond)
    .times(allocPoint)
    .div(totalAllocPoint)
    .times(secondsPerYear)
    .div(1e18)
  const totalSupplyInUsd = totalSupply.times(underlyingPrice).div(1e18)

  let apy = rewardInUsdPerYear.div(totalSupplyInUsd).times(100).times(reduction)

  const merklAPY = new BigNumber(await getMerklApy(strategyAddr, underlying, 324, reduction))

  return apy.plus(merklAPY).toFixed(2)
}

module.exports = {
  getApy,
}
