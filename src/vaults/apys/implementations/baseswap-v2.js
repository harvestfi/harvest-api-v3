const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  baseswapNFTPool,
  baseswapMasterchefV2,
  camelotStrategy,
} = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const { UI_DATA_FILES } = require('../../../lib/constants')
const { getUIData } = require('../../../lib/data')
const { executeEstimateApyFunctions } = require('..')

const getApy = async (strategyAddress, ntfPoolAddress, factor) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const web3 = web3BASE
  const {
    contract: { abi: nftPoolAbi },
    methods: nftPoolMethods,
  } = baseswapNFTPool
  const {
    contract: { abi: masterAbi },
    methods: masterMethods,
  } = baseswapMasterchefV2
  const {
    contract: { abi: strategyAbi },
    methods: { getPosId },
  } = camelotStrategy

  const nftPoolInstance = new web3.eth.Contract(nftPoolAbi, ntfPoolAddress)
  const masterAddress = await nftPoolMethods.getMaster(nftPoolInstance)
  const masterInstance = new web3.eth.Contract(masterAbi, masterAddress)
  const strategyInstance = new web3.eth.Contract(strategyAbi, strategyAddress)

  const poolInfo = await nftPoolMethods.getPoolInfo(nftPoolInstance)
  const lpToken = poolInfo.lpToken
  const lpPrice = await getTokenPrice(lpToken, CHAIN_IDS.BASE)
  const bsxPrice = await getTokenPrice('BSX')
  const bswapPrice = await getTokenPrice('BSWAP')

  const totalSupply = new BigNumber(poolInfo.lpSupply)
  const totalSupplyMul = new BigNumber(poolInfo.lpSupplyWithMultiplier)
  const totalMultiplier = totalSupplyMul.div(totalSupply)
  const totalSupplyUsd = totalSupply.times(lpPrice).div(1e18)

  const allocPoint1 = new BigNumber(poolInfo.allocPoints)
  const allocPoint2 = new BigNumber(poolInfo.allocPointsWETH)
  const totalAllocPoint1 = new BigNumber(await masterMethods.getTotalAllocPoint(masterInstance))
  const totalAllocPoint2 = new BigNumber(await masterMethods.getTotalAllocPointWETH(masterInstance))
  const totalRewardRates = await masterMethods.getEmissionRates(masterInstance)
  const poolRewardRate1 = new BigNumber(totalRewardRates[0])
    .times(allocPoint1)
    .div(totalAllocPoint1)
  const poolRewardRate2 = new BigNumber(totalRewardRates[1])
    .times(allocPoint2)
    .div(totalAllocPoint2)

  const xTokenShare = new BigNumber(await nftPoolMethods.getXTokenShare(nftPoolInstance)).div(10000)
  let xTokenUsdPerSecond = poolRewardRate1.times(bsxPrice).times(xTokenShare).div(1e18)
  let compoundingUsdPerSecond = poolRewardRate1
    .times(bsxPrice)
    .times(1 - xTokenShare)
    .div(1e18)
    .plus(poolRewardRate2.times(bswapPrice).div(1e18))

  console.log(xTokenUsdPerSecond.toFixed())
  console.log(compoundingUsdPerSecond.toFixed())

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
    xTokenUsdPerSecond = xTokenUsdPerSecond.div(totalMultiplier).times(posMultiplier)
    compoundingUsdPerSecond = compoundingUsdPerSecond.div(totalMultiplier).times(posMultiplier)
  }

  let xTokenAPR = xTokenUsdPerSecond.times(86400).times(365).div(totalSupplyUsd).times(100)
  let compoundingAPR = compoundingUsdPerSecond
    .times(86400)
    .times(365)
    .div(totalSupplyUsd)
    .times(100)

  console.log(xTokenAPR.toFixed())
  console.log(compoundingAPR.toFixed())

  const compoundingAPY = compoundingAPR
    .div(36500)
    .times(factor)
    .plus(1)
    .pow(365)
    .minus(1)
    .times(100)

  const xTokenData = tokens['xBSX']
  const { estimatedApy: fxTokenAPY } = await executeEstimateApyFunctions(
    'xBSX',
    xTokenData.estimateApyFunctions,
  )
  let xTokenHodlAPY
  if (fxTokenAPY > 0) {
    const fxTokenAPR = new BigNumber((Math.pow(fxTokenAPY / 100 + 1, 1 / 365) - 1) * 36500)
    xTokenHodlAPY = xTokenAPR.times(fxTokenAPY).div(fxTokenAPR)
  } else {
    xTokenHodlAPY = xTokenAPR
  }

  const result = compoundingAPY.plus(xTokenHodlAPY).toFixed(2)
  return result
}

module.exports = {
  getApy,
}
