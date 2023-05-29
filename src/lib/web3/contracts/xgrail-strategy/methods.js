const { countFunctionCall } = require('../..')

const getDividendsAddress = instance =>
  countFunctionCall(instance.methods.dividendsAddress().call())
const getDividendsAllocation = instance =>
  countFunctionCall(instance.methods.allocationTargets(0).call())
const getInvestedBalance = instance =>
  countFunctionCall(instance.methods.investedUnderlyingBalance().call())

module.exports = { getDividendsAddress, getDividendsAllocation, getInvestedBalance }
