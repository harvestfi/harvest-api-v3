const { countFunctionCall } = require('../..')

const getSqrtRatioAtTick = (tick, instance) =>
  countFunctionCall(instance.methods.getSqrtRatioAtTick(tick).call())
const getAmountsForLiquidity = (ratio, ratioA, ratioB, liquidity, instance) =>
  countFunctionCall(
    instance.methods.getAmountsForLiquidity(ratio, ratioA, ratioB, liquidity).call(),
  )

module.exports = {
  getSqrtRatioAtTick,
  getAmountsForLiquidity,
}
