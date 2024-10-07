const { countFunctionCall } = require('../..')

const getToken0 = instance => countFunctionCall(instance.methods.token0().call())
const getToken1 = instance => countFunctionCall(instance.methods.token1().call())
const getReserves = instance => countFunctionCall(instance.methods.getReserves().call())

module.exports = {
  getToken0,
  getToken1,
  getReserves,
}
