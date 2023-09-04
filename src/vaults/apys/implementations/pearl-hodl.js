const BigNumber = require('bignumber.js')

const { getApy: getNativeAPY } = require('./pearl.js')
const { UI_DATA_FILES } = require('../../../lib/constants.js')
const { getUIData } = require('../../../lib/data/index.js')
const { executeEstimateApyFunctions } = require('../index.js')

const getApy = async (underlying, gauge, hodlVaultId, reduction) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  let nativeApr = new BigNumber(await getNativeAPY(underlying, gauge, reduction))
  if (nativeApr.toString() === '0') {
    return '0'
  }
  const hodlVaultData = tokens[hodlVaultId]
  const { estimatedApy } = await executeEstimateApyFunctions(
    hodlVaultId,
    hodlVaultData.estimateApyFunctions,
  )
  let hodlApy = new BigNumber(estimatedApy)
  let hodlApr = new BigNumber((Math.pow(hodlApy / 100 + 1, 1 / 365) - 1) * 36500)
  let yearlyApr = nativeApr.times(hodlApy).div(2).div(hodlApr.div(2)).toFixed(2, 1)
  return yearlyApr
}
module.exports = {
  getApy,
}
