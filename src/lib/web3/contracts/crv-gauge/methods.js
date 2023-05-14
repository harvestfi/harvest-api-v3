const { countFunctionCall } = require('../..')

const getWorkingSupply = instance => countFunctionCall(instance.methods.working_supply().call())
const getWorkingBalance = (addr, instance) =>
  countFunctionCall(instance.methods.working_balances(addr).call())
const balanceOf = (addr, instance) => countFunctionCall(instance.methods.balanceOf(addr).call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getRewardData = (addr, instance) =>
  countFunctionCall(instance.methods.reward_data(addr).call())
const getRewardToken = (index, instance) =>
  countFunctionCall(instance.methods.reward_tokens(index).call())

module.exports = {
  getWorkingSupply,
  getTotalSupply,
  getWorkingBalance,
  balanceOf,
  getRewardData,
  getRewardToken,
}
