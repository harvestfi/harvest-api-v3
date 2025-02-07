const initDb = require('../../lib/db')
const { cliPreload } = require('../../runtime/pollers')

const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../lib/web3')
const { getTokenPrice } = require('../../prices')
const { getApy: getMerklApy } = require('../../vaults/apys/implementations/merkl')
const { CHAIN_IDS } = require('../../lib/constants')
const addresses = require('../../../data/mainnet/addresses.json')
const {
  mToken,
  moonwellReward,
  jumpRateModel,
  venusJumpRateModel,
  token,
  moonwellComptroller: comptroller,
  lodestarCToken: cToken,
  venusComptroller,
  venusDistributor,
  lodestarComptroller,
  seamlessPool,
  aToken,
  aaveInterestModel,
  zeroInterestModel,
  aaveRewards,
} = require('../../lib/web3/contracts')

const platforms = ['moonwell', 'aave', 'lodestar', 'zerolend', 'reactor', 'venus']

const rewardReduction = {
  1: 0.85,
  137: 0.92,
  324: 0.9,
  8453: 0.9,
  42161: 0.9,
}

const getMarketDataAave = async (vault, chain) => {
  const web3 = await getWeb3(chain)
  const {
    contract: { abi: poolAbi },
    methods: poolMethods,
  } = seamlessPool
  const {
    contract: { abi: aTokenAbi },
    methods: aTokenMethods,
  } = aToken
  const {
    contract: { abi: aaveInterestAbi },
    methods: aaveInterestMethods,
  } = aaveInterestModel
  const {
    contract: { abi: zeroInterestAbi },
    methods: zeroInterestMethods,
  } = zeroInterestModel
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const poolInstance = new web3.eth.Contract(poolAbi, vault.AavePool)
  const assetData = await poolMethods.getReserveData(vault.Underlying, poolInstance)
  const aTokenInstance = new web3.eth.Contract(aTokenAbi, assetData.aTokenAddress)
  const debtTokenInstance = new web3.eth.Contract(aTokenAbi, assetData.variableDebtTokenAddress)
  const underlyingPrice = await getTokenPrice(vault.Underlying, chain)
  const underlyingInstance = new web3.eth.Contract(tokenAbi, vault.Underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const usdSupplied = new BigNumber(await aTokenMethods.getTotalSupply(aTokenInstance))
    .times(underlyingPrice)
    .div(10 ** underlyingDecimals)
  const totalDebt = new BigNumber(await aTokenMethods.getTotalSupply(debtTokenInstance))
  const usdBorrowed = totalDebt.times(underlyingPrice).div(10 ** underlyingDecimals)

  const MASK_16 = (1n << 16n) - 1n // 0xFFFFn
  const config = BigInt(assetData.configuration[0])
  let collateralFactor = new BigNumber(config & MASK_16).div(1e4)
  if (assetData.isolationModeTotalDebt > 0) {
    collateralFactor = new BigNumber(0)
  }
  const reserveFactor = new BigNumber((config >> 64n) & MASK_16).div(1e4)

  let interestParams, interestInstance, interestMethods
  if (vault.platform == 'aave') {
    const virtualBalance = new BigNumber(
      await poolMethods.getVirtualBalance(vault.Underlying, poolInstance),
    )
    interestParams = [
      assetData.unbacked,
      0,
      0,
      totalDebt.toFixed(),
      reserveFactor.times(1e4).toFixed(),
      vault.Underlying,
      true,
      virtualBalance.toFixed(),
    ]
    interestInstance = new web3.eth.Contract(aaveInterestAbi, assetData.interestRateStrategyAddress)
    interestMethods = aaveInterestMethods
  } else if (vault.platform == 'zerolend') {
    interestParams = [
      assetData.unbacked,
      0,
      0,
      0,
      totalDebt.toFixed(),
      0,
      reserveFactor.times(1e4).toFixed(),
      vault.Underlying,
      assetData.aTokenAddress,
    ]
    interestInstance = new web3.eth.Contract(zeroInterestAbi, assetData.interestRateStrategyAddress)
    interestMethods = zeroInterestMethods
  }

  const supplied = new BigNumber(await aTokenMethods.balanceOf(vault.NewStrategy, aTokenInstance))
  const borrowed = new BigNumber(
    await aTokenMethods.balanceOf(vault.NewStrategy, debtTokenInstance),
  )
  const invested = supplied.minus(borrowed)
  const usdTVLVault = invested.times(underlyingPrice).div(10 ** underlyingDecimals)
  const usdSuppliedVault = supplied.times(underlyingPrice).div(10 ** underlyingDecimals)
  const usdBorrowedVault = borrowed.times(underlyingPrice).div(10 ** underlyingDecimals)

  const marketData = {
    usdSupplied: usdSupplied,
    usdBorrowed: usdBorrowed,
    collateralFactor: collateralFactor,
  }
  const vaultData = {
    usdSupplied: usdSuppliedVault,
    usdBorrowed: usdBorrowedVault,
    usdTVL: usdTVLVault,
  }
  const interestData = {
    params: interestParams,
    borrows: totalDebt,
    interestInstance: interestInstance,
    interestMethods: interestMethods,
  }
  return [marketData, vaultData, interestData]
}

const getMarketDataCompound = async (vault, chain) => {
  const web3 = await getWeb3(chain)
  const {
    contract: { abi: mTokenAbi },
    methods: mTokenMethods,
  } = mToken
  const {
    contract: { abi: comptrollerAbi },
    methods: comptrollerMethods,
  } = comptroller
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  let mTokenAddress
  if (vault.platform == 'moonwell') {
    mTokenAddress = vault.mToken
  } else {
    mTokenAddress = vault.cToken
  }

  const mTokenInstance = new web3.eth.Contract(mTokenAbi, mTokenAddress)
  const comptrollerAddr = await mTokenMethods.getComptroller(mTokenInstance)
  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddr)
  const mkt = await comptrollerMethods.getCollateralFactor(mTokenAddress, comptrollerInstance)
  const collateralFactor = new BigNumber(mkt.collateralFactorMantissa).div(1e18)
  const interestRateModel = await mTokenMethods.getInterestRateModel(mTokenInstance)

  let jumprateMethods, interestInstance
  if (vault.platform == 'venus') {
    let {
      contract: { abi: jumpRateAbi },
      methods: interestMethods,
    } = venusJumpRateModel
    jumprateMethods = interestMethods
    interestInstance = new web3.eth.Contract(jumpRateAbi, interestRateModel)
  } else {
    let {
      contract: { abi: jumpRateAbi },
      methods: interestMethods,
    } = jumpRateModel
    jumprateMethods = interestMethods
    interestInstance = new web3.eth.Contract(jumpRateAbi, interestRateModel)
  }

  const cash = new BigNumber(await mTokenMethods.getCash(mTokenInstance))
  const borrows = new BigNumber(await mTokenMethods.totalBorrows(mTokenInstance))
  const reserves = new BigNumber(await mTokenMethods.totalReserves(mTokenInstance))
  const reserveFactor = new BigNumber(await mTokenMethods.getReserveFactor(mTokenInstance))

  const underlyingPrice = await getTokenPrice(vault.Underlying, chain)
  const underlyingInstance = new web3.eth.Contract(tokenAbi, vault.Underlying)
  const underlyingDecimals = await getDecimals(underlyingInstance)

  const usdSupplied = cash
    .plus(borrows)
    .plus(reserves)
    .times(underlyingPrice)
    .div(10 ** underlyingDecimals)
  const usdBorrowed = borrows.times(underlyingPrice).div(10 ** underlyingDecimals)

  const snapshot = await mTokenMethods.getAccountSnapshot(vault.NewStrategy, mTokenInstance)
  const supplied = new BigNumber(snapshot[1]).times(snapshot[3]).div(1e18)
  const borrowed = new BigNumber(snapshot[2])
  const invested = supplied.minus(borrowed)
  const usdTVLVault = invested.times(underlyingPrice).div(10 ** underlyingDecimals)
  const usdSuppliedVault = supplied.times(underlyingPrice).div(10 ** underlyingDecimals)
  const usdBorrowedVault = borrowed.times(underlyingPrice).div(10 ** underlyingDecimals)

  const marketData = {
    usdSupplied: usdSupplied,
    usdBorrowed: usdBorrowed,
    collateralFactor: collateralFactor,
  }
  if (vault.platform == 'venus') {
    const badDebt = new BigNumber(await mTokenMethods.getBadDebt(mTokenInstance))
    marketData.badDebt = badDebt
  }
  const vaultData = {
    usdSupplied: usdSuppliedVault,
    usdBorrowed: usdBorrowedVault,
    usdTVL: usdTVLVault,
  }
  const interestData = {
    cash: cash,
    borrows: borrows,
    reserves: reserves,
    reserveFactor: reserveFactor,
    interestInstance: interestInstance,
    interestMethods: jumprateMethods,
  }
  return [marketData, vaultData, interestData]
}

