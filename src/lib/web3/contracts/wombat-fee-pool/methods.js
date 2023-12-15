const { countFunctionCall } = require('../..')

const getQuoteValue = (token, liquidity, instance) =>
  countFunctionCall(instance.methods.quotePotentialWithdraw(token, liquidity).call())

module.exports = { getQuoteValue }
