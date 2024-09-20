const vaultMethods = require('../contracts/vault/methods')
const vaultContract = require('../contracts/vault/contract.json')

const controllerMethods = require('../contracts/controller/methods')
const controllerContract = require('../contracts/controller/contract.json')

const crvMethods = require('../contracts/crv/methods')
const crvContract = require('../contracts/crv/contract.json')

const crvYPoolMethods = require('../contracts/crv-ypool/methods')
const crvYPoolContract = require('../contracts/crv-ypool/contract.json')

const crvGaugeMethods = require('../contracts/crv-gauge/methods')
const crvGaugeContract = require('../contracts/crv-gauge/contract.json')

const crvChildGaugeMethods = require('../contracts/crv-child-gauge/methods')
const crvChildGaugeContract = require('../contracts/crv-child-gauge/contract.json')

const balGaugeMethods = require('../contracts/bal-gauge/methods')
const balGaugeContract = require('../contracts/bal-gauge/contract.json')

const crvControllerMethods = require('../contracts/crv-controller/methods')
const crvControllerContract = require('../contracts/crv-controller/contract.json')

const idleControllerMethods = require('../contracts/idle-controller/methods')
const idleControllerContract = require('../contracts/idle-controller/contract.json')

const idleLendingTokenMethods = require('../contracts/idle-lending-token/methods')
const idleLendingTokenContract = require('../contracts/idle-lending-token/contract.json')

const poolMethods = require('../contracts/pool/methods')
const poolContract = require('../contracts/pool/contract.json')

const potPoolMethods = require('../contracts/pot-pool/methods')
const potPoolContract = require('../contracts/pot-pool/contract.json')

const tokenMethods = require('../contracts/token/methods')
const tokenContract = require('../contracts/token/contract.json')

const farmsteadUSDCMethods = require('../contracts/farmstead-usdc/methods')
const farmsteadUSDCContract = require('../contracts/farmstead-usdc/contract.json')

const balancerVaultMethods = require('../contracts/balancer-vault/methods')
const balancerVaultContract = require('../contracts/balancer-vault/contract.json')

const quickswapDualRewardMethods = require('../contracts/quickswap-dual-reward/methods')
const quickswapDualRewardContract = require('../contracts/quickswap-dual-reward/contract.json')

const uniNonFungibleManagerMethods = require('../contracts/uni-non-fungible-manager/methods')
const uniNonFungibleManagerContract = require('../contracts/uni-non-fungible-manager/contract.json')

const balTokenAdminMethods = require('../contracts/bal-token-admin/methods')
const balTokenAdminContract = require('../contracts/bal-token-admin/contract.json')

const balLpTokenMethods = require('../contracts/bal-lp-token/methods')
const balLpTokenContract = require('../contracts/bal-lp-token/contract.json')

const balBoostLpTokenMethods = require('../contracts/bal-boost-lp-token/methods')
const balBoostLpTokenContract = require('../contracts/bal-boost-lp-token/contract.json')

const xgrailStrategyMethods = require('../contracts/xgrail-strategy/methods')
const xgrailStrategyContract = require('../contracts/xgrail-strategy/contract.json')

const camelotDividendsMethods = require('../contracts/camelot-dividends/methods')
const camelotDividendsContract = require('../contracts/camelot-dividends/contract.json')

const camelotNFTMethods = require('../contracts/camelot-nftpool/methods')
const camelotNFTContract = require('../contracts/camelot-nftpool/contract.json')

const camelotNitroMethods = require('../contracts/camelot-nitropool/methods')
const camelotNitroContract = require('../contracts/camelot-nitropool/contract.json')

const camelotMasterMethods = require('../contracts/camelot-master/methods')
const camelotMasterContract = require('../contracts/camelot-master/contract.json')

const camelotStrategyMethods = require('../contracts/camelot-strategy/methods')
const camelotStrategyContract = require('../contracts/camelot-strategy/contract.json')

const baseswapMasterV2Methods = require('../contracts/baseswap-masterchef-v2/methods')
const baseswapMasterV2Contract = require('../contracts/baseswap-masterchef-v2/contract.json')

const baseswapNFTMethods = require('../contracts/baseswap-nftpool/methods')
const baseswapNFTContract = require('../contracts/baseswap-nftpool/contract.json')

