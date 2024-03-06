const axios = require('axios')
const { get } = require('lodash')
const { PENDLE_ENDPOINT } = require('../../../lib/constants')
const BigNumber = require('bignumber.js')

const getTradingApy = async (marketAddress, chain) => {
  let response, apyData
  try {
    response = await axios.get(`${PENDLE_ENDPOINT}${chain}/markets/${marketAddress}/data`)
    apyData = get(response, `data`, 0)
  } catch (e) {
    console.error('Pendle API error: ', e)
    apyData = 0
    return '0'
  }

  const aggrApy = new BigNumber(apyData.aggregatedApy).times(100)
  const rewardApy = new BigNumber(apyData.pendleApy)
    .plus(apyData.arbApy)
    .plus(apyData.lpRewardApy)
    .times(100)

  const tradingApy = aggrApy.minus(rewardApy)

  return tradingApy.toFixed(2)
}

module.exports = {
  getTradingApy,
}
