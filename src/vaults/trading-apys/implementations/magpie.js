const BigNumber = require('bignumber.js')
const { wombatAsset, wombatFeePool } = require('../../../lib/web3/contracts')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTradingVolumeDaily } = require('../../../lib/third-party/wombat')
const { getCachedContract } = require('../../../lib/web3/contractCache')

const getTradingApy = async lpAddress => {
  let apy = 0
  const web3 = web3ARBITRUM
  const {
    contract: { abi: wombatAssetAbi },
    methods: wombatAssetgMethods,
  } = wombatAsset

  const {
    contract: { abi: wombatFeePoolAbi },
    methods: wombatFeePoolMethods,
  } = wombatFeePool

  const blockNow = await web3.eth.getBlockNumber()
  const blockNum = blockNow - 86400 * 4
  const womTradeData = await getTradingVolumeDaily(lpAddress.toLowerCase(), blockNum)

  const wombatAssetInstance = getCachedContract({
    web3,
    abi: wombatAssetAbi,
    address: lpAddress.toLowerCase(),
  })
  const feePoolAddr = await wombatAssetgMethods.getPool(wombatAssetInstance)

  const wombatFeePoolInstance = getCachedContract({
    web3,
    abi: wombatFeePoolAbi,
    address: feePoolAddr,
  })
  const haircut = new BigNumber(
    await wombatFeePoolMethods.getHaircutRate(wombatFeePoolInstance),
  ).div(1e18)
  const lpDividendRatio = new BigNumber(
    await wombatFeePoolMethods.getLpDividendRatio(wombatFeePoolInstance),
  ).div(1e18)

  apy =
    (womTradeData.dailyTradingVol * parseFloat(haircut) * parseFloat(lpDividendRatio) * 365 * 100) /
    (womTradeData.tvlUSD * 2)

  return apy.toFixed(2, 1)
}

module.exports = {
  getTradingApy,
}
