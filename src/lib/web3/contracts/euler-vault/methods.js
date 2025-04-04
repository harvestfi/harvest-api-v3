const { countFunctionCall } = require('../..')

const getInterestRate = instance => countFunctionCall(instance.methods.interestRate().call())
const getTotalAssets = instance => countFunctionCall(instance.methods.totalAssets().call())
const getTotalBorrows = instance => countFunctionCall(instance.methods.totalBorrows().call())

module.exports = {
  getInterestRate,
  getTotalAssets,
  getTotalBorrows,
}
