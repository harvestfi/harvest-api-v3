const { countFunctionCall } = require('../..')

const getDrip = (idx, instance) => countFunctionCall(instance.methods.drips(idx).call())

module.exports = {
  getDrip,
}
