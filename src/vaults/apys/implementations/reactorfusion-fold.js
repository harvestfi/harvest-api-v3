const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { lodestarCToken: cToken, lodestarStrategy } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (underlying, cTokenAddr, strategyAddr, reduction) => {
  const web3 = web3ZKSYNC
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
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

  const rewardPerYearSupply = new BigNumber(0)
  const rewardPerYearBorrow = new BigNumber(0)

  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ZKSYNC)
  const rewardPrice = await getTokenPrice(ZK, CHAIN_IDS.ZKSYNC)

  const merklReward = await getMerklApy(strategyAddr, cTokenAddr, 324, reduction)

  const rewardAPRSupply = rewardPerYearSupply
    .times(rewardPrice)
    .div(underlyingPrice)
    .times(100)
    .times(reduction)
    .plus(merklReward)
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
