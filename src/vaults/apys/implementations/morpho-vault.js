const BigNumber = require('bignumber.js')
const { getVaultData } = require('../../../lib/third-party/morpho')

const getApy = async (morphoVault, factor, chain) => {
  const response = await getVaultData(morphoVault, chain)
  let result
  if (response) {
    result = response.vaultByAddress.dailyApys.netApy
  } else {
    result = 0
  }

  const apr = new BigNumber(result).times(100).times(factor)

  return apr.toFixed(2)
}

module.exports = {
  getApy,
}
