const BigNumber = require('bignumber.js')
const { token: tokenContractData } = require('../../lib/web3/contracts')
const { getWeb3 } = require('../../lib/web3')
const { getTokenPrice } = require('..')
const { UI_DATA_FILES } = require('../../lib/constants')
const { getUIData } = require('../../lib/data')

const getPrice = async (underlying, poolAddress, firstToken, secondToken, chain) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const {
    methods: { getTotalSupply, getBalance, getDecimals },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const provider = getWeb3(chain)

  const hypervisorInstance = new provider.eth.Contract(tokenAbi, underlying)

  const totalSupply = new BigNumber(await getTotalSupply(hypervisorInstance))
  const pairDecimals = await getDecimals(hypervisorInstance)

  const pricePerFirstAsset = new BigNumber(await getTokenPrice(firstToken))
  const firstInstance = new provider.eth.Contract(tokenAbi, tokens[firstToken].tokenAddress)
  const allFirstAsset = new BigNumber(await getBalance(poolAddress, firstInstance))

  const pricePerSecondAsset = new BigNumber(await getTokenPrice(secondToken))
  const secondInstance = new provider.eth.Contract(tokenAbi, tokens[secondToken].tokenAddress)
  const allSecondAsset = new BigNumber(await getBalance(poolAddress, secondInstance))

  const allFirstAssetInUSD = pricePerFirstAsset
    .multipliedBy(allFirstAsset)
    .dividedBy(totalSupply)
    .multipliedBy(new BigNumber(10).exponentiatedBy(pairDecimals - tokens[firstToken].decimals))
  const allSecondAssetInUSD = pricePerSecondAsset
    .multipliedBy(allSecondAsset)
    .dividedBy(totalSupply)
    .multipliedBy(new BigNumber(10).exponentiatedBy(pairDecimals - tokens[secondToken].decimals))

  return allFirstAssetInUSD.plus(allSecondAssetInUSD).toString(10)
}

module.exports = {
  getPrice,
}
