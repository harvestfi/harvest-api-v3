const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  seamlessPool,
  seamlessIncentives,
  seamlessStrategy,
  token,
} = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, strategyAddr, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: poolAbi, address: poolAddress },
    methods: poolMethods,
  } = seamlessPool
  const {
    contract: { abi: incentivesAbi, address: incentivesAddress },
    methods: incentivesMethods,
  } = seamlessIncentives
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals, getTotalSupply },
  } = token
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = seamlessStrategy

  const strategyInstance = getCachedContract({
    web3,
    abi: strategyAbi,
    address: strategyAddr,
  })
  const invested = new BigNumber(await strategyMethods.getInvestedBalance(strategyInstance))
  const supplied = new BigNumber(await strategyMethods.getSupplyBalance(strategyInstance))
  const borrowed = new BigNumber(await strategyMethods.getBorrowBalance(strategyInstance))
  let suppliedMul, borrowedMul
  if (invested.gt(0)) {
    suppliedMul = supplied.div(invested)
    borrowedMul = borrowed.div(invested)
  } else {
    suppliedMul = new BigNumber(1)
    borrowedMul = new BigNumber(0)
  }

  const poolInstance = getCachedContract({
    web3,
    abi: poolAbi,
    address: poolAddress.mainnet,
  })
  const assetData = await poolMethods.getReserveData(underlying, poolInstance)
  const supplyAPR = new BigNumber(assetData.currentLiquidityRate)
    .div(1e27)
    .times(100)
    .times(suppliedMul)
  const borrowAPR = new BigNumber(assetData.currentVariableBorrowRate)
    .div(1e27)
    .times(100)
    .times(borrowedMul)

  const incentivesInstance = getCachedContract({
    web3,
    abi: incentivesAbi,
    address: incentivesAddress.mainnet,
  })
  const rewardsList = await incentivesMethods.getRewardsList(incentivesInstance)
  let usdPerYearSupply = new BigNumber(0)
  let usdPerYearBorrow = new BigNumber(0)
  for (let idx in rewardsList) {
    const reward = rewardsList[idx]
    const rewardDataSupply = await incentivesMethods.getRewardsData(
      assetData.aTokenAddress,
      reward,
      incentivesInstance,
    )
    const rewardDataBorrow = await incentivesMethods.getRewardsData(
      assetData.variableDebtTokenAddress,
      reward,
      incentivesInstance,
    )
    const now = Date.now() / 1000
    if (rewardDataSupply[3] < now && rewardDataBorrow[3] < now) {
      continue
    } else if (rewardDataSupply[3] < now) {
      rewardDataSupply[1] = '0'
    } else if (rewardDataBorrow[3] < now) {
      rewardDataBorrow[1] = '0'
    }
    const rewardRateSupply = new BigNumber(rewardDataSupply[1])
    const rewardRateBorrow = new BigNumber(rewardDataBorrow[1])
    const secondsPerYear = 3600 * 24 * 365.25
    const rewardPerYearSupply = rewardRateSupply.times(secondsPerYear).div(1e18)
    const rewardPerYearBorrow = rewardRateBorrow.times(secondsPerYear).div(1e18)
    const rewardPrice = await getTokenPrice(reward, CHAIN_IDS.BASE)
    usdPerYearSupply = usdPerYearSupply.plus(rewardPerYearSupply.times(rewardPrice))
    usdPerYearBorrow = usdPerYearBorrow.plus(rewardPerYearBorrow.times(rewardPrice))
  }

  const supplyToken = getCachedContract({
    web3,
    abi: tokenAbi,
    address: assetData.aTokenAddress,
  })
  const borrowToken = getCachedContract({
    web3,
    abi: tokenAbi,
    address: assetData.variableDebtTokenAddress,
  })
  const totalSupplySupply = new BigNumber(await getTotalSupply(supplyToken))
  const totalSupplyBorrow = new BigNumber(await getTotalSupply(borrowToken))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)

  const underlyingInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: underlying,
  })
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = usdPerYearSupply
    .div(
      totalSupplySupply
        .div(new BigNumber(10).pow(Number(underlyingDecimals)))
        .times(underlyingPrice),
    )
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = usdPerYearBorrow
    .div(
      totalSupplyBorrow
        .div(new BigNumber(10).pow(Number(underlyingDecimals)))
        .times(underlyingPrice),
    )
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