const getRewardDataMoonwell = async (vault, chain) => {
  const web3 = await getWeb3(chain)
  const {
    contract: { abi: moonwellRewardAbi, address: moonwellRewardAddress },
    methods: moonwellRewardMethods,
  } = moonwellReward
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const now = Date.now() / 1000
  const timePerYear = new BigNumber(31536000)
  const rewardInstance = new web3.eth.Contract(moonwellRewardAbi, moonwellRewardAddress.mainnet)
  const rewardConfigs = await moonwellRewardMethods.getAllMarketConfigs(
    vault.mToken,
    rewardInstance,
  )
  let usdRewardSupply = new BigNumber(0)
  let usdRewardBorrow = new BigNumber(0)
  for (const config of rewardConfigs) {
    if (now < config.endTime) {
      const rateSupply = new BigNumber(config.supplyEmissionsPerSec)
      const rateBorrow = new BigNumber(config.borrowEmissionsPerSec)
      const rewardToken = config.emissionToken
      const rewardPrice = await getTokenPrice(rewardToken, chain)
      const rewardTokenInstance = new web3.eth.Contract(tokenAbi, rewardToken)
      const rewardDecimals = await getDecimals(rewardTokenInstance)
      if (rateSupply.gt(0)) {
        usdRewardSupply = usdRewardSupply.plus(
          rateSupply
            .times(timePerYear)
            .times(rewardPrice)
            .div(10 ** rewardDecimals),
        )
      }
      if (rateBorrow.gt(1)) {
        usdRewardBorrow = usdRewardBorrow.plus(
          rateBorrow
            .times(timePerYear)
            .times(rewardPrice)
            .div(10 ** rewardDecimals),
        )
      }
    }
  }

  return [usdRewardSupply, usdRewardBorrow]
}

