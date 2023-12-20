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

const lodestarCTokenMethods = require('../contracts/lodestar-ctoken/methods')
const lodestarCTokenContract = require('../contracts/lodestar-ctoken/contract.json')

const lodestarComptrollerMethods = require('../contracts/lodestar-comptroller/methods')
const lodestarComptrollerContract = require('../contracts/lodestar-comptroller/contract.json')

module.exports = {
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
}
