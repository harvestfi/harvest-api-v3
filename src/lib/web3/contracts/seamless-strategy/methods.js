const { countFunctionCall } = require('../..')

const getBorrowBalance = instance => countFunctionCall(instance.methods.currentBorrowed().call())
const getSupplyBalance = instance => countFunctionCall(instance.methods.currentSupplied().call())
const getInvestedBalance = instance =>
  countFunctionCall(instance.methods.investedUnderlyingBalance().call())

module.exports = {
  getBorrowBalance,
  getSupplyBalance,
  getInvestedBalance,
}
