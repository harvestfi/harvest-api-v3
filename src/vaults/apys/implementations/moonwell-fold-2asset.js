const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { mToken, moonwellReward, token, loopStrategy } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getDefiLlamaData } = require('../../../lib/third-party/defillama')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, supplymTokenAddr, borrowmTokenAddr, strategyAddr, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: mTokenAbi },
    methods: mTokenMethods,
  } = mToken
  const {
    contract: { abi: loopStrategyAbi },
    methods: loopStrategyMethods,
  } = loopStrategy
  const {
    contract: { abi: moonwellRewardAbi, address: moonwellRewardAddress },
    methods: moonwellRewardMethods,
  } = moonwellReward
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const well = '0xA88594D404727625A9437C3f886C7643872296AE'
  const secondsPerYear = 60 * 60 * 24 * 365.25

  const supplymTokenInstance = getCachedContract({
    web3,
    abi: mTokenAbi,
    address: supplymTokenAddr,
  })
  const supplySnapshot = await mTokenMethods.getAccountSnapshot(strategyAddr, supplymTokenInstance)

  const borrowmTokenInstance = getCachedContract({
    web3,
    abi: mTokenAbi,
    address: borrowmTokenAddr,
  })
  const borrowSnapshot = await mTokenMethods.getAccountSnapshot(strategyAddr, borrowmTokenInstance)

  const strategyInstance = getCachedContract({
    web3,
    abi: loopStrategyAbi,
    address: strategyAddr,
  })
  const borrowPrice = new BigNumber(
    await loopStrategyMethods.getBorrowPriceInSupply(strategyInstance),
  )

  const supplied = new BigNumber(supplySnapshot[1]).times(supplySnapshot[3]).div(1e18)
  const borrowed = new BigNumber(borrowSnapshot[2]).times(borrowPrice).div(1e18)
  const invested = supplied.minus(borrowed)
  let suppliedMul, borrowedMul
  if (invested.gt(0)) {
    suppliedMul = supplied.div(invested)
    borrowedMul = borrowed.div(invested)
  } else {
    suppliedMul = new BigNumber(1)
    borrowedMul = new BigNumber(0)
  }

  const stakeDataRaw = await getDefiLlamaData()
  const stakeData = stakeDataRaw.data

  let supplyStakeAPY
  if (
    //stETH
    underlying == '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '747c1d2a-c668-4682-b9f9-296708a3dd90')
    supplyStakeAPY = poolDetail.apy
  } else if (
    //cbETH
    underlying == '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '0f45d730-b279-4629-8e11-ccb5cc3038b4')
    supplyStakeAPY = poolDetail.apy
  } else {
    supplyStakeAPY = 0
  }

  const supplyRate = new BigNumber(await mTokenMethods.getSupplyRate(supplymTokenInstance))
  const borrowRate = new BigNumber(await mTokenMethods.getBorrowRate(borrowmTokenInstance))
  const supplyAPR = supplyRate
    .div(1e18)
    .times(secondsPerYear)
    .times(100)
    .plus(supplyStakeAPY)
    .times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(secondsPerYear).times(100).times(borrowedMul)

  const moonwellRewardInstance = getCachedContract({
    web3,
    abi: moonwellRewardAbi,
    address: moonwellRewardAddress.mainnet,
  })
  let supplyMarketConfigWell, borrowMarketConfigWell
  try {
    supplyMarketConfigWell = await moonwellRewardMethods.getMarketConfig(
      supplymTokenAddr,
      well,
      moonwellRewardInstance,
    )
    borrowMarketConfigWell = await moonwellRewardMethods.getMarketConfig(
      borrowmTokenAddr,
      well,
      moonwellRewardInstance,
    )
  } catch (e) {
    supplyMarketConfigWell = 0
    borrowMarketConfigWell = 0
  }

  const now = Date.now() / 1000

  let wellPerYearSupply, wellPerYearBorrow
  if (supplyMarketConfigWell) {
    if (now > supplyMarketConfigWell.endTime) {
      wellPerYearSupply = new BigNumber(0)
    } else {
      const wellRateSupply = new BigNumber(supplyMarketConfigWell.supplyEmissionsPerSec)
      wellPerYearSupply = wellRateSupply.times(secondsPerYear).div(1e18)
    }
  } else {
    wellPerYearSupply = new BigNumber(0)
  }
  if (borrowMarketConfigWell) {
    if (now > borrowMarketConfigWell.endTime) {
      wellPerYearBorrow = new BigNumber(0)
    } else {
      const wellRateBorrow = new BigNumber(borrowMarketConfigWell.borrowEmissionsPerSec)
      wellPerYearBorrow = wellRateBorrow.times(secondsPerYear).div(1e18)
    }
  } else {
    wellPerYearBorrow = new BigNumber(0)
  }

  let totalSupply = new BigNumber(await mTokenMethods.totalSupply(supplymTokenInstance))
  const exchangeRate = new BigNumber(await mTokenMethods.getExchangeRate(supplymTokenInstance))
  totalSupply = totalSupply.times(exchangeRate).div(1e18)
  const totalBorrows = new BigNumber(await mTokenMethods.totalBorrows(borrowmTokenInstance))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)
  const wellPrice = await getTokenPrice(well, CHAIN_IDS.BASE)

  const underlyingInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: underlying,
  })
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = wellPerYearSupply
    .times(wellPrice)
    .div(totalSupply.div(new BigNumber(10).pow(Number(underlyingDecimals))).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = wellPerYearBorrow
    .times(wellPrice)
    .div(totalBorrows.div(new BigNumber(10).pow(Number(underlyingDecimals))).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