const cometMethods = require('../contracts/comet/methods')
const cometContract = require('../contracts/comet/contract.json')

const aeroGaugeMethods = require('../contracts/aerodrome-gauge/methods')
const aeroGaugeContract = require('../contracts/aerodrome-gauge/contract.json')

const caviarChefMethods = require('../contracts/caviar-chef/methods')
const caviarChefContract = require('../contracts/caviar-chef/contract.json')

const caviarRebaseChefMethods = require('../contracts/caviar-rebase-chef/methods')
const caviarRebaseChefContract = require('../contracts/caviar-rebase-chef/contract.json')

const pearlGaugeMethods = require('../contracts/pearl-gauge/methods')
const pearlGaugeContract = require('../contracts/pearl-gauge/contract.json')

const basedRewardsMethods = require('../contracts/based-rewards/methods')
const basedRewardsContract = require('../contracts/based-rewards/contract.json')

const mTokenMethods = require('../contracts/mtoken/methods')
const mTokenContract = require('../contracts/mtoken/contract.json')

const comptrollerMethods = require('../contracts/comptroller/methods')
const comptrollerContract = require('../contracts/comptroller/contract.json')

const magpieMasterMethods = require('../contracts/mgp-master/methods')
const magpieMasterContract = require('../contracts/mgp-master/contract.json')

const wombatStakingMethods = require('../contracts/wombat-staking/methods')
const wombatStakingContract = require('../contracts/wombat-staking/contract.json')

const wombatMasterMethods = require('../contracts/wom-master/methods')
const wombatMasterContract = require('../contracts/wom-master/contract.json')

const wombatAssetMethods = require('../contracts/wombat-asset/methods')
const wombatAssetContract = require('../contracts/wombat-asset/contract.json')

const wombatFeePoolMethods = require('../contracts/wombat-fee-pool/methods')
const wombatFeePoolContract = require('../contracts/wombat-fee-pool/contract.json')

const lodestarCTokenMethods = require('../contracts/lodestar-ctoken/methods')
const lodestarCTokenContract = require('../contracts/lodestar-ctoken/contract.json')

const lodestarComptrollerMethods = require('../contracts/lodestar-comptroller/methods')
const lodestarComptrollerContract = require('../contracts/lodestar-comptroller/contract.json')

const lodestarStrategyMethods = require('../contracts/lodestar-strategy/methods')
const lodestarStrategyContract = require('../contracts/lodestar-strategy/contract.json')

const seamlessPoolMethods = require('../contracts/seamless-pool/methods')
const seamlessPoolContract = require('../contracts/seamless-pool/contract.json')

const seamlessStrategyMethods = require('../contracts/seamless-strategy/methods')
const seamlessStrategyContract = require('../contracts/seamless-strategy/contract.json')

const seamlessIncentivesMethods = require('../contracts/seamless-incentives/methods')
const seamlessIncentivesContract = require('../contracts/seamless-incentives/contract.json')

const radpieReaderMethods = require('../contracts/rdp-reader/methods')
const radpieReaderContract = require('../contracts/rdp-reader/contract.json')

const radpieRewarderMethods = require('../contracts/rdp-rewarder/methods')
const radpieRewarderContract = require('../contracts/rdp-rewarder/contract.json')

const radpieMasterMethods = require('../contracts/rdp-master/methods')
const radpieMasterContract = require('../contracts/rdp-master/contract.json')

const pendleMarketMethods = require('../contracts/pendle-market/methods')
const pendleMarketContract = require('../contracts/pendle-market/contract.json')

const hypervisorMethods = require('../contracts/hypervisor/methods')
const hypervisorContract = require('../contracts/hypervisor/contract.json')

const zfFarmMethods = require('../contracts/zf-farm/methods')
const zfFarmContract = require('../contracts/zf-farm/contract.json')

const velocoreLensMethods = require('../contracts/velocore-lens/methods')
const velocoreLensContract = require('../contracts/velocore-lens/contract.json')

const reactorFusionRewardMethods = require('../contracts/reactorfusion-rewards/methods')
const reactorFusionRewardContract = require('../contracts/reactorfusion-rewards/contract.json')

const hopLPTokenMethods = require('../contracts/hop-lp-token/methods')
const hopLPTokenContract = require('../contracts/hop-lp-token/contract.json')

