const { countFunctionCall } = require('../..')

const getDepositAPR = (silo, instance) =>
  countFunctionCall(instance.methods.getDepositAPR(silo).call())

module.exports = {
  getDepositAPR,
}
