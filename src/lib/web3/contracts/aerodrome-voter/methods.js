const { countFunctionCall } = require('../..')

const getGauge = (pool, instance) => countFunctionCall(instance.methods.gauges(pool).call())

module.exports = {
  getGauge,
}
