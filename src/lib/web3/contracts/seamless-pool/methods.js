const { countFunctionCall } = require('../..')

const getReserveData = (asset, instance) =>
  countFunctionCall(instance.methods.getReserveData(asset).call())

module.exports = {
  getReserveData,
}
