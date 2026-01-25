const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  lodestarCToken: cToken,
  lodestarComptroller: comptroller,
  lodestarStrategy,
  token,
} = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { UI_DATA_FILES } = require('../../../lib/constants')
const { getUIData } = require('../../../lib/data')
const { executeEstimateApyFunctions } = require('..')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, cTokenAddr, strategyAddr, hodlVaultId, reduction) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
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

  const lode = '0xF19547f9ED24aA66b03c3a552D181Ae334FBb8DB'
  const blocksPerYear = 2628000
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

  const cTokenInstance = getCachedContract({
    web3,
    abi: cTokenAbi,
    address: cTokenAddr,
  })

  const comptrollerInstance = getCachedContract({
    web3,
    abi: comptrollerAbi,
    address: comptrollerAddress.mainnet,
  })

  const rewardRateSupply = new BigNumber(
    await comptrollerMethods.getSupplyRewardRate(cTokenAddr, comptrollerInstance),
  )
  const rewardRateBorrow = new BigNumber(
    await comptrollerMethods.getBorrowRewardRate(cTokenAddr, comptrollerInstance),
  )
  const rewardPerYearSupply = rewardRateSupply.times(blocksPerYear).div(1e18)
  const rewardPerYearBorrow = rewardRateBorrow.times(blocksPerYear).div(1e18)
  let totalSupply = new BigNumber(await cTokenMethods.totalSupply(cTokenInstance))
  const exchangeRate = new BigNumber(await cTokenMethods.getExchangeRate(cTokenInstance))
  totalSupply = totalSupply.times(exchangeRate).div(1e18)
  const totalBorrows = new BigNumber(await cTokenMethods.totalBorrows(cTokenInstance))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ARBITRUM_ONE)
  const rewardPrice = await getTokenPrice(lode, CHAIN_IDS.ARBITRUM_ONE)

  const underlyingInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: underlying,
  })
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardAPRSupply = rewardPerYearSupply
    .times(rewardPrice)
    .div(totalSupply.div(new BigNumber(10).pow(Number(underlyingDecimals))).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = rewardPerYearBorrow
    .times(rewardPrice)
    .div(totalBorrows.div(new BigNumber(10).pow(Number(underlyingDecimals))).times(underlyingPrice))
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  const nativeApr = rewardAPRSupply.plus(rewardAPRBorrow)
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const hodlVaultData = tokens[hodlVaultId]
  const { estimatedApy } = await executeEstimateApyFunctions(
    hodlVaultId,
    hodlVaultData.estimateApyFunctions,
  )
  const hodlApy = estimatedApy
  const hodlApr = new BigNumber((Math.pow(hodlApy / 100 + 1, 1 / 365) - 1) * 36500)
  const yearlyApy = nativeApr.times(hodlApy).div(2).div(hodlApr.div(2)).toFixed(2)
  return yearlyApy
}

module.exports = {
  getApy,
}
