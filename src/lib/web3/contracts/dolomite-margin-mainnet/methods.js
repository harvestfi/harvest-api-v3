const { countFunctionCall } = require('../..')

const getMarket = (marketId, instance) =>
  countFunctionCall(instance.methods.getMarket(marketId).call())
const getMarketInterest = (marketId, instance) =>
  countFunctionCall(instance.methods.getMarketInterestRate(marketId).call())
const getMarketInfo = (marketId, instance) =>
  countFunctionCall(instance.methods.getMarketWithInfo(marketId).call())
const getEarningsRate = instance => countFunctionCall(instance.methods.getEarningsRate().call())

module.exports = {
  getMarket,
  getMarketInterest,
  getMarketInfo,
  getEarningsRate,
}
