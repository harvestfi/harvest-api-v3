const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { IPOR_API_URL } = require('../../../lib/constants')
const { client } = require('../../../lib/http')
const logger = require('../../../lib/logger')

// Returns the lending Interest APY (in %) reported by IPOR for a Plasma Vault.
const getTradingApy = async (plasmaVault, chain) => {
  try {
    const chainId = parseInt(chain, 10)
    const url = `${IPOR_API_URL}/fusion/vaults-history/${chainId}/${plasmaVault.toLowerCase()}`

    const response = await client.get(url)
    const history = get(response, 'data.history', [])

    if (!Array.isArray(history) || history.length === 0) {
      return new BigNumber(0).toFixed(2)
    }

    let interestApy = null
    for (let i = history.length - 1; i >= 0; i--) {
      const candidate = history[i] && history[i].apy
      if (candidate !== null && candidate !== undefined && candidate !== '') {
        interestApy = candidate
        break
      }
    }

    if (interestApy === null) {
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
