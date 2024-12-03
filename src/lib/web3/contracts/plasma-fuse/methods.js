const { countFunctionCall } = require('../..')

const getMarketId = instance => countFunctionCall(instance.methods.MARKET_ID().call())

module.exports = {
  getMarketId,
}
