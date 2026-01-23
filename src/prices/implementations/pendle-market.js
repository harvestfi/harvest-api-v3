const BigNumber = require('bignumber.js')
const { client } = require('../../lib/http')  
const { get } = require('lodash')
const { PENDLE_ENDPOINT } = require('../../lib/constants')
const logger = require('../../lib/logger')

const getPrice = async (marketAddress, chain) => {
  let price = 0,
    response
  try {
    response = await client.get(`${PENDLE_ENDPOINT}${chain}/markets/${marketAddress}/data`)
    const tvlUSD = new BigNumber(get(response, `data.liquidity.usd`, 0))
    const totalSupply = new BigNumber(get(response, `data.totalLp`, 0))
    if (totalSupply.gt(0) && totalSupply.gt(0)) {
      price = tvlUSD.div(totalSupply).toFixed()
    }
  } catch (e) {
    logger.error('Pendle API error: ', e)
    price = 0
  }

  return price.toString()
}

module.exports = {
  getPrice,
}