const getRewardDataVenus = async (vault, chain) => {
  const web3 = await getWeb3(chain)
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: comptrollerAbi },
    methods: comptrollerMethods,
  } = venusComptroller
  const {
    contract: { abi: distributorAbi },
    methods: distributorMethods,
  } = venusDistributor
  const {
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const timePerYear = new BigNumber(31536000)
  let usdRewardSupply = new BigNumber(0)
  let usdRewardBorrow = new BigNumber(0)

  const cTokenInstance = new web3.eth.Contract(cTokenAbi, vault.cToken)
  const comptrollerAddress = await cTokenMethods.getComptroller(cTokenInstance)
  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress)
  const distributors = await comptrollerMethods.getRewardDistributors(comptrollerInstance)

  for (const distributor of distributors) {
    const distributorInstance = new web3.eth.Contract(distributorAbi, distributor)
    const rewardToken = await distributorMethods.getRewardToken(distributorInstance)
    const rewardPrice = await getTokenPrice(rewardToken, chain)
    const rewardTokenInstance = new web3.eth.Contract(tokenAbi, rewardToken)
    const rewardDecimals = await getDecimals(rewardTokenInstance)
    const rewardPerYearSupply = new BigNumber(
      await distributorMethods.getSupplyRate(vault.cToken, distributorInstance),
    )
      .times(timePerYear)
      .div(10 ** rewardDecimals)
    const rewardPerYearBorrow = new BigNumber(
      await distributorMethods.getBorrowRate(vault.cToken, distributorInstance),
    )
      .times(timePerYear)
      .div(10 ** rewardDecimals)
    usdRewardSupply = usdRewardSupply.plus(rewardPerYearSupply.times(rewardPrice))
    usdRewardBorrow = usdRewardBorrow.plus(rewardPerYearBorrow.times(rewardPrice))
  }

  return [usdRewardSupply, usdRewardBorrow]
}

