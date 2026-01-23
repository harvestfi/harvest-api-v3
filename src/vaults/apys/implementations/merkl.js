const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { MERKL_ENDPOINT, DB_CACHE_IDS } = require('../../../lib/constants')
const { storeData, Cache } = require('../../../lib/db/models/cache')
const { mToken } = require('../../../lib/web3/contracts')
const { web3BASE } = require('../../../lib/web3')
const { client } = require('../../../lib/http')
const stringHash = require('string-hash')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getApy = async (userAddress, poolAddress, chainId, reduction, fold = false) => {
  let response,
    apy = 0

  try {
    let attempts = 0
    const maxAttempts = 3
    let success = false
    const url = `${MERKL_ENDPOINT}opportunity?campaigns=true&chainId=${chainId}&mainParameter=${poolAddress}`
    const cacheKey = `${url.replace(/\W/g, '')}-${stringHash(url)}`

    while (attempts < maxAttempts && !success) {
      attempts++

      try {
        response = await client.get(url)

        success = true
        try {
          await storeData(Cache, DB_CACHE_IDS.EXTERNAL_API, {
            [cacheKey]: {
              data: JSON.stringify(response.data),
              updatedAt: new Date(),
            },
          })
        } catch (cacheErr) {
          console.error('Failed to store response in cache:', cacheErr.message)
        }
      } catch (retryErr) {
        console.log(`Merkl API error on attempt ${attempts}:`, retryErr.message)

        if (retryErr.response && retryErr.response.status >= 500 && attempts < maxAttempts) {
          const delay = 1000 * attempts
          console.log(`Got 500 error, retrying in ${delay / 1000}s...`)
          await sleep(delay)
        } else if (attempts >= maxAttempts) {
          console.log('Maximum retry attempts reached')
          throw retryErr
        } else {
          console.log('Non-500 error, not retrying:', retryErr.message)
          throw retryErr
        }
      }
    }

    if (response && response.data) {
      const data = response.data
      if (Object.keys(data).length > 0) {
        const keys = Object.keys(data)
        for (let key of keys) {
          const apr = get(data, `${key}.apr`, 0)
          apy += parseFloat(apr)
        }
        apy = parseFloat(apy) * parseFloat(reduction)
        if (isNaN(apy)) {
          apy = 0
        }
      }
    }
  } catch (err) {
    console.error('MERKL API error: ', err)
    apy = 0
  }

  if (fold) {
    try {
      const {
        contract: { abi: mTokenAbi },
        methods: mTokenMethods,
      } = mToken
      const web3 = web3BASE

      const mTokenInstance = new web3.eth.Contract(mTokenAbi, poolAddress)
      const snapshot = await mTokenMethods.getAccountSnapshot(userAddress, mTokenInstance)

      const supplied = new BigNumber(snapshot[1]).times(snapshot[3]).div(1e18)
      const borrowed = new BigNumber(snapshot[2])
      const invested = supplied.minus(borrowed)
      let suppliedMul
      if (invested.gt(0)) {
        suppliedMul = supplied.div(invested)
      } else {
        suppliedMul = new BigNumber(1)
      }

      apy = apy * suppliedMul
    } catch (foldErr) {
      console.error('Error during fold calculation:', foldErr)
    }
  }

  return apy
}

module.exports = {
  getApy,
}
