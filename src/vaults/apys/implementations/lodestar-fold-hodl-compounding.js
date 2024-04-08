const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { lodestarCToken: cToken, lodestarStrategy, token } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getARBRewardRate = async (strategyAddr, investedUSD) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: tokenAbi },
    methods: { getBalance },
  } = token

  const arb = '0x912CE59144191C1204E64559FE8253a0e49E6548'
  const arbToken = new web3.eth.Contract(tokenAbi, arb)
  const arbPrice = await getTokenPrice(arb, CHAIN_IDS.ARBITRUM_ONE)
  const strategyBalance = new BigNumber(await getBalance(strategyAddr, arbToken))
  const balanceUSD = strategyBalance.times(arbPrice).div(1e18)

  const endTime = 1712559600
  const now = Date.now() / 1000
  if (now > endTime) {
    return 0
  }
  const secondsPerYear = 3600 * 24 * 365
  const timeToGo = endTime - now

  const apr = balanceUSD.div(investedUSD).div(timeToGo).times(secondsPerYear)
  return apr.times(100)
}

const getApy = async (underlying, cTokenAddr, strategyAddr, reduction) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = lodestarStrategy
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const blocksPerYear = 2628000
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

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ARBITRUM_ONE)
  const arbAPR = new BigNumber(
    await getARBRewardRate(
      strategyAddr,
      invested.times(underlyingPrice).div(10 ** underlyingDecimals),
    ),
  ).times(reduction)

  return supplyAPR.minus(borrowAPR).plus(arbAPR).toFixed()
}

module.exports = {
  getApy,
}
