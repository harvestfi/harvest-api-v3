const { clVault, clWrapper } = require('../web3/contracts')
const { web3BASE } = require('../web3')
const { Cache, storeData } = require('../db/models/cache')
const { DB_CACHE_IDS, CHAIN_IDS } = require('../constants')
const { get } = require('lodash')
const { getCachedContract } = require('../web3/contractCache')
const { getPrice: getCLVaultPrice } = require('../../prices/implementations/cl-vault')

const toMongoSafe = v => {
  if (typeof v === 'bigint') return v.toString()
  if (Array.isArray(v)) return v.map(toMongoSafe)
  if (v && typeof v === 'object') {
    // BigNumber.js
    if (typeof v.toFixed === 'function') return v.toFixed()
    // web3 utils BN-like sometimes
    if (typeof v.toString === 'function' && v.constructor?.name?.includes('BN')) return v.toString()
    // generic object
    const out = {}
    for (const [k, val] of Object.entries(v)) out[k] = toMongoSafe(val)
    return out
  }
  return v
}

const getCLData = async () => {
  console.log('\n-- Getting CL test data --')

  const web3 = web3BASE
  const {
    contract: { abi: vaultAbi },
    methods: vaultMethods,
  } = clVault
  const {
    contract: { abi: wrapperAbi },
    methods: wrapperMethods,
  } = clWrapper

  const vaults = [
    '0xF1d5630B646E2D3AfC1fC31F057df349620F48eC',
    '0xF83648Df279004CdcEee1bEE3a92b9194Cd3b94E',
  ]
  const wrappers = {
    '0xF1d5630B646E2D3AfC1fC31F057df349620F48eC': [
      '0x8D85fD0E10E9AE713205fB2cEb523214CA86C861',
      '0x2cBC31d2aF935663ca4df91fDF2F048FFA651e24',
    ],
    '0xF83648Df279004CdcEee1bEE3a92b9194Cd3b94E': [
      '0x8Cda67F188a341BcC71ED126777A9fAD7bb05469',
      '0x645Ae5De61D5E586440C22595c32fEf6631c4006',
    ],
  }

  let data = {}
  for (let vault of vaults) {
    const vaultContr = getCachedContract({ web3, abi: vaultAbi, address: vault })
    const wrapper0 = getCachedContract({ web3, abi: wrapperAbi, address: wrappers[vault][0] })
    const wrapper1 = getCachedContract({ web3, abi: wrapperAbi, address: wrappers[vault][1] })

    const upperTick = await vaultMethods.getUpperTick(vaultContr)
    const lowerTick = await vaultMethods.getLowerTick(vaultContr)
    const tokenWeights = await vaultMethods.getTokenWeights(vaultContr)
    const liquidity = await vaultMethods.getLiquidity(vaultContr)

    const token0 = await wrapperMethods.getAsset(wrapper0)
    const valueIn0 = await wrapperMethods.getTotalAssets(wrapper0)

    const token1 = await wrapperMethods.getAsset(wrapper1)
    const valueIn1 = await wrapperMethods.getTotalAssets(wrapper1)

    const totalSupply = await vaultMethods.getTotalSupply(vaultContr)
    let priceUsd = '0'
    try {
      priceUsd = await getCLVaultPrice(vault, CHAIN_IDS.BASE)
    } catch (e) {
      console.error(`cl-test: failed to compute priceUsd for ${vault}`, e)
    }

    data[vault] = toMongoSafe({
      ticks: [upperTick, lowerTick],
      tokens: [token0, token1],
      weights: [tokenWeights[0], tokenWeights[1]],
      values: [valueIn0, valueIn1],
      liquidity: liquidity,
      totalSupply: totalSupply,
      priceUsd: priceUsd,
    })
  }

  const now = Date.now()
  const cacheData = await Cache.findOne({ type: DB_CACHE_IDS.CL_DATA })
  let allData = get(cacheData, 'data', {})
  allData[now] = data

  await storeData(Cache, DB_CACHE_IDS.CL_DATA, allData, false)

  console.log('-- Done getting CL test data --\n')
}

module.exports = {
  getCLData,
}
