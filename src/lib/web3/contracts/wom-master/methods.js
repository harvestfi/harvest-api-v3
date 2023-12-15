const { countFunctionCall } = require('../..')

const getPoolData = (lpAddress, instance) =>
  countFunctionCall(instance.methods.tokenToPoolInfo(lpAddress).call())

module.exports = { getPoolData }