const getRewardDataLodestar = async (vault, chain) => {
  const web3 = await getWeb3(chain)
  const {
    contract: { abi: cTokenAbi },
    methods: cTokenMethods,
  } = cToken
  const {
    contract: { abi: comptrollerAbi },
    methods: comptrollerMethods,
  } = lodestarComptroller

  const timePerYear = new BigNumber(2628000)

  const cTokenInstance = new web3.eth.Contract(cTokenAbi, vault.cToken)
  const comptrollerAddress = await cTokenMethods.getComptroller(cTokenInstance)
  const comptrollerInstance = new web3.eth.Contract(comptrollerAbi, comptrollerAddress)

  const rewardToken = '0xF19547f9ED24aA66b03c3a552D181Ae334FBb8DB'
  const rewardPrice = await getTokenPrice(rewardToken, chain)
  const usdRewardSupply = new BigNumber(
    await comptrollerMethods.getSupplyRewardRate(vault.cToken, comptrollerInstance),
  )
    .times(timePerYear)
    .times(rewardPrice)
    .div(1e18)
  const usdRewardBorrow = new BigNumber(
    await comptrollerMethods.getBorrowRewardRate(vault.cToken, comptrollerInstance),
  )
    .times(timePerYear)
    .times(rewardPrice)
    .div(1e18)

  return [usdRewardSupply, usdRewardBorrow]
}

const getRewardDataAave = async (vault, chain) => {
  const web3 = await getWeb3(chain)
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
    contract: { abi: tokenAbi },
    methods: { getDecimals },
  } = token

  const timePerYear = new BigNumber(31536000)
  const now = Date.now() / 1000

  const poolInstance = new web3.eth.Contract(poolAbi, vault.AavePool)
  const assetData = await poolMethods.getReserveData(vault.Underlying, poolInstance)
  const aTokenInstance = new web3.eth.Contract(aTokenAbi, assetData.aTokenAddress)
  const supplyRewardsInstance = new web3.eth.Contract(
    rewardsAbi,
    await aTokenMethods.getIncentivesController(aTokenInstance),
  )

  const supplyRewardList = await rewardsMethods.getRewardsList(supplyRewardsInstance)
  let usdRewardSupply = new BigNumber(0)
  for (let reward in supplyRewardList) {
    if (supplyRewardList[reward] == '0x9793eac2fECef55248efA039BEC78e82aC01CB2f') {
      continue
    }
    const rewardsData = await rewardsMethods.getRewardsData(
      assetData.aTokenAddress,
      supplyRewardList[reward],
      supplyRewardsInstance,
    )
    if (rewardsData[3] < now) {
      continue
    }
    const rewardPrice = await getTokenPrice(supplyRewardList[reward], chain)
    const rewardTokenInstance = new web3.eth.Contract(tokenAbi, supplyRewardList[reward])
    const rewardDecimals = await getDecimals(rewardTokenInstance)
    const emissionPerYear = new BigNumber(rewardsData[1])
      .times(timePerYear)
      .div(10 ** rewardDecimals)
    usdRewardSupply = usdRewardSupply.plus(emissionPerYear.times(rewardPrice))
  }

  const debtTokenInstance = new web3.eth.Contract(aTokenAbi, assetData.variableDebtTokenAddress)
  const borrowRewardsInstance = new web3.eth.Contract(
    rewardsAbi,
    await aTokenMethods.getIncentivesController(debtTokenInstance),
  )

  const borrowRewardList = await rewardsMethods.getRewardsList(borrowRewardsInstance)
  let usdRewardBorrow = new BigNumber(0)
  for (let reward in borrowRewardList) {
    if (borrowRewardList[reward] == '0x9793eac2fECef55248efA039BEC78e82aC01CB2f') {
      continue
    }
    const rewardsData = await rewardsMethods.getRewardsData(
      assetData.variableDebtTokenAddress,
      borrowRewardList[reward],
      borrowRewardsInstance,
    )
    if (rewardsData[3] < now) {
      continue
    }
    const rewardPrice = await getTokenPrice(borrowRewardList[reward], chain)
    const rewardTokenInstance = new web3.eth.Contract(tokenAbi, borrowRewardList[reward])
    const rewardDecimals = await getDecimals(rewardTokenInstance)
    const emissionPerYear = new BigNumber(rewardsData[1])
      .times(timePerYear)
      .div(10 ** rewardDecimals)
    usdRewardBorrow = usdRewardBorrow.plus(emissionPerYear.times(rewardPrice))
  }

  return [usdRewardSupply, usdRewardBorrow]
}

