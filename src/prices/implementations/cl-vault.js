const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { clVault, token } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')
const { getTokenPriceByAddress } = require('../coingecko')
const { CHAIN_IDS } = require('../../lib/constants')

const valueInUsd = async (web3, tokenAddress, amount, chain) => {
  const amountBn = new BigNumber(amount)
  if (amountBn.isZero()) {
    return new BigNumber(0)
  }

  const tokenInstance = getCachedContract({ web3, abi: token.contract.abi, address: tokenAddress })
  const decimals = Number(await token.methods.getDecimals(tokenInstance))
  const price = new BigNumber(await getTokenPriceByAddress(tokenAddress, chain))

  return amountBn.times(price).div(new BigNumber(10).pow(decimals))
}

const getPrice = async (vaultAddress, underlyingAddress, chain = CHAIN_IDS.BASE) => {
  const web3 = getWeb3(chain)
  const { methods: vaultMethods, contract: vaultContract } = clVault

  const vaultInstance = getCachedContract({ web3, abi: vaultContract.abi, address: vaultAddress })

  const totalSupply = new BigNumber(await vaultMethods.getTotalSupply(vaultInstance))
  if (totalSupply.isZero()) {
    return '0'
  }

  const vaultDecimals = Number(await vaultMethods.getDecimals(vaultInstance))
  const token0 = await vaultMethods.getToken0(vaultInstance)
  const token1 = await vaultMethods.getToken1(vaultInstance)
  const amounts = await vaultMethods.getCurrentTokenAmounts(vaultInstance)

  const usd0 = await valueInUsd(web3, token0, amounts.amount0, chain)
  const usd1 = await valueInUsd(web3, token1, amounts.amount1, chain)
  const positionUsd = usd0.plus(usd1)

  const shares = totalSupply.div(new BigNumber(10).pow(vaultDecimals))
  const price = positionUsd.div(shares)

  if (!price.isFinite() || price.isLessThan(0)) {
    return '0'
  }

  return price.toFixed()
}

module.exports = {
  getPrice,
}
