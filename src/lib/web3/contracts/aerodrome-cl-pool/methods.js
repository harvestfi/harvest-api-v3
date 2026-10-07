const { countFunctionCall } = require('../..')

const getToken0 = instance => countFunctionCall(instance.methods.token0().call())
const getToken1 = instance => countFunctionCall(instance.methods.token1().call())
const getTickSpacing = instance => countFunctionCall(instance.methods.tickSpacing().call())
const getSlot0 = instance => countFunctionCall(instance.methods.slot0().call())
const getStakedLiquidity = instance => countFunctionCall(instance.methods.stakedLiquidity().call())
const getGaugeFees = instance => countFunctionCall(instance.methods.gaugeFees().call())
const getLiquidity = instance => countFunctionCall(instance.methods.liquidity().call())
// Fee growth is cumulative per unit of in-range liquidity, so a swap-fee rate is only obtainable by
// sampling it at two heights. `blockNumber` therefore needs an archive-capable RPC; callers must
// treat a failure here as "no fee data" rather than letting it fail the whole APY.
const getFeeGrowthGlobal0 = (instance, blockNumber) =>
  countFunctionCall(instance.methods.feeGrowthGlobal0X128().call(undefined, blockNumber))
const getFeeGrowthGlobal1 = (instance, blockNumber) =>
  countFunctionCall(instance.methods.feeGrowthGlobal1X128().call(undefined, blockNumber))
// The pool's own gauge; the zero address until one is created. Unlike Voter.gauges(pool), this also
// works on deployments without a Voter.gauges() lookup (Aero MetaDEX03 on Arc).
const getGauge = instance => countFunctionCall(instance.methods.gauge().call())
// Emissions per unit of staked in-range liquidity, cumulative like fee growth, so the same archive
// caveat applies.
const getRewardGrowthGlobal = (instance, blockNumber) =>
  countFunctionCall(instance.methods.rewardGrowthGlobalX128().call(undefined, blockNumber))
// When the pool last settled emissions into rewardGrowthGlobalX128 (0 before it has a gauge).
const getLastUpdated = (instance, blockNumber) =>
  countFunctionCall(instance.methods.lastUpdated().call(undefined, blockNumber))

module.exports = {
  getToken0,
  getToken1,
  getTickSpacing,
  getSlot0,
  getStakedLiquidity,
  getGaugeFees,
  getLiquidity,
  getFeeGrowthGlobal0,
  getFeeGrowthGlobal1,
  getGauge,
  getRewardGrowthGlobal,
  getLastUpdated,
}
