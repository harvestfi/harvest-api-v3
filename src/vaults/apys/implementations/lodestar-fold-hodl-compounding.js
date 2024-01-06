const BigNumber = require('bignumber.js')
const { web3ARBITRUM } = require('../../../lib/web3')
const { getTokenPrice } = require('../../../prices')
const {
  lodestarCToken: cToken,
  lodestarComptroller: comptroller,
  token,
} = require('../../../lib/web3/contracts')
const { CHAIN_IDS } = require('../../../lib/constants')

const getARBRewardRate = async (comptrollerMethods, comptrollerInstance) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const markets = await comptrollerMethods.getAllMarkets(comptrollerInstance)
  let totalUSD = new BigNumber(0)
  for (let i in markets) {
    const market = markets[i]
    const cTokenInstance = new web3.eth.Contract(cTokenAbi, market)
    let underlying
    if (market == '0x2193c45244AF12C280941281c8aa67dD08be0a64') {
      underlying = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
    } else {
      underlying = await cTokenMethods.getUnderlying(cTokenInstance)
    }

    let totalSupply = new BigNumber(await cTokenMethods.totalSupply(cTokenInstance))
    const exchangeRate = new BigNumber(await cTokenMethods.getExchangeRate(cTokenInstance))
    totalSupply = totalSupply.times(exchangeRate).div(1e18)
    const totalBorrows = new BigNumber(await cTokenMethods.totalBorrows(cTokenInstance))

    const underlyingInstance = new web3.eth.Contract(tokenAbi, underlying)
    const underlyingDecimals = await getDecimals(underlyingInstance)

    const underlyingPrice = await getTokenPrice(underlying, CHAIN_IDS.ARBITRUM_ONE)

    const usdSupply = totalSupply.div(10 ** underlyingDecimals).times(underlyingPrice)
    const usdBorrow = totalBorrows.div(10 ** underlyingDecimals).times(underlyingPrice)

    totalUSD = totalUSD.plus(usdSupply).plus(usdBorrow)
  }

  const arb = '0x912CE59144191C1204E64559FE8253a0e49E6548'
  const arbPerWeek = new BigNumber(46875)
  const arbPrice = await getTokenPrice(arb, CHAIN_IDS.ARBITRUM_ONE)

  const usdPerWeek = arbPerWeek.times(arbPrice)
  return usdPerWeek.times(52).div(totalUSD).times(100)
}

const getApy = async (cTokenAddr, foldPerc, reduction) => {
  const web3 = web3ARBITRUM
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: comptrollerAbi, address: comptrollerAddress },
    methods: comptrollerMethods,
  } = comptroller

  const blocksPerYear = 2628000
  const borrowedMul = foldPerc / (100 - foldPerc)
  const suppliedMul = borrowedMul + 1

  const cTokenInstance = new web3.eth.Contract(cTokenAbi, cTokenAddr)
  const supplyRate = new BigNumber(await cTokenMethods.getSupplyRate(cTokenInstance))
  const borrowRate = new BigNumber(await cTokenMethods.getBorrowRate(cTokenInstance))
  const supplyAPR = supplyRate.div(1e18).times(blocksPerYear).times(100).times(suppliedMul)
  const borrowAPR = borrowRate.div(1e18).times(blocksPerYear).times(100).times(borrowedMul)

  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress.mainnet)

  const arbAPR = await getARBRewardRate(comptrollerMethods, comptrollerInstance)
  const arbAPRSupply = arbAPR.times(reduction).times(suppliedMul)
  const arbAPRBorrow = arbAPR.times(reduction).times(borrowedMul)

  return supplyAPR.minus(borrowAPR).plus(arbAPRSupply).plus(arbAPRBorrow).toFixed()
}

module.exports = {
  getApy,
}
