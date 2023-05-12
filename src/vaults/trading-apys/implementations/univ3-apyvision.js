const axios = require('axios')
const { find, get } = require('lodash')
const { web3 } = require('../../../lib/web3')
const { getPosId } = require('../../../prices/implementations/uniswap-v3')
const { getDailyCompound } = require('../../../lib/utils.js')
const BigNumber = require('bignumber.js')
const { Cache } = require('../../../lib/db/models/cache')
const { DB_CACHE_IDS } = require('../../../lib/constants')

const { APY_VISION_API_URL, APY_VISION_TOKEN } = require('../../../lib/constants')

const getTradingApy = async (vaultAddress, providerKey, reduction) => {
  let response, data, apr, apy, isWeekOld

  const posId = await getPosId(vaultAddress, web3)

  try {
    response = await axios.get(
      `${APY_VISION_API_URL}/uniswapv3/${providerKey}/positions/${posId}?access_token=${APY_VISION_TOKEN}`,
    )
    data = get(response, 'data', 0)
    isWeekOld = Number(data.position_age_days) >= 7
    if (isWeekOld) {
      apr = new BigNumber(data.day_datas[0].fee_apys.apy_7d).times(reduction) // 7 day moving average APY from trading fees
      if (apr == 0) {
        apr = new BigNumber(data.day_datas[1].fee_apys.apy_7d).times(reduction)
      }
    } else {
      apr = new BigNumber(data.day_datas[0].fee_apys.apy_inception).times(reduction) // moving average APY from trading fees since inception
    }
    apy = getDailyCompound(apr)
    if (apy == 0) {
      const dbData = await Cache.find({
        type: { $in: [DB_CACHE_IDS.POOLS] },
      })
      const fetchedPools = dbData.find(result => result.type === DB_CACHE_IDS.POOLS)
      const currentPool = find(
        get(fetchedPools, 'data.eth', []),
        pool => pool && pool.collateralAddress === vaultAddress,
      )
      if (currentPool.tradingApy > 0) {
        apy = currentPool.tradingApy
      }
    }
  } catch (err) {
    console.error('APY.vision API error: ', err)
    const dbData = await Cache.find({
      type: { $in: [DB_CACHE_IDS.POOLS] },
    })
    const fetchedPools = dbData.find(result => result.type === DB_CACHE_IDS.POOLS)
    const currentPool = find(
      get(fetchedPools, 'data.eth', []),
      pool => pool && pool.collateralAddress === vaultAddress,
    )
    if (currentPool.tradingApy > 0) {
      apy = currentPool.tradingApy
    } else {
      apy = 0
    }
  }
  return apy
}

module.exports = {
  getTradingApy,
}
