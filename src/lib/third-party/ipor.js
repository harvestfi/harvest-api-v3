const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../web3')
const {
  token: tokenContractData,
  plasmaVault: plasmaVaultData,
  plasmaFuse,
} = require('../web3/contracts')
const { UI_DATA_FILES, DB_CACHE_IDS } = require('../constants')
const { fetchAndExpandVault } = require('../../vaults')
const { getUIData } = require('../data')
const { Cache } = require('../db/models/cache')
const { getCachedContract } = require('../web3/contractCache')

const getPlasmaVaultData = async (underlying, pVault, chain) => {
  const web3 = await getWeb3(chain)
  const poolsDoc = await Cache.collection.findOne({ type: DB_CACHE_IDS.POOLS })
  const statsDoc = await Cache.collection.findOne({ type: DB_CACHE_IDS.STATS })
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const pools = await getUIData(UI_DATA_FILES.POOLS)

  const { methods, contract } = plasmaVaultData
  const {
    methods: { getMarketId },
    contract: { abi: fuseAbi },
  } = plasmaFuse
  const {
    methods: { getDecimals, getBalance },
    contract: { abi: tokenAbi },
  } = tokenContractData
  const pVaultInstance = getCachedContract({ web3, abi: contract.abi, address: pVault })
  const underlyingInstance = getCachedContract({ web3, abi: tokenAbi, address: underlying })
  const underlyingDecimal = await getDecimals(underlyingInstance)

  const data = await methods.getManagementFeeData(pVaultInstance)
  const iporFee = new BigNumber(data.feeInPercentage ?? 0).div(200)

  const fuses = await methods.getInstantWithdrawalFuses(pVaultInstance)
  const allocDatas = []
  let assetsOld = new BigNumber(0),
    assetsNew = new BigNumber(0)
  if (fuses && fuses.length > 0) {
    await Promise.all(
      fuses.map(async (fuse, index) => {
        const fuseInstance = getCachedContract({ web3, abi: fuseAbi, address: fuse })
        const marketId = await getMarketId(fuseInstance)
        const substrates = await methods.getMarketSubstrates(pVaultInstance, marketId)
        if (!substrates || substrates.length === 0) {
          return
        }
        const pVaultData = await methods.getInstantWithdrawalFusesParams(
          pVaultInstance,
          fuse,
          index,
        )
        const hVaultAddress = '0x' + pVaultData[1].slice(-40)

        const hVaultId = Object.keys(tokens).find(
          tokenKey => tokens[tokenKey]?.vaultAddress?.toLowerCase() === hVaultAddress.toLowerCase(),
        )
        const hVaultData = await fetchAndExpandVault(hVaultId, poolsDoc, statsDoc, tokens, pools)
        const underlyingAssetsInMarket = new BigNumber(
          await methods.getAssetsInMarket(pVaultInstance, marketId),
        ).div(new BigNumber(10).pow(Number(underlyingDecimal)))
        assetsOld = assetsOld.plus(underlyingAssetsInMarket)
        assetsNew = assetsNew.plus(
          underlyingAssetsInMarket.times(100 + Number(hVaultData?.estimatedApy)).div(100),
        )
        const allocData = {
          hVaultId,
          allocPoint: underlyingAssetsInMarket,
          apy: hVaultData?.estimatedApy,
        }
        allocDatas.push(allocData)
      }),
    )
  }

  const notInvestedAmount = new BigNumber(await getBalance(pVault, underlyingInstance)).div(
    new BigNumber(10).pow(Number(underlyingDecimal)),
  )

  const notInvestedData = {
    hVaultId: 'Not invested',
    allocPoint: notInvestedAmount.lt(0) ? new BigNumber(0) : notInvestedAmount,
    apy: 0,
  }
  allocDatas.push(notInvestedData)

  allocDatas.forEach(data => {
    const pastAllocPoint = data.allocPoint
    const point = pastAllocPoint.div(assetsOld.plus(notInvestedAmount)).times(100)
    data.allocPoint = point.isNaN() ? '0' : point.toFixed()
  })

  const apy = assetsNew.minus(assetsOld).div(assetsOld).multipliedBy(100)

  return {
    allocDatas,
    apy: apy.isNaN() ? 0 : apy.toFixed(2) - iporFee.toFixed(),
  }
}

module.exports = {
  getPlasmaVaultData,
}
