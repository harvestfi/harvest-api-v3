const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { seamlessPool } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, poolAddr, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: poolAbi },
    methods: poolMethods,
  } = seamlessPool

  const poolInstance = getCachedContract({
    web3,
    abi: poolAbi,
    address: poolAddr,
  })
  const assetData = await poolMethods.getReserveData(underlying, poolInstance)
  const supplyAPR = new BigNumber(assetData.currentLiquidityRate).div(1e27).times(100)

  return supplyAPR.times(reduction).toFixed()
}

module.exports = {
  getApy,
}
