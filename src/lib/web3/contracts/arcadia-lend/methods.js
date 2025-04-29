const { countFunctionCall } = require('../..')

const getInterestRate = instance => countFunctionCall(instance.methods.interestRate().call())
const getTotalAssets = instance => countFunctionCall(instance.methods.totalAssets().call())
const getTotalLiquidity = instance => countFunctionCall(instance.methods.totalLiquidity().call())

module.exports = {
  getInterestRate,
  getTotalAssets,
  getTotalLiquidity,
}