const getMarketData = async (vault, chain) => {
  let marketData, vaultData, interestData
  if (
    vault.platform == 'moonwell' ||
    vault.platform == 'lodestar' ||
    vault.platform == 'reactor' ||
    vault.platform == 'venus'
  ) {
    ;[marketData, vaultData, interestData] = await getMarketDataCompound(vault, chain)
  } else {
    ;[marketData, vaultData, interestData] = await getMarketDataAave(vault, chain)
  }

  let usdRewardSupply, usdRewardBorrow
  if (vault.platform == 'moonwell') {
    ;[usdRewardSupply, usdRewardBorrow] = await getRewardDataMoonwell(vault, chain)
  } else if (vault.platform == 'venus') {
    ;[usdRewardSupply, usdRewardBorrow] = await getRewardDataVenus(vault, chain)
  } else if (vault.platform == 'lodestar') {
    ;[usdRewardSupply, usdRewardBorrow] = await getRewardDataLodestar(vault, chain)
  } else if (vault.platform == 'aave' || vault.platform == 'zerolend') {
    ;[usdRewardSupply, usdRewardBorrow] = await getRewardDataAave(vault, chain)
  } else {
    usdRewardSupply = new BigNumber(0)
    usdRewardBorrow = new BigNumber(0)
  }

  if (vault.platform == 'aave' || vault.platform == 'zerolend') {
    const web3 = await getWeb3(chain)
    const {
      contract: { abi: poolAbi },
      methods: poolMethods,
    } = seamlessPool
    const poolInstance = new web3.eth.Contract(poolAbi, vault.AavePool)
    const assetData = await poolMethods.getReserveData(vault.Underlying, poolInstance)
    const merklSupply = new BigNumber(
      await getMerklApy(vault.NewStrategy, assetData.aTokenAddress, chain, 1),
    )
    const merklBorrow = new BigNumber(
      await getMerklApy(vault.NewStrategy, assetData.variableDebtTokenAddress, chain, 1),
    )
    if (merklSupply.gt(0)) {
      usdRewardSupply = usdRewardSupply.plus(merklSupply.times(marketData.usdSupplied).div(100))
    }
    if (merklBorrow.gt(0)) {
      usdRewardBorrow = usdRewardBorrow.plus(merklBorrow.times(marketData.usdBorrowed).div(100))
    }
  } else {
    const merklSupply = new BigNumber(
      await getMerklApy(vault.NewStrategy, vault.mToken ? vault.mToken : vault.cToken, chain, 1),
    )
    if (merklSupply.gt(0)) {
      usdRewardSupply = usdRewardSupply.plus(merklSupply.times(marketData.usdSupplied).div(100))
    }
  }

  marketData.usdRewardSupply = usdRewardSupply
  marketData.usdRewardBorrow = usdRewardBorrow

  return [marketData, vaultData, interestData]
}

