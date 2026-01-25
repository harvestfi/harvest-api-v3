const { web3 } = require('../../lib/web3')

const univ3FactoryContractData = require('../../lib/web3/contracts/uniswap-v3-factory/contract.json')
const univ3PoolContractData = require('../../lib/web3/contracts/uniswap-v3-pool/contract.json')

const { Token, Fraction } = require('@uniswap/sdk-core')

const { UI_DATA_FILES } = require('../../lib/constants')
const { getUIData } = require('../../lib/data')

const { getPool } = require('../../lib/web3/contracts/uniswap-v3-factory/methods')
const { getSlot } = require('../../lib/web3/contracts/uniswap-v3-pool/methods')
const { tickToPrice } = require('@uniswap/v3-sdk')

const univ3ContractData = require('../../lib/web3/contracts/uniswap-v3/contract.json')
const uniVaultStorageContractData = require('../../lib/web3/contracts/univault-storage/contract.json')
const { getStorage } = require('../../lib/web3/contracts/uniswap-v3/methods')
const { getPosId: getUniV3PosId } = require('../../lib/web3/contracts/univault-storage/methods')
const { getCachedContract } = require('../../lib/web3/contractCache')

const { getTokenPrice } = require('..')

const getPrice = async (firstToken, secondToken, fee = 500, chainId = 1) => {
  const tokens = await getUIData(UI_DATA_FILES.TOKENS)
  const firstTokenData = tokens[firstToken]
  const secondTokenData = tokens[secondToken]

  const factoryInstance = getCachedContract({
    web3,
    abi: univ3FactoryContractData.abi,
    address: univ3FactoryContractData.address.mainnet,
  })
  const univ3PoolAddress = await getPool(
    firstTokenData.tokenAddress,
    secondTokenData.tokenAddress,
    fee,
    factoryInstance,
  )

  const univ3PoolInstance = getCachedContract({
    web3,
    abi: univ3PoolContractData.abi,
    address: univ3PoolAddress,
  })
  const univ3PoolSlotData = await getSlot(univ3PoolInstance)

  const baseTokenInstance = new Token(
    chainId,
    firstTokenData.tokenAddress,
    Number(firstTokenData.decimals),
  )
  const quoteTokenInstance = new Token(
    chainId,
    secondTokenData.tokenAddress,
    Number(secondTokenData.decimals),
  )

  const priceData = await tickToPrice(
    baseTokenInstance,
    quoteTokenInstance,
    Number(univ3PoolSlotData.tick),
  )

  let price = new Fraction(priceData.numerator, priceData.denominator)
    .multiply(priceData.scalar)
    .toFixed(7)

  if (secondToken == 'WETH') {
    const ethPrice = await getTokenPrice('WETH')
    price = price * ethPrice
  }

  return price
}

const getPosId = async (contractAddress, web3Instance) => {
  const univ3Instance = getCachedContract({
    web3: web3Instance,
    abi: univ3ContractData.abi,
    address: contractAddress,
  })
  const dataContractAddress = await getStorage(univ3Instance)
  const dataContractInstance = getCachedContract({
    web3: web3Instance,
    abi: uniVaultStorageContractData.abi,
    address: dataContractAddress,
  })
  return await getUniV3PosId(dataContractInstance)
}

module.exports = {
  getPrice,
  getPosId,
}