const hopRewardsMethods = require('../contracts/hop-rewards/methods')
const hopRewardsContract = require('../contracts/hop-rewards/contract.json')

const hopSwapMethods = require('../contracts/hop-swap/methods')
const hopSwapContract = require('../contracts/hop-swap/contract.json')

const gammaStakingRewardsMethods = require('../contracts/gamma-stakingrewards/methods')
const gammaStakingRewardsContract = require('../contracts/gamma-stakingrewards/contract.json')

const aaveRewardsMethods = require('../contracts/aave-rewards/methods')
const aaveRewardsContract = require('../contracts/aave-rewards/contract.json')

const aTokenMethods = require('../contracts/atoken/methods')
const aTokenContract = require('../contracts/atoken/contract.json')

const extraFiRewardsMethods = require('../contracts/extrafi-rewards/methods')
const extraFiRewardsContract = require('../contracts/extrafi-rewards/contract.json')

const extraFiLendingMethods = require('../contracts/extrafi-lending/methods')
const extraFiLendingContract = require('../contracts/extrafi-lending/contract.json')

const fluidLendingResolverMethods = require('../contracts/fluid-lending-resolver/methods')
const fluidLendingResolverContract = require('../contracts/fluid-lending-resolver/contract.json')

const fluidLiquidityResolverMethods = require('../contracts/fluid-liquidity-resolver/methods')
const fluidLiquidityResolverContract = require('../contracts/fluid-liquidity-resolver/contract.json')

