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

  const seam = '0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85'
  const strategyInstance = new web3.eth.Contract(strategyAbi, strategyAddr)
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

  const poolInstance = new web3.eth.Contract(poolAbi, poolAddress.mainnet)
  const assetData = await poolMethods.getReserveData(underlying, poolInstance)
  const supplyAPR = new BigNumber(assetData.currentLiquidityRate)
    .div(1e27)
    .times(100)
    .times(suppliedMul)
  const borrowAPR = new BigNumber(assetData.currentVariableBorrowRate)
    .div(1e27)
    .times(100)
    .times(borrowedMul)

  const incentivesInstance = new web3.eth.Contract(incentivesAbi, incentivesAddress.mainnet)
  const rewardDataSupply = await incentivesMethods.getRewardsData(
    assetData.aTokenAddress,
    seam,
    incentivesInstance,
  )
  const rewardDataBorrow = await incentivesMethods.getRewardsData(
    assetData.variableDebtTokenAddress,
    seam,
    incentivesInstance,
  )

  const rewardRateSupply = new BigNumber(rewardDataSupply[1])
  const rewardRateBorrow = new BigNumber(rewardDataBorrow[1])
  const secondsPerYear = 3600 * 24 * 365.25
  const rewardPerYearSupply = rewardRateSupply.times(secondsPerYear).div(1e18)
  const rewardPerYearBorrow = rewardRateBorrow.times(secondsPerYear).div(1e18)
  const supplyToken = new web3.eth.Contract(tokenAbi, assetData.aTokenAddress)
  const borrowToken = new web3.eth.Contract(tokenAbi, assetData.variableDebtTokenAddress)
  const totalSupplySupply = new BigNumber(await getTotalSupply(supplyToken))
  const totalSupplyBorrow = new BigNumber(await getTotalSupply(borrowToken))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)
  const rewardPrice = await getTokenPrice(seam, CHAIN_IDS.BASE)

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = rewardPerYearSupply
    .times(rewardPrice)
    .div(totalSupplySupply.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = rewardPerYearBorrow
    .times(rewardPrice)
    .div(totalSupplyBorrow.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
