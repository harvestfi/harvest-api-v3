const BigNumber = require('bignumber.js')
const { web3MATIC } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { pearlGauge } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, gauge, reduction) => {
  const web3 = web3MATIC
  const {
    contract: { abi: gaugeAbi },
    methods: gaugeMethods,
  } = pearlGauge

  const secondsPerYear = 60 * 60 * 24 * 365.25
  const gaugeInstance = getCachedContract({
    web3,
    abi: gaugeAbi,
    address: gauge,
  })

  const now = Date.now() / 1000
  const periodFinish = await gaugeMethods.getPeriodFinish(gaugeInstance)
  if (now > periodFinish) {
    return '0'
  }

  const rewardRate = new BigNumber(await gaugeMethods.getRewardRate(gaugeInstance))
  const rewardToken = await gaugeMethods.getRewardToken(gaugeInstance)

  const rewardPrice = await getTokenPrice(rewardToken, CHAIN_IDS.POLYGON)
  const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.POLYGON)

  const usdRewardPerYear = rewardRate.times(rewardPrice).div(1e18).times(secondsPerYear)

  const totalSupply = new BigNumber(await gaugeMethods.getTotalSupply(gaugeInstance))
  const usdTotalSupply = totalSupply.times(underlyingPrice).div(1e18)

  const rewardAPR = usdRewardPerYear.div(usdTotalSupply).times(100).times(reduction)

  return rewardAPR.toFixed()
}

module.exports = {
  getApy,
}
