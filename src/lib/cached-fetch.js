const { cache } = require('./cache')
const logger = require('./logger')

// Third-party APIs that return a whole collection keyed by address were being fetched
// once per caller - one request per pool or vault, all in the same burst. That wasted
// bandwidth, tripped rate limits, and multiplied the odds that at least one of them hit a
// transient timeout. `getShared` collapses a burst of identical requests into one.
const inFlight = {}

const getShared = (key, ttlSeconds, fetcher) => {
  const cached = cache.get(key)

  if (cached) {
    return cached
  }

  if (!inFlight[key]) {
    inFlight[key] = Promise.resolve()
      .then(fetcher)
      .then(data => {
        cache.set(key, data, ttlSeconds)
        return data
      })
      .catch(err => {
        logger.error(`Shared fetch failed for ${key}: ${err?.message ?? err}`)
        return null
      })
      .finally(() => {
        delete inFlight[key]
      })
  }

  return inFlight[key]
}

module.exports = { getShared }
