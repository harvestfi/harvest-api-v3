const { get, find } = require('lodash')
const { Cache } = require('../../../lib/db/models/cache')
const { cache } = require('../../../lib/cache')
const { DB_CACHE_IDS, PROFIT_SHARING_POOL_ID } = require('../../../lib/constants')

const getTradingApy = async () => {
  const dbData = await Cache.find({
    type: { $in: [DB_CACHE_IDS.STATS, DB_CACHE_IDS.POOLS] },
  })

  const fetchedStats = dbData.find(result => result.type === DB_CACHE_IDS.STATS)
  const fetchedPools = dbData.find(result => result.type === DB_CACHE_IDS.POOLS)

  let profitShareAPY = get(fetchedStats, 'data.tokenStats.historicalAverageProfitSharingAPY', 0)

  if (!profitShareAPY) {
    profitShareAPY = get(
      find(get(fetchedPools, 'data.eth', []), pool => pool && pool.id === 'profit-sharing-farm'),
      'rewardAPY',
      get(cache.get(`poolRewardApy${PROFIT_SHARING_POOL_ID}`), 'apy', 0),
    )
  }
  return profitShareAPY
}

module.exports = {
  getTradingApy,
}
