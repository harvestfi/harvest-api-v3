const { countFunctionCall } = require('../..')

const getPool = instance => countFunctionCall(instance.methods.pool().call())

module.exports = { getPool }
