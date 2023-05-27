const { countFunctionCall } = require('../..')

const getRewardData = (addr, instance) =>
  countFunctionCall(instance.methods.reward_data(addr).call())
const getRewardToken = (index, instance) =>
  countFunctionCall(instance.methods.reward_tokens(index).call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getPeriod = instance => countFunctionCall(instance.methods.period().call())
const getPeriodTime = (period, instance) =>
  countFunctionCall(instance.methods.period_timestamp(period).call())
const getBalRate = (week, instance) =>
  countFunctionCall(instance.methods.inflation_rate(week).call())

module.exports = {
  getRewardData,
  getRewardToken,
  getTotalSupply,
  getPeriod,
  getPeriodTime,
  getBalRate,
}
