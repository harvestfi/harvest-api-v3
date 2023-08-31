const { countFunctionCall } = require('../..')

const getAmountsOut = (amountIn, routes, instance) =>
  countFunctionCall(instance.methods.getAmountsOut(amountIn, routes).call())

module.exports = {
  getAmountsOut,
}
