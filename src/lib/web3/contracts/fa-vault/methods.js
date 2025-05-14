const { countFunctionCall } = require('../..')

const getLoanContract = instance => countFunctionCall(instance.methods._loanContract().call())
const getTotalAssets = instance => countFunctionCall(instance.methods.totalAssets().call())

module.exports = {
  getLoanContract,
  getTotalAssets,
}
