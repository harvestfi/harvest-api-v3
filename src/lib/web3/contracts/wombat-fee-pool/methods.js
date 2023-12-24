const { countFunctionCall } = require('../..')

const getHaircutRate = instance => countFunctionCall(instance.methods.haircutRate().call())

const getLpDividendRatio = instance => countFunctionCall(instance.methods.lpDividendRatio().call())
module.exports = { getHaircutRate, getLpDividendRatio }
