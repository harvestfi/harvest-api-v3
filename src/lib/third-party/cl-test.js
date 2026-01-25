const { clVault, clWrapper } = require('../web3/contracts')
const { web3BASE } = require('../web3')
const { Cache, storeData } = require('../db/models/cache')
const { DB_CACHE_IDS } = require('../constants')
const { get } = require('lodash')
const { getCachedContract } = require('../web3/contractCache')

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
    '0xcc00Dd51b3aE372A5450031c9261052da9521FC3',
    '0xEC0c0007eE5872268997a92C07AAeC5FF5eB6A3c',
    '0x8FfF1A092F187f7B137CE513281143F3219D3352',
    '0x86b8E5fc263e3760A44886fD50E9279e31eDdF4F',
    '0x8611053A05080914E72D0C84fF95a11d10EdF36E',
  ]
  const wrappers = {
    '0xcc00Dd51b3aE372A5450031c9261052da9521FC3': [
      '0x4177A55bD35098fe893F52F7985aeEEcCE086825',
      '0x2E676D3e5840bC7Eccd4d1E29dD4e390a6578092',
    ],
    '0xEC0c0007eE5872268997a92C07AAeC5FF5eB6A3c': [
      '0x09cEbe390d2cd46E2919c6d87b5d5A23601A4033',
      '0x0D30Fa6f32f1FE83C8461B66498Aec00A96B698a',
    ],
    '0x8FfF1A092F187f7B137CE513281143F3219D3352': [
      '0x1D6Fd9C383B1D8fa5a958F639A6B622C379A5e8b',
      '0x7a43d01FC23F0CC061EC57ad1a6c1bED076E8448',
    ],
    '0x86b8E5fc263e3760A44886fD50E9279e31eDdF4F': [
      '0x781Ca258fAf45B2490d4018a3cfDB45Cb8ADE650',
      '0xE3DCe2393D35aB86ACf5821CE6554b51D0738f80',
    ],
    '0x8611053A05080914E72D0C84fF95a11d10EdF36E': [
      '0x986fD02d727Fd489a32E9786D4Cd8ab29BAd5Bd0',
      '0xa2faA0afE3321F820E8C1A9562288AFF9d4cB95d',
    ],
  }

  let data = {}
  for (let vault of vaults) {
    const vaultContr = getCachedContract({ web3, abi: vaultAbi, address: vault })
    const wrapper0 = getCachedContract({ web3, abi: wrapperAbi, address: wrappers[vault][0] })
    const wrapper1 = getCachedContract({ web3, abi: wrapperAbi, address: wrappers[vault][1] })

    const currentTick = await vaultMethods.getCurrentTick(vaultContr)
    const upperTick = await vaultMethods.getUpperTick(vaultContr)
    const lowerTick = await vaultMethods.getLowerTick(vaultContr)
    const tokenWeights = await vaultMethods.getTokenWeights(vaultContr)
    const liquidity = await vaultMethods.getLiquidity(vaultContr)

    const token0 = await wrapperMethods.getAsset(wrapper0)
    const valueIn0 = await wrapperMethods.getTotalAssets(wrapper0)

    const token1 = await wrapperMethods.getAsset(wrapper1)
    const valueIn1 = await wrapperMethods.getTotalAssets(wrapper1)

    data[vault] = toMongoSafe({
      ticks: [currentTick, upperTick, lowerTick],
      tokens: [token0, token1],
      weights: [tokenWeights[0], tokenWeights[1]],
      values: [valueIn0, valueIn1],
      liquidity: liquidity,
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
