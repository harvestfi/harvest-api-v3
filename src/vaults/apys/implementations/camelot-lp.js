const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  camelotNFTPool,
  camelotNitroPool,
  camelotMaster,
  camelotStrategy,
  token: tokenContract,
} = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const { UI_DATA_FILES } = require('../../../lib/constants')
const { getUIData } = require('../../../lib/data')
const addresses = require('../../../lib/data/addresses.json')
const { executeEstimateApyFunctions } = require('..')

const getApy = async (strategyAddress, ntfPoolAddress, nitroPoolAddress, factor) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const web3 = web3ARBITRUM
  const {
    contract: { abi: nftPoolAbi },
    methods: nftPoolMethods,
  } = camelotNFTPool
  const {
    contract: { abi: masterAbi },
    methods: masterMethods,
  } = camelotMaster
  const {
    contract: { abi: nitroPoolAbi },
    methods: nitroPoolMethods,
  } = camelotNitroPool
  const {
    contract: { abi: strategyAbi },
    methods: { getPosId },
  } = camelotStrategy
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = tokenContract

  const nftPoolInstance = new web3.eth.Contract(nftPoolAbi, ntfPoolAddress)
  const masterAddress = await nftPoolMethods.getMaster(nftPoolInstance)
  const masterInstance = new web3.eth.Contract(masterAbi, masterAddress)
  const strategyInstance = new web3.eth.Contract(strategyAbi, strategyAddress)

  let nitroInstance
  if (nitroPoolAddress != '0') {
    nitroInstance = new web3.eth.Contract(nitroPoolAbi, nitroPoolAddress)
  }

  const poolInfo = await nftPoolMethods.getPoolInfo(nftPoolInstance)
  const lpToken = poolInfo.lpToken
  const lpPrice = await getTokenPrice(lpToken, CHAIN_IDS.ARBITRUM_ONE)
  const grailPrice = await getTokenPrice('GRAIL')

  const totalSupply = new BigNumber(poolInfo.lpSupply)
  const totalSupplyMul = new BigNumber(poolInfo.lpSupplyWithMultiplier)
  const totalMultiplier = totalSupplyMul.div(totalSupply)
  const totalSupplyUsd = totalSupply.times(lpPrice).div(1e18)

  const allocPoint = new BigNumber(poolInfo.allocPoint)
  const totalAllocPoint = new BigNumber(await masterMethods.getTotalAllocPoint(masterInstance))
  const totalRewardRate = new BigNumber(await masterMethods.getEmissionRate(masterInstance))
  const poolRewardRate = totalRewardRate.times(allocPoint).div(totalAllocPoint)
  const poolUsdPerSecond = poolRewardRate.times(grailPrice).div(1e18)

  const xGrailShare = new BigNumber(await nftPoolMethods.getXGrailShare(nftPoolInstance)).div(10000)
  let xGrailUsdPerSecond = poolUsdPerSecond.times(xGrailShare)
  let compoundingUsdPerSecond = poolUsdPerSecond.minus(xGrailUsdPerSecond)

  let posId
  try {
    posId = await getPosId(strategyInstance)
  } catch (e) {
    posId = 0
  }

  if (posId != 0) {
    const positionInfo = await nftPoolMethods.getStakingPosition(posId, nftPoolInstance)
    const posAmount = new BigNumber(positionInfo.amount)
    const posAmountMul = new BigNumber(positionInfo.amountWithMultiplier)
    let posMultiplier
    if (posAmount > 0) {
      posMultiplier = posAmountMul.div(posAmount)
    } else {
      posMultiplier = 1
    }
    xGrailUsdPerSecond = xGrailUsdPerSecond.div(totalMultiplier).times(posMultiplier)
    compoundingUsdPerSecond = compoundingUsdPerSecond.div(totalMultiplier).times(posMultiplier)
  }

  let xGrailApr = xGrailUsdPerSecond.times(86400).times(365.25).div(totalSupplyUsd).times(100)
  let compoundingApr = compoundingUsdPerSecond
    .times(86400)
    .times(365.25)
    .div(totalSupplyUsd)
    .times(100)

  if (nitroInstance) {
    const totalDeposits = new BigNumber(await nitroPoolMethods.getTotalDeposits(nitroInstance))
    const totalDepositsUsd = totalDeposits.times(lpPrice).div(1e18)
    const reward1Info = await nitroPoolMethods.getReward1(nitroInstance)
    const reward2Info = await nitroPoolMethods.getReward2(nitroInstance)
    const reward1PerSecond = new BigNumber(
      await nitroPoolMethods.getReward1PerSecond(nitroInstance),
    )
    const reward2PerSecond = new BigNumber(
      await nitroPoolMethods.getReward2PerSecond(nitroInstance),
    )
    if (reward1PerSecond > 0 && reward1Info.token != addresses.iFARM_arbitrum) {
      const reward1Price = await getTokenPrice(reward1Info.token, CHAIN_IDS.ARBITRUM_ONE)
      const token1Instance = new web3.eth.Contract(tokenAbi, reward1Info.token)
      const token1Decimals = await getDecimals(token1Instance)
      const reward1UsdPerSecond = reward1PerSecond.times(reward1Price).div(10 ** token1Decimals)
      const reward1Apr = reward1UsdPerSecond
        .times(86400)
        .times(365.25)
        .div(totalDepositsUsd)
        .times(100)
      if (reward1Info.token == addresses.xGRAIL) {
        xGrailApr = xGrailApr.plus(reward1Apr)
      } else {
        compoundingApr = compoundingApr.plus(reward1Apr)
      }
    }
    if (reward2PerSecond > 0 && reward2Info.token != addresses.iFARM_arbitrum) {
      const reward2Price = await getTokenPrice(reward2Info.token, CHAIN_IDS.ARBITRUM_ONE)
      const token2Instance = new web3.eth.Contract(tokenAbi, reward2Info.token)
      const token2Decimals = await getDecimals(token2Instance)
      const reward2UsdPerSecond = reward2PerSecond.times(reward2Price).div(10 ** token2Decimals)
      const reward2Apr = reward2UsdPerSecond
        .times(86400)
        .times(365.25)
        .div(totalDepositsUsd)
        .times(100)
      if (reward2Info.token == addresses.xGRAIL) {
        xGrailApr = xGrailApr.plus(reward2Apr)
      } else {
        compoundingApr = compoundingApr.plus(reward2Apr)
      }
    }
  }

  const compoundingApy = compoundingApr
    .div(36500)
    .times(factor)
    .plus(1)
    .pow(365)
    .minus(1)
    .times(100)

  const xGrailData = tokens['xGRAIL']
  const { estimatedApy: fxGrailApy } = await executeEstimateApyFunctions(
    'xGRAIL',
    xGrailData.estimateApyFunctions,
  )
  const fxGrailApr = new BigNumber((Math.pow(fxGrailApy / 100 + 1, 1 / 365) - 1) * 36500)
  const xGrailHodlApy = xGrailApr.times(factor).times(fxGrailApy).div(2).div(fxGrailApr.div(2))

  const result = compoundingApy.plus(xGrailHodlApy).toFixed(2)
  return result
}

module.exports = {
  getApy,
}
