const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../lib/web3')
const { syncswapPool, token: tokenContractData } = require('../../lib/web3/contracts')
const { getTokenPrice } = require('..')
const { CHAIN_IDS } = require('../../lib/constants')

const getPrice = async poolAddress => {
  const { methods: poolMethods, contract: poolContract } = syncswapPool
  const {
    methods: { getDecimals, getTotalSupply },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const web3 = web3ZKSYNC
  const poolInstance = new web3.eth.Contract(poolContract.abi, poolAddress)

  const token0 = await poolMethods.getToken0(poolInstance)
  const token1 = await poolMethods.getToken1(poolInstance)
  const token0Price = new BigNumber(await getTokenPrice(token0, CHAIN_IDS.ZKSYNC))
  const token1Price = new BigNumber(await getTokenPrice(token1, CHAIN_IDS.ZKSYNC))

  const token0Instance = new web3.eth.Contract(tokenAbi, token0)
  const token0Decimals = await getDecimals(token0Instance)
  const token1Instance = new web3.eth.Contract(tokenAbi, token1)
  const token1Decimals = await getDecimals(token1Instance)
  const lpTokenInstance = new web3.eth.Contract(tokenAbi, poolAddress)
  const lpTokenDecimals = await getDecimals(lpTokenInstance)

  const reserves = await poolMethods.getReserves(poolInstance)
  const token0Amount = new BigNumber(reserves[0]).div(10 ** token0Decimals)
  const token1Amount = new BigNumber(reserves[1]).div(10 ** token1Decimals)

  const totalSupply = new BigNumber(await getTotalSupply(lpTokenInstance)).div(
    10 ** lpTokenDecimals,
  )
  const totalValue = token0Amount.times(token0Price).plus(token1Amount.times(token1Price))
  return totalValue.div(totalSupply).toFixed()
}

module.exports = {
  getPrice,
}
