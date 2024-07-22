const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  lodestarCToken: cToken,
  reactorFusionRewards: rewards,
  lodestarStrategy,
  token,
} = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, cTokenAddr, strategyAddr, reduction) => {
  const web3 = web3ZKSYNC
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: rewardsAbi, address: rewardsAddress },
    methods: rewardsMethods,
  } = rewards
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = lodestarStrategy

  const ZK = '0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E'
  const blocksPerYear = 3600 * 24 * 365
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

  const cTokenInstance = new web3.eth.Contract(cTokenAbi, cTokenAddr)
  const supplyRate = new BigNumber(await cTokenMethods.getSupplyRate(cTokenInstance))
  const borrowRate = new BigNumber(await cTokenMethods.getBorrowRate(cTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(blocksPerYear).times(100).times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(blocksPerYear).times(100).times(borrowedMul)

  const rewardsInstance = new web3.eth.Contract(rewardsAbi, rewardsAddress.mainnet)
  const rewardRates = await rewardsMethods.getRewardRates(rewardsInstance)

  let ctIndex
  for (let i = 0; i < rewardRates[0].length; i++) {
    if (rewardRates[0][i] == cTokenAddr) {
      ctIndex = i
    }
  }

  const rewardRateSupply = new BigNumber(rewardRates[1][ctIndex])
  const rewardRateBorrow = new BigNumber(rewardRates[2][ctIndex])

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const rewardPerYearSupply = rewardRateSupply
    .times(blocksPerYear)
    .div(1e18)
    .div(10 ** (18 - underlyingDecimals))
  const rewardPerYearBorrow = rewardRateBorrow
    .times(blocksPerYear)
    .div(1e18)
    .div(10 ** (18 - underlyingDecimals))

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ZKSYNC)
  const rewardPrice = await getTokenPrice(ZK, CHAIN_IDS.ZKSYNC)

  const rewardAPRSupply = rewardPerYearSupply
    .times(rewardPrice)
    .div(underlyingPrice)
    .times(100)
    .times(reduction)
    .times(suppliedMul)
  const rewardAPRBorrow = rewardPerYearBorrow
    .times(rewardPrice)
    .div(underlyingPrice)
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
