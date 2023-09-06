const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { crvGauge, crvChildGauge } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getApy = async (tokenSymbol, gaugeAddress, factor, chainId) => {
  const web3 = getWeb3(chainId)
  const MAX_REWARD_TOKENS = 8
  const ZeroAddress = '0x0000000000000000000000000000000000000000'
  let {
    contract: { abi: gaugeAbi },
    methods: gaugeMethods,
  } = crvGauge
  let {
    contract: { abi: childAbi },
    methods: childMethods,
  } = crvChildGauge

  if (chainId == CHAIN_IDS.BASE) {
    gaugeAbi = childAbi
    gaugeMethods = childMethods
  }

  const gaugeInstance = new web3.eth.Contract(gaugeAbi, gaugeAddress)

  let rewardTokens = []
  for (let i = 0; i < MAX_REWARD_TOKENS; i++) {
    rewardTokens[i] = await gaugeMethods.getRewardToken(i, gaugeInstance)
  }
  const totalSupply = new BigNumber(await gaugeMethods.getTotalSupply(gaugeInstance)).dividedBy(
    new BigNumber(1e18),
  )
  const lpTokenPrice = new BigNumber(await getTokenPrice(tokenSymbol, chainId))

  let totalRewardPerWeekUsd = new BigNumber(0)
  for (let i = 0; i < rewardTokens.length; i++) {
    const rewardToken = rewardTokens[i]
    if (rewardToken !== ZeroAddress) {
      const rewardTokenMeta = await gaugeMethods.getRewardData(rewardToken, gaugeInstance)
      if (Date.now() / 1000 > parseInt(rewardTokenMeta.period_finish)) {
        continue
      }
      const inflationRate = new BigNumber(rewardTokenMeta.rate).dividedBy(new BigNumber(1e18))
      const tokenPerWeek = inflationRate.times(7).times(86400)
      const shareForOneLpt = new BigNumber(1).dividedBy(totalSupply).plus(1)
      const rewardPerWeek = shareForOneLpt.times(tokenPerWeek)

      const rewardTokenInUsd = await getTokenPrice(rewardToken, chainId)
      const rewardPerWeekUsd = rewardPerWeek.times(rewardTokenInUsd)
      totalRewardPerWeekUsd = totalRewardPerWeekUsd.plus(rewardPerWeekUsd)
    }
  }
  const apy = totalRewardPerWeekUsd
    .times(52)
    .dividedBy(lpTokenPrice)
    .dividedBy(totalSupply)
    .multipliedBy(100)
  const result = apy.times(factor).toFixed(2, 1)

  return result
}

module.exports = {
  getApy,
}
