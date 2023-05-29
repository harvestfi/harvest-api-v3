const { countFunctionCall } = require('../..')

const getReward1 = instance => countFunctionCall(instance.methods.rewardsToken1().call())
const getReward2 = instance => countFunctionCall(instance.methods.rewardsToken2().call())
const getReward1PerSecond = instance =>
  countFunctionCall(instance.methods.rewardsToken1PerSecond().call())
const getReward2PerSecond = instance =>
  countFunctionCall(instance.methods.rewardsToken2PerSecond().call())
const getTotalDeposits = instance => countFunctionCall(instance.methods.totalDepositAmount().call())

module.exports = {
  getReward1,
  getReward2,
  getReward1PerSecond,
  getReward2PerSecond,
  getTotalDeposits,
}
