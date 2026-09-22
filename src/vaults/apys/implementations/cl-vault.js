const BigNumber = require('bignumber.js')
const { web3BASE } = require('../../../lib/web3')
const {
  token,
  clVault,
  aeroVoter,
  aeroClPool,
  aeroNftManager,
  aeroGauge,
} = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')
const { getTokenPriceByAddress } = require('../../../prices/coingecko')
const { CHAIN_IDS } = require('../../../lib/constants')
const logger = require('../../../lib/logger')
const { cache } = require('../../../lib/cache')

const AERODROME_VOTER = '0x16613524e02ad97edfef371bc883f2f5d6c480a5'

const SECONDS_PER_YEAR = 60 * 60 * 24 * 365.25

// ~24h of Base blocks (2s). Long enough that a quiet hour does not dominate the fee estimate,
// short enough to stay within a normal archive window.
const FEE_WINDOW_BLOCKS = 43200
const Q128 = new BigNumber(2).pow(128)
// Fee rates move slowly; re-deriving them every poll is not worth the archive calls.
const FEE_CACHE_TTL_SECONDS = 1800

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
// Swap-fee APR earned by the UNSTAKED buffer position of a V2 twin-position vault.
//
// In Slipstream the two halves earn different things: STAKED liquidity earns AERO emissions and its
// swap fees go to voters via the gauge, while UNSTAKED liquidity earns swap fees and no emissions.
// Verified on-chain: every staked position reads tokensOwed0/1 == 0 while every buffer has real
// accrued fees. So the buffer's fee income is a genuine, and material, part of the yield that the
// emissions-only calculation misses entirely.
//
// feeGrowthGlobal is cumulative fees per unit of in-range liquidity, so sampling it across a window
// and scaling by the buffer's liquidity gives that buffer's fee income directly.
//
// Returns 0 rather than throwing on ANY failure — a V1 vault (no bufferPosId), a non-archive RPC, or
// a reorg must degrade to emissions-only, never zero out the whole APY.
// Fee growth over the window is a property of the POOL, not of any one vault, and the archive
// calls behind it are by far the most expensive thing here. Compute once per pool per TTL: without
// this, three vaults sharing a pool each repeated the same four archive reads, which slowed the poll
// cycle enough that downstream endpoints were still empty when they were queried.
const getPoolFeeGrowthDelta = async (poolAddress, poolInstance, web3) => {
  const key = `clFeeGrowth-${poolAddress.toLowerCase()}`
  const cached = cache.get(key)
  if (cached) return cached
  // web3 v4 returns BigInt here; mixing it with a Number throws, so normalise first.
  const latest = Number(await web3.eth.getBlockNumber())
  const past = latest - FEE_WINDOW_BLOCKS
  if (past <= 0) return null
  const [nowBlock, pastBlock] = await Promise.all([
    web3.eth.getBlock(latest),
    web3.eth.getBlock(past),
  ])
  const elapsed = Number(nowBlock.timestamp) - Number(pastBlock.timestamp)
  if (!elapsed || elapsed <= 0) return null
  const [f0Now, f1Now, f0Past, f1Past] = await Promise.all([
    aeroClPool.methods.getFeeGrowthGlobal0(poolInstance, latest),
    aeroClPool.methods.getFeeGrowthGlobal1(poolInstance, latest),
    aeroClPool.methods.getFeeGrowthGlobal0(poolInstance, past),
    aeroClPool.methods.getFeeGrowthGlobal1(poolInstance, past),
  ])
  const d0 = new BigNumber(f0Now).minus(f0Past)
  const d1 = new BigNumber(f1Now).minus(f1Past)
  if (d0.isNegative() || d1.isNegative()) return null
  const result = { d0: d0.toFixed(), d1: d1.toFixed(), elapsed }
  cache.set(key, result, FEE_CACHE_TTL_SECONDS)
  return result
}

