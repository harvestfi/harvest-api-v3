const { countFunctionCall } = require('../..')

const getIncentivesController = instance =>
  countFunctionCall(instance.methods.getIncentivesController().call())
const getTotalSupply = instance => countFunctionCall(instance.methods.totalSupply().call())
const getDecimals = instance => countFunctionCall(instance.methods.decimals().call())
const balanceOf = (account, instance) =>
  countFunctionCall(instance.methods.balanceOf(account).call())

module.exports = {
  getIncentivesController,
  getTotalSupply,
  getDecimals,
  balanceOf,
}
