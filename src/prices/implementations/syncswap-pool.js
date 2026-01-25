const BigNumber = require('bignumber.js')
const { web3ZKSYNC } = require('../../lib/web3')
const { syncswapPool, token: tokenContractData } = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')
const { getTokenPrice } = require('..')
const { CHAIN_IDS } = require('../../lib/constants')

const getPrice = async poolAddress => {
  const { methods: poolMethods, contract: poolContract } = syncswapPool
  const {
    methods: { getDecimals, getTotalSupply },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const web3 = web3ZKSYNC
  const poolInstance = getCachedContract({
    web3,
    abi: poolContract.abi,
    address: poolAddress,
  })

  const token0 = await poolMethods.getToken0(poolInstance)
  const token1 = await poolMethods.getToken1(poolInstance)
  const token0Price = new BigNumber(await getTokenPrice(token0, CHAIN_IDS.ZKSYNC))
  const token1Price = new BigNumber(await getTokenPrice(token1, CHAIN_IDS.ZKSYNC))

  const token0Instance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: token0,
  })
  const token0Decimals = await getDecimals(token0Instance)
  const token1Instance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: token1,
  })
  const token1Decimals = await getDecimals(token1Instance)
  const lpTokenInstance = getCachedContract({
    web3,
    abi: tokenAbi,
    address: poolAddress,
  })
  const lpTokenDecimals = await getDecimals(lpTokenInstance)

  const reserves = await poolMethods.getReserves(poolInstance)
  const token0Amount = new BigNumber(reserves[0]).div(new BigNumber(10).pow(Number(token0Decimals)))
  const token1Amount = new BigNumber(reserves[1]).div(new BigNumber(10).pow(Number(token1Decimals)))

  const totalSupply = new BigNumber(await getTotalSupply(lpTokenInstance)).div(
    new BigNumber(10).pow(Number(lpTokenDecimals)),
  )
  const totalValue = token0Amount.times(token0Price).plus(token1Amount.times(token1Price))
  return totalValue.div(totalSupply).toFixed()
}

module.exports = {
  getPrice,
}
