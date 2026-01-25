const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { balGauge } = require('../../../lib/web3/contracts')
const { token: tokenContractData } = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (tokenSymbol, gaugeAddress, factor, chainId) => {
  const web3 = getWeb3(chainId)
  const MAX_REWARD_TOKENS = 8
  const ZeroAddress = '0x0000000000000000000000000000000000000000'
  const {
    contract: { abi: balGaugeAbi },
    methods: balGaugeMethods,
  } = balGauge
  const {
    methods: { getDecimals },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const balGaugeInstance = getCachedContract({
    web3,
    abi: balGaugeAbi,
    address: gaugeAddress,
  })

  let rewardTokens = []

  for (let i = 0; i < MAX_REWARD_TOKENS; i++) {
    rewardTokens[i] = await balGaugeMethods.getRewardToken(i, balGaugeInstance)
  }

  const totalSupply = new BigNumber(
    await balGaugeMethods.getTotalSupply(balGaugeInstance),
  ).dividedBy(new BigNumber(1e18))
  const lpTokenPrice = new BigNumber(await getTokenPrice(tokenSymbol, chainId))
  const balPrice = new BigNumber(await getTokenPrice('BAL'))

  let totalRewardPerWeekUsd = new BigNumber(0)
  const period = await balGaugeMethods.getPeriod(balGaugeInstance)
  const periodTime = await balGaugeMethods.getPeriodTime(period, balGaugeInstance)
  const week = new BigNumber(periodTime).div(86400).div(7).toFixed(0, 1)
  const balRate = new BigNumber(await balGaugeMethods.getBalRate(week, balGaugeInstance)).div(1e18)
  const balPerWeek = balRate.times(7).times(86400)
  const balPerWeekUsd = balPerWeek.times(balPrice)

  totalRewardPerWeekUsd = totalRewardPerWeekUsd.plus(balPerWeekUsd)

  for (let i = 0; i < rewardTokens.length; i++) {
    const rewardToken = rewardTokens[i]
    if (rewardToken !== ZeroAddress) {
      const rewardTokenMeta = await balGaugeMethods.getRewardData(rewardToken, balGaugeInstance)
      if (Date.now() / 1000 > parseInt(rewardTokenMeta.period_finish)) {
        continue
      }

      const tokenInstance = getCachedContract({
        web3,
        abi: tokenAbi,
        address: rewardToken,
      })
      const decimals = await getDecimals(tokenInstance)

      const inflationRate = new BigNumber(rewardTokenMeta.rate).dividedBy(
        new BigNumber(new BigNumber(10).pow(Number(decimals))),
      )
      const tokenPerWeek = inflationRate.times(7).times(86400)

      const rewardTokenInUsd = await getTokenPrice(rewardToken, chainId)
      const rewardPerWeekUsd = tokenPerWeek.times(rewardTokenInUsd)
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
