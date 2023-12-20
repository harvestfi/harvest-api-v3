const { countFunctionCall } = require('../..')

const getPoolData = (stakingToken, instance) =>
  countFunctionCall(instance.methods.getPoolInfo(stakingToken).call())
const getMGPPerSec = instance => countFunctionCall(instance.methods.mgpPerSec().call())

module.exports = { getPoolData, getMGPPerSec }
