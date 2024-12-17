const { getPlasmaVaultData } = require('../../../lib/third-party/ipor')

const getApy = async (underlying, pVault, reduction, chain) => {
  const plasmaVaultData = await getPlasmaVaultData(underlying, pVault, reduction, chain)
  return plasmaVaultData.apy ?? '0'
}

module.exports = {
  getApy,
}
