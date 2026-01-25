const { getWeb3 } = require('../../lib/web3')

const { get, isArray, toArray } = require('lodash')
const BigNumber = require('bignumber.js')

const uniStatusViewerContractData = require('../../lib/web3/contracts/unistatus-viewer/contract.json')
const uniNonFungibleContractData = require('../../lib/web3/contracts/uni-non-fungible-manager/contract.json')
const { getAmountsForPosition } = require('../../lib/web3/contracts/unistatus-viewer/methods')
const { getPositions } = require('../../lib/web3/contracts/uni-non-fungible-manager/methods')
const { token: tokenContractData } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')
const { UI_DATA_FILES } = require('../../lib/constants')
const { getUIData } = require('../../lib/data')

const { getPosId } = require('./uniswap-v3.js')
const { getTokenPrice } = require('..')

const getPrice = async (contractAddress, firstToken, secondToken) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const {
    methods: { getTotalSupply, getBalance, getDecimals },
    contract: { abi },
  } = tokenContractData
  let allFirstAssetInWei, allSecondAssetInWei, totalSupplyInWei, pairDecimals

  const chainId = get(tokens, `[${firstToken}].chain`)
  const web3Instance = getWeb3(chainId)

  const isVault = toArray(tokens).find(token => token.vaultAddress === contractAddress)

  if (isVault && isArray(isVault.tokenAddress)) {
    const posId = await getPosId(contractAddress, web3Instance)

    const viewerContractInstance = getCachedContract({
      web3: web3Instance,
      abi: uniStatusViewerContractData.abi,
      address: uniStatusViewerContractData.address.mainnet,
    })
    const amountsForPosition = await getAmountsForPosition(posId, viewerContractInstance)

    allFirstAssetInWei = new BigNumber(amountsForPosition[0])
    allSecondAssetInWei = new BigNumber(amountsForPosition[1])

    const nonfungibleContractInstance = getCachedContract({
      web3: web3Instance,
      abi: uniNonFungibleContractData.abi,
      address: uniNonFungibleContractData.address.mainnet,
    })
    const positions = await getPositions(posId, nonfungibleContractInstance)

    totalSupplyInWei = new BigNumber(positions.liquidity)
    pairDecimals = 18
  } else {
    if (firstToken === 'ETH') {
      allFirstAssetInWei = new BigNumber(await web3Instance.eth.getBalance(contractAddress))
      firstToken = 'WETH'
    } else {
      const firstInstance = getCachedContract({
        web3: web3Instance,
        abi,
        address: tokens[firstToken].tokenAddress,
      })
      allFirstAssetInWei = new BigNumber(await getBalance(contractAddress, firstInstance))
    }

    const secondInstance = getCachedContract({
      web3: web3Instance,
      abi,
      address: tokens[secondToken].tokenAddress,
    })
    allSecondAssetInWei = new BigNumber(await getBalance(contractAddress, secondInstance))

    const tokenInstance = getCachedContract({
      web3: web3Instance,
      abi,
      address: contractAddress,
    })
    totalSupplyInWei = new BigNumber(await getTotalSupply(tokenInstance))
    pairDecimals = await getDecimals(tokenInstance)
  }

  const pricePerFirstAsset = new BigNumber(await getTokenPrice(firstToken))
  const pricePerSecondAsset = new BigNumber(await getTokenPrice(secondToken))

  if (totalSupplyInWei.isEqualTo(0)) {
    return new BigNumber('0')
  }

  const allFirstAssetInUSD = pricePerFirstAsset
    .multipliedBy(allFirstAssetInWei)
    .dividedBy(totalSupplyInWei)
    .multipliedBy(new BigNumber(10).exponentiatedBy(pairDecimals - tokens[firstToken].decimals))
  const allSecondAssetInUSD = pricePerSecondAsset
    .multipliedBy(allSecondAssetInWei)
    .dividedBy(totalSupplyInWei)
    .multipliedBy(new BigNumber(10).exponentiatedBy(pairDecimals - tokens[secondToken].decimals))
  return allFirstAssetInUSD.plus(allSecondAssetInUSD).toString(10)
}

module.exports = {
  getPrice,
}
