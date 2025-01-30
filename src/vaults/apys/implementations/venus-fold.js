const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  lodestarCToken: cToken,
  venusComptroller,
  venusDistributor,
  token,
} = require('../../../lib/web3/contracts')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (underlying, cTokenAddr, strategyAddr, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: comptrollerAbi },
    methods: comptrollerMethods,
  } = venusComptroller
  const {
    contract: { abi: distributorAbi },
    methods: distributorMethods,
  } = venusDistributor
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const blocksPerYear = 3600 * 24 * 365
  const cTokenInstance = new web3.eth.Contract(cTokenAbi, cTokenAddr)
  const snapshot = await cTokenMethods.getAccountSnapshot(strategyAddr, cTokenInstance)

  const supplied = new BigNumber(snapshot[1]).times(snapshot[3]).div(1e18)
  const borrowed = new BigNumber(snapshot[2])
  const invested = supplied.minus(borrowed)
  let suppliedMul, borrowedMul
  if (invested.gt(0)) {
    suppliedMul = supplied.div(invested)
    borrowedMul = borrowed.div(invested)
  } else {
    suppliedMul = new BigNumber(1)
    borrowedMul = new BigNumber(0)
  }

  const supplyRate = new BigNumber(await cTokenMethods.getSupplyRate(cTokenInstance))
  const borrowRate = new BigNumber(await cTokenMethods.getBorrowRate(cTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(blocksPerYear).times(100).times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(blocksPerYear).times(100).times(borrowedMul)

  const comptrollerAddress = await cTokenMethods.getComptroller(cTokenInstance)
  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress)
  const distributors = await comptrollerMethods.getRewardDistributors(comptrollerInstance)

  let rewardPerYearSupplyUSD = new BigNumber(0)
  let rewardPerYearBorrowUSD = new BigNumber(0)
  for (const distributor of distributors) {
    const distributorInstance = new web3.eth.Contract(distributorAbi, distributor)
    const rewardToken = await distributorMethods.getRewardToken(distributorInstance)
    const rewardPerYearSupply = new BigNumber(
      await distributorMethods.getSupplyRate(cTokenAddr, distributorInstance),
    )
      .times(blocksPerYear)
      .div(1e18)
    const rewardPerYearBorrow = new BigNumber(
      await distributorMethods.getBorrowRate(cTokenAddr, distributorInstance),
    )
      .times(blocksPerYear)
      .div(1e18)
    const rewardPrice = await getTokenPrice(rewardToken, chain)
    rewardPerYearSupplyUSD = rewardPerYearSupplyUSD.plus(rewardPerYearSupply.times(rewardPrice))
    rewardPerYearBorrowUSD = rewardPerYearBorrowUSD.plus(rewardPerYearBorrow.times(rewardPrice))
  }

  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)
  const totalSupply = new BigNumber(await cTokenMethods.totalSupply(cTokenInstance))
    .times(snapshot[3])
    .div(1e18)
    .div(10 ** underlyingDecimals)
  const totalBorrowed = new BigNumber(await cTokenMethods.totalBorrows(cTokenInstance)).div(
    10 ** underlyingDecimals,
  )

  const underlyingPrice = await getTokenPrice(underlying, chain)

  const merklReward = await getMerklApy(strategyAddr, cTokenAddr, chain, reduction)

  const rewardAPRSupply = rewardPerYearSupplyUSD
    .div(totalSupply)
    .div(underlyingPrice)
    .times(100)
    .times(reduction)
    .plus(merklReward)
    .times(suppliedMul)
  const rewardAPRBorrow = rewardPerYearBorrowUSD
    .div(totalBorrowed)
    .div(underlyingPrice)
    .times(100)
    .times(reduction)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(rewardAPRSupply).plus(rewardAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
