const { countFunctionCall } = require('../..')

const getUserInfo = (pid, user, instance) =>
  countFunctionCall(instance.methods.userInfo(pid, user).call())
const getPoolInfo = (pid, instance) => countFunctionCall(instance.methods.poolInfoV3(pid).call())

module.exports = { getUserInfo, getPoolInfo }