const getRateCompound = async (
  borrowFactor,
  marketData,
  vaultData,
  interestData,
  chain,
  platform,
) => {
  const newVaultSupplied = vaultData.usdTVL.div(new BigNumber(1).minus(borrowFactor))
  const newVaultBorrowed = newVaultSupplied.minus(vaultData.usdTVL)
  const suppliedMul = newVaultSupplied.div(vaultData.usdTVL)
  const borrowedMul = newVaultBorrowed.div(vaultData.usdTVL)
  const newUsdSupplied = marketData.usdSupplied.minus(vaultData.usdSupplied).plus(newVaultSupplied)
  const newUsdBorrowed = marketData.usdBorrowed.minus(vaultData.usdBorrowed).plus(newVaultBorrowed)
  const newBorrows = interestData.borrows
    .div(marketData.usdBorrowed)
    .times(newUsdBorrowed)
    .integerValue()

  let unitsPerYear
  if (platform == 'lodestar') {
    unitsPerYear = new BigNumber(2628000)
  } else {
    unitsPerYear = new BigNumber(365 * 24 * 60 * 60)
  }
  let newBorrowRate, newSupplyRate
  if (platform == 'venus') {
    newBorrowRate = new BigNumber(
      await interestData.interestMethods.getBorrowRate(
        interestData.cash,
        newBorrows,
        interestData.reserves,
        marketData.badDebt,
        interestData.interestInstance,
      ),
    )
      .times(unitsPerYear)
      .div(1e18)
    newSupplyRate = new BigNumber(
      await interestData.interestMethods.getSupplyRate(
        interestData.cash,
        newBorrows,
        interestData.reserves,
        interestData.reserveFactor,
        marketData.badDebt,
        interestData.interestInstance,
      ),
    )
      .times(unitsPerYear)
      .div(1e18)
  } else {
    newBorrowRate = new BigNumber(
      await interestData.interestMethods.getBorrowRate(
        interestData.cash,
        newBorrows,
        interestData.reserves,
        interestData.interestInstance,
      ),
    )
      .times(unitsPerYear)
      .div(1e18)
    newSupplyRate = new BigNumber(
      await interestData.interestMethods.getSupplyRate(
        interestData.cash,
        newBorrows,
        interestData.reserves,
        interestData.reserveFactor,
        interestData.interestInstance,
      ),
    )
      .times(unitsPerYear)
      .div(1e18)
  }
  const newSupplyReward = marketData.usdRewardSupply
    .div(newUsdSupplied)
    .times(rewardReduction[chain])
  const newBorrowReward = marketData.usdRewardBorrow
    .div(newUsdBorrowed)
    .times(rewardReduction[chain])

  const newRate = suppliedMul
    .times(newSupplyRate.plus(newSupplyReward))
    .minus(borrowedMul.times(newBorrowRate.minus(newBorrowReward)))
  return newRate
}

