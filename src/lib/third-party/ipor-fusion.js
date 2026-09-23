const { get } = require('lodash')
const { IPOR_API_URL } = require('../constants')
const { client } = require('../http')
const { getShared } = require('../cached-fetch')

// IPOR's v2 vault list returns every Fusion vault
const IPOR_V2_VAULTS_URL = `${IPOR_API_URL}/v2/fusion/vaults`
const CACHE_KEY = 'iporFusionVaultsV2'
const CACHE_TTL_SECONDS = 55

const vaultKey = (chainId, address) => `${chainId}:${String(address).toLowerCase()}`

const getVaultsMap = () =>
  getShared(CACHE_KEY, CACHE_TTL_SECONDS, async () => {
    const response = await client.get(IPOR_V2_VAULTS_URL)
    const vaults = get(response, 'data.vaults', [])

    if (!Array.isArray(vaults) || vaults.length === 0) {
      throw new Error('IPOR v2 vault list returned no vaults')
    }

    const vaultsMap = {}
    vaults.forEach(vault => {
      if (vault && vault.address) {
        vaultsMap[vaultKey(vault.chainId, vault.address)] = vault
      }
    })

    return vaultsMap
  })

const getFusionVault = async (plasmaVault, chain) => {
  const vaultsMap = await getVaultsMap()

  return get(vaultsMap, vaultKey(parseInt(chain, 10), plasmaVault), null)
}

module.exports = {
  getFusionVault,
}
