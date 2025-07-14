const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { extraFiLending, extraFiRewards, token } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (rewardPool, reserveId, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: lendingAbi, address: lendingAddress },
    methods: lendingMethods,
  } = extraFiLending
  const {
    contract: { abi: rewardAbi },
    methods: rewardMethods,
  } = extraFiRewards
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const rewardInstance = new web3.eth.Contract(rewardAbi, rewardPool)
  const lendingInstance = new web3.eth.Contract(lendingAbi, lendingAddress.mainnet)

  const rewardLength = await rewardMethods.getRewardsLength(rewardInstance)
  const totalStaked = new BigNumber(await rewardMethods.getTotalStaked(rewardInstance))
  const now = Date.now() / 1000
  const secondsPerYear = 3600 * 24 * 365

  let rewardUsdPerYear = new BigNumber(0)
  for (let i = 0; i < rewardLength; i++) {
    const rewardToken = await rewardMethods.getRewardToken(i, rewardInstance)
    const rewardData = await rewardMethods.getRewardData(rewardToken, rewardInstance)
    if (rewardData.endTime < now) {
      continue
    }
    const tokenInstance = new web3.eth.Contract(tokenAbi, rewardToken)
    const tokenDecimals = await getDecimals(tokenInstance)
    const tokenPerYear = new BigNumber(rewardData.rewardRate)
      .times(secondsPerYear)
      .div(10 ** tokenDecimals)
    const tokenPrice = (await getTokenPrice(rewardToken, CHAIN_IDS.BASE)) || 0
    rewardUsdPerYear = rewardUsdPerYear.plus(tokenPerYear.times(tokenPrice))
  }

  const reserveData = await lendingMethods.getReserveData(reserveId, lendingInstance)
  const exchangeRate = new BigNumber(
    await lendingMethods.getExchangeRate(reserveId, lendingInstance),
  )
  const utilization = new BigNumber(await lendingMethods.getUtilization(reserveId, lendingInstance))

  const underlyingPrice = await getTokenPrice(reserveData.underlyingTokenAddress, CHAIN_IDS.BASE)
  const underlyingInstance = new web3.eth.Contract(tokenAbi, reserveData.underlyingTokenAddress)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const totalStakedUsd = totalStaked
    .times(exchangeRate)
    .div(1e18)
    .times(underlyingPrice)
    .div(10 ** underlyingDecimals)
  const rewardAPR = rewardUsdPerYear.div(totalStakedUsd).times(100)

  const supplyAPR = new BigNumber(reserveData.currentBorrowingRate)
    .times(utilization)
    .div(1e16)
    .div(1e18)

  return supplyAPR.plus(rewardAPR).times(reduction).toFixed()
}

module.exports = {
  getApy,
}
