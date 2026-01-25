const { getWeb3 } = require('../../lib/web3')

const { get } = require('lodash')
const BigNumber = require('bignumber.js')

const { token: tokenContractData } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')
const { UI_DATA_FILES } = require('../../lib/constants')
const { getUIData } = require('../../lib/data')
const { getTokenPrice } = require('..')

const getPrice = async (
  tokenContractAddress,
  firstToken,
  secondToken,
  thirdToken,
  sanctuaryContractAddress,
) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const {
    methods: { getTotalSupply, getBalance },
    contract: { abi },
  } = tokenContractData

  if (!sanctuaryContractAddress) {
    // sanctuaryContractAddress = where firstToken, secondToken, thirdToken are stored
    sanctuaryContractAddress = tokenContractAddress
  }

  const chainId = get(tokens, `[${firstToken}].chain`)
  const web3Instance = getWeb3(chainId)

  const firstInstance = getCachedContract({
    web3: web3Instance,
    abi,
    address: tokens[firstToken].tokenAddress,
  })
  const allFirstAssetInWei = new BigNumber(
    await getBalance(sanctuaryContractAddress, firstInstance),
  )

  const secondInstance = getCachedContract({
    web3: web3Instance,
    abi,
    address: tokens[secondToken].tokenAddress,
  })
  const allSecondAssetInWei = new BigNumber(
    await getBalance(sanctuaryContractAddress, secondInstance),
  )

  const thirdInstance = getCachedContract({
    web3: web3Instance,
    abi,
    address: tokens[thirdToken].tokenAddress,
  })
  const allThirdAssetInWei = new BigNumber(
    await getBalance(sanctuaryContractAddress, thirdInstance),
  )

  const tokenInstance = getCachedContract({
    web3: web3Instance,
    abi,
    address: tokenContractAddress,
  })
  const totalSupplyInWei = new BigNumber(await getTotalSupply(tokenInstance))

  const pricePerFirstAsset = new BigNumber(await getTokenPrice(firstToken))
  const pricePerSecondAsset = new BigNumber(await getTokenPrice(secondToken))
  const pricePerThirdAsset = new BigNumber(await getTokenPrice(thirdToken))

  if (totalSupplyInWei.isEqualTo(0)) {
    return new BigNumber('0')
  }

  const allFirstAssetInUSD = pricePerFirstAsset
    .multipliedBy(allFirstAssetInWei)
    .dividedBy(totalSupplyInWei)
    .multipliedBy(new BigNumber(10).exponentiatedBy(18 - tokens[firstToken].decimals))

  const allSecondAssetInUSD = pricePerSecondAsset
    .multipliedBy(allSecondAssetInWei)
    .dividedBy(totalSupplyInWei)
    .multipliedBy(new BigNumber(10).exponentiatedBy(18 - tokens[secondToken].decimals))

  const allThirdAssetInUSD = pricePerThirdAsset
    .multipliedBy(allThirdAssetInWei)
    .dividedBy(totalSupplyInWei)
    .multipliedBy(new BigNumber(10).exponentiatedBy(18 - tokens[thirdToken].decimals))

  const res = allFirstAssetInUSD.plus(allSecondAssetInUSD).plus(allThirdAssetInUSD).toString(10)
  return res
}

module.exports = {
  getPrice,
}
