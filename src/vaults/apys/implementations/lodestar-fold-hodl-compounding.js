const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { lodestarCToken: cToken, lodestarStrategy } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (cTokenAddr, strategyAddr) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = lodestarStrategy

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
  const supplyRate = new BigNumber(await cTokenMethods.getSupplyRate(cTokenInstance))
  const borrowRate = new BigNumber(await cTokenMethods.getBorrowRate(cTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(blocksPerYear).times(100).times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(blocksPerYear).times(100).times(borrowedMul)

  return supplyAPR.minus(borrowAPR).toFixed()
}

module.exports = {
  getApy,
}
