const { countFunctionCall } = require('../..')

const getEmissionRate = instance => countFunctionCall(instance.methods.emissionRate().call())
const getTotalAllocPoint = instance => countFunctionCall(instance.methods.totalAllocPoint().call())

module.exports = { getEmissionRate, getTotalAllocPoint }
