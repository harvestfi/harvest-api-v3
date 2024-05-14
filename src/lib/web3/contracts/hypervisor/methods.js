const { countFunctionCall } = require('../..')

const getTotalAmounts = instance => countFunctionCall(instance.methods.getTotalAmounts().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getToken0 = instance => countFunctionCall(instance.methods.token0().call())
const getToken1 = instance => countFunctionCall(instance.methods.token1().call())

module.exports = { getTotalAmounts, getTotalSupply, getToken0, getToken1 }
