const { countFunctionCall } = require('../..')

const getCollateralFactor = (cToken, instance) =>
  countFunctionCall(instance.methods.markets(cToken).call())

module.exports = {
  getCollateralFactor,
}
