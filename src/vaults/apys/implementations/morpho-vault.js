const BigNumber = require('bignumber.js')
const { getVaultData, getV2VaultData } = require('../../../lib/third-party/morpho')
const logger = require('../../../lib/logger')

const getApy = async (morphoVault, factor, chain) => {
  let result = 0

  try {
    const response = await getVaultData(morphoVault, chain)
    if (response) {
      result = response.vaultByAddress.state.dailyNetApy
    } else {
      const response = await getV2VaultData(morphoVault, chain)
      if (response) {
        result = response.vaultV2ByAddress.avgNetApy
      }
    }
  } catch (e) {
    try {
      const response = await getV2VaultData(morphoVault, chain)
      if (response) {
        result = response.vaultV2ByAddress.netApy
      }
    } catch (e) {
      logger.error('Error getting Morpho APY:', e)
    }
  }

  const apr = new BigNumber(result).times(100).times(factor)

  return apr.toFixed(2)
}

module.exports = {
  getApy,
}
