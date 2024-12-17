const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../lib/web3')
const { plasmaVault } = require('../lib/web3/contracts')
const { executeEstimateApyFunctions } = require('./apys')
const { getTokenPrice } = require('../prices')
const { omit } = require('lodash')
const { UI_DATA_FILES } = require('../lib/constants')
const { getUIData } = require('../lib/data')
const { getPlasmaVaultData } = require('../lib/third-party/ipor.js')

const fetchAndExpandIPORVault = async symbol => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)

  const {
    methods: { decimals, getTotalSupply: getTotalSupplyPlasma, getTotalAssets },
    contract: { abi },
  } = plasmaVault

  const web3Instance = getWeb3(tokens[symbol].chain)

  let pricePerFullShare = null,
    usdPrice = null,
    totalValueLocked = null

  const vaultData = tokens[symbol]
  vaultData.id = symbol

  const vaultInstance = new web3Instance.eth.Contract(abi, vaultData.vaultAddress)

  const vaultDecimal = await decimals(vaultInstance)
  const totalSupply = new BigNumber(await getTotalSupplyPlasma(vaultInstance))
    .div(new BigNumber(10).exponentiatedBy(Number(vaultDecimal)))
    .toString()
  const totalAssets = new BigNumber(await getTotalAssets(vaultInstance)).div(
    new BigNumber(10).exponentiatedBy(Number(vaultData.decimals)),
  )

  pricePerFullShare = new BigNumber(1)
    .times(new BigNumber(10).exponentiatedBy(Number(vaultData.decimals)))
    .dividedBy(totalSupply)
    .times(totalAssets)
    .toFixed(2, 1)

  const { estimatedApy, estimatedApyBreakdown } = await executeEstimateApyFunctions(
    symbol,
    vaultData.estimateApyFunctions,
  )

  const allocPoints = await getPlasmaVaultData(...tokens[symbol].estimateApyFunctions[0].params)

  usdPrice = (await getTokenPrice(symbol)).toString()

  totalValueLocked = new BigNumber(totalAssets).multipliedBy(usdPrice).toString()

  return {
    ...omit(vaultData, ['priceFunction', 'estimateApyFunctions', 'inactive']),
    pricePerFullShare,
    estimatedApy,
    estimatedApyBreakdown,
    usdPrice,
    totalSupply,
    totalValueLocked,
    allocPointData: allocPoints.allocDatas,
    inactive: vaultData.inactive ? vaultData.inactive : false,
  }
}

const getIPORVaultsData = async vaultsToFetch =>
  Promise.all(vaultsToFetch.map(fetchAndExpandIPORVault))

module.exports = {
  getIPORVaultsData,
  fetchAndExpandIPORVault,
}
