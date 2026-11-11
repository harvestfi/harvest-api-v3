const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { seamlessPool, aToken, aaveViewer } = require('../../../lib/web3/contracts')
const { getCbETHRate, getWstETHRate } = require('../../../lib/third-party/eth-apys')
const { getCachedContract } = require('../../../lib/web3/contractCache')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (supplyAsset, borrowAsset, poolAddr, strategyAddr, reduction, chain) => {
  const web3 = getWeb3(chain)
  const {
    contract: { abi: poolAbi },
    methods: poolMethods,
  } = seamlessPool
  const {
    contract: { abi: aTokenAbi },
    methods: aTokenMethods,
  } = aToken

  const {
    contract: { abi: viewerAbi, address: viewerAddr },
    methods: viewerMethods,
  } = aaveViewer

  const poolInstance = getCachedContract({
    web3,
    abi: poolAbi,
    address: poolAddr,
  })
  const supplyAssetData = await poolMethods.getReserveData(supplyAsset, poolInstance)
  const borrowAssetData = await poolMethods.getReserveData(borrowAsset, poolInstance)

  const aTokenInstance = getCachedContract({
    web3,
    abi: aTokenAbi,
    address: supplyAssetData.aTokenAddress,
  })
  const debtTokenInstance = getCachedContract({
    web3,
    abi: aTokenAbi,
    address: borrowAssetData.variableDebtTokenAddress,
  })

  const viewerInstance = getCachedContract({
    web3,
    abi: viewerAbi,
    address: viewerAddr.mainnet,
  })

  const supplyPrice = await viewerMethods.getPrice(supplyAsset, borrowAsset, viewerInstance)

  const supplied = new BigNumber(await aTokenMethods.balanceOf(strategyAddr, aTokenInstance))
    .times(supplyPrice)
    .div(new BigNumber(10).pow(18))
  const borrowed = new BigNumber(await aTokenMethods.balanceOf(strategyAddr, debtTokenInstance))
  const invested = supplied.minus(borrowed)
  let suppliedMul, borrowedMul
  if (invested.gt(0)) {
    suppliedMul = supplied.div(invested)
    borrowedMul = borrowed.div(invested)
  } else {
    suppliedMul = new BigNumber(1)
    borrowedMul = new BigNumber(0)
  }

  let supplyStakeAPY
  if (
    //stETH
    supplyAsset == '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452'
  ) {
    supplyStakeAPY = await getWstETHRate()
  } else if (
    //cbETH
    supplyAsset == '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22'
  ) {
    supplyStakeAPY = new BigNumber(await getCbETHRate()).times(100)
  } else {
    supplyStakeAPY = 0
  }

  const merklApy = new BigNumber(
    await getMerklApy(strategyAddr, supplyAssetData.aTokenAddress, chain, 1),
  )

  const supplyAPR = new BigNumber(supplyAssetData.currentLiquidityRate)
    .div(1e27)
    .times(100)
    .plus(supplyStakeAPY)
    .plus(merklApy)
    .times(suppliedMul)
  const borrowAPR = new BigNumber(borrowAssetData.currentVariableBorrowRate)
    .div(1e27)
    .times(100)
    .times(borrowedMul)

  return supplyAPR.minus(borrowAPR).times(reduction).toFixed()
}

module.exports = {
  getApy,
}
