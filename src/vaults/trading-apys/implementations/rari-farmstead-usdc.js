const BigNumber = require('bignumber.js')
const { getDailyCompound } = require('../../../lib/utils')
const { web3 } = require('../../../lib/web3')
const { farmsteadUSDC } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getTradingApy = async () => {
  const blocksPerDay = 4 * 60 * 24

  const farmsteadUSDCInstance = getCachedContract({
    web3,
    abi: farmsteadUSDC.contract.abi,
    address: farmsteadUSDC.contract.address.mainnet,
  })

  const supplyRatePerBlock = await farmsteadUSDC.methods.getSupplyRatePerBlock(
    farmsteadUSDCInstance,
  )

  const apy = getDailyCompound(
    new BigNumber(supplyRatePerBlock)
      .dividedBy(new BigNumber(10).pow(18))
      .times(blocksPerDay * 365)
      .times(100)
      .toFixed(),
  )

  return apy
}

module.exports = { getTradingApy }
