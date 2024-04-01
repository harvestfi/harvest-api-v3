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
  console.log(balanceUSD.toFixed())
  console.log(investedUSD.toFixed())

  const endTime = 1712556000
  const secondsPerYear = 3600 * 24 * 365
  const timeToGo = endTime - Date.now() / 1000
  console.log(timeToGo)

  const apr = balanceUSD.div(investedUSD).div(timeToGo).times(secondsPerYear)
  console.log(apr.times(100).toFixed())
  return apr.times(100)
}

const getApy = async (underlying, cTokenAddr, strategyAddr, reduction) => {
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

  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress.mainnet)

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

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const arbAPR = new BigNumber(
    await getARBRewardRate(
      strategyAddr,
      invested.times(underlyingPrice).div(10 ** underlyingDecimals),
    ),
  ).times(reduction)

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

  return supplyAPR
    .minus(borrowAPR)
    .plus(rewardAPRSupply)
    .plus(rewardAPRBorrow)
    .plus(arbAPR)
    .toFixed()
}

module.exports = {
  getApy,
}
