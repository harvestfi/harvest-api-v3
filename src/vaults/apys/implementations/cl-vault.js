const BigNumber = require('bignumber.js')
const { ContractExecutionError } = require('web3-errors')
const { getWeb3 } = require('../../../lib/web3')
const {
  token,
  clVault,
  aeroVoter,
  aeroClPool,
  aeroNftManager,
  aeroGauge,
} = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')
const { getTokenPriceByAddress, getTokenPriceById } = require('../../../prices/coingecko')
const { CHAIN_IDS } = require('../../../lib/constants')
const logger = require('../../../lib/logger')
const { cache } = require('../../../lib/cache')

// Aero deployments differ per chain in how a pool's gauge is found and how it pays emissions:
//
//   - Base (Aerodrome Slipstream): gauges are registered in the Voter and pay a weekly rewardRate.
//   - Arc (Aero MetaDEX03 "Slipstream V3"): there is no Voter.gauges(). Each pool records its own gauge
//     (the zero address until Aero's gauges launch on Arc), and the gauge has no rewardRate: emissions
//     stream from the LeafVoter into the pool's rewardGrowthGlobalX128, so they are sampled like fees.
//
// `feeWindowBlocks` is ~24h of that chain's blocks. Long enough that a quiet hour does not dominate the
// fee estimate, short enough to stay within a normal archive window.
const CHAIN_CONFIG = {
  [CHAIN_IDS.BASE]: {
    voter: '0x16613524e02ad97edfef371bc883f2f5d6c480a5',
    feeWindowBlocks: 43200, // 2s blocks
  },
  [CHAIN_IDS.ARC]: {
    voter: null,
    feeWindowBlocks: 170000, // ~0.507s blocks
    // Arc's RPCs are load-balanced, and a backend may not have imported the head block yet (a null block
    // or a -32001 error), so the window ends a few blocks before it.
    headOffsetBlocks: 10,
    // Arc gauges pay the LeafVoter's receipt token, which is redeemed amount-for-amount for the root
    // AERO token on Base and is not listed anywhere, so emissions are valued as AERO (18 decimals).
    // AERO moves to a new token contract with Aero's launch: re-check that this id still prices it.
    emissionsPriceId: 'aerodrome-finance',
  },
}

const SECONDS_PER_YEAR = 60 * 60 * 24 * 365.25

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

const isInRange = (position, tick) =>
  tick >= Number(position.tickLower) && tick < Number(position.tickUpper)

// The two heights a growth accumulator is sampled at, ~24h apart.
const getSampleWindow = async (web3, { feeWindowBlocks: windowBlocks, headOffsetBlocks = 0 }) => {
  // web3 v4 returns BigInt here; mixing it with a Number throws, so normalise first.
  const latest = Number(await web3.eth.getBlockNumber()) - headOffsetBlocks
  const past = latest - windowBlocks
  if (past <= 0) return null
  const [nowBlock, pastBlock] = await Promise.all([
    web3.eth.getBlock(latest),
    web3.eth.getBlock(past),
  ])
  const elapsed = Number(nowBlock.timestamp) - Number(pastBlock.timestamp)
  if (!elapsed || elapsed <= 0) return null
  return { latest, past, elapsed }
}