const getRateAave = async (borrowFactor, marketData, vaultData, interestData, chain, platform) => {
  const newVaultSupplied = vaultData.usdTVL.div(new BigNumber(1).minus(borrowFactor))
  const newVaultBorrowed = newVaultSupplied.minus(vaultData.usdTVL)
  const suppliedMul = newVaultSupplied.div(vaultData.usdTVL)
  const borrowedMul = newVaultBorrowed.div(vaultData.usdTVL)
  const newUsdSupplied = marketData.usdSupplied.minus(vaultData.usdSupplied).plus(newVaultSupplied)
  const newUsdBorrowed = marketData.usdBorrowed.minus(vaultData.usdBorrowed).plus(newVaultBorrowed)
  const newBorrows = interestData.borrows
    .div(marketData.usdBorrowed)
    .times(newUsdBorrowed)
    .integerValue()

  if (platform == 'aave') {
    interestData.params[3] = newBorrows.toFixed()
  } else {
    interestData.params[4] = newBorrows.toFixed()
  }

  const rates = await interestData.interestMethods.getInterestRates(
    interestData.params,
    interestData.interestInstance,
  )

  const newSupplyRate = new BigNumber(rates[0]).div(1e27)
  let newBorrowRate
  if (platform == 'aave') {
    newBorrowRate = new BigNumber(rates[1]).div(1e27)
  } else {
    newBorrowRate = new BigNumber(rates[2]).div(1e27)
  }

  const newSupplyReward = marketData.usdRewardSupply
    .div(newUsdSupplied)
    .times(rewardReduction[chain])
  const newBorrowReward = marketData.usdRewardBorrow
    .div(newUsdBorrowed)
    .times(rewardReduction[chain])

  const newRate = suppliedMul
    .times(newSupplyRate.plus(newSupplyReward))
    .minus(borrowedMul.times(newBorrowRate.minus(newBorrowReward)))
  return newRate
}

const getRate = async (borrowFactor, marketData, vaultData, interestData, chain, platform) => {
  let newRate
  if (
    platform == 'moonwell' ||
    platform == 'lodestar' ||
    platform == 'reactor' ||
    platform == 'venus'
  ) {
    newRate = await getRateCompound(
      borrowFactor,
      marketData,
      vaultData,
      interestData,
      chain,
      platform,
    )
  } else {
    newRate = await getRateAave(borrowFactor, marketData, vaultData, interestData, chain, platform)
  }
  return newRate
}

