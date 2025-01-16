const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../web3')
const {
  token: tokenContractData,
  plasmaVault: plasmaVaultData,
  plasmaFuse,
} = require('../web3/contracts')
const { UI_DATA_FILES } = require('../constants')
const { fetchAndExpandVault } = require('../../vaults')
const { getUIData } = require('../data')

const getPlasmaVaultData = async (underlying, pVault, chain) => {
  const web3 = await getWeb3(chain)
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)

  const { methods, contract } = plasmaVaultData
  const {
    methods: { getMarketId },
    contract: { abi: fuseAbi },
  } = plasmaFuse
  const {
    methods: { getDecimals },
    contract: { abi: tokenAbi },
  } = tokenContractData
  const pVaultInstance = new web3.eth.Contract(contract.abi, pVault)
  const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
  const underlyingDecimal = await getDecimals(underlyingInstance)

  const fuses = await methods.getInstantWithdrawalFuses(pVaultInstance)
  const allocDatas = []
  let assetsOld = new BigNumber(0),
    assetsNew = new BigNumber(0)
  if (fuses && fuses.length > 0) {
    await Promise.all(
      fuses.map(async (fuse, index) => {
        const fuseInstance = new web3.eth.Contract(fuseAbi, fuse)
        const marketId = await getMarketId(fuseInstance)
        const pVaultData = await methods.getInstantWithdrawalFusesParams(
          pVaultInstance,
          fuse,
          index,
        )
        const hVaultAddress = '0x' + pVaultData[1].slice(2).replace(/^0+/, '')

        const hVaultId = Object.keys(tokens).find(
          tokenKey => tokens[tokenKey]?.vaultAddress?.toLowerCase() === hVaultAddress.toLowerCase(),
        )
        const hVaultData = await fetchAndExpandVault(hVaultId)
        const underlyingAssetsInMarket = new BigNumber(
          await methods.getAssetsInMarket(pVaultInstance, marketId),
        ).div(10 ** underlyingDecimal)
        assetsOld = assetsOld.plus(underlyingAssetsInMarket)
        assetsNew = assetsNew.plus(
          underlyingAssetsInMarket.times(100 + Number(hVaultData?.estimatedApy)).div(100),
        )
        const allocData = {
          hVaultId,
          allocPoint: underlyingAssetsInMarket,
        }
        allocDatas.push(allocData)
      }),
    )
  }
  allocDatas.forEach(data => {
    const pastAllocPoint = data.allocPoint
    data.allocPoint = pastAllocPoint.div(assetsOld).times(100).toFixed()
  })

  const apy = assetsNew.minus(assetsOld).div(assetsOld).multipliedBy(100).toFixed(2, 1)

  return {
    allocDatas,
    apy,
  }
}

module.exports = {
  getPlasmaVaultData,
}
