const { countFunctionCall } = require('../..')

const getPrice = (asset, quote, instance) =>
  countFunctionCall(instance.methods.getPrice(asset, quote).call())

module.exports = {
  getPrice,
}