const main = async () => {
  console.log('\n-- Running leverage checks for Folding strategies --')

  await initDb()
  await cliPreload()

  for (const chain of Object.keys(CHAIN_IDS)) {
    console.log(`\n-- Chain: ${chain} --`)

    let chainAddresses
    if (chain == 'ETH') {
      chainAddresses = addresses.V2
    } else if (chain == 'POLYGON') {
      chainAddresses = addresses.MATIC.V2
    } else {
      chainAddresses = addresses[chain].V2
    }
    let filteredAddresses = []
    for (const vault in chainAddresses) {
      let include = false
      for (let platform of platforms) {
        if (vault.toLowerCase().includes(platform) && !vault.toLowerCase().includes('hodl')) {
          if (vault != 'lodestar_LODE') {
            include = true
            chainAddresses[vault].platform = platform
            if (vault == 'lodestar_ARB') {
              chainAddresses[vault].platform = 'venus'
            }
          }
          break
        }
      }
      if (include) {
        filteredAddresses.push(chainAddresses[vault])
      }
    }

    for (const vault of filteredAddresses) {
      // if (vault.NewVault != '0x676a8BcF8ACBaB1a38e53dB83C74a4b1A53bf782') {
      //   continue
      // }
      console.log(`\n-- Vault: ${vault.NewVault}, ${vault.platform} --`)
      let [marketData, vaultData, interestData] = await getMarketData(vault, CHAIN_IDS[chain])
      if (marketData.collateralFactor.eq(0)) {
        console.log('Collateral Factor 0, no leverage possible')
        console.log('---')
        continue
      }
      if (vaultData.usdTVL.eq(0)) {
        console.log('TVL 0, no leverage possible')
        console.log('---')
        continue
      }
      const maxBorrowFactor = marketData.collateralFactor.minus(0.02)
      const currentBorrowFactor = vaultData.usdBorrowed.div(vaultData.usdSupplied)
      const currentRate = await getRate(
        currentBorrowFactor,
        marketData,
        vaultData,
        interestData,
        CHAIN_IDS[chain],
        vault.platform,
      )

      const rateZero = await getRate(
        new BigNumber(0),
        marketData,
        vaultData,
        interestData,
        CHAIN_IDS[chain],
        vault.platform,
      )
      const rateMid = await getRate(
        maxBorrowFactor.div(2),
        marketData,
        vaultData,
        interestData,
        CHAIN_IDS[chain],
        vault.platform,
      )
      const rateMax = await getRate(
        maxBorrowFactor,
        marketData,
        vaultData,
        interestData,
        CHAIN_IDS[chain],
        vault.platform,
      )

      let optimalFactor, optimalRate
      if (rateZero.gt(rateMid) && rateZero.gt(rateMax)) {
        let oldRate = rateZero
        let oldFactor = new BigNumber(0)
        let newFactor = oldFactor.plus(0.01)
        let newRate = await getRate(
          newFactor,
          marketData,
          vaultData,
          interestData,
          CHAIN_IDS[chain],
          vault.platform,
        )
        while (newRate.gt(oldRate)) {
          oldRate = newRate
          oldFactor = newFactor
          newFactor = oldFactor.plus(0.01)
          newRate = await getRate(
            newFactor,
            marketData,
            vaultData,
            interestData,
            CHAIN_IDS[chain],
            vault.platform,
          )
        }
        optimalFactor = oldFactor
        optimalRate = oldRate
      } else if (rateMid.gt(rateZero) && rateMid.gt(rateMax)) {
        let low = new BigNumber(0)
        let high = new BigNumber(0)
        let rateLow = new BigNumber(0)
        let rateHigh = new BigNumber(0)
        for (let i = 0; i < 16; i++) {
          const factor = maxBorrowFactor.div(15).times(i)
          const rate = await getRate(
            factor,
            marketData,
            vaultData,
            interestData,
            CHAIN_IDS[chain],
            vault.platform,
          )
          if (rateLow.eq(0)) {
            low = factor
            rateLow = rate
          } else if (rateHigh.eq(0)) {
            high = factor
            rateHigh = rate
          } else if (rate.gt(rateHigh) || rate.gt(rateLow)) {
            low = high
            rateLow = rateHigh
            high = factor
            rateHigh = rate
          }
        }
        while (rateHigh.minus(rateLow).absoluteValue().gt(0.00001)) {
          let mid = low.plus(high).div(2)
          const newRate = await getRate(
            mid,
            marketData,
            vaultData,
            interestData,
            CHAIN_IDS[chain],
            vault.platform,
          )
          if (newRate.gt(rateLow)) {
            low = mid
            rateLow = newRate
          } else {
            high = mid
            rateHigh = newRate
          }
        }
        optimalFactor = low
        optimalRate = rateLow
      } else if (rateMax.gt(rateZero) && rateMax.gt(rateMid)) {
        optimalFactor = maxBorrowFactor
        optimalRate = rateMax
      }

      if (
        optimalRate.gt(currentRate.plus(0.0001)) &&
        optimalFactor.minus(currentBorrowFactor).absoluteValue().gt(0.001)
      ) {
        console.log(
          '---------------------------> Leverage NOT optimal <---------------------------',
        )
        console.log(
          `Current Borrow Factor: ${currentBorrowFactor.toFixed(
            5,
          )} Current Rate: ${currentRate.toFixed(5)}`,
        )
        console.log(
          `Optimal Borrow Factor: ${optimalFactor.toFixed(5)} Optimal Rate: ${optimalRate.toFixed(
            5,
          )}`,
        )
        console.log('---')
      } else {
        console.log('Leverage optimal')
        console.log(
          `Current Borrow Factor: ${currentBorrowFactor.toFixed(
            5,
          )} Current Rate: ${currentRate.toFixed(5)}`,
        )
        console.log('---')
      }
    }
  }

  console.log('-- Done running leverage checks for Folding strategies --\n')
}

main().then(() => process.exit(0))
