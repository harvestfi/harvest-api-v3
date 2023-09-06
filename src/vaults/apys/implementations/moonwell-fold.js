const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { mToken, comptroller, token } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, mTokenAddr, foldPerc, reduction) => {
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

  const well = '0xFF8adeC2221f9f4D8dfbAFa6B9a297d17603493D'
  const secondsPerYear = 60 * 60 * 24 * 365.25
  const suppliedMul = foldPerc / (100 - foldPerc)
  const borrowedMul = suppliedMul - 1

  const mTokenInstance = new web3.eth.Contract(mTokenAbi, mTokenAddr)
  const supplyRate = new BigNumber(await mTokenMethods.getSupplyRate(mTokenInstance))
  const borrowRate = new BigNumber(await mTokenMethods.getBorrowRate(mTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(secondsPerYear).times(100).times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(secondsPerYear).times(100).times(borrowedMul)

  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress.mainnet)
  const marketConfig = await comptrollerMethods.getMarketConfig(
    mTokenAddr,
    well,
    comptrollerInstance,
  )

  const rewardRateSupply = new BigNumber(marketConfig.supplyEmissionsPerSec)
  const rewardRateBorrow = new BigNumber(marketConfig.borrowEmissionsPerSec)
  const rewardPerYearSupply = rewardRateSupply.times(secondsPerYear).div(1e18)
  const rewardPerYearBorrow = rewardRateBorrow.times(secondsPerYear).div(1e18)
  let totalSupply = new BigNumber(await mTokenMethods.totalSupply(mTokenInstance))
  const exchangeRate = new BigNumber(await mTokenMethods.getExchangeRate(mTokenInstance))
  totalSupply = totalSupply.times(exchangeRate).div(1e18)
  const totalBorrows = new BigNumber(await mTokenMethods.totalBorrows(mTokenInstance))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)
  const rewardPrice = await getTokenPrice(well, CHAIN_IDS.BASE)

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = rewardPerYearSupply
    .times(rewardPrice)
    .div(totalSupply.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = rewardPerYearBorrow
    .times(rewardPrice)
    .div(totalBorrows.div(10 ** underlyingDecimals).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
