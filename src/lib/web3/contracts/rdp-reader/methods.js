const { countFunctionCall } = require('../..')

const getRadpieInfo = (account, instance) =>
  countFunctionCall(instance.methods.getRadpieInfo(account).call())
const getRadpiePoolInfo = (poolId, account, systemInfo, instance) =>
  countFunctionCall(instance.methods.getRadpiePoolInfo(poolId, account, systemInfo).call())
const getRDNTAPR = (pool, instance) => countFunctionCall(instance.methods.getRDNTAPR(pool).call())

module.exports = { getRadpieInfo, getRadpiePoolInfo, getRDNTAPR }
