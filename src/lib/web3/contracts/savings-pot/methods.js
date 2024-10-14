const { countFunctionCall } = require('../..')

const getSavingsRate = instance => countFunctionCall(instance.methods.dsr().call())

module.exports = {
  getSavingsRate,
}
