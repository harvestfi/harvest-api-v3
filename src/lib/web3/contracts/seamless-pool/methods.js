const { countFunctionCall } = require('../..')

const getReserveData = (asset, instance) =>
  countFunctionCall(instance.methods.getReserveData(asset).call())
const getVirtualBalance = (asset, instance) =>
  countFunctionCall(instance.methods.getVirtualUnderlyingBalance(asset).call())

module.exports = {
  getReserveData,
  getVirtualBalance,
}
