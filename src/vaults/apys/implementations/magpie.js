const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const { magpieMaster, wombatStaking, wombatMaster } = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getApy = async (underlyingAddress, reduction) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: wombatStakingAbi, address: wombatStakingAddress },
    methods: wombatStakingMethods,
  } = wombatStaking

  const {
    contract: { abi: wombatMasterAbi, address: wombatMasterAddress },
    methods: wombatMasterMethods,
  } = wombatMaster

  const {
    contract: { abi: magpieMasterAbi },
    methods: mgpMasterMethods,
  } = magpieMaster

  const wombatStakingInstance = getCachedContract({
    web3,
    abi: wombatStakingAbi,
    address: wombatStakingAddress.mainnet,
  })
  const wombatMasterInstance = getCachedContract({
    web3,
    abi: wombatMasterAbi,
    address: wombatMasterAddress.mainnet,
  })
  const wsPoolInfo = await wombatStakingMethods.getPools(underlyingAddress, wombatStakingInstance)
  const stakingToken = wsPoolInfo.receiptToken
  const poolId = wsPoolInfo.pid

  const magpieMasterAddress = await wombatStakingMethods.getMasterMagpie(wombatStakingInstance)
  const magpieMasterInstance = getCachedContract({
    web3,
    abi: magpieMasterAbi,
    address: magpieMasterAddress,
  })
  const magpiePoolInfo = await mgpMasterMethods.getPoolData(stakingToken, magpieMasterInstance)

  const mgpRate = new BigNumber(magpiePoolInfo.emission)
  const totalSupply = new BigNumber(magpiePoolInfo.sizeOfPool)
  const underlyingPrice = await getTokenPrice(underlyingAddress, CHAIN_IDS.ARBITRUM_ONE)
  const mgpPrice = await getTokenPrice('MGP')
  const poolSizeInUsd = totalSupply.div(1e18).times(underlyingPrice)
  const mgpUsdPerSecond = mgpRate.div(1e18).times(mgpPrice)

  const wmPoolInfo = await wombatMasterMethods.getPoolInfo(poolId, wombatMasterInstance)
  const wmUserInfo = await wombatMasterMethods.getUserInfo(
    poolId,
    wombatStakingAddress.mainnet,
    wombatMasterInstance,
  )
  const userFactor = new BigNumber(wmUserInfo.factor)
  const totalFactor = new BigNumber(wmPoolInfo.sumOfFactors)
  const totalWomRate = new BigNumber(wmPoolInfo.rewardRate)
  const womRate = totalWomRate.times(userFactor).div(totalFactor)
  const womPrice = await getTokenPrice('WOM')
  const womUsdPerSecond = womRate.div(1e18).times(womPrice)

  const mgpApr = mgpUsdPerSecond.times(86400).times(365.25).div(poolSizeInUsd).times(100)
  const womApr = womUsdPerSecond.times(86400).times(365.25).div(poolSizeInUsd).times(100)
  let apy = mgpApr.plus(womApr)
  if (reduction) {
    apy = apy.multipliedBy(reduction)
  }
  return apy.toFixed(2)
}

module.exports = {
  getApy,
}
