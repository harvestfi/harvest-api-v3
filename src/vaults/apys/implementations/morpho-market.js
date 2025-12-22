const BigNumber = require('bignumber.js')
const { getMarketData } = require('../../../lib/third-party/morpho')

const getApy = async (morphoMarket, factor, chain) => {
  const response = await getMarketData(morphoMarket, chain)
  let result
  if (response) {
    result = response.marketByUniqueKey.state.avgNetSupplyApy
  } else {
    result = 0
  }

  const apr = new BigNumber(result).times(100).times(factor)

  return apr.toFixed(2)
}

module.exports = {
  getApy,
}
