const BigNumber = require('bignumber.js')
const { getFusionVault } = require('../../../lib/third-party/ipor-fusion')
const logger = require('../../../lib/logger')

// Returns the lending Interest APY (in %) reported by IPOR for a Plasma Vault.
const getTradingApy = async (plasmaVault, chain) => {
  try {
    const fusionVault = await getFusionVault(plasmaVault, chain)
    const interestApy = fusionVault && fusionVault.apy

    if (interestApy === null || interestApy === undefined || interestApy === '') {
      return new BigNumber(0).toFixed(2)
    }

    const apy = new BigNumber(interestApy)
    return apy.gte(0) ? apy.toFixed(2) : new BigNumber(0).toFixed(2)
  } catch (err) {
    logger.error('IPOR interest APY error:', err)
    return new BigNumber(0).toFixed(2)
  }
}

module.exports = {
  getTradingApy,
}
