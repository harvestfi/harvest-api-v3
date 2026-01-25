const BigNumber = require('bignumber.js')
const { gmxViewer } = require('../web3/contracts')
const { web3ARBITRUM } = require('../web3')
const { Cache, storeData } = require('../db/models/cache')
const { DB_CACHE_IDS } = require('../constants')
const { get } = require('lodash')
const { client } = require('../http')
const { getCachedContract } = require('../web3/contractCache')

const getGmxData = async () => {
  console.log('\n-- Getting GMX data --')

  const web3 = web3ARBITRUM
  const {
    contract: { abi: viewerAbi, address: viewerAddress },
    methods: viewerMethods,
  } = gmxViewer

  const ethMarket = '0x450bb6774Dd8a756274E0ab4107953259d2ac541'
  const ethAddress = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
  const btcMarket = '0x7C11F78Ce78768518D743E81Fdfa2F860C6b9A77'
  const btcAddress = '0x47904963fc8b2340414262125aF798B9655E58Cd'
  const wbtcAddress = '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f'

  const response = await client.get(`https://arbitrum-api.gmxinfra.io/signed_prices/latest`)

  const data = response.data.signedPrices
  const ethData = data.filter(e => e.tokenAddress == ethAddress)[0]
  const btcData = data.filter(e => e.tokenAddress == btcAddress)[0]
  const wbtcData = data.filter(e => e.tokenAddress == wbtcAddress)[0]

  const ethMinPrice = new BigNumber(ethData.minPriceFull).div(1e12)
  const ethMaxPrice = new BigNumber(ethData.maxPriceFull).div(1e12)
  const ethMidPrice = ethMaxPrice.plus(ethMinPrice).div(2)

  const btcMinPrice = new BigNumber(btcData.minPriceFull).div(1e22)
  const btcMaxPrice = new BigNumber(btcData.maxPriceFull).div(1e22)
  const btcMidPrice = btcMaxPrice.plus(btcMinPrice).div(2)

  const wbtcMinPrice = new BigNumber(wbtcData.minPriceFull).div(1e22)
  const wbtcMaxPrice = new BigNumber(wbtcData.maxPriceFull).div(1e22)
  const wbtcMidPrice = wbtcMaxPrice.plus(wbtcMinPrice).div(2)

  const ethAmount = new BigNumber(1e21).div(ethMidPrice).toFixed(0)
  const wbtcAmount = new BigNumber(1e11).div(wbtcMidPrice).toFixed(0)

  const viewer = getCachedContract({ web3, abi: viewerAbi, address: viewerAddress.mainnet })

  const gmEthOut = new BigNumber(
    await viewerMethods.getDepositAmountOut(ethMarket, ethAmount, true, viewer),
  )
  const gmEthPriceEthIn = new BigNumber(ethAmount).div(gmEthOut)
  const gmEthPriceUsdIn = gmEthPriceEthIn.times(ethMidPrice)

  const gmBtcOut = new BigNumber(
    await viewerMethods.getDepositAmountOut(btcMarket, wbtcAmount, true, viewer),
  )
  const gmBtcPriceBtcIn = new BigNumber(wbtcAmount).times(1e10).div(gmBtcOut)
  const gmBtcPriceUsdIn = gmBtcPriceBtcIn.times(wbtcMidPrice)

  const now = Date.now()
  const cacheData = await Cache.findOne({ type: DB_CACHE_IDS.GMX_DATA })
  let allData = get(cacheData, 'data', {})
  allData[now] = {
    ethPrice: {
      min: ethMinPrice.toFixed(),
      mid: ethMidPrice.toFixed(),
      max: ethMaxPrice.toFixed(),
    },
    btcPrice: {
      min: btcMinPrice.toFixed(),
      mid: btcMidPrice.toFixed(),
      max: btcMaxPrice.toFixed(),
    },
    wbtcPrice: {
      min: wbtcMinPrice.toFixed(),
      mid: wbtcMidPrice.toFixed(),
      max: wbtcMaxPrice.toFixed(),
    },
    gmEthPrice: { eth: gmEthPriceEthIn.toFixed(), usd: gmEthPriceUsdIn.toFixed() },
    gmBtcPrice: { btc: gmBtcPriceBtcIn.toFixed(), usd: gmBtcPriceUsdIn.toFixed() },
  }

  await storeData(Cache, DB_CACHE_IDS.GMX_DATA, allData, false)

  console.log('-- Done getting GMX data --\n')
}

module.exports = {
  getGmxData,
}
