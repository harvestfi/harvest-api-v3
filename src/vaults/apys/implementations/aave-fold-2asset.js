const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const { seamlessPool, aToken, aaveViewer } = require('../../../lib/web3/contracts')
const { getDefiLlamaData } = require('../../../lib/third-party/defillama')
const { getCachedContract } = require('../../../lib/web3/contractCache')

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

  const stakeDataRaw = await getDefiLlamaData()
  const stakeData = stakeDataRaw.data

  let supplyStakeAPY
  if (
    //stETH
    supplyAsset == '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '747c1d2a-c668-4682-b9f9-296708a3dd90')
    supplyStakeAPY = poolDetail.apy
  } else if (
    //cbETH
    supplyAsset == '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '0f45d730-b279-4629-8e11-ccb5cc3038b4')
    supplyStakeAPY = poolDetail.apy
  } else {
    supplyStakeAPY = 0
  }

  const supplyAPR = new BigNumber(supplyAssetData.currentLiquidityRate)
    .div(1e27)
    .times(100)
    .plus(supplyStakeAPY)
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
