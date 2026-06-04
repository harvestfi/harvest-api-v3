const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const {
  token,
  clVault,
  aeroVoter,
  aeroClPool,
  aeroSlipstreamHelper,
  aeroNftManager,
  aeroGauge,
} = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')
const { getTokenPriceByAddress } = require('../../../prices/coingecko')
const { CHAIN_IDS } = require('../../../lib/constants')
const logger = require('../../../lib/logger')

const AERODROME_VOTER = '0x16613524e02ad97edfef371bc883f2f5d6c480a5'
const SLIPSTREAM_HELPER = '0x6d2d739bf37dfd93d804523c2dfa948eaf32f8e1'

const SECONDS_PER_YEAR = 60 * 60 * 24 * 365.25

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

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

// Estimates the vault's Aerodrome emissions APR from live pool data, scaled to the
// vault's own position. Staked CL liquidity only earns AERO emissions (swap fees
// accrue to voters via the gauge, not to stakers), so:
//
//   vaultShare        = vaultLiquidity / totalStakedLiquidity
//   vaultEmissionsUsd = vaultShare * rewardRate * rewardPrice * secondsPerYear
//   apr               = vaultEmissionsUsd / vaultTvl
//
// `reduction` applies the vault's profit-sharing keep ratio (e.g. '0.9' for a 10% cut).
const getApy = async (poolAddress, vaultAddress, reduction = '1', chain = CHAIN_IDS.BASE) => {
  try {
    const web3 = web3BASE

    const voterInstance = getCachedContract({
      web3,
      abi: aeroVoter.contract.abi,
      address: AERODROME_VOTER,
    })
    const gaugeAddress = await aeroVoter.methods.getGauge(poolAddress, voterInstance)
    if (!gaugeAddress || gaugeAddress === ZERO_ADDRESS) {
      return '0'
    }

    const poolInstance = getCachedContract({
      web3,
      abi: aeroClPool.contract.abi,
      address: poolAddress,
    })
    const helperInstance = getCachedContract({
      web3,
      abi: aeroSlipstreamHelper.contract.abi,
      address: SLIPSTREAM_HELPER,
    })
    const gaugeInstance = getCachedContract({
      web3,
      abi: aeroGauge.contract.abi,
      address: gaugeAddress,
    })
    const vaultInstance = getCachedContract({
      web3,
      abi: clVault.contract.abi,
      address: vaultAddress,
    })

    const posId = await clVault.methods.getPosId(vaultInstance)
    const posManagerAddress = await clVault.methods.getPosManager(vaultInstance)
    const nftManagerInstance = getCachedContract({
      web3,
      abi: aeroNftManager.contract.abi,
      address: posManagerAddress,
    })
    const position = await aeroNftManager.methods.getPositions(posId, nftManagerInstance)
    const vaultLiquidity = new BigNumber(position.liquidity)
    if (vaultLiquidity.isZero()) {
      return '0'
    }

    const totalStakedLiquidity = new BigNumber(
      await aeroClPool.methods.getStakedLiquidity(poolInstance),
    )
    if (totalStakedLiquidity.isZero()) {
      return '0'
    }

    const vaultShare = vaultLiquidity.div(totalStakedLiquidity)

    const token0 = await aeroClPool.methods.getToken0(poolInstance)
    const token1 = await aeroClPool.methods.getToken1(poolInstance)
    const slot0 = await aeroClPool.methods.getSlot0(poolInstance)
    const sqrtPriceX96 = slot0.sqrtPriceX96
    const sqrtRatioLower = await aeroSlipstreamHelper.methods.getSqrtRatioAtTick(
      Number(position.tickLower),
      helperInstance,
    )
    const sqrtRatioUpper = await aeroSlipstreamHelper.methods.getSqrtRatioAtTick(
      Number(position.tickUpper),
      helperInstance,
    )
    const vaultAmounts = await aeroSlipstreamHelper.methods.getAmountsForLiquidity(
      sqrtPriceX96,
      sqrtRatioLower,
      sqrtRatioUpper,
      vaultLiquidity.toFixed(0),
      helperInstance,
    )
    const vaultUsd0 = await valueInUsd(web3, token0, vaultAmounts.amount0, chain)
    const vaultUsd1 = await valueInUsd(web3, token1, vaultAmounts.amount1, chain)
    const vaultTvlUsd = vaultUsd0.plus(vaultUsd1)
    if (vaultTvlUsd.isZero()) {
      return '0'
    }

    let apr = new BigNumber(0)
    const periodFinish = Number(await aeroGauge.methods.getPeriodFinish(gaugeInstance))
    if (Date.now() / 1000 < periodFinish) {
      const rewardRate = new BigNumber(await aeroGauge.methods.getRewardRate(gaugeInstance))
      const rewardToken = await aeroGauge.methods.getRewardToken(gaugeInstance)
      const rewardPrice = new BigNumber(await getTokenPriceByAddress(rewardToken, chain))

      const vaultEmissionsUsdPerYear = vaultShare
        .times(rewardRate)
        .div(new BigNumber(10).pow(18))
        .times(rewardPrice)
        .times(SECONDS_PER_YEAR)

      apr = vaultEmissionsUsdPerYear.div(vaultTvlUsd).times(100)
    }

    const totalApr = apr.times(reduction)

    if (!totalApr.isFinite() || totalApr.isLessThan(0)) {
      return '0'
    }

    return totalApr.toFixed()
  } catch (error) {
    logger.error(`cl-vault getApy(${poolAddress}) failed`, error)
    return '0'
  }
}

module.exports = {
  getApy,
}
