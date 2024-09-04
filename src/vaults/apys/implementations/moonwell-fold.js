const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { mToken, comptroller, token, lodestarStrategy } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, mTokenAddr, strategyAddr, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: mTokenAbi },
    methods: mTokenMethods,
  } = mToken
  const {
    contract: { abi: comptrollerAbi, address: comptrollerAddress },
    methods: comptrollerMethods,
  } = comptroller
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = lodestarStrategy

  const well = '0xA88594D404727625A9437C3f886C7643872296AE'
  const usdc = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
  const secondsPerYear = 60 * 60 * 24 * 365.25
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

  const mTokenInstance = new web3.eth.Contract(mTokenAbi, mTokenAddr)
  const supplyRate = new BigNumber(await mTokenMethods.getSupplyRate(mTokenInstance))
  const borrowRate = new BigNumber(await mTokenMethods.getBorrowRate(mTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(secondsPerYear).times(100).times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(secondsPerYear).times(100).times(borrowedMul)

  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress.mainnet)
  const marketConfigWell = await comptrollerMethods.getMarketConfig(
    mTokenAddr,
    well,
    comptrollerInstance,
  )
  const marketConfigUsdc = await comptrollerMethods.getMarketConfig(
    mTokenAddr,
    usdc,
    comptrollerInstance,
  )

  const wellRateSupply = new BigNumber(marketConfigWell.supplyEmissionsPerSec)
  const wellRateBorrow = new BigNumber(marketConfigWell.borrowEmissionsPerSec)
  const wellPerYearSupply = wellRateSupply.times(secondsPerYear).div(1e18)
  const wellPerYearBorrow = wellRateBorrow.times(secondsPerYear).div(1e18)

  const usdcRateSupply = new BigNumber(marketConfigUsdc.supplyEmissionsPerSec)
  const usdcRateBorrow = new BigNumber(marketConfigUsdc.borrowEmissionsPerSec)
  const usdcPerYearSupply = usdcRateSupply.times(secondsPerYear).div(1e6)
  const usdcPerYearBorrow = usdcRateBorrow.times(secondsPerYear).div(1e6)

  let totalSupply = new BigNumber(await mTokenMethods.totalSupply(mTokenInstance))
  const exchangeRate = new BigNumber(await mTokenMethods.getExchangeRate(mTokenInstance))
  totalSupply = totalSupply.times(exchangeRate).div(1e18)
  const totalBorrows = new BigNumber(await mTokenMethods.totalBorrows(mTokenInstance))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)
  const wellPrice = await getTokenPrice(well, CHAIN_IDS.BASE)
  const usdcPrice = await getTokenPrice(usdc, CHAIN_IDS.BASE)

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = wellPerYearSupply
    .times(wellPrice)
    .plus(usdcPerYearSupply.times(usdcPrice))
    .div(totalSupply.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = wellPerYearBorrow
    .times(wellPrice)
    .plus(usdcPerYearBorrow.times(usdcPrice))
    .div(totalBorrows.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
