const { countFunctionCall } = require('../..')

const getVestingData = instance => countFunctionCall(instance.methods.getVestingData().call())

const balanceOf = instance => countFunctionCall(instance.methods.balanceOf().call())

module.exports = {
  getVestingData,
  balanceOf,
}
