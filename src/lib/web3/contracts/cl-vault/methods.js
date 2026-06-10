const { countFunctionCall } = require('../..')

const getCurrentTick = instance => countFunctionCall(instance.methods.getCurrentTick().call())
const getUpperTick = instance => countFunctionCall(instance.methods.tickUpper().call())
const getLowerTick = instance => countFunctionCall(instance.methods.tickLower().call())
const getTokenWeights = instance =>
  countFunctionCall(instance.methods.getCurrentTokenWeights().call())
const getLiquidity = instance =>
  countFunctionCall(instance.methods.underlyingBalanceWithInvestment().call())
const getToken0 = instance => countFunctionCall(instance.methods.token0().call())
const getToken1 = instance => countFunctionCall(instance.methods.token1().call())
const getCurrentTokenAmounts = instance =>
  countFunctionCall(instance.methods.getCurrentTokenAmounts().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getDecimals = instance => countFunctionCall(instance.methods.decimals().call())
const getPricePerFullShare = instance =>
  countFunctionCall(instance.methods.getPricePerFullShare().call())
const getPosId = instance => countFunctionCall(instance.methods.posId().call())
const getPosManager = instance => countFunctionCall(instance.methods.posManager().call())

module.exports = {
  getCurrentTick,
  getUpperTick,
  getLowerTick,
  getTokenWeights,
  getLiquidity,
  getToken0,
  getToken1,
  getCurrentTokenAmounts,
  getTotalSupply,
  getDecimals,
  getPricePerFullShare,
  getPosId,
  getPosManager,
}
