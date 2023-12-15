const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  magpieMaster,
  wombatStaking,
  wombatFeePool,
  wombatAsset,
} = require('../../../lib/web3/contracts')
const { getWomAprSubgraph } = require('../../../lib/third-party/wombat')

const getApy = async (underlyingAddress, reduction) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: wombatStakingContractAbi, address: wombatStakingAddress },
    methods: wombatStakingMethods,
  } = wombatStaking

  const {
    contract: { abi: wombatFeePoolAbi },
    methods: wombatFeePoolMethods,
  } = wombatFeePool

  const {
    contract: { abi: wombatAssetAbi },
    methods: wombatAssetMethods,
  } = wombatAsset

  const {
    contract: { abi: magpieMasterAbi },
    methods: mgpMasterMethods,
  } = magpieMaster

  const wombatStakingInstance = new web3.eth.Contract(
    wombatStakingContractAbi,
    wombatStakingAddress.mainnet,
  )
  const wombatAssetInstance = new web3.eth.Contract(wombatAssetAbi, underlyingAddress)

  const poolAddr = await wombatAssetMethods.getPoolAddr(wombatAssetInstance)

  const underlyingToken = await wombatAssetMethods.getUnderlyingToken(wombatAssetInstance)

  const wombatFeePoolInstance = new web3.eth.Contract(wombatFeePoolAbi, poolAddr)

  const wsPoolInfo = await wombatStakingMethods.getPools(underlyingAddress, wombatStakingInstance)
  const stakingToken = wsPoolInfo.receiptToken
  const magpieMasterAddress = await wombatStakingMethods.getMasterMagpie(wombatStakingInstance)
  const magpieMasterInstance = new web3.eth.Contract(magpieMasterAbi, magpieMasterAddress)
  const magpiePoolInfo = await mgpMasterMethods.getPoolData(stakingToken, magpieMasterInstance)
  const allocPoint = new BigNumber(magpiePoolInfo.allocpoint)
  const totalAllocPoint = new BigNumber(magpiePoolInfo.totalPoint)
  const underlyingPrice = await getTokenPrice(underlyingToken)
  const underlyingValue = await wombatFeePoolMethods.getQuoteValue(
    underlyingToken,
    magpiePoolInfo.sizeOfPool,
    wombatFeePoolInstance,
  )

  const underlyingSize = new BigNumber(underlyingValue.amount).dividedBy(
    new BigNumber(10).exponentiatedBy(18),
  )

  const mgpPerSec = await mgpMasterMethods.getMGPPerSec(magpieMasterInstance)
  const totalRate = new BigNumber(mgpPerSec).dividedBy(new BigNumber(10).exponentiatedBy(18))

  const poolRewardRate = totalRate.times(allocPoint).div(totalAllocPoint)
  const rewardTokenInUsd = await getTokenPrice('MGP')
  const poolSizeInUsd = underlyingSize.times(underlyingPrice)

  const rewardUsdPerSecond = poolRewardRate.times(rewardTokenInUsd)

  let apy
  const mgpApr = rewardUsdPerSecond.times(86400).times(365.25).div(poolSizeInUsd).times(100)
  console.log('mgpApr: ', mgpApr.toFixed(2))
  const womAprData = await getWomAprSubgraph(underlyingAddress)

  const womApr = new BigNumber(womAprData.apr)
    .multipliedBy(new BigNumber(womAprData.ratio))
    .multipliedBy(100)
  console.log('womApr : ', womApr.toFixed(2))
  apy = mgpApr.plus(womApr)
  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }
  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