// Fee growth over the window is a property of the POOL, not of any one vault, and the archive
// calls behind it are by far the most expensive thing here. Compute once per pool per TTL: without
// this, three vaults sharing a pool each repeated the same four archive reads, which slowed the poll
// cycle enough that downstream endpoints were still empty when they were queried.
const getPoolFeeGrowthDelta = async (poolAddress, poolInstance, web3, chain, config) => {
  const key = `clFeeGrowth-${chain}-${poolAddress.toLowerCase()}`
  const cached = cache.get(key)
  if (cached) return cached
  const window = await getSampleWindow(web3, config)
  if (!window) return null
  const { latest, past, elapsed } = window
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

// Same sampling for emissions, on pools whose gauges stream them into rewardGrowthGlobalX128. The pool
// only adds emissions to it when it settles them (on stakes, tick-crossing swaps and gauge claims), so
// the growth stored at a block covers emissions up to that block's lastUpdated, not up to the block.
// Measuring between the two lastUpdated stamps instead of the two block times removes that lag. Before
// a pool's gauge exists lastUpdated is 0; a window starting earlier falls back to the block times and
// understates the rate until it has rolled past the gauge's creation.
const getPoolRewardGrowthDelta = async (poolAddress, poolInstance, web3, chain, config) => {
  const key = `clRewardGrowth-${chain}-${poolAddress.toLowerCase()}`
  const cached = cache.get(key)
  if (cached) return cached
  const window = await getSampleWindow(web3, config)
  if (!window) return null
  const { latest, past, elapsed } = window
  const [rNow, rPast, settledNow, settledPast] = await Promise.all([
    aeroClPool.methods.getRewardGrowthGlobal(poolInstance, latest),
    aeroClPool.methods.getRewardGrowthGlobal(poolInstance, past),
    aeroClPool.methods.getLastUpdated(poolInstance, latest),
    aeroClPool.methods.getLastUpdated(poolInstance, past),
  ])
  const d = new BigNumber(rNow).minus(rPast)
  if (d.isNegative()) return null
  const settledElapsed = Number(settledNow) - Number(settledPast)
  const result = {
    d: d.toFixed(),
    elapsed: Number(settledPast) > 0 && settledElapsed > 0 ? settledElapsed : elapsed,
  }
  cache.set(key, result, FEE_CACHE_TTL_SECONDS)
  return result
}

// A V1 single-position vault has no bufferPosId() and always reverts, so that is remembered for good.
// A V2 vault mints a new buffer position on every rebalance, so its id is read on every poll.
const getBufferPosId = async (vaultInstance, vaultAddress, chain) => {
  const key = `clV1Vault-${chain}-${vaultAddress.toLowerCase()}`
  if (cache.get(key)) return null
  try {
    return await clVault.methods.getBufferPosId(vaultInstance)
  } catch (error) {
    // Only a revert marks a V1 vault; a failed request (e.g. HTTP 429) must not hide the buffer for good.
    if (error instanceof ContractExecutionError) {
      cache.set(key, true, 0)
      return null
    }
    throw error
  }
}

// Swap-fee APR earned by the vault's UNSTAKED liquidity.
//
// In Slipstream the two halves earn different things: STAKED liquidity earns AERO emissions and its
// swap fees go to voters via the gauge, while UNSTAKED liquidity earns swap fees and no emissions.
// Verified on-chain: every staked position reads tokensOwed0/1 == 0 while every buffer has real
// accrued fees. So unstaked fee income is a genuine, and material, part of the yield that an
// emissions-only calculation misses entirely. The unstaked liquidity is always the buffer position of
// a V2 twin-position vault, plus the main position whenever that is not staked (e.g. while a pool has
// no gauge, as on Arc before Aero's gauges launch there).
//
// feeGrowthGlobal is cumulative fees per unit of in-range unstaked liquidity, so sampling it across a
// window and scaling by the vault's unstaked liquidity gives that liquidity's fee income directly.
//
// Returns 0 rather than throwing on ANY failure — a V1 vault (no bufferPosId), a non-archive RPC, or
// a reorg must degrade to emissions-only, never zero out the whole APY. An unreadable buffer only drops
// the buffer, so the fees of an unstaked main position are still credited.
const getUnstakedFeeApr = async ({
  web3,
  poolAddress,
  poolInstance,
  vaultInstance,
  vaultAddress,
  nftManagerInstance,
  unstakedPositions,
  vaultTvlUsd,
  token0,
  token1,
  chain,
  config,
}) => {
  const positions = [...unstakedPositions]
  try {
    const bufferPosId = await getBufferPosId(vaultInstance, vaultAddress, chain)
    if (bufferPosId && bufferPosId !== '0') {
      positions.push(await aeroNftManager.methods.getPositions(bufferPosId, nftManagerInstance))
    }
  } catch (error) {
    logger.error(`cl-vault: buffer position of ${vaultAddress} unavailable`, error)
  }

  try {
    if (!positions.length) return new BigNumber(0)

    // Out of range a position earns nothing going forward, so reporting a fee APR for it would be wrong.
    const slot0 = await aeroClPool.methods.getSlot0(poolInstance)
    const tick = Number(slot0.tick)
    const liquidity = positions
      .filter(position => isInRange(position, tick))
      .reduce((sum, position) => sum.plus(position.liquidity), new BigNumber(0))
    if (liquidity.isZero()) return new BigNumber(0)

    const window = await getPoolFeeGrowthDelta(poolAddress, poolInstance, web3, chain, config)
    if (!window) return new BigNumber(0)
    const d0 = new BigNumber(window.d0)
    const d1 = new BigNumber(window.d1)
    const elapsed = window.elapsed

    const fees0 = d0.times(liquidity).div(Q128).integerValue(BigNumber.ROUND_FLOOR)
    const fees1 = d1.times(liquidity).div(Q128).integerValue(BigNumber.ROUND_FLOOR)
    const feesUsd = (await valueInUsd(web3, token0, fees0.toFixed(), chain)).plus(
      await valueInUsd(web3, token1, fees1.toFixed(), chain),
    )
    if (feesUsd.isZero()) return new BigNumber(0)

    const apr = feesUsd.div(elapsed).times(SECONDS_PER_YEAR).div(vaultTvlUsd).times(100)
    if (!apr.isFinite() || apr.isLessThan(0)) return new BigNumber(0)
    return apr
  } catch (error) {
    // With the main position unstaked, fees are all the vault earns and this zeroes its APY.
    if (unstakedPositions.length) {
      logger.error(`cl-vault getUnstakedFeeApr(${poolAddress}) failed`, error)
    } else {
      logger.info(`cl-vault getUnstakedFeeApr skipped: ${error.message}`)
    }
    return new BigNumber(0)
  }
}

// Estimates the vault's emissions APR from live gauge data on chains whose gauges are registered in a
// Voter (Base), scaled to the vault's own position. Staked CL liquidity only earns AERO emissions
// (swap fees accrue to voters via the gauge, not to stakers), so:
//
//   vaultShare        = vaultLiquidity / totalStakedLiquidity
//   vaultEmissionsUsd = vaultShare * rewardRate * rewardPrice * secondsPerYear
//   apr               = vaultEmissionsUsd / vaultTvl
const getRewardRateEmissionsApr = async ({
  web3,
  gaugeAddress,
  poolInstance,
  vaultLiquidity,
  vaultTvlUsd,
  chain,
}) => {
  const totalStakedLiquidity = new BigNumber(
    await aeroClPool.methods.getStakedLiquidity(poolInstance),
  )
  if (totalStakedLiquidity.isZero()) {
    return new BigNumber(0)
  }

  const gaugeInstance = getCachedContract({
    web3,
    abi: aeroGauge.contract.abi,
    address: gaugeAddress,
  })
  const periodFinish = Number(await aeroGauge.methods.getPeriodFinish(gaugeInstance))
  if (Date.now() / 1000 >= periodFinish) {
    return new BigNumber(0)
  }

  const vaultShare = vaultLiquidity.div(totalStakedLiquidity)
  const rewardRate = new BigNumber(await aeroGauge.methods.getRewardRate(gaugeInstance))
  const rewardToken = await aeroGauge.methods.getRewardToken(gaugeInstance)
  const rewardPrice = new BigNumber(await getTokenPriceByAddress(rewardToken, chain))

  const vaultEmissionsUsdPerYear = vaultShare
    .times(rewardRate)
    .div(new BigNumber(10).pow(18))
    .times(rewardPrice)
    .times(SECONDS_PER_YEAR)

  return vaultEmissionsUsdPerYear.div(vaultTvlUsd).times(100)
}

// Estimates the emissions APR of the vault's staked position on chains whose gauges stream emissions
// into the pool (Arc). The pool credits them per unit of in-range staked liquidity in
// rewardGrowthGlobalX128, so sampling that across the window and scaling by the position's liquidity
// gives what the position earned over it, the same way fee growth gives fee income. This is a trailing
// ~24h realized rate rather than an instantaneous one, and it is gross of the gauge's early-withdrawal
// penalty and referral share.
//
// Like the fee path it returns 0 on any failure (it needs archive reads and a price), so that the
// buffer's fees are still reported.
const getRewardGrowthEmissionsApr = async ({
  web3,
  poolAddress,
  poolInstance,
  position,
  vaultTvlUsd,
  chain,
  config,
}) => {
  if (!config.emissionsPriceId) {
    logger.error(`cl-vault: no emissions price configured for chain ${chain}`)
    return new BigNumber(0)
  }

  try {
    // Out of range the position earns nothing going forward.
    const slot0 = await aeroClPool.methods.getSlot0(poolInstance)
    if (!isInRange(position, Number(slot0.tick))) {
      return new BigNumber(0)
    }

    const window = await getPoolRewardGrowthDelta(poolAddress, poolInstance, web3, chain, config)
    if (!window || new BigNumber(window.d).isZero()) {
      return new BigNumber(0)
    }

    const emissions = new BigNumber(window.d)
      .times(position.liquidity)
      .div(Q128)
      .div(new BigNumber(10).pow(18))
    const rewardPrice = new BigNumber(await getTokenPriceById(config.emissionsPriceId))
    const emissionsUsdPerYear = emissions
      .times(rewardPrice)
      .div(window.elapsed)
      .times(SECONDS_PER_YEAR)

    return emissionsUsdPerYear.div(vaultTvlUsd).times(100)
  } catch (error) {
    logger.error(`cl-vault getRewardGrowthEmissionsApr(${poolAddress}) failed`, error)
    return new BigNumber(0)
  }
}

// `reduction` applies the vault's profit-sharing keep ratio (e.g. '0.9' for a 10% cut) to emissions.
const getApy = async (poolAddress, vaultAddress, reduction = '1', chain = CHAIN_IDS.BASE) => {
  try {
    const config = CHAIN_CONFIG[chain]
    if (!config) {
      throw new Error(`no Aero CL configuration for chain ${chain}`)
    }
    const web3 = getWeb3(chain)

    const poolInstance = getCachedContract({
      web3,
      abi: aeroClPool.contract.abi,
      address: poolAddress,
    })
    const vaultInstance = getCachedContract({
      web3,
      abi: clVault.contract.abi,
      address: vaultAddress,
    })

    const gaugeAddress = config.voter
      ? await aeroVoter.methods.getGauge(
          poolAddress,
          getCachedContract({ web3, abi: aeroVoter.contract.abi, address: config.voter }),
        )
      : await aeroClPool.methods.getGauge(poolInstance)
    const hasGauge = Boolean(gaugeAddress) && gaugeAddress !== ZERO_ADDRESS

    const posId = await clVault.methods.getPosId(vaultInstance)
    const posManagerAddress = await clVault.methods.getPosManager(vaultInstance)
    const nftManagerInstance = getCachedContract({
      web3,
      abi: aeroNftManager.contract.abi,
      address: posManagerAddress,
    })
    // An empty main position still leaves the buffer's fees to report, so it is not a reason to stop.
    const position = await aeroNftManager.methods.getPositions(posId, nftManagerInstance)
    const vaultLiquidity = new BigNumber(position.liquidity)

    const token0 = await clVault.methods.getToken0(vaultInstance)
    const token1 = await clVault.methods.getToken1(vaultInstance)
    const vaultAmounts = await clVault.methods.getCurrentTokenAmounts(vaultInstance)
    const vaultUsd0 = await valueInUsd(web3, token0, vaultAmounts.amount0, chain)
    const vaultUsd1 = await valueInUsd(web3, token1, vaultAmounts.amount1, chain)
    const vaultTvlUsd = vaultUsd0.plus(vaultUsd1)
    if (vaultTvlUsd.isZero()) {
      return '0'
    }

    // The main position earns emissions while it is staked in the pool's gauge and swap fees otherwise.
    let emissionsApr = new BigNumber(0)
    const unstakedPositions = []
    if (!hasGauge) {
      unstakedPositions.push(position)
    } else if (config.voter) {
      // Every Base CL vault keeps its main position staked, so it is credited emissions directly.
      emissionsApr = await getRewardRateEmissionsApr({
        web3,
        gaugeAddress,
        poolInstance,
        vaultLiquidity,
        vaultTvlUsd,
        chain,
      })
    } else {
      const owner = await aeroNftManager.methods.getOwnerOf(posId, nftManagerInstance)
      if (owner.toLowerCase() === gaugeAddress.toLowerCase()) {
        emissionsApr = await getRewardGrowthEmissionsApr({
          web3,
          poolAddress,
          poolInstance,
          position,
          vaultTvlUsd,
          chain,
          config,
        })
      } else {
        unstakedPositions.push(position)
      }
    }

    // Emissions are compounded through the reward path and take the profit-sharing cut. Swap fees
    // are NOT: the strategy folds collected fees straight back into the buffer without routing them
    // through _notifyProfitInRewardToken, so users keep 100% of them. Applying `reduction` to the
    // fee component would therefore under-report the yield users actually receive.
    const feeApr = await getUnstakedFeeApr({
      web3,
      poolAddress,
      poolInstance,
      vaultInstance,
      vaultAddress,
      nftManagerInstance,
      unstakedPositions,
      vaultTvlUsd,
      token0,
      token1,
      chain,
      config,
    })

    const totalApr = emissionsApr.times(reduction).plus(feeApr)

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
