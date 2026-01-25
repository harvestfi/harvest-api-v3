const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { seamlessPool, aToken, aaveRewards } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlying, poolAddr, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: poolAbi },
    methods: poolMethods,
  } = seamlessPool
  const {
    contract: { abi: aTokenAbi },
    methods: aTokenMethods,
  } = aToken
  const {
    contract: { abi: rewardsAbi },
    methods: rewardsMethods,
  } = aaveRewards

  const poolInstance = getCachedContract({
    web3,
    abi: poolAbi,
    address: poolAddr,
  })
  const assetData = await poolMethods.getReserveData(underlying, poolInstance)
  const supplyAPR = new BigNumber(assetData.currentLiquidityRate).div(1e27).times(100)

  const aTokenInstance = getCachedContract({
    web3,
    abi: aTokenAbi,
    address: assetData.aTokenAddress,
  })
  const rewardsInstance = getCachedContract({
    web3,
    abi: rewardsAbi,
    address: await aTokenMethods.getIncentivesController(aTokenInstance),
  })

  const rewardList = await rewardsMethods.getRewardsList(rewardsInstance)
  const now = Date.now() / 1000
  let rewardUsdPerYear = new BigNumber(0)
  for (let reward in rewardList) {
    const rewardsData = await rewardsMethods.getRewardsData(
      assetData.aTokenAddress,
      rewardList[reward],
      rewardsInstance,
    )
    if (rewardsData[3] < now) {
      continue
    }
    const rewardPrice = await getTokenPrice(rewardList[reward], chain)
    const emissionPerYear = new BigNumber(rewardsData[1]).times(3600).times(24).times(365).div(1e18)
    rewardUsdPerYear = rewardUsdPerYear.plus(emissionPerYear.times(rewardPrice))
  }

  let rewardAPR = new BigNumber(0)
  if (rewardUsdPerYear.gt(0)) {
    const totalSupply = new BigNumber(await aTokenMethods.getTotalSupply(aTokenInstance))
    const decimals = new BigNumber(await aTokenMethods.getDecimals(aTokenInstance))
    const underlyingPrice = await getTokenPrice(underlying, chain)

    const totalUsd = totalSupply.times(underlyingPrice).div(new BigNumber(10).pow(Number(decimals)))

    rewardAPR = rewardUsdPerYear.times(100).div(totalUsd)
  }

  return supplyAPR.plus(rewardAPR).times(reduction).toFixed()
}

module.exports = {
  getApy,
}
