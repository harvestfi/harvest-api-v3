const { countFunctionCall } = require('../..')

const getUtilization = instance => countFunctionCall(instance.methods.getUtilization().call())
const getSupplyRate = (utilization, instance) =>
  countFunctionCall(instance.methods.getSupplyRate(utilization).call())
const getTrackingSupplySpeed = instance =>
  countFunctionCall(instance.methods.baseTrackingSupplySpeed().call())
const totalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())

module.exports = {
  getUtilization,
  getSupplyRate,
  getTrackingSupplySpeed,
  totalSupply,
}
