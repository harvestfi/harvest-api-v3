const { countFunctionCall } = require('../..')

const getCurrentTick = instance => countFunctionCall(instance.methods.getCurrentTick().call())
const getUpperTick = instance => countFunctionCall(instance.methods.tickUpper().call())
const getLowerTick = instance => countFunctionCall(instance.methods.tickLower().call())
const getTokenWeights = instance =>
  countFunctionCall(instance.methods.getCurrentTokenWeights().call())
const getLiquidity = instance =>
  countFunctionCall(instance.methods.underlyingBalanceWithInvestment().call())

module.exports = {
  getCurrentTick,
  getUpperTick,
  getLowerTick,
  getTokenWeights,
  getLiquidity,
}
