const { web3ARBITRUM } = require('../../../lib/web3')
const { radpieReader, radpieRewarder, radpieMaster } = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { CHAIN_IDS } = require('../../../lib/constants')
const BigNumber = require('bignumber.js')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (poolId, rewarder, reduction = 1) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: radpieReaderAbi, address: radpieReaderAddress },
    methods: radpieReaderMethods,
  } = radpieReader

  const {
    contract: { abi: radpieRewarderAbi },
    methods: radpieRewarderMethods,
  } = radpieRewarder

  const {
    contract: { abi: radpieMasterAbi, address: radpieMasterAddress },
    methods: radpieMasterMethods,
  } = radpieMaster

  let rdpAPY = 0

  const radpieReaderInstance = getCachedContract({
    web3,
    abi: radpieReaderAbi,
    address: radpieReaderAddress.mainnet,
  })

  const radpieRewarderInstance = getCachedContract({
    web3,
    abi: radpieRewarderAbi,
    address: rewarder,
  })

  const radpieMasterInstance = getCachedContract({
    web3,
    abi: radpieMasterAbi,
    address: radpieMasterAddress.mainnet,
  })

  const account = '0x0000000000000000000000000000000000000000'

  let radpieInfo
  try {
    radpieInfo = await radpieReaderMethods.getRadpieInfo(
      account.toLowerCase(),
      radpieReaderInstance,
    )
  } catch (err) {
    console.error('RadpieInfo error:', err)
    return '0'
  }
  const radpiePoolInfo = radpieInfo.pools[poolId]

  const rdntAPR = await radpieReaderMethods.getRDNTAPR(radpiePoolInfo, radpieReaderInstance)

  const stakingTokenDecimal = await radpieRewarderMethods.getStakingDecimals(radpieRewarderInstance)
  const stakingToken = await radpieRewarderMethods.getStakingToken(radpieRewarderInstance)
  const totalStaked = await radpieRewarderMethods.getTotalStaked(radpieRewarderInstance)
  const stakingTokenPrice = await getTokenPrice(stakingToken, CHAIN_IDS.ARBITRUM_ONE)

  const rdpPoolInfo = await radpieMasterMethods.getPoolData(stakingToken, radpieMasterInstance)

  const rdpRate = new BigNumber(rdpPoolInfo.emission)
  const totalSupply = new BigNumber(totalStaked)
  const poolSizeInUsd = totalSupply
    .dividedBy(new BigNumber(10).exponentiatedBy(stakingTokenDecimal))
    .times(new BigNumber(stakingTokenPrice))
  const rdpPrice = await getTokenPrice('RDP')
  const rdpUsdPerSecond = rdpRate.div(1e18).times(rdpPrice)

  rdpAPY = rdpUsdPerSecond.times(86400).times(365.25).div(poolSizeInUsd).times(100)

  const depositApr = radpiePoolInfo?.radpieLendingInfo?.depositAPR / 100
  const borrowApr = radpiePoolInfo?.radpieLendingInfo?.borrowAPR / 100

  let apy = rdntAPR[1] / 100 + parseFloat(rdpAPY)

  apy = apy * reduction + depositApr - borrowApr

  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
