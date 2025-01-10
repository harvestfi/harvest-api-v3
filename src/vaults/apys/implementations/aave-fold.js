const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const {
  seamlessPool,
  aToken,
  aaveRewards,
  lodestarStrategy,
} = require('../../../lib/web3/contracts')
const { getTokenPrice } = require('../../../prices')
const { getApy: getMerklApy } = require('./merkl')

const getApy = async (underlying, poolAddr, strategyAddr, reduction, chain) => {
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
    contract: { abi: rewardsAbi },
    methods: rewardsMethods,
  } = aaveRewards
  const {
    contract: { abi: strategyAbi },
    methods: strategyMethods,
  } = lodestarStrategy

  const strategyInstance = new web3.eth.Contract(strategyAbi, strategyAddr)
  const invested = new BigNumber(await strategyMethods.getInvestedBalance(strategyInstance))
  const supplied = new BigNumber(await strategyMethods.getSupplyBalance(strategyInstance))
  const borrowed = new BigNumber(await strategyMethods.getBorrowBalance(strategyInstance))
  let suppliedMul, borrowedMul
  if (invested.gt(0)) {
    suppliedMul = supplied.div(invested)
    borrowedMul = borrowed.div(invested)
  } else {
    suppliedMul = new BigNumber(1)
    borrowedMul = new BigNumber(0)
  }

  const poolInstance = new web3.eth.Contract(poolAbi, poolAddr)
  const assetData = await poolMethods.getReserveData(underlying, poolInstance)
  const supplyAPR = new BigNumber(assetData.currentLiquidityRate)
    .div(1e27)
    .times(100)
    .times(suppliedMul)
  const borrowAPR = new BigNumber(assetData.currentVariableBorrowRate)
    .div(1e27)
    .times(100)
    .times(borrowedMul)

  const aTokenInstance = new web3.eth.Contract(aTokenAbi, assetData.aTokenAddress)
  const supplyRewardsInstance = new web3.eth.Contract(
    rewardsAbi,
    await aTokenMethods.getIncentivesController(aTokenInstance),
  )

  const supplyRewardList = await rewardsMethods.getRewardsList(supplyRewardsInstance)
  const now = Date.now() / 1000
  let supplyRewardUsdPerYear = new BigNumber(0)
  for (let reward in supplyRewardList) {
    const rewardsData = await rewardsMethods.getRewardsData(
      assetData.aTokenAddress,
      supplyRewardList[reward],
      supplyRewardsInstance,
    )
    if (rewardsData[3] < now) {
      continue
    }
    const rewardPrice = await getTokenPrice(supplyRewardList[reward], chain)
    const emissionPerYear = new BigNumber(rewardsData[1]).times(3600).times(24).times(365).div(1e18)
    supplyRewardUsdPerYear = supplyRewardUsdPerYear.plus(emissionPerYear.times(rewardPrice))
  }

  const debtTokenInstance = new web3.eth.Contract(aTokenAbi, assetData.variableDebtTokenAddress)
  const borrowRewardsInstance = new web3.eth.Contract(
    rewardsAbi,
    await aTokenMethods.getIncentivesController(debtTokenInstance),
  )

  const borrowRewardList = await rewardsMethods.getRewardsList(borrowRewardsInstance)
  let borrowRewardUsdPerYear = new BigNumber(0)
  for (let reward in borrowRewardList) {
    const rewardsData = await rewardsMethods.getRewardsData(
      assetData.variableDebtTokenAddress,
      borrowRewardList[reward],
      borrowRewardsInstance,
    )
    if (rewardsData[3] < now) {
      continue
    }
    const rewardPrice = await getTokenPrice(borrowRewardList[reward], chain)
    const emissionPerYear = new BigNumber(rewardsData[1]).times(3600).times(24).times(365).div(1e18)
    borrowRewardUsdPerYear = borrowRewardUsdPerYear.plus(emissionPerYear.times(rewardPrice))
  }

  const underlyingPrice = await getTokenPrice(underlying, chain)

  let supplyRewardAPR = new BigNumber(0)
  if (supplyRewardUsdPerYear.gt(0)) {
    const totalSupply = new BigNumber(await aTokenMethods.getTotalSupply(aTokenInstance))
    const decimals = new BigNumber(await aTokenMethods.getDecimals(aTokenInstance))

    const totalUsd = totalSupply.times(underlyingPrice).div(10 ** decimals)

    supplyRewardAPR = supplyRewardUsdPerYear
      .times(100)
      .div(totalUsd)
      .times(reduction)
      .times(suppliedMul)
  }
  let borrowRewardAPR = new BigNumber(0)
  if (borrowRewardUsdPerYear.gt(0)) {
    const totalSupply = new BigNumber(await aTokenMethods.getTotalSupply(debtTokenInstance))
    const decimals = new BigNumber(await aTokenMethods.getDecimals(debtTokenInstance))

    const totalUsd = totalSupply.times(underlyingPrice).div(10 ** decimals)

    borrowRewardAPR = borrowRewardUsdPerYear
      .times(100)
      .div(totalUsd)
      .times(reduction)
      .times(borrowedMul)
  }

  if (strategyAddr == '0xe22f4Ca77d3278255d3C6fe2076a672857Eab83F') {
    let merkl = new BigNumber(
      await getMerklApy(strategyAddr, '0x3ce38A9e2403415c50661a3f78acf4d392320e7E', 1, 1),
    )
    supplyRewardAPR = supplyRewardAPR.plus(merkl.times(suppliedMul))
  }

  return supplyAPR.minus(borrowAPR).plus(supplyRewardAPR).plus(borrowRewardAPR).toFixed()
}

module.exports = {
  getApy,
}
