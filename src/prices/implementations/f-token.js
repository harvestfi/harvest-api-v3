const BigNumber = require('bignumber.js')

const { getTokenPrice } = require('../')

const { getWeb3 } = require('../../lib/web3')
const { getUIData } = require('../../lib/data')
const logger = require('../../lib/logger')

const { vault: vaultContractData } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')

const { UI_DATA_FILES, CHAIN_IDS } = require('../../lib/constants')

const getPrice = async (tokenAddress, tokenDecimals, chain = CHAIN_IDS.ETH) => {
  const {
    contract: { abi: vaultAbi },
    methods: { getPricePerFullShare },
  } = vaultContractData

  const tokens = await getUIData(UI_DATA_FILES.TOKENS)

  const web3Instance = getWeb3(chain)
  const fTokenVaultInstance = getCachedContract({
    web3: web3Instance,
    abi: vaultAbi,
    address: tokenAddress,
  })

  let tokenSymbol = Object.keys(tokens).find(
    token => tokens[token].vaultAddress === tokenAddress && tokens[token].chain === chain,
  )
  if (tokenSymbol == 'IFARM') {
    tokenSymbol = 'FARM'
  }

  const underlyingTokenPrice = new BigNumber(await getTokenPrice(tokenSymbol, chain))

  try {
    const vaultSharePrice = await getPricePerFullShare(fTokenVaultInstance)

    const fTokenPrice = new BigNumber(vaultSharePrice)
      .multipliedBy(underlyingTokenPrice)
      .dividedBy(new BigNumber(10).exponentiatedBy(tokenDecimals))

    return fTokenPrice.toString(10)
  } catch (err) {
    logger.warn(
      `getPricePerFullShare reverted for vault ${tokenAddress} (${tokenSymbol}); using underlying USD price as 1:1 share fallback`,
      err,
    )
    return underlyingTokenPrice.toString(10)
  }
}

module.exports = {
  getPrice,
}
