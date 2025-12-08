const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { seamlessPool } = require('../../../lib/web3/contracts')

const getApy = async (underlying, poolAddr, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: poolAbi },
    methods: poolMethods,
  } = seamlessPool

  const poolInstance = new web3.eth.Contract(poolAbi, poolAddr)
  const assetData = await poolMethods.getReserveData(underlying, poolInstance)
  const supplyAPR = new BigNumber(assetData.currentLiquidityRate).div(1e27).times(100)

  return supplyAPR.times(reduction).toFixed()
}

module.exports = {
  getApy,
}
