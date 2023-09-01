const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { aeroGauge } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (underlying, gauge, reduction) => {
  const web3 = web3BASE
  const {
    methods: gaugeMethods,
    contract: { abi: gaugeAbi },
  } = aeroGauge

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const gaugeInstance = new web3.eth.Contract(gaugeAbi, gauge)

  const now = Date.now() / 1000
  const periodFinish = await gaugeMethods.getPeriodFinish(gaugeInstance)
  if (now > periodFinish) {
    return '0'
  }

  const rewardToken = await gaugeMethods.getRewardToken(gaugeInstance)
  const rewardPerSecond = new BigNumber(await gaugeMethods.getRewardRate(gaugeInstance))
  const totalSupply = new BigNumber(await gaugeMethods.getTotalSupply(gaugeInstance))

  const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.BASE)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.BASE)

  const rewardInUsdPerYear = new BigNumber(rewardPrice)
    .times(rewardPerSecond)
    .times(secondsPerYear)
    .div(1e18)
  const totalSupplyInUsd = totalSupply.times(underlyingPrice).div(1e18)

  let apy = rewardInUsdPerYear.div(totalSupplyInUsd).times(100).times(reduction)

  return apy.toFixed()
}

module.exports = {
  getApy,
}
