const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { mToken, moonwellReward, token } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, mTokenAddr, reduction) => {
  const web3 = web3BASE
  const {
    contract: { abi: mTokenAbi },
    methods: mTokenMethods,
  } = mToken
  const {
    contract: { abi: comptrollerAbi, address: comptrollerAddress },
    methods: comptrollerMethods,
  } = moonwellReward
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const well = '0xA88594D404727625A9437C3f886C7643872296AE'
  const usdc = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
  const secondsPerYear = 60 * 60 * 24 * 365.25

  const mTokenInstance = getCachedContract({
    web3,
    abi: mTokenAbi,
    address: mTokenAddr,
  })
  const supplyRate = new BigNumber(await mTokenMethods.getSupplyRate(mTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(secondsPerYear).times(100).times(reduction)

  const comptrollerInstance = getCachedContract({
    web3,
    abi: comptrollerAbi,
    address: comptrollerAddress.mainnet,
  })
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
  const wellPerYearSupply = wellRateSupply.times(secondsPerYear).div(1e18)

  const usdcRateSupply = new BigNumber(marketConfigUsdc.supplyEmissionsPerSec)
  const usdcPerYearSupply = usdcRateSupply.times(secondsPerYear).div(1e6)

  let totalSupply = new BigNumber(await mTokenMethods.totalSupply(mTokenInstance))
  const exchangeRate = new BigNumber(await mTokenMethods.getExchangeRate(mTokenInstance))
  totalSupply = totalSupply.times(exchangeRate).div(1e18)

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)
  const wellPrice = await getTokenPrice(well, CHAIN_IDS.BASE)
  const usdcPrice = await getTokenPrice(usdc, CHAIN_IDS.BASE)

  const underlyingInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: underlying,
  })
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = wellPerYearSupply
    .times(wellPrice)
    .plus(usdcPerYearSupply.times(usdcPrice))
    .div(totalSupply.div(new BigNumber(10).pow(Number(underlyingDecimals))).times(underlyingPrice))
    .times(100)
    .times(reduction)

  return supplyAPR.plus(rewardAPRSupply).toFixed()
}

module.exports = {
  getApy,
}
