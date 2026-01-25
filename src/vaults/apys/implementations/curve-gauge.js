const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { crvGauge, crvChildGauge, token: tokenContract } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (tokenSymbol, gaugeAddress, factor, chainId, strategy = null) => {
  const web3 = getWeb3(chainId)
  const MAX_REWARD_TOKENS = 8
  const ZeroAddress = '0x0000000000000000000000000000000000000000'
  const CRV_BASE = '0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415'
  let {
    contract: { abi: gaugeAbi },
    methods: gaugeMethods,
  } = crvGauge
  let {
    contract: { abi: childAbi },
    methods: childMethods,
  } = crvChildGauge
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = tokenContract

  if (chainId == CHAIN_IDS.BASE || chainId == CHAIN_IDS.ARBITRUM_ONE) {
    gaugeAbi = childAbi
    gaugeMethods = childMethods
  }

  const lpTokenPrice = new BigNumber(await getTokenPrice(tokenSymbol, chainId))
  const gaugeInstance = getCachedContract({
    web3,
    abi: gaugeAbi,
    address: gaugeAddress,
  })

  const totalSupply = new BigNumber(await gaugeMethods.getTotalSupply(gaugeInstance)).dividedBy(
    new BigNumber(1e18),
  )

  let totalRewardPerWeekUsd = new BigNumber(0)
  let result = 0

  if (chainId == CHAIN_IDS.BASE) {
    const arg = Math.floor(Date.now() / (1000 * 86400 * 7))
    const inflationRate = new BigNumber(await gaugeMethods.getInflationRate(arg, gaugeInstance))
    const workingBalance = new BigNumber(
      await gaugeMethods.getWorkingBalance(strategy, gaugeInstance),
    )
    const workingSupply = new BigNumber(await gaugeMethods.getWorkingSupply(gaugeInstance))

    const rewardPerYear = inflationRate
      .dividedBy(new BigNumber(1e18))
      .times(365)
      .times(86400)
      .times(workingBalance)
      .dividedBy(workingSupply)
    const rewardTokenInUsd = await getTokenPrice(CRV_BASE, chainId)
    const lpBalance = new BigNumber(
      await gaugeMethods.balanceOf(strategy, gaugeInstance),
    ).dividedBy(new BigNumber(1e18))

    const apy = rewardPerYear
      .times(rewardTokenInUsd)
      .dividedBy(lpTokenPrice)
      .dividedBy(lpBalance)
      .multipliedBy(100)
    result = apy.times(factor).toFixed(2, 1)
  } else {
    let rewardTokens = []
    for (let i = 0; i < MAX_REWARD_TOKENS; i++) {
      rewardTokens[i] = await gaugeMethods.getRewardToken(i, gaugeInstance)
    }

    for (let i = 0; i < rewardTokens.length; i++) {
      const rewardToken = rewardTokens[i]
      if (rewardToken !== ZeroAddress) {
        const tokenInstance = getCachedContract({
          web3,
          abi: tokenAbi,
          address: rewardToken,
        })
        const decimals = await getDecimals(tokenInstance)

        const rewardTokenMeta = await gaugeMethods.getRewardData(rewardToken, gaugeInstance)
        if (Date.now() / 1000 > parseInt(rewardTokenMeta.period_finish)) {
          continue
        }
        const inflationRate = new BigNumber(rewardTokenMeta.rate).dividedBy(
          new BigNumber(10).pow(Number(decimals)),
        )
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
    result = apy.times(factor).toFixed(2, 1)
  }

  return result
}

module.exports = {
  getApy,
}
