const { countFunctionCall } = require('../..')

const getReserveData = (id, instance) => countFunctionCall(instance.methods.reserves(id).call())
const getUtilization = (id, instance) =>
  countFunctionCall(instance.methods.utilizationRateOfReserve(id).call())
const getExchangeRate = (id, instance) =>
  countFunctionCall(instance.methods.exchangeRateOfReserve(id).call())

module.exports = {
  getReserveData,
  getUtilization,
  getExchangeRate,
}
