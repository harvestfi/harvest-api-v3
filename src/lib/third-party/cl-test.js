const { clVault, clWrapper } = require('../web3/contracts')
const { web3BASE } = require('../web3')
const { Cache, storeData } = require('../db/models/cache')
const { DB_CACHE_IDS } = require('../constants')
const { get } = require('lodash')

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
  }

  let data = {}
  for (let vault of vaults) {
    const vaultContr = new web3.eth.Contract(vaultAbi, vault)
    const wrapper0 = new web3.eth.Contract(wrapperAbi, wrappers[vault][0])
    const wrapper1 = new web3.eth.Contract(wrapperAbi, wrappers[vault][1])

    const currentTick = await vaultMethods.getCurrentTick(vaultContr)
    const upperTick = await vaultMethods.getUpperTick(vaultContr)
    const lowerTick = await vaultMethods.getLowerTick(vaultContr)
    const tokenWeights = await vaultMethods.getTokenWeights(vaultContr)

    const token0 = await wrapperMethods.getAsset(wrapper0)
    const valueIn0 = await wrapperMethods.getTotalAssets(wrapper0)

    const token1 = await wrapperMethods.getAsset(wrapper1)
    const valueIn1 = await wrapperMethods.getTotalAssets(wrapper1)

    data[vault] = {
      ticks: [currentTick, upperTick, lowerTick],
      tokens: [token0, token1],
      weights: [tokenWeights[0], tokenWeights[1]],
      values: [valueIn0, valueIn1],
    }
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