module.exports = {
  fluidLendingResolver: {
    methods: fluidLendingResolverMethods,
    contract: fluidLendingResolverContract,
  },
  fluidLiquidityResolver: {
    methods: fluidLiquidityResolverMethods,
    contract: fluidLiquidityResolverContract,
  },
  extraFiRewards: {
    methods: extraFiRewardsMethods,
    contract: extraFiRewardsContract,
  },
  extraFiLending: {
    methods: extraFiLendingMethods,
    contract: extraFiLendingContract,
  },
  aaveRewards: {
    methods: aaveRewardsMethods,
    contract: aaveRewardsContract,
  },
  aToken: {
    methods: aTokenMethods,
    contract: aTokenContract,
  },
  hopSwap: {
    methods: hopSwapMethods,
    contract: hopSwapContract,
  },
  hopRewards: {
    methods: hopRewardsMethods,
    contract: hopRewardsContract,
  },
  hopLPToken: {
    methods: hopLPTokenMethods,
    contract: hopLPTokenContract,
  },
  reactorFusionRewards: {
    methods: reactorFusionRewardMethods,
    contract: reactorFusionRewardContract,
  },
  velocoreLens: {
    methods: velocoreLensMethods,
    contract: velocoreLensContract,
  },
  zfFarm: {
    methods: zfFarmMethods,
    contract: zfFarmContract,
  },
  hypervisor: {
    methods: hypervisorMethods,
    contract: hypervisorContract,
  },
  pendleMarket: {
    methods: pendleMarketMethods,
    contract: pendleMarketContract,
  },
  seamlessPool: {
    methods: seamlessPoolMethods,
    contract: seamlessPoolContract,
  },
  seamlessIncentives: {
    methods: seamlessIncentivesMethods,
    contract: seamlessIncentivesContract,
  },
  seamlessStrategy: {
    methods: seamlessStrategyMethods,
    contract: seamlessStrategyContract,
  },
  lodestarStrategy: {
    methods: lodestarStrategyMethods,
    contract: lodestarStrategyContract,
  },
  lodestarCToken: {
    methods: lodestarCTokenMethods,
    contract: lodestarCTokenContract,
  },
  lodestarComptroller: {
    methods: lodestarComptrollerMethods,
    contract: lodestarComptrollerContract,
  },
  comptroller: {
    methods: comptrollerMethods,
    contract: comptrollerContract,
  },
  mToken: {
    methods: mTokenMethods,
    contract: mTokenContract,
  },
  basedRewards: {
    methods: basedRewardsMethods,
    contract: basedRewardsContract,
  },
  pearlGauge: {
    methods: pearlGaugeMethods,
    contract: pearlGaugeContract,
  },
  caviarChef: {
    methods: caviarChefMethods,
    contract: caviarChefContract,
  },
  caviarRebaseChef: {
    methods: caviarRebaseChefMethods,
    contract: caviarRebaseChefContract,
  },
  comet: {
    methods: cometMethods,
    contract: cometContract,
  },
  aeroGauge: {
    methods: aeroGaugeMethods,
    contract: aeroGaugeContract,
  },
  xgrailStrategy: {
    methods: xgrailStrategyMethods,
    contract: xgrailStrategyContract,
  },
  camelotDividends: {
    methods: camelotDividendsMethods,
    contract: camelotDividendsContract,
  },
  camelotNFTPool: {
    methods: camelotNFTMethods,
    contract: camelotNFTContract,
  },
  camelotNitroPool: {
    methods: camelotNitroMethods,
    contract: camelotNitroContract,
  },
  camelotStrategy: {
    methods: camelotStrategyMethods,
    contract: camelotStrategyContract,
  },
  camelotMaster: {
    methods: camelotMasterMethods,
    contract: camelotMasterContract,
  },
  baseswapMasterchefV2: {
    methods: baseswapMasterV2Methods,
    contract: baseswapMasterV2Contract,
  },
  baseswapNFTPool: {
    methods: baseswapNFTMethods,
    contract: baseswapNFTContract,
  },
  vault: {
    methods: vaultMethods,
    contract: vaultContract,
  },
  controller: {
    methods: controllerMethods,
    contract: controllerContract,
  },
  crv: {
    methods: crvMethods,
    contract: crvContract,
  },
  crvYPool: {
    methods: crvYPoolMethods,
    contract: crvYPoolContract,
  },
  crvGauge: {
    methods: crvGaugeMethods,
    contract: crvGaugeContract,
  },
  crvChildGauge: {
    methods: crvChildGaugeMethods,
    contract: crvChildGaugeContract,
  },
  balGauge: {
    methods: balGaugeMethods,
    contract: balGaugeContract,
  },
  crvController: {
    methods: crvControllerMethods,
    contract: crvControllerContract,
  },
  idleController: {
    methods: idleControllerMethods,
    contract: idleControllerContract,
  },
  idleLendingToken: {
    methods: idleLendingTokenMethods,
    contract: idleLendingTokenContract,
  },
  token: {
    methods: tokenMethods,
    contract: tokenContract,
  },
  pool: {
    methods: poolMethods,
    contract: poolContract,
  },
  potPool: {
    methods: potPoolMethods,
    contract: potPoolContract,
  },
  farmsteadUSDC: {
    contract: farmsteadUSDCContract,
    methods: farmsteadUSDCMethods,
  },
  balancerVault: {
    contract: balancerVaultContract,
    methods: balancerVaultMethods,
  },
  quickswapDualReward: {
    contract: quickswapDualRewardContract,
    methods: quickswapDualRewardMethods,
  },
  uniNonFungibleManager: {
    contract: uniNonFungibleManagerContract,
    methods: uniNonFungibleManagerMethods,
  },
  balTokenAdmin: {
    contract: balTokenAdminContract,
    methods: balTokenAdminMethods,
  },
  balLpToken: {
    contract: balLpTokenContract,
    methods: balLpTokenMethods,
  },
  balBoostLpToken: {
    contract: balBoostLpTokenContract,
    methods: balBoostLpTokenMethods,
  },
  magpieMaster: {
    contract: magpieMasterContract,
    methods: magpieMasterMethods,
  },
  wombatStaking: {
    contract: wombatStakingContract,
    methods: wombatStakingMethods,
  },
  wombatMaster: {
    contract: wombatMasterContract,
    methods: wombatMasterMethods,
  },
  wombatAsset: {
    contract: wombatAssetContract,
    methods: wombatAssetMethods,
  },
  wombatFeePool: {
    contract: wombatFeePoolContract,
    methods: wombatFeePoolMethods,
  },
  radpieReader: {
    contract: radpieReaderContract,
    methods: radpieReaderMethods,
  },
  radpieRewarder: {
    contract: radpieRewarderContract,
    methods: radpieRewarderMethods,
  },
  radpieMaster: {
    contract: radpieMasterContract,
    methods: radpieMasterMethods,
  },
  gammaStakingRewards: {
    contract: gammaStakingRewardsContract,
    methods: gammaStakingRewardsMethods,
  },
}
