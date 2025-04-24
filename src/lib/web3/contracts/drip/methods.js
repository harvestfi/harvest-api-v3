const { countFunctionCall } = require('../..')

const getDrip = (idx, instance) => countFunctionCall(instance.methods.drips(idx).call())
const getCurrentRate = (idx, instance) =>
  countFunctionCall(instance.methods.getCurrentRate(idx).call())

module.exports = {
  getDrip,
  getCurrentRate,
}
