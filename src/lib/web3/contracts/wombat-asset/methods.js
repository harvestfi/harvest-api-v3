const { countFunctionCall } = require('../..')

const getUnderlyingToken = instance => countFunctionCall(instance.methods.underlyingToken().call())
const getPoolAddr = instance => countFunctionCall(instance.methods.pool().call())
module.exports = { getUnderlyingToken, getPoolAddr }
