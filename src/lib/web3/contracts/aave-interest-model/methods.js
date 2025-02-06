const { countFunctionCall } = require('../..')

const getInterestRates = (params, instance) =>
  countFunctionCall(instance.methods.calculateInterestRates(params).call())

module.exports = {
  getInterestRates,
}
