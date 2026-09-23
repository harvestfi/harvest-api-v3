const { get } = require('lodash')
const { getGammaData, REWARDS_PATHS } = require('../../../lib/third-party/gamma')

const getApy = async (masterchef, poolAddress, reduction) => {
  const data = await getGammaData(REWARDS_PATHS.QUICKSWAP)
  const apr = parseFloat(
    get(data, `${masterchef.toLowerCase()}.pools.${poolAddress.toLowerCase()}.apr`, 0),
  )
  const apy = apr * parseFloat(reduction) * 100

  return Number.isFinite(apy) ? apy : 0
}

module.exports = {
  getApy,
}
