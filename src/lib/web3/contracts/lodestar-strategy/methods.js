const { countFunctionCall } = require('../..')

const getBorrowBalance = instance =>
  countFunctionCall(instance.methods.borrowedInUnderlying().call())
const getSupplyBalance = instance =>
  countFunctionCall(instance.methods.suppliedInUnderlying().call())
const getInvestedBalance = instance =>
  countFunctionCall(instance.methods.investedUnderlyingBalance().call())

module.exports = {
  getBorrowBalance,
  getSupplyBalance,
  getInvestedBalance,
}
