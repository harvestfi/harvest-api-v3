const request = require('supertest')
const assert = require('chai').assert
const axios = require('axios')

const initDb = require('../../src/lib/db')
const { Cache, clearAllDataTestOnly } = require('../../src/lib/db/models/cache')

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

    let response = {
      data: {},
    }
    while (Object.keys(response.data).length < 3) {
      response = await axios.get(`http://localhost:${testPort}/leaderboard?key=${harvestKey}`)
      console.log('Still loading. Waiting...')
      await sleep(10000)
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
          assert.exists(res.body.tokenStats)
          assert.exists(res.body.monthly)
        })
    })
  })
})
