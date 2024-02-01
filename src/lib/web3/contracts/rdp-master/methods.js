const { countFunctionCall } = require('../..')

const getPoolData = (stakingToken, instance) =>
  countFunctionCall(instance.methods.getPoolInfo(stakingToken).call())
const getRDPPerSec = instance => countFunctionCall(instance.methods.radpiePerSec().call())

module.exports = { getPoolData, getRDPPerSec }
