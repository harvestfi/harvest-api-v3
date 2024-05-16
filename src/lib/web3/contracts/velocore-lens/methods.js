const { countFunctionCall } = require('../..')

const queryPool = (pool, instance) => countFunctionCall(instance.methods.queryPool(pool).call())
const queryGauge = (gauge, user, instance) =>
  countFunctionCall(instance.methods.queryGauge(gauge, user).call())

module.exports = {
  queryPool,
  queryGauge,
}
