const { getPlasmaVaultData } = require('../../../lib/third-party/ipor')

const getApy = async (underlying, pVault, chain) => {
  const plasmaVaultData = await getPlasmaVaultData(underlying, pVault, chain)
  return plasmaVaultData.apy ?? '0'
}

module.exports = {
  getApy,
}
