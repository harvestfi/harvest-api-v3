const { countFunctionCall } = require('../..')

const getToken0 = instance => countFunctionCall(instance.methods.token0().call())
const getToken1 = instance => countFunctionCall(instance.methods.token1().call())
const getTickSpacing = instance => countFunctionCall(instance.methods.tickSpacing().call())
const getSlot0 = instance => countFunctionCall(instance.methods.slot0().call())
const getStakedLiquidity = instance => countFunctionCall(instance.methods.stakedLiquidity().call())
const getGaugeFees = instance => countFunctionCall(instance.methods.gaugeFees().call())

module.exports = {
  getToken0,
  getToken1,
  getTickSpacing,
  getSlot0,
  getStakedLiquidity,
  getGaugeFees,
}
