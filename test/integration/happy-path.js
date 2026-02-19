const request = require('supertest')
const assert = require('chai').assert
const axios = require('axios')

const initDb = require('../../src/lib/db')
const { Cache, clearAllDataTestOnly } = require('../../src/lib/db/models/cache')
const { getStartTimestamp } = require('../../src/lib/utils')

const app = require('../../src/runtime/app')
const { sleep, assertValidPositiveNumber, assertIsDate } = require('./utils')
const harvestKey = 'harvest-key'
const testPort = 3000
const { tokens: tokensJson, pools: poolsJson } = require('../../data/index.js')

describe('Happy Paths', function () {
  let appServer, allVaultsJsonArray
  before(async function () {
    await initDb()
    await clearAllDataTestOnly(Cache)

    allVaultsJsonArray = Object.keys(tokensJson)
      .filter(token => tokensJson[token].vaultAddress)
      .map(token => tokensJson[token])

    appServer = app()

    const getVaultCount = data =>
      ['eth', 'matic', 'arbitrum', 'base', 'zksync', 'hyperevm'].reduce(
        (count, chain) => count + Object.keys(data?.[chain] || {}).length,
        0,
      )

    const getPoolCount = data =>
      ['eth', 'matic', 'arbitrum', 'base', 'zksync', 'hyperevm'].reduce(
        (count, chain) => count + (data?.[chain]?.length || 0),
        0,
      )

    let attempts = 0
    const maxAttempts = 90
    while (attempts < maxAttempts) {
      try {
        const [
          vaultsResponse,
          poolsResponse,
          revenueResponse,
          buybacksResponse,
        ] = await Promise.all([
          axios.get(`http://localhost:${testPort}/vaults?key=${harvestKey}`),
          axios.get(`http://localhost:${testPort}/pools?key=${harvestKey}`),
          axios.get(`http://localhost:${testPort}/revenue/total?key=${harvestKey}`),
          axios.get(`http://localhost:${testPort}/buybacks/total?key=${harvestKey}`),
        ])

        const allVaultsLoaded = getVaultCount(vaultsResponse.data) === allVaultsJsonArray.length
        const allPoolsLoaded = getPoolCount(poolsResponse.data) === poolsJson.length
        const revenueReady =
          Number.isFinite(Number(revenueResponse.data)) && Number(revenueResponse.data) > 0
        const buybacksReady =
          Number.isFinite(Number(buybacksResponse.data)) && Number(buybacksResponse.data) > 0

        if (allVaultsLoaded && allPoolsLoaded && revenueReady && buybacksReady) {
          break
        }
      } catch (error) {
        // API is still warming up, keep polling
      }

      attempts += 1
      console.log('Still loading. Waiting...')
      await sleep(5000)
    }

    if (attempts === maxAttempts) {
      throw new Error('Timed out waiting for API data to finish loading')
    }

    console.log('Loaded. Running tests...')
  })

  after(async function () {
    appServer.close()
    console.log('Tested completed.')
  })

  describe('Internal ACTIVE_ENDPOINTS', function () {
    it('queries /vaults', function () {
      return request(`http://localhost:${testPort}`)
        .get(`/vaults?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert.exists(res.body.base)
          assert.exists(res.body.arbitrum)
          assert.exists(res.body.matic)
          assert.exists(res.body.eth)
          assert.exists(res.body.zksync)
          assert.exists(res.body.hyperevm)
          assert.equal(
            Object.keys(res.body.matic).length +
              Object.keys(res.body.eth).length +
              Object.keys(res.body.arbitrum).length +
              Object.keys(res.body.base).length +
              Object.keys(res.body.zksync).length +
              Object.keys(res.body.hyperevm).length,
            allVaultsJsonArray.length,
          )
        })
    })

    it('queries /pools', function () {
      return request(`http://localhost:${testPort}`)
        .get(`/pools?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert(res.body.base)
          assert(res.body.arbitrum)
          assert(res.body.matic)
          assert(res.body.eth)
          assert(res.body.zksync)
          assert(res.body.hyperevm)
          assert.equal(
            res.body.matic.length +
              res.body.eth.length +
              res.body.arbitrum.length +
              res.body.base.length +
              res.body.zksync.length +
              res.body.hyperevm.length,
            poolsJson.length,
          )
        })
    })
  })

  describe('External ACTIVE_ENDPOINTS', () => {
    it('queries /tvl', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/tvl?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert(res.body['1'])
          assert(res.body['137'])
          assert(res.body['42161'])
          assert(res.body['8453'])
          assert(res.body['324'])
          assert(res.body['999'])
          assert(res.body.FARM)

          const chainsWithTvlData = ['1', '137', '42161', '8453', '324', '999'].filter(
            chainId => Array.isArray(res.body[chainId]) && res.body[chainId].length > 0,
          )
          assert.isAtLeast(chainsWithTvlData.length, 1)

          const referenceChain = chainsWithTvlData[0]
          const referenceTimestamp = getStartTimestamp(
            parseInt(res.body[referenceChain][res.body[referenceChain].length - 1].timestamp, 10),
          )

          for (const chainId of chainsWithTvlData.slice(1)) {
            const chainTimestamp = getStartTimestamp(
              parseInt(res.body[chainId][res.body[chainId].length - 1].timestamp, 10),
            )
            assert.equal(chainTimestamp, referenceTimestamp)
          }
        })
    })
    it('queries /nanoly', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/nanoly?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert.isObject(res.body)
        })
    })

    it('queries /token-stats', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/token-stats?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.body.percentStaked)
          assertValidPositiveNumber(res.body.totalGasSaved)
          assertValidPositiveNumber(res.body.totalMarketCap)
        })
    })

    it('queries /revenue/total', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/revenue/total?key=${harvestKey}`)
        .expect('Content-Type', /text/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.text)
        })
    })

    it('queries /revenue/{token}', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/revenue/DAI?key=${harvestKey}`)
        .expect('Content-Type', /text/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.text)
        })
    })

    it('queries /buybacks/total', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/buybacks/total?key=${harvestKey}`)
        .expect('Content-Type', /text/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.text)
        })
    })

    it('queries /buybacks/per-network', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/buybacks/per-network?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.body.matic)
          assertValidPositiveNumber(res.body.eth)
        })
    })

    it('queries /buybacks/per-vault', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/buybacks/per-vault?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert.equal(Object.keys(res.body).length, allVaultsJsonArray.length)
        })
    })

    it('queries /buybacks/{token}', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/buybacks/DAI?key=${harvestKey}`)
        .expect('Content-Type', /text/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.text)
        })
    })

    it('queries /gmv/total', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/gmv/total?key=${harvestKey}`)
        .expect('Content-Type', /text/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.text)
        })
    })

    it('queries /gmv/{token}', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/gmv/DAI?key=${harvestKey}`)
        .expect('Content-Type', /text/)
        .expect(200)
        .then(res => {
          assertValidPositiveNumber(res.text)
        })
    })

    it('queries /health', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/health?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert.exists(res.body.vaults)
          assert.exists(res.body.pools)
          assertIsDate(res.body.vaults.updatedAt)
          assertIsDate(res.body.pools.updatedAt)
        })
    })

    it('queries /tokens-info', () => {
      return request(`http://localhost:${testPort}`)
        .get(`/tokens-info?key=${harvestKey}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          assert.exists(res.body.cmc)
          assert.exists(res.body.tokenStats)
          assert.exists(res.body.monthly)
        })
    })
  })
})