// Whether a vault is a V2 twin-position vault never changes, so the probing call is cached
// permanently per vault rather than paid on every poll.
const getBufferPosIdCached = async (vaultInstance, vaultAddress) => {
  const key = `clBufferPosId-${vaultAddress.toLowerCase()}`
  const cached = cache.get(key)
  if (cached !== undefined) return cached
  let value = null
  try {
    value = await clVault.methods.getBufferPosId(vaultInstance)
  } catch (e) {
    value = null // V1 single-position vault: no buffer, no swap fees to credit
  }
  cache.set(key, value, 0)
  return value
}

const getBufferFeeApr = async ({
  web3,
  poolAddress,
  poolInstance,
  vaultInstance,
  vaultAddress,
  vaultTvlUsd,
  chain,
}) => {
  try {
    const bufferPosId = await getBufferPosIdCached(vaultInstance, vaultAddress)
    if (!bufferPosId || bufferPosId === '0') return new BigNumber(0)

    const posManagerAddress = await clVault.methods.getPosManager(vaultInstance)
    const nftManagerInstance = getCachedContract({
      web3,
      abi: aeroNftManager.contract.abi,
      address: posManagerAddress,
    })
    const buffer = await aeroNftManager.methods.getPositions(bufferPosId, nftManagerInstance)
    const bufferLiquidity = new BigNumber(buffer.liquidity)
    if (bufferLiquidity.isZero()) return new BigNumber(0)

    // Out of range the buffer earns nothing going forward, so reporting a fee APR would be wrong.
    const slot0 = await aeroClPool.methods.getSlot0(poolInstance)
    const tick = Number(slot0.tick)
    if (tick < Number(buffer.tickLower) || tick >= Number(buffer.tickUpper)) {
      return new BigNumber(0)
    }

    const window = await getPoolFeeGrowthDelta(poolAddress, poolInstance, web3)
    if (!window) return new BigNumber(0)
    const d0 = new BigNumber(window.d0)
    const d1 = new BigNumber(window.d1)
    const elapsed = window.elapsed

    const token0 = await clVault.methods.getToken0(vaultInstance)
    const token1 = await clVault.methods.getToken1(vaultInstance)
    const fees0 = d0.times(bufferLiquidity).div(Q128).integerValue(BigNumber.ROUND_FLOOR)
    const fees1 = d1.times(bufferLiquidity).div(Q128).integerValue(BigNumber.ROUND_FLOOR)
    const feesUsd = (await valueInUsd(web3, token0, fees0.toFixed(), chain)).plus(
      await valueInUsd(web3, token1, fees1.toFixed(), chain),
    )
    if (feesUsd.isZero()) return new BigNumber(0)

    const apr = feesUsd.div(elapsed).times(SECONDS_PER_YEAR).div(vaultTvlUsd).times(100)
    if (!apr.isFinite() || apr.isLessThan(0)) return new BigNumber(0)
    return apr
  } catch (error) {
    logger.info(`cl-vault getBufferFeeApr skipped: ${error.message}`)
    return new BigNumber(0)
  }
}

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

    const token0 = await clVault.methods.getToken0(vaultInstance)
    const token1 = await clVault.methods.getToken1(vaultInstance)
    const vaultAmounts = await clVault.methods.getCurrentTokenAmounts(vaultInstance)
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

    // Emissions are compounded through the reward path and take the profit-sharing cut. Swap fees
    // are NOT: the strategy folds collected fees straight back into the buffer without routing them
    // through _notifyProfitInRewardToken, so users keep 100% of them. Applying `reduction` to the
    // fee component would therefore under-report the yield users actually receive.
    const feeApr = await getBufferFeeApr({
      web3,
      poolAddress,
      poolInstance,
      vaultInstance,
      vaultAddress,
      vaultTvlUsd,
      chain,
    })

    const totalApr = apr.times(reduction).plus(feeApr)

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
