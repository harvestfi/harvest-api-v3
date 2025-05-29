const { PROFIT_SHARING_POOL_ID, UI_DATA_FILES } = require('../../../lib/constants')
const { fetchAndExpandPool } = require('../../../pools')
const { getUIData } = require('../../../lib/data')

const getApy = async () => {
  const pools = await getUIData(UI_DATA_FILES.POOLS)
  const poolToFetch = pools.find(pool => pool.id === PROFIT_SHARING_POOL_ID)
  const pool = await fetchAndExpandPool(poolToFetch)
  return pool.rewardAPY[0]
}

module.exports = {
  getApy,
}
