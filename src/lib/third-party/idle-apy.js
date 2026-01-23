const { cache } = require('../cache')
const { cachedAxios } = require('../db/models/cache')
const logger = require('../logger')
// Idle.finance
const getIdleLendRate = tokenSymbol => {
  const storedLendApy = cache.get(`idle.lendRate.${tokenSymbol}`)

  if (storedLendApy) {
    return storedLendApy
  }

  return cachedAxios
    .get(`https://api.idle.finance/aprs`)
    .then(async res => {
      const desiredItem = res.data.lendRates
        ? res.data.lendRates.find(item => item.tokenSymbol === tokenSymbol)
        : null

      const lendApy = desiredItem ? desiredItem.apr * 100 : 0

      cache.set(`idle.lendRate.${tokenSymbol}`, lendApy)
      return lendApy
    })
    .catch(err => {
      logger.error('getIdleLendRate() failed:', err)
      return 0
    })
}

module.exports = getIdleLendRate
