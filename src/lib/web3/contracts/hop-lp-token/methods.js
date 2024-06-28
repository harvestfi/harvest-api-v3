const { countFunctionCall } = require('../..')

const getSwap = instance => countFunctionCall(instance.methods.swap().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getDecimals = instance => countFunctionCall(instance.methods.decimals().call())

module.exports = {
  getSwap,
  getTotalSupply,
  getDecimals,
}
