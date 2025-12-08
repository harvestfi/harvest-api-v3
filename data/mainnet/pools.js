const { CHAIN_IDS, TRADING_APY_TYPES, POOL_TYPES } = require('../constants')
const addresses = require('./addresses.json')

const strat15PercentFactor = '0.85'

module.exports = [
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'hypurr_HYPE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.hypurr_HYPE.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.hypurr_HYPE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE </a>to Hypurr, earning HYPE interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'hypurr_UBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.hypurr_UBTC.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.hypurr_UBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_UBTC.Underlying}" target="_blank" rel="noopener noreferrer"> UBTC </a>to Hypurr, earning UBTC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_UBTC.Underlying}" target="_blank" rel="noopener noreferrer"> UBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'hypurr_UETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.hypurr_UETH.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.hypurr_UETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_UETH.Underlying}" target="_blank" rel="noopener noreferrer"> UETH </a>to Hypurr, earning UETH interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_UETH.Underlying}" target="_blank" rel="noopener noreferrer"> UETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'hypurr_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.hypurr_USDC.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.hypurr_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Hypurr, earning USDC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'hypurr_USDT0',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.hypurr_USDT0.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.hypurr_USDT0.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0 </a>to Hypurr, earning USDT0 interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.hypurr_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_FLFR_USDT0',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_FLFR_USDT0.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_FLFR_USDT0.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLFR_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0 </a>to the Morpho Felix(Frontier) Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLFR_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_FLX_USDT0',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_FLX_USDT0.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_FLX_USDT0.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLX_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0 </a>to the Morpho Felix Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLX_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_GLT_USDT0',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_GLT_USDT0.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_GLT_USDT0.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_GLT_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0 </a>to the Morpho Gauntlet Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_GLT_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_HYP_USDT0',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_HYP_USDT0.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_HYP_USDT0.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_HYP_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0 </a>to the Morpho Hyperithm Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_HYP_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_MEV_USDT0',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_MEV_USDT0.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_MEV_USDT0.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_MEV_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0 </a>to the Morpho MEV Capital Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_MEV_USDT0.Underlying}" target="_blank" rel="noopener noreferrer"> USDT0</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_FLX_HYPE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_FLX_HYPE.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_FLX_HYPE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLX_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE </a>to the Morpho Felix Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLX_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_FLX_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_FLX_USDC.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_FLX_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLX_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Felix Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_FLX_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_GLT_UETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_GLT_UETH.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_GLT_UETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_GLT_UETH.Underlying}" target="_blank" rel="noopener noreferrer"> UETH </a>to the Morpho Gauntlet Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_GLT_UETH.Underlying}" target="_blank" rel="noopener noreferrer"> UETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_GLT_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_GLT_USDC.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_GLT_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_GLT_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_GLT_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_HYP_HYPE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_HYP_HYPE.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_HYP_HYPE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_HYP_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE </a>to the Morpho Hyperithm Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_HYP_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.HYPEREVM,
    id: 'morpho_MEV_HYPE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.HYPEREVM.V2.morpho_MEV_HYPE.NewPool,
    collateralAddress: addresses.HYPEREVM.V2.morpho_MEV_HYPE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [],
    rewardTokenSymbols: [],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_MEV_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE </a>to the Morpho MEV Capital Vault, earning 
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
        At every harvest, the earned rewards are converted into more
        <a href="https://hyperevmscan.io/token/${addresses.HYPEREVM.V2.morpho_MEV_HYPE.Underlying}" target="_blank" rel="noopener noreferrer"> HYPE</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_YO_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_YO_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.euler_YO_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to the Frontier YO Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer">cbBTC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_YO_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_YO_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.euler_YO_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Euler Frontier YO Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_ETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_EUL_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_EUL_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.euler_EUL_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EUL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Euler Base Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EUL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EUL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_EUL_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_EUL_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.euler_EUL_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EUL_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler Base Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EUL_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EUL_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_YO_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_YO_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.euler_YO_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Frontier YO Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_YO_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_AS_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_AS_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.euler_AS_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_AS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Euler Alterscope LRT Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_AS_ETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_AS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_AG_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_AG_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.euler_AG_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_AG_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler AlphaGrowth Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_AG_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_AG_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'silo_ET_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.silo_ET_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.silo_ET_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_ET_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Silo Ethereal Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_ET_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'euler_TF_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.euler_TF_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.euler_TF_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.euler_TF_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler Theo Frontier Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.rEUL}" target="_blank" rel="noopener noreferrer">rEUL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.euler_TF_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'silo_VM_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.silo_VM_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.silo_VM_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_VM_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Silo Varlamore Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_VM_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_CR_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_CR_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_CR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_CR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Clearstar Reactor Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_CR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_HY_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_HY_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_HY_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_HY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Hyperithm Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_HY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_YD_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_YD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_YD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_YD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Yearn Degen Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_YD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_OEV_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_OEV_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_OEV_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_OEV_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho OEV-boosted Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_OEV_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_PT_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_PT_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_PT_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_PT_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho MEV PTs Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_PT_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_SP_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_SP_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_SP_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_SP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Spectra Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_SP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'euler_EE_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.euler_EE_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.euler_EE_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.euler_EE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler Earn Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.rEUL}" target="_blank" rel="noopener noreferrer">rEUL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.euler_EE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'silo_OP_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.silo_OP_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.silo_OP_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_OP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Silo Optima Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_OP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_AC_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_AC_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_AC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_AC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Avantgarde Core Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_AC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_GC_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_GC_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_GC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_GC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Core Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_GC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_GP_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_GP_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_GP_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_GP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Prime Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_GP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_MEV_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_MEV_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_MEV_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_MEV_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho MEV Capital Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_MEV_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_RE7_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_RE7_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_RE7_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_RE7_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho RE7 Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_RE7_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_SHHY_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_SHHY_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_SHHY_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_SHHY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Stakehouse High Yield Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_SHHY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_SHP_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_SHP_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_SHP_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_SHP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Stakehouse Prime Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_SHP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'morpho_YOG_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.morpho_YOG_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.morpho_YOG_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_YOG_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Yearn OG Vault, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.morpho_YOG_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_CHY_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_CHY_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_CHY_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_CHY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Clearstar High Yield Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_CHY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_CR_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_CR_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_CR_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_CR_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Morpho Clearstar Reactor Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_CR_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_SHHY_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_SHHY_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_SHHY_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_SHHY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Steakhouse High Yield Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_SHHY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_SHP_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_SHP_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_SHP_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_SHP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Steakhouse Prime Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_SHP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_SmH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_SmH_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_SmH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_SmH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Smokehouse Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_SmH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_9S_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_9S_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_9S_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_9S_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho TAC Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_9S_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_AR_USDC_mainnet',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_AR_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_AR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_AR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Apostro Resolv Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_AR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_CR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_CR_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_CR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_CR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Clearstar Reactor Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_CR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_FX_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_FX_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_FX_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_FX_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho f(x) RE7 Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_FX_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_RL_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_RL_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_RL_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_RL_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Relend Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_RL_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'silo_PENDLE_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.silo_PENDLE_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.silo_PENDLE_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_PENDLE_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Silo - PENDLE, earning USDC interest. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_PENDLE_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'silo_sUSDX_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.silo_sUSDX_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.silo_sUSDX_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_sUSDX_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Silo - sUSDX, earning USDC interest. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_sUSDX_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'silo_yUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.silo_yUSD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.silo_yUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_yUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Silo - yUSD, earning USDC interest. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.silo_yUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_cbXRP',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_cbXRP.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_cbXRP.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_cbXRP.Underlying}" target="_blank" rel="noopener noreferrer"> cbXRP </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_cbXRP.Underlying}" target="_blank" rel="noopener noreferrer"> cbXRP</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_COE_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_COE_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_COE_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_COE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Clearstar OpenEden Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_COE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_EF_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_EF_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_EF_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_EF_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Extrafi XLend Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_EF_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_GF_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_GF_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_GF_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_GF_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Frontier Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_GF_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_EF_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_EF_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_EF_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_EF_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Morpho Extrafi XLend Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_EF_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_YOG_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_YOG_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_YOG_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_YOG_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to the Morpho Yearn OG Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_YOG_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_AR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_AR_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_AR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_AR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Apostro Resolv Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_AR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_UN_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_UN_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_UN_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_UN_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Universal Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_UN_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morpho_YOG_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morpho_YOG_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morpho_YOG_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_YOG_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Yearn OG Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morpho_YOG_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aave_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.aave_USDC.NewPool,
    collateralAddress: addresses.V2.aave_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Aave, earning USDC interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aave_USDC_prime',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.aave_USDC_prime.NewPool,
    collateralAddress: addresses.V2.aave_USDC_prime.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.aave_USDC_prime.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Aave - Prime, earning USDC interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.aave_USDC_prime.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'compound_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.compound_USDC.NewPool,
    collateralAddress: addresses.V2.compound_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.compound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Compound V3, earning 
       <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.compound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'euler_OE_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.euler_OE_USDC.NewPool,
    collateralAddress: addresses.V2.euler_OE_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.euler_OE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler OpenEden Vault, earning 
       <a href="https://etherscan.io/token/${addresses.V2.euler_OE_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.euler_OE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'euler_RE_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.euler_RE_USDC.NewPool,
    collateralAddress: addresses.V2.euler_RE_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.euler_RE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler Resolv Vault, earning 
       <a href="https://etherscan.io/token/${addresses.V2.euler_RE_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.euler_RE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'euler_SM_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.euler_SM_USDC.NewPool,
    collateralAddress: addresses.V2.euler_SM_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.euler_SM_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler Stablecoin Maxi Vault, earning 
       <a href="https://etherscan.io/token/${addresses.V2.euler_SM_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.euler_SM_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_FA_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_FA_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_FA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_FA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Falcon Core Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_FA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_HY_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_HY_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_HY_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_HY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Hyperithm Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_HY_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_MEV_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_MEV_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_MEV_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_MEV_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho MEV Capital Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_MEV_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_SH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_SH_USDC.NewPool,
    collateralAddress: addresses.V2.morpho_SH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_SH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Smokehouse Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_SH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'fortyAcres_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.fortyAcres_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.fortyAcres_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.fortyAcres_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the 40 Acres Lending Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.fortyAcres_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.fortyAcres_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_T_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_T_ETH.NewPool,
    collateralAddress: addresses.V2.curve_T_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/teth/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-7'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_T_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_T_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_T_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/teth/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_RSUP_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_RSUP_ETH.NewPool,
    collateralAddress: addresses.V2.curve_RSUP_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-twocrypto-119/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-twocrypto-119'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_RSUP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_RSUP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_RSUP_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-twocrypto-119/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_CJPY_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_CJPY_ETH.NewPool,
    collateralAddress: addresses.V2.curve_CJPY_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-twocrypto-5/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-twocrypto-5'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_CJPY_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_CJPY_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_CJPY_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-twocrypto-5/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_sUSD_USDe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_sUSD_USDe.NewPool,
    collateralAddress: addresses.V2.curve_sUSD_USDe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-stable-ng-346/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-stable-ng-346'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_sUSD_USDe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_sUSD_USDe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_sUSD_USDe.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-stable-ng-346/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_sUSD_sUSDe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_sUSD_sUSDe.NewPool,
    collateralAddress: addresses.V2.curve_sUSD_sUSDe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-stable-ng-371/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-stable-ng-371'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_sUSD_sUSDe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_sUSD_sUSDe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_sUSD_sUSDe.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-stable-ng-371/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_reUSD_sfrxUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_reUSD_sfrxUSD.NewPool,
    collateralAddress: addresses.V2.curve_reUSD_sfrxUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-stable-ng-393/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-stable-ng-393'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_reUSD_sfrxUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_reUSD_sfrxUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_reUSD_sfrxUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-stable-ng-393/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_reUSD_scrvUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_reUSD_scrvUSD.NewPool,
    collateralAddress: addresses.V2.curve_reUSD_scrvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-stable-ng-392/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-stable-ng-392'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_reUSD_scrvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_reUSD_scrvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_reUSD_scrvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-stable-ng-392/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_ALCX_FRAXBP',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_ALCX_FRAXBP.NewPool,
    collateralAddress: addresses.V2.curve_ALCX_FRAXBP.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/dex/ethereum/pools/factory-crypto-96/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-crypto-96'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_ALCX_FRAXBP.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_ALCX_FRAXBP.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_ALCX_FRAXBP.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/dex/ethereum/pools/factory-crypto-96/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'arcadia_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.arcadia_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.arcadia_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Arcadia Lend, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_ETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'arcadia_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.arcadia_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.arcadia_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Arcadia Lend, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'arcadia_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.arcadia_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.arcadia_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to Arcadia Lend, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer">cbBTC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.arcadia_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_USDC_AR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_USDC_AR.NewPool,
    collateralAddress: addresses.BASE.V2.euler_USDC_AR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_USDC_AR.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Euler Apostro Resolv Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_USDC_AR.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_USDC_AR.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_EURC_EUL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_EURC_EUL.NewPool,
    collateralAddress: addresses.BASE.V2.euler_EURC_EUL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EURC_EUL.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to the Euler Base Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EURC_EUL.Underlying}" target="_blank" rel="noopener noreferrer">EURC</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_EURC_EUL.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'euler_USR_AR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.euler_USR_AR.NewPool,
    collateralAddress: addresses.BASE.V2.euler_USR_AR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_USR_AR.Underlying}" target="_blank" rel="noopener noreferrer"> USR </a>to the Euler Apostro Resolv Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_USR_AR.Underlying}" target="_blank" rel="noopener noreferrer">USR</a> interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.euler_USR_AR.Underlying}" target="_blank" rel="noopener noreferrer"> USR</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_MORPHO',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_MORPHO.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_MORPHO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_MORPHO.Underlying}" target="_blank" rel="noopener noreferrer"> MORPHO </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_MORPHO.Underlying}" target="_blank" rel="noopener noreferrer"> MORPHO</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aave_EURC_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aave_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.aave_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to Aave, earning EURC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'morphoCompound_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.morphoCompound_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.morphoCompound_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.morphoCompound_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>in a Morpho Compound pool, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">wPOL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.morphoCompound_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'morphoCompound_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.morphoCompound_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.morphoCompound_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.morphoCompound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>in a Morpho Compound pool, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">wPOL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.morphoCompound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'morphoCompound_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.morphoCompound_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.morphoCompound_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.morphoCompound_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>in a Morpho Compound pool, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">wPOL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.morphoCompound_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoGC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoGC_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morphoGC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho Gauntlet Core Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoRE7_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoRE7_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morphoRE7_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoRE7_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho Re7 Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoRE7_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho Steakhouse Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoION_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoION_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morphoION_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoION_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho Ionic Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.ION}" target="_blank" rel="noopener noreferrer">ION</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoION_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSE_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSE_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho Seamless Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.SEAM}" target="_blank" rel="noopener noreferrer">SEAM</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoGC_EURC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoGC_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoGC_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to the Morpho Gauntlet Core Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSH_EURC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSH_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSH_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSH_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to the Morpho Steakhouse Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSH_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoGC_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoGC_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoGC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Core Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoGP_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoGP_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoGP_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Prime Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGP_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoION_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoION_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoION_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoION_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Ionic Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.ION}" target="_blank" rel="noopener noreferrer">ION</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoION_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoRE7_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoRE7_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoRE7_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoRE7_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Re7 Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoRE7_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSH_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Steakhouse Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSPK_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSPK_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSPK_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSPK_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Spark Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSPK_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_USDC_2',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_USDC_2.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_USDC_2.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDC_2.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDC_2.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_ETH_2',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_ETH_2.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_ETH_2.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_ETH_2.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to ExtraFi Pool #2, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_ETH_2.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'venus_ETH_core',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.venus_ETH_core.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.venus_ETH_core.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_ETH_core.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a> to Venus - Core, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_ETH_core.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'venus_ETH_lsd',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.venus_ETH_lsd.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.venus_ETH_lsd.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_ETH_lsd.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a> to Venus - Liquid Staked ETH, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_ETH_lsd.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'venus_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.venus_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.venus_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Venus - Core, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'venus_USDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.venus_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.venus_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Venus - Core, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'venus_WBTC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.venus_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.venus_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to Venus - Core, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.venus_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSE_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSE_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSE_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSE_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to the Morpho Seamless Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.SEAM}" target="_blank" rel="noopener noreferrer">SEAM</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSE_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoGC_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoGC_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoGC_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to the Morpho Gauntlet Core Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoGC_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_LBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_LBTC.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_LBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_LBTC.Underlying}" target="_blank" rel="noopener noreferrer"> LBTC </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_LBTC.Underlying}" target="_blank" rel="noopener noreferrer"> LBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_tBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_tBTC.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_tBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_tBTC.Underlying}" target="_blank" rel="noopener noreferrer"> tBTC </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.T}" target="_blank" rel="noopener noreferrer">T</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_tBTC.Underlying}" target="_blank" rel="noopener noreferrer"> tBTC</a>.
      </p>
      <p> The earned <a href="https://basescan.org/token/${addresses.BASE.T}" target="_blank" rel="noopener noreferrer">T</a> tokens can be claimed through 
        <a href="https://app.merkl.xyz/users" target="_blank" rel="noopener noreferrer">Merkl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_USDS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_USDS.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_USDS.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_USDS.Underlying}" target="_blank" rel="noopener noreferrer"> USDS </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_USDS.Underlying}" target="_blank" rel="noopener noreferrer"> USDS</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_VIRTUAL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_VIRTUAL.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_VIRTUAL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_VIRTUAL.Underlying}" target="_blank" rel="noopener noreferrer"> VIRTUAL </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_VIRTUAL.Underlying}" target="_blank" rel="noopener noreferrer"> VIRTUAL</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_WELL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_WELL.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_WELL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_WELL.Underlying}" target="_blank" rel="noopener noreferrer"> WELL </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_WELL.Underlying}" target="_blank" rel="noopener noreferrer"> WELL</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_aixCB_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_aixCB_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_aixCB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x76C71F1703Fbf19FFdcF3051E1e684Cb9934510f&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_aixCB_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_aixCB_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_aixCB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x76C71F1703Fbf19FFdcF3051E1e684Cb9934510f&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_CHAMP_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_CHAMP_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_CHAMP_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xEb6d78148F001F3aA2f588997c5E102E489Ad341&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_CHAMP_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_CHAMP_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_CHAMP_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xEb6d78148F001F3aA2f588997c5E102E489Ad341&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_CHAMP_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_CHAMP_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_CHAMP_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xEb6d78148F001F3aA2f588997c5E102E489Ad341&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_CHAMP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_CHAMP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_CHAMP_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xEb6d78148F001F3aA2f588997c5E102E489Ad341&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_ETH_USDC_V2',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_ETH_USDC_V2.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_ETH_USDC_V2.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ETH_USDC_V2.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ETH_USDC_V2.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ETH_USDC_V2.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_VIRTUAL_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_VIRTUAL_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_VIRTUAL_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VIRTUAL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VIRTUAL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VIRTUAL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_VVV_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_VVV_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_VVV_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VVV_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VVV_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VVV_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_wBLT_BMX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_wBLT_BMX.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_wBLT_BMX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4E74D4Db6c0726ccded4656d0BCE448876BB4C7A&token1=0x548f93779fBC992010C07467cBaf329DD5F059B7&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wBLT_BMX.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wBLT_BMX.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wBLT_BMX.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4E74D4Db6c0726ccded4656d0BCE448876BB4C7A&token1=0x548f93779fBC992010C07467cBaf329DD5F059B7&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_AERO_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_AERO_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_AERO_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x940181a94A35A4569E4529A3CDfB74e38FD98631&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_AERO_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_AERO_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_AERO_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x940181a94A35A4569E4529A3CDfB74e38FD98631&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'aave_USDT_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.aave_USDT.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.aave_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Aave, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'aave_ZK_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.aave_ZK.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.aave_ZK.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a> to Aave, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_USDC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>, 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_WUSDM',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_WUSDM.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_WUSDM.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_WUSDM.Underlying}" target="_blank" rel="noopener noreferrer">wUSDM</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>, 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_WUSDM.Underlying}" target="_blank" rel="noopener noreferrer">wUSDM</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'reactor_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.reactor_USDC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.reactor_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to a Reactor Fusion, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_DAI_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_DAI.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_LUSD_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_LUSD.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_LUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_LUSD.Underlying}" target="_blank" rel="noopener noreferrer">LUSD</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_LUSD.Underlying}" target="_blank" rel="noopener noreferrer">LUSD</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_MBTC_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_MBTC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_MBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_MBTC.Underlying}" target="_blank" rel="noopener noreferrer">MBTC</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_MBTC.Underlying}" target="_blank" rel="noopener noreferrer">MBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_WBTC_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_WBTC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_ZK_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_ZK.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_ZK.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morphoCS_USDL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morphoCS_USDL.NewPool,
    collateralAddress: addresses.V2.morphoCS_USDL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morphoCS_USDL.Underlying}" target="_blank" rel="noopener noreferrer"> USDL </a>to a Morpho Coinshift Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morphoCS_USDL.Underlying}" target="_blank" rel="noopener noreferrer"> USDL</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morphoCS_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morphoCS_USDC.NewPool,
    collateralAddress: addresses.V2.morphoCS_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morphoCS_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Coinshift Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morphoCS_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoSE_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoSE_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoSE_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Seamless Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.SEAM}" target="_blank" rel="noopener noreferrer">SEAM</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoSE_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>, 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_USDCe.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>, 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_USDT.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_WBTC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'venus_ZK',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.venus_ZK.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.venus_ZK.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a> to Venus, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>, 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.venus_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'aave_ETH_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.aave_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.aave_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a> to Aave, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'aave_USDC_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.aave_USDC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.aave_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Aave, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'aave_wstETH_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.aave_wstETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.aave_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a> to Aave, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.aave_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_ETH_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_USDC_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_USDC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_USDCe_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_USDCe.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zerolend_USDT_zksync',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zerolend_USDT.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zerolend_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to ZeroLend, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zerolend_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoMW_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoMW_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoMW_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to the Morpho Moonwell Flagship Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoMW_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoMW_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.morphoMW_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho Moonwell Flagship Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoMW_EURC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoMW_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoMW_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to the Morpho Moonwell Flagship Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'morphoMW_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.morphoMW_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.morphoMW_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Moonwell Flagship Vault, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.morphoMW_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_wrsETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_wrsETH_ETH.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_wrsETH_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_wrsETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/ETH/0xd4169E045bcF9a86cC00101225d9ED61D2F51af2`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wrsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a> & 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wrsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wrsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/ETH/0xd4169E045bcF9a86cC00101225d9ED61D2F51af2" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_MBTC_WBTC_stable',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_MBTC_WBTC_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_USDC_USDCe_stable',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_USDC_USDCe_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_USDC_USDT_stable',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_USDC_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_wstETH_ETH_aqua',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_wstETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_ZK_ETH_classic',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_ZK_ETH_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aave_cbBTC_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aave_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.aave_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to Aave, earning cbBTC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aave_ETH_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aave_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aave_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Aave, earning WETH interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aave_USDbC_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aave_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.aave_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC </a>to Aave, earning USDbC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aave_USDC_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aave_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aave_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Aave, earning USDC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'compound_AERO',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.compound_AERO.NewPool,
    collateralAddress: addresses.BASE.V2.compound_AERO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.compound_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> AERO </a>to Compound V3, earning 
       <a href="https://basescan.org/token/${addresses.BASE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.compound_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> AERO</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'USDC_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.compound_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.compound_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.compound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Compound V3, earning 
       <a href="https://basescan.org/token/${addresses.BASE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.compound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_ETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Aave, earning WETH interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'compound_ETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.compound_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.compound_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Compound V3, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'compound_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.compound_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.compound_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Compound V3, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'compound_USDCe_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.compound_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.compound_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> USDC.e </a>to Compound V3, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'compound_USDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.compound_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.compound_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to Compound V3, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.compound_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.WBTC.NewPool,
    collateralAddress: addresses.V2.WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> WBTC </a>to the Morpho Re7 Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_cbBTC.NewPool,
    collateralAddress: addresses.V2.zerolend_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to ZeroLend, earning cbBTC interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_LBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_LBTC.NewPool,
    collateralAddress: addresses.V2.zerolend_LBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_LBTC.Underlying}" target="_blank" rel="noopener noreferrer"> LBTC </a>to ZeroLend, earning LBTC interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_LBTC.Underlying}" target="_blank" rel="noopener noreferrer"> LBTC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_USDC.NewPool,
    collateralAddress: addresses.V2.zerolend_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to ZeroLend, earning USDC interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_USDT.NewPool,
    collateralAddress: addresses.V2.zerolend_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to ZeroLend, earning USDT interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_ETH.NewPool,
    collateralAddress: addresses.V2.zerolend_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to ZeroLend, earning WETH interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_pzETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_pzETH.NewPool,
    collateralAddress: addresses.V2.zerolend_pzETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_pzETH.Underlying}" target="_blank" rel="noopener noreferrer"> pzETH </a>to ZeroLend, earning pzETH interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_pzETH.Underlying}" target="_blank" rel="noopener noreferrer"> pzETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'zerolend_weETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.zerolend_weETH.NewPool,
    collateralAddress: addresses.V2.zerolend_weETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_weETH.Underlying}" target="_blank" rel="noopener noreferrer"> weETH </a>to ZeroLend, earning weETH interest and 
        <a href="https://etherscan.io/token/${addresses.ZERO}" target="_blank" rel="noopener noreferrer">ZERO</a> rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.zerolend_weETH.Underlying}" target="_blank" rel="noopener noreferrer"> weETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_USDe_USDx',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-85/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_USDe_USDx.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-85/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_zunETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-50/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_zunETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-50/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_zunUSD_crvUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-41/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_zunUSD_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-41/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_ETHp_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-twocrypto-18/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_ETHp_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-twocrypto-18/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_KNOX_eUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-twocrypto-19/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-twocrypto-19/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_VIRTUAL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_VIRTUAL.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_VIRTUAL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_VIRTUAL.Underlying}" target="_blank" rel="noopener noreferrer"> VIRTUAL </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_VIRTUAL.Underlying}" target="_blank" rel="noopener noreferrer"> VIRTUAL</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_wrsETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_wrsETH.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_wrsETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_wrsETH.Underlying}" target="_blank" rel="noopener noreferrer"> wrsETH </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_wrsETH.Underlying}" target="_blank" rel="noopener noreferrer"> wrsETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_WELL_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_WELL_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_WELL_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xA88594D404727625A9437C3f886C7643872296AE&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xA88594D404727625A9437C3f886C7643872296AE&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'TESTING_gmx_gmBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.TESTING_gmx_gmBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.TESTING_gmx_gmBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_jEUR_EURC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_jEUR_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_jEUR_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4154550f4Db74Dc38d1FE98e1F3F28ed6daD627d&token1=0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_jEUR_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_jEUR_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_jEUR_EURC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4154550f4Db74Dc38d1FE98e1F3F28ed6daD627d&token1=0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_ION_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_ION_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_ION_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ION_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ION_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ION_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_VIRTUAL_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_VIRTUAL_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_VIRTUAL_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VIRTUAL_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VIRTUAL_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_VIRTUAL_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_MORE_GYD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_MORE_GYD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_sUSDe_GYD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_sUSDe_GYD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_waFRAX_sFRAX',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waFRAX_sFRAX.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_waGHO_GYD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waGHO_GYD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_waUSDC_GHO',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GHO}" target="_blank" rel="noopener noreferrer">GHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GHO.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_waUSDC_GYD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waUSDC_GYD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_waUSDT_GYD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_waUSDT_GYD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_wstETH_GYD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_GYD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_GauntletDAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_GauntletDAI.NewPool,
    collateralAddress: addresses.V2.morpho_GauntletDAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_GauntletDAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI </a>to a Morpho Gauntlet Core Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_GauntletDAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_GauntletETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_GauntletETH.NewPool,
    collateralAddress: addresses.V2.morpho_GauntletETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_GauntletETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to a Morpho Gauntlet Core Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_GauntletETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'morpho_GauntletUSDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.morpho_GauntletUSDC.NewPool,
    collateralAddress: addresses.V2.morpho_GauntletUSDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.morpho_GauntletETH.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to a Morpho Gauntlet Core Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.morpho_GauntletETH.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aave_USDS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.aave_USDS.NewPool,
    collateralAddress: addresses.V2.aave_USDS.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.aave_USDS.Underlying}" target="_blank" rel="noopener noreferrer"> USDS </a>to Aave, earning USDS interest and aUSDS rewards.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.aave_USDS.Underlying}" target="_blank" rel="noopener noreferrer"> USDS</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_ETH_USDCe_aqua',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_ETH_USDCe_classic',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_ETH_USDCe_classic.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_USDCe_USDT_stable',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_USDCe_USDT_stable.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'syncswap_wrsETH_ETH_aqua',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.SYNCSWAP,
      params: [addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.Underlying, CHAIN_IDS.ZKSYNC],
    },
    contractAddress: addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> to a SyncSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap LP tokens</a> by supplying liquidity on 
        <a href="https://syncswap.xyz/pool/${addresses.ZKSYNC.V2.syncswap_wrsETH_ETH_aqua.Underlying}" target="_blank" rel="noopener noreferrer">SyncSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_DAI.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI </a>to Dolomite, earning DAI interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to Dolomite, earning ETH interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_GMX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_GMX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_GMX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_GMX.Underlying}" target="_blank" rel="noopener noreferrer"> GMX </a>to Dolomite, earning GMX interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_GMX.Underlying}" target="_blank" rel="noopener noreferrer"> GMX</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Dolomite, earning USDC interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> USDC.e </a>to Dolomite, earning USDC.e interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> USDC.e</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to Dolomite, earning USDT interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'dolomite_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.dolomite_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.dolomite_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> WBTC </a>to Dolomite, earning WBTC interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.dolomite_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> WBTC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'fluid_ETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.fluid_ETH_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.fluid_ETH_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.fluid_ETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to Fluid, earning ETH interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.fluid_ETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'fluid_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.fluid_USDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.fluid_USDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.fluid_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Fluid, earning USDC interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.fluid_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'fluid_USDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.fluid_USDT_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.fluid_USDT_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.fluid_USDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to Fluid, earning USDT interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.fluid_USDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'fluid_ETH_mainnet',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.fluid_ETH_mainnet.NewPool,
    collateralAddress: addresses.V2.fluid_ETH_mainnet.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.fluid_ETH_mainnet.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to Fluid, earning ETH interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.fluid_ETH_mainnet.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'fluid_USDC_mainnet',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.fluid_USDC_mainnet.NewPool,
    collateralAddress: addresses.V2.fluid_USDC_mainnet.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.fluid_USDC_mainnet.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Fluid, earning USDC interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.fluid_USDC_mainnet.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'fluid_USDT_mainnet',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.fluid_USDT_mainnet.NewPool,
    collateralAddress: addresses.V2.fluid_USDT_mainnet.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.V2.fluid_USDT_mainnet.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to Fluid, earning USDT interest.
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.V2.fluid_USDT_mainnet.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
    `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'fluid_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.fluid_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.fluid_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.fluid_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to Fluid, earning ETH interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.fluid_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'fluid_EURC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.fluid_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.fluid_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.fluid_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to Fluid, earning EURC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.fluid_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'fluid_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.fluid_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.fluid_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.fluid_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Fluid, earning USDC interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.fluid_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_cbBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_cbBTC_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_cbBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_cbBTC_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_cbBTC_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_cbBTC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbBTC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbBTC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbBTC_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_EURC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_EURC_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_EURC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_EURC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_EURC.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_EURC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_EURC.Underlying}" target="_blank" rel="noopener noreferrer"> EURC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_cbBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_cbBTC.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_cbBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_cbBTC.Underlying}" target="_blank" rel="noopener noreferrer"> cbBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_AERO',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_AERO.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_AERO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> AERO </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> AERO</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_DOLA',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_DOLA.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_DOLA.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_DOLA.Underlying}" target="_blank" rel="noopener noreferrer"> DOLA </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_DOLA.Underlying}" target="_blank" rel="noopener noreferrer"> DOLA</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_KLIMA',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_KLIMA.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_KLIMA.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_KLIMA.Underlying}" target="_blank" rel="noopener noreferrer"> KLIMA </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_KLIMA.Underlying}" target="_blank" rel="noopener noreferrer"> KLIMA</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_OVN',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_OVN.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_OVN.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_OVN.Underlying}" target="_blank" rel="noopener noreferrer"> OVN </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_OVN.Underlying}" target="_blank" rel="noopener noreferrer"> OVN</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_USDbC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to ExtraFi Pool #2, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_USDplus',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_USDplus.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_USDplus.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDplus.Underlying}" target="_blank" rel="noopener noreferrer"> USD+ </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDplus.Underlying}" target="_blank" rel="noopener noreferrer"> USD+</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_USDz',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_USDz.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_USDz.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDz.Underlying}" target="_blank" rel="noopener noreferrer"> USDz </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_USDz.Underlying}" target="_blank" rel="noopener noreferrer"> USDz</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'extrafi_WELL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.extrafi_WELL.NewPool,
    collateralAddress: addresses.BASE.V2.extrafi_WELL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_WELL.Underlying}" target="_blank" rel="noopener noreferrer"> WELL </a>to ExtraFi, earning 
       <a href="https://basescan.org/token/${addresses.BASE.EXTRA}" target="_blank" rel="noopener noreferrer">EXTRA</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.extrafi_WELL.Underlying}" target="_blank" rel="noopener noreferrer"> WELL</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'reactor_ZK',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.reactor_ZK.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.reactor_ZK.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a> to a Reactor Fusion, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_ZK.Underlying}" target="_blank" rel="noopener noreferrer">ZK</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'penpie_agETH2612',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.V2.penpie_agETH2612.Underlying, CHAIN_IDS.ETH_MAINNET],
    },
    contractAddress: addresses.V2.penpie_agETH2612.NewPool,
    collateralAddress: addresses.V2.penpie_agETH2612.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.V2.penpie_agETH2612.Underlying}/zap/in?chain=ethereum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://etherscan.io/token/${addresses.V2.penpie_agETH2612.Underlying}" target="_blank" rel="noopener noreferrer">agETH Pendle LP tokens</a> to Penpie, earning 
       <a href="https://etherscan.io/token/${addresses.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.penpie_agETH2612.Underlying}" target="_blank" rel="noopener noreferrer">agETH Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://etherscan.io/token/${addresses.V2.penpie_agETH2612.Underlying}" target="_blank" rel="noopener noreferrer">agETH Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.V2.penpie_agETH2612.Underlying}/zap/in?chain=ethereum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_DOLA_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_DOLA_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_DOLA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4621b7A9c75199271F773Ebd9A499dbd165c3191&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4621b7A9c75199271F773Ebd9A499dbd165c3191&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_eUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_eUSD_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_eUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_ezETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_ezETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_ezETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x2416092f143378750bb29b79eD961ab195CcEea5&token1=0x4200000000000000000000000000000000000006&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ezETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ezETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ezETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x2416092f143378750bb29b79eD961ab195CcEea5&token1=0x4200000000000000000000000000000000000006&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_jEUR_EURA',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_jEUR_EURA.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_jEUR_EURA.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4154550f4Db74Dc38d1FE98e1F3F28ed6daD627d&token1=0xA61BeB4A3d02decb01039e378237032B351125B4&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_jEUR_EURA.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_jEUR_EURA.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_jEUR_EURA.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4154550f4Db74Dc38d1FE98e1F3F28ed6daD627d&token1=0xA61BeB4A3d02decb01039e378237032B351125B4&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_msETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_msETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_msETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x7Ba6F01772924a82D9626c126347A28299E98c98&token1=0x4200000000000000000000000000000000000006&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_msETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_msETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_msETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x7Ba6F01772924a82D9626c126347A28299E98c98&token1=0x4200000000000000000000000000000000000006&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_msUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_msUSD_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_msUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_msUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_msUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_msUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_rETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_rETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_rETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c&token1=0x4200000000000000000000000000000000000006&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_rETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_rETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_rETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c&token1=0x4200000000000000000000000000000000000006&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_USDp_USDCp',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_USDp_USDCp.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_USDp_USDCp.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376&token1=0x85483696Cc9970Ad9EdD786b2C5ef735F38D156f&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDp_USDCp.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDp_USDCp.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDp_USDCp.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376&token1=0x85483696Cc9970Ad9EdD786b2C5ef735F38D156f&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_USDz_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_USDz_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_USDz_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDz_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDz_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDz_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=0" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_EURA_USDA',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_EURA_USDA.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_EURA_USDA.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xA61BeB4A3d02decb01039e378237032B351125B4&token1=0x0000206329b97DB379d5E1Bf586BbDB969C63274&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURA_USDA.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURA_USDA.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURA_USDA.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xA61BeB4A3d02decb01039e378237032B351125B4&token1=0x0000206329b97DB379d5E1Bf586BbDB969C63274&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_EURC_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_EURC_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_EURC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_EURC_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42&token1=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_GHST_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_GHST_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_GHST_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GHST_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GHST_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GHST_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_hyUSD_eUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_hyUSD_eUSD.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_hyUSD_eUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xCc7FF230365bD730eE4B352cC2492CEdAC49383e&token1=0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_hyUSD_eUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_hyUSD_eUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_hyUSD_eUSD.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xCc7FF230365bD730eE4B352cC2492CEdAC49383e&token1=0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_weETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_weETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_weETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_weETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_weETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_weETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_wrsETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_wrsETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_wrsETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0xEDfa23602D0EC14714057867A78d01e94176BEA0&token1=0x4200000000000000000000000000000000000006&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wrsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wrsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wrsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xEDfa23602D0EC14714057867A78d01e94176BEA0&token1=0x4200000000000000000000000000000000000006&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_dlcBTC_WBTC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_dlcBTC_WBTC.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_dlcBTC_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_dlcBTC_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-49/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_dlcBTC_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.dlcBTC}" target="_blank" rel="noopener noreferrer">dlcBTC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_dlcBTC_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_dlcBTC_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-49/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_weETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_weETH.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_weETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_weETH.Underlying}" target="_blank" rel="noopener noreferrer"> weETH </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_weETH.Underlying}" target="_blank" rel="noopener noreferrer"> weETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_AERO',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_AERO.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_AERO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> AERO </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> AERO</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'uniGamma_USDC_DAI',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNISWAP_GAMMA_API,
      params: [addresses.MATIC.V2.uniGamma_USDC_DAI.Underlying],
    },
    contractAddress: addresses.MATIC.V2.uniGamma_USDC_DAI.NewPool,
    collateralAddress: addresses.MATIC.V2.uniGamma_USDC_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://app.gamma.xyz/vault/uni/polygon/details/usdc-dai-100-stable',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_USDC_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Uniswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_USDC_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_USDC_DAI.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/uni/polygon/details/usdc-dai-100-stable" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'uniGamma_USDC_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNISWAP_GAMMA_API,
      params: [addresses.MATIC.V2.uniGamma_USDC_USDT.Underlying],
    },
    contractAddress: addresses.MATIC.V2.uniGamma_USDC_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.uniGamma_USDC_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://app.gamma.xyz/vault/uni/polygon/details/usdc-usdt-100-stable',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Uniswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/uni/polygon/details/usdc-usdt-100-stable" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'uniGamma_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNISWAP_GAMMA_API,
      params: [addresses.MATIC.V2.uniGamma_ETH_USDC.Underlying],
    },
    contractAddress: addresses.MATIC.V2.uniGamma_ETH_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.uniGamma_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://app.gamma.xyz/vault/uni/polygon/details/usdc-weth-500-narrow',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Uniswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/uni/polygon/details/usdc-weth-500-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'uniGamma_MATIC_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNISWAP_GAMMA_API,
      params: [addresses.MATIC.V2.uniGamma_MATIC_USDC.Underlying],
    },
    contractAddress: addresses.MATIC.V2.uniGamma_MATIC_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.uniGamma_MATIC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://app.gamma.xyz/vault/uni/polygon/details/wmatic-usdc-500-narrow',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_MATIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Uniswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_MATIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.uniGamma_MATIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/uni/polygon/details/wmatic-usdc-500-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_thUSD_3CRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_thUSD_3CRV.NewPool,
    collateralAddress: addresses.V2.curve_thUSD_3CRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/ethereum/pools/factory-stable-ng-150/deposit`,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-stable-ng-150'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_thUSD_3CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_thUSD_3CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_thUSD_3CRV.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-stable-ng-150/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_APW_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.balancer_APW_ETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    contractAddress: addresses.V2.balancer_APW_ETH.NewPool,
    collateralAddress: addresses.V2.balancer_APW_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_APW_ETH.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://etherscan.io/token/${addresses.V2.balancer_APW_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_APW_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_APW_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_APW_ETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_KLIMA_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_KLIMA_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_KLIMA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xDCEFd8C8fCc492630B943ABcaB3429F12Ea9Fea2&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_KLIMA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_KLIMA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_KLIMA_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xDCEFd8C8fCc492630B943ABcaB3429F12Ea9Fea2&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_SPOT_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_SPOT_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_SPOT_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0x8f2E6758C4D6570344bd5007DEc6301cd57590A0&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_SPOT_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_SPOT_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_SPOT_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0x8f2E6758C4D6570344bd5007DEc6301cd57590A0&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_KLIMA_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_KLIMA_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_KLIMA_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xDCEFd8C8fCc492630B943ABcaB3429F12Ea9Fea2&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_KLIMA_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_KLIMA_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_KLIMA_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xDCEFd8C8fCc492630B943ABcaB3429F12Ea9Fea2&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_WELS_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_WELS_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_WELS_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x7F62ac1e974D65Fab4A81821CA6AF659A5F46298&type=-1`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELS_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x7F62ac1e974D65Fab4A81821CA6AF659A5F46298&type=-1" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_cbETH_rETH_wstETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_rETH_wETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_rsETH_wETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_wstETH_sfrxETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.PoolId}/add-liquidity`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_DAI_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_DAI.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_FRAX_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_FRAX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_FRAX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_FRAX.Underlying}" target="_blank" rel="noopener noreferrer"> FRAX </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_GHO_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_GHO.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_GHO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_GHO.Underlying}" target="_blank" rel="noopener noreferrer"> GHO </a>to Aave V3, where it is earning auto-compounding interest & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_GHO.Underlying}" target="_blank" rel="noopener noreferrer"> GHO</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_LUSD_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_LUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_LUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_LUSD.Underlying}" target="_blank" rel="noopener noreferrer"> LUSD </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_USDCe_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> USDC.e </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'aave_USDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.aave_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.aave_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.aave_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_eUSD_crvUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_eUSD_crvUSD.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_eUSD_crvUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_eUSD_crvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-61/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RSR}" target="_blank" rel="noopener noreferrer">RSR</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-61/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_eUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-62/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex Farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-62/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_OVN_stable',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_OVN_stable.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_OVN_stable.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_OVN_stable.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-15/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_OVN_stable.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.OVN}" target="_blank" rel="noopener noreferrer">OVN</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_OVN_stable.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_OVN_stable.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-15/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_OVN',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_OVN.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_OVN.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_OVN.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-v2-117/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_OVN.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> ,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.OVN}" target="_blank" rel="noopener noreferrer">OVN</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_OVN.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_OVN.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-v2-117/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_TriCRV_ARB',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_TriCRV_ARB.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_TriCRV_ARB.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_TriCRV_ARB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-tricrypto-14/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_TriCRV_ARB.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_TriCRV_ARB.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_TriCRV_ARB.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-tricrypto-14/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_TriRSR',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_TriRSR.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_TriRSR.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_TriRSR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-tricrypto-22/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_TriRSR.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RSR}" target="_blank" rel="noopener noreferrer">RSR</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_TriRSR.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_TriRSR.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-tricrypto-22/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_WBTC_tBTC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-69/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex Farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-69/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'hop_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.hop_DAI.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.hop_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.hop.exchange/#/pool/deposit?token=DAI&sourceNetwork=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_DAI.Underlying}" target="_blank" rel="noopener noreferrer">Hop DAI-LP tokens</a> to Hop, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_DAI.Underlying}" target="_blank" rel="noopener noreferrer">Hop DAI-LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_DAI.Underlying}" target="_blank" rel="noopener noreferrer">Hop DAI-LP tokens</a> by supplying liquidity on 
        <a href="https://app.hop.exchange/#/pool/deposit?token=DAI&sourceNetwork=arbitrum" target="_blank" rel="noopener noreferrer">Hop</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'hop_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.hop_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.hop_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.hop.exchange/#/pool/deposit?token=ETH&sourceNetwork=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Hop ETH-LP tokens</a> to Hop, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Hop ETH-LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Hop ETH-LP tokens</a> by supplying liquidity on 
        <a href="https://app.hop.exchange/#/pool/deposit?token=ETH&sourceNetwork=arbitrum" target="_blank" rel="noopener noreferrer">Hop</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'hop_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.hop_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.hop_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.hop.exchange/#/pool/deposit?token=USDT&sourceNetwork=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Hop USDT-LP tokens</a> to Hop, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Hop USDT-LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.hop_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Hop USDT-LP tokens</a> by supplying liquidity on 
        <a href="https://app.hop.exchange/#/pool/deposit?token=USDT&sourceNetwork=arbitrum" target="_blank" rel="noopener noreferrer">Hop</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'reactor_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.reactor_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.reactor_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a> to a Reactor Fusion, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_ETH.Underlying}" target="_blank" rel="noopener noreferrer">ETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'reactor_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.reactor_USDCe.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.reactor_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a> to a Reactor Fusion, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'reactor_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.reactor_USDT.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.reactor_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to a Reactor Fusion, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'reactor_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.reactor_WBTC.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.reactor_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to a Reactor Fusion, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a> and interest.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.reactor_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_ETH_USDCe',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_ETH_USDCe.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_ETH_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/ETH/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a> & 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/ETH/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_LONG_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_LONG_ETH.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_LONG_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_LONG_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/0x5165ec33b491d7b67260B3143f96Bb4aC4736398/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_LONG_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_LONG_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_LONG_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/0x5165ec33b491d7b67260B3143f96Bb4aC4736398/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_USDCe_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_USDCe_USDT.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_USDCe_USDT.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_USDCe_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/0x493257fD37EDB34451f62EDf8D2a0C418852bA4C/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/0x493257fD37EDB34451f62EDf8D2a0C418852bA4C/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_WBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_WBTC_ETH.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_WBTC_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_WBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/0xBBeB516fb02a01611cBBE0453Fe3c580D7281011/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/0xBBeB516fb02a01611cBBE0453Fe3c580D7281011/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_wstETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_wstETH_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_wstETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/0x703b52F2b28fEbcB60E1372858AF5b18849FE867/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a> & 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/0x703b52F2b28fEbcB60E1372858AF5b18849FE867/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_ZF_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_ZF_ETH.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_ZF_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_ZF_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/0x31C2c031fDc9d33e974f327Ab0d9883Eae06cA4A/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZF_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZF_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZF_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/0x31C2c031fDc9d33e974f327Ab0d9883Eae06cA4A/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_ZK_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ZKSWAP,
      params: [addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying],
    },
    contractAddress: addresses.ZKSYNC.V2.zkswap_ZK_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_ZK_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/v2/add/0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a> & 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZK}" target="_blank" rel="noopener noreferrer">ZK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/v2/add/0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_rsETH2706',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.Underlying}" target="_blank" rel="noopener noreferrer">rsETH Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.Underlying}" target="_blank" rel="noopener noreferrer">rsETH Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.Underlying}" target="_blank" rel="noopener noreferrer">rsETH Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_rsETH2706.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_eETH2706',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_eETH2706.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_eETH2706.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_eETH2706.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_eETH2706.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_eETH2706.Underlying}" target="_blank" rel="noopener noreferrer">eETH Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_eETH2706.Underlying}" target="_blank" rel="noopener noreferrer">eETH Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_eETH2706.Underlying}" target="_blank" rel="noopener noreferrer">eETH Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_eETH2706.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_ezETH2706',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.Underlying}" target="_blank" rel="noopener noreferrer">ezETH Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.Underlying}" target="_blank" rel="noopener noreferrer">ezETH Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.Underlying}" target="_blank" rel="noopener noreferrer">ezETH Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_ezETH2706.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_wstETH2706',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.Underlying}" target="_blank" rel="noopener noreferrer">wstETH Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.Underlying}" target="_blank" rel="noopener noreferrer">wstETH Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.Underlying}" target="_blank" rel="noopener noreferrer">wstETH Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_wstETH2706.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'IFARM_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PROFIT_SHARE,
      params: [],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.iFARM.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.iFARM.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    liquidityUrl:
      'https://app.camelot.exchange/?token1=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&token2=0x9dca587dc65ac0a043828b0acd946d71eb8d46c1',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.iFARM.Underlying}" target="_blank" rel="noopener noreferrer">iFARM</a> to Harvest, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a> rewards. 
      </p>
      <p> Get 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.iFARM.Underlying}" target="_blank" rel="noopener noreferrer">iFARM</a> on 
        <a href="https://app.camelot.exchange/?token1=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&token2=0x9dca587dc65ac0a043828b0acd946d71eb8d46c1" target="_blank" rel="noopener noreferrer">Camelot</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_GENOME_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_GENOME_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_GENOME_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM, addresses.BASE.GENOME],
    rewardTokenSymbols: ['iFARM', 'GENOME'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x1db0c569ebb4a8b57AC01833B9792F526305e062&stable=false',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GENOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GENOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GENOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x1db0c569ebb4a8b57AC01833B9792F526305e062&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_gDAI2609',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.Underlying}" target="_blank" rel="noopener noreferrer">gDAI Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.Underlying}" target="_blank" rel="noopener noreferrer">gDAI Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.Underlying}" target="_blank" rel="noopener noreferrer">gDAI Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_gDAI2609.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_aUSDC2706',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.Underlying}" target="_blank" rel="noopener noreferrer">aUSDC Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.Underlying}" target="_blank" rel="noopener noreferrer">aUSDC Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.Underlying}" target="_blank" rel="noopener noreferrer">aUSDC Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_aUSDC2706.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_mPENDLE2609',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.Underlying}" target="_blank" rel="noopener noreferrer">mPENDLE Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a>. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.Underlying}" target="_blank" rel="noopener noreferrer">mPENDLE Pendle LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.Underlying}" target="_blank" rel="noopener noreferrer">mPENDLE Pendle LP tokens</a> by supplying liquidity on 
        <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_mPENDLE2609.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_GB_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_GB_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_GB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x2aF864fb54b55900Cd58d19c7102d9e4FA8D84a3&token1=0x4200000000000000000000000000000000000006&stable=false',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GB_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GB_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_GB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x2aF864fb54b55900Cd58d19c7102d9e4FA8D84a3&token1=0x4200000000000000000000000000000000000006&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_OVN_USDp',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_OVN_USDp.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_OVN_USDp.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396&token1=0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376&stable=false',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_OVN_USDp.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_OVN_USDp.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_OVN_USDp.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396&token1=0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_USDC_AERO',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_USDC_AERO.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_USDC_AERO.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0x940181a94A35A4569E4529A3CDfB74e38FD98631&stable=false',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDC_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDC_AERO.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDC_AERO.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0x940181a94A35A4569E4529A3CDfB74e38FD98631&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_WELL_ETH_old',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_WELL_ETH_old.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_WELL_ETH_old.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xFF8adeC2221f9f4D8dfbAFa6B9a297d17603493D&stable=false',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELL_ETH_old.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELL_ETH_old.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_WELL_ETH_old.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xFF8adeC2221f9f4D8dfbAFa6B9a297d17603493D&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_STAR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_STAR_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_STAR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xC19669A405067927865B40Ea045a2baabbbe57f5&stable=true',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_STAR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_STAR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_STAR_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xC19669A405067927865B40Ea045a2baabbbe57f5&stable=true" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_USDC_USDbC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_USDC_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_USDC_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA&stable=true',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDC_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDC_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDC_USDbC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA&stable=true" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_SEAM_USDbC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_SEAM_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_SEAM_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85&token1=0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA&stable=false',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_SEAM_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_SEAM_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_SEAM_USDbC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85&token1=0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'gammaMerkl_QS_tBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.gammaMerkl_QS_tBTC_ETH.Underlying],
    },
    contractAddress: addresses.MATIC.V2.gammaMerkl_QS_tBTC_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.gammaMerkl_QS_tBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://app.gamma.xyz/vault/qi/polygon/details/tbtc-weth-narrow',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_tBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_tBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_tBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/tbtc-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'gammaMerkl_QS_WBTC_ETH_w',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.gammaMerkl_QS_WBTC_ETH_w.Underlying],
    },
    contractAddress: addresses.MATIC.V2.gammaMerkl_QS_WBTC_ETH_w.NewPool,
    collateralAddress: addresses.MATIC.V2.gammaMerkl_QS_WBTC_ETH_w.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://app.gamma.xyz/vault/qi/polygon/details/wbtc-weth-wide',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_WBTC_ETH_w.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_WBTC_ETH_w.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_WBTC_ETH_w.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wbtc-weth-wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_crvUSD_FRAX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-7/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_FRAX.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-7/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_crvUSD_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-2/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-2/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_crvUSD_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-1/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-1/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_crvUSD_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-stable-ng-0/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-0/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_crvUSD_WBTC_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-tricrypto-9/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_crvUSD_WBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-tricrypto-9/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_FRAX_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/factory-v2-41/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_FRAX_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-v2-41/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'curve_USDCe_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.Underlying,
        addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    liquidityUrl: 'https://curve.fi/#/arbitrum/pools/2pool/deposit',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/2pool/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'penpie_eETH2504',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.PENPIE,
      params: [addresses.ARBITRUM_ONE.V2.penpie_eETH2504.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.penpie_eETH2504.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.penpie_eETH2504.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_eETH2504.Underlying}/zap/in?chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_eETH2504.Underlying}" target="_blank" rel="noopener noreferrer">eETH Pendle LP tokens</a> to Penpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.PENDLE}" target="_blank" rel="noopener noreferrer">PENDLE</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_eETH2504.Underlying}" target="_blank" rel="noopener noreferrer">eETH Pendle LP tokens</a>.
       </p>
       <p> Get the 
         <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.penpie_eETH2504.Underlying}" target="_blank" rel="noopener noreferrer">eETH Pendle LP tokens</a> by supplying liquidity on 
         <a href="https://app.pendle.finance/trade/pools/${addresses.ARBITRUM_ONE.V2.penpie_eETH2504.Underlying}/zap/in?chain=arbitrum" target="_blank" rel="noopener noreferrer">Pendle</a>.
       </p>
     </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'aave_EURS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.aave_EURS.NewPool,
    collateralAddress: addresses.MATIC.V2.aave_EURS.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.aave_EURS.Underlying}" target="_blank" rel="noopener noreferrer"> EURS </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'aave_USDC_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.aave_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.aave_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.aave_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'aave_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.aave_USDCe.NewPool,
    collateralAddress: addresses.MATIC.V2.aave_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.aave_USDCe.Underlying}" target="_blank" rel="noopener noreferrer"> USDC.e </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'aave_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.aave_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.aave_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.aave_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to Aave V3, where it is earning auto-compounding interest.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_rsETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_rsETH_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_rsETH_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_rsETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/rseth-weth-pegged-price`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_rsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_rsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_rsETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/rseth-weth-pegged-price" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'gammaMerkl_QS_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.gammaMerkl_QS_ETH_USDC.Underlying],
    },
    contractAddress: addresses.MATIC.V2.gammaMerkl_QS_ETH_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.gammaMerkl_QS_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.gamma.xyz/vault/qi/polygon/details/usdc-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/usdc-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'gammaMerkl_QS_ETH_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.gammaMerkl_QS_ETH_USDT.Underlying],
    },
    contractAddress: addresses.MATIC.V2.gammaMerkl_QS_ETH_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.gammaMerkl_QS_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.gamma.xyz/vault/qi/polygon/details/weth-usdt-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/weth-usdt-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'gammaMerkl_QS_MATIC_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.gammaMerkl_QS_MATIC_USDT.Underlying],
    },
    contractAddress: addresses.MATIC.V2.gammaMerkl_QS_MATIC_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.gammaMerkl_QS_MATIC_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.gamma.xyz/vault/qi/polygon/details/wmatic-usdt-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_MATIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_MATIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.gammaMerkl_QS_MATIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wmatic-usdt-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_MAGIC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_MAGIC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_MAGIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_MAGIC.Underlying}" target="_blank" rel="noopener noreferrer">MAGIC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_MAGIC.Underlying}" target="_blank" rel="noopener noreferrer">MAGIC</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_PENDLE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_PENDLE.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_PENDLE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_PENDLE.Underlying}" target="_blank" rel="noopener noreferrer">PENDLE</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_PENDLE.Underlying}" target="_blank" rel="noopener noreferrer">PENDLE</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_MAGIC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_MAGIC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_MAGIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_MAGIC.Underlying}" target="_blank" rel="noopener noreferrer">MAGIC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_MAGIC.Underlying}" target="_blank" rel="noopener noreferrer">MAGIC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_PENDLE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_PENDLE.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_PENDLE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_PENDLE.Underlying}" target="_blank" rel="noopener noreferrer">PENDLE</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_PENDLE.Underlying}" target="_blank" rel="noopener noreferrer">PENDLE</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_MAGIC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_MAGIC_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_MAGIC_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_MAGIC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/magic-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_MAGIC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_MAGIC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_MAGIC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/magic-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_PENDLE_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_PENDLE_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_PENDLE_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_PENDLE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/pendle-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_PENDLE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_PENDLE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_PENDLE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/pendle-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_RDNT_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_RDNT_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_RDNT_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_RDNT_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/rdnt-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_RDNT_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_RDNT_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_RDNT_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/rdnt-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_USDC_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_USDC_USDT.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_USDC_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_USDC_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/usdc-usdt-stable`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/usdc-usdt-stable" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_wstETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_wstETH_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_wstETH_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_wstETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/wsteth-weth-pegged-price`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/wsteth-weth-pegged-price" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'seamless_wstETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.seamless_wstETH.NewPool,
    collateralAddress: addresses.BASE.V2.seamless_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> wstETH </a>to Seamless, earning 
       <a href="https://basescan.org/token/${addresses.BASE.esSEAM}" target="_blank" rel="noopener noreferrer">esSEAM</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_cbETH.Underlying}" target="_blank" rel="noopener noreferrer"> wstETH</a>.
      </p>
      <p> Note that the <b>esSEAM</b> rewards are released through a vesting schedule with a year's duration.
        Due to this mechanic, it might take some time for the presented APY to come to fruition.
        More about <b>esSEAM</b> can be found in the 
        <a href="https://docs.seamlessprotocol.com/governance/escrow-seam-esseam" target="_blank" rel="noopener noreferrer">Seamless Docs</a>
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_ARB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_ARB.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_ARB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a>.
       At every harvest, the earned RDNT is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_DAI.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a>.
       At every harvest, the earned RDNT is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_WETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_WETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a>.
       At every harvest, the earned RDNT is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_WETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned RDNT and ARB are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned RDNT and ARB are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned RDNT and ARB are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDP}" target="_blank" rel="noopener noreferrer">RDP</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned RDNT is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'radpie_wstETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.radpie_wstETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.radpie_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://www.radiant.magpiexyz.io/stake`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a> to Radpie, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RDNT}" target="_blank" rel="noopener noreferrer">RDNT</a>.
       At every harvest, the earned RDNT is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.radpie_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'seamless_cbETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.seamless_cbETH.NewPool,
    collateralAddress: addresses.BASE.V2.seamless_cbETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_cbETH.Underlying}" target="_blank" rel="noopener noreferrer"> cbETH </a>to Seamless, earning 
       <a href="https://basescan.org/token/${addresses.BASE.esSEAM}" target="_blank" rel="noopener noreferrer">esSEAM</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_cbETH.Underlying}" target="_blank" rel="noopener noreferrer"> cbETH</a>.
      </p>
      <p> Note that the <b>esSEAM</b> rewards are released through a vesting schedule with a year's duration.
        Due to this mechanic, it might take some time for the presented APY to come to fruition.
        More about <b>esSEAM</b> can be found in the 
        <a href="https://docs.seamlessprotocol.com/governance/escrow-seam-esseam" target="_blank" rel="noopener noreferrer">Seamless Docs</a>
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'seamless_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.seamless_DAI.NewPool,
    collateralAddress: addresses.BASE.V2.seamless_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI </a>to Seamless, earning 
       <a href="https://basescan.org/token/${addresses.BASE.esSEAM}" target="_blank" rel="noopener noreferrer">esSEAM</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI</a>.
      </p>
      <p> Note that the <b>esSEAM</b> rewards are released through a vesting schedule with a year's duration.
        Due to this mechanic, it might take some time for the presented APY to come to fruition.
        More about <b>esSEAM</b> can be found in the 
        <a href="https://docs.seamlessprotocol.com/governance/escrow-seam-esseam" target="_blank" rel="noopener noreferrer">Seamless Docs</a>
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'seamless_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.seamless_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.seamless_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Seamless, earning 
       <a href="https://basescan.org/token/${addresses.BASE.esSEAM}" target="_blank" rel="noopener noreferrer">esSEAM</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
      <p> Note that the <b>esSEAM</b> rewards are released through a vesting schedule with a year's duration.
        Due to this mechanic, it might take some time for the presented APY to come to fruition.
        More about <b>esSEAM</b> can be found in the 
        <a href="https://docs.seamlessprotocol.com/governance/escrow-seam-esseam" target="_blank" rel="noopener noreferrer">Seamless Docs</a>
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'seamless_USDbC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.seamless_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.seamless_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC </a>to Seamless, earning 
       <a href="https://basescan.org/token/${addresses.BASE.esSEAM}" target="_blank" rel="noopener noreferrer">esSEAM</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC</a>.
      </p>
      <p> Note that the <b>esSEAM</b> rewards are released through a vesting schedule with a year's duration.
        Due to this mechanic, it might take some time for the presented APY to come to fruition.
        More about <b>esSEAM</b> can be found in the 
        <a href="https://docs.seamlessprotocol.com/governance/escrow-seam-esseam" target="_blank" rel="noopener noreferrer">Seamless Docs</a>
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'seamless_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.seamless_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.seamless_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Seamless, earning 
       <a href="https://basescan.org/token/${addresses.BASE.esSEAM}" target="_blank" rel="noopener noreferrer">esSEAM</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.seamless_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
      <p> Note that the <b>esSEAM</b> rewards are released through a vesting schedule with a year's duration.
        Due to this mechanic, it might take some time for the presented APY to come to fruition.
        More about <b>esSEAM</b> can be found in the 
        <a href="https://docs.seamlessprotocol.com/governance/escrow-seam-esseam" target="_blank" rel="noopener noreferrer">Seamless Docs</a>
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_ARB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_ARB.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_ARB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_DAI.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_ETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_ETH.Underlying}" target="_blank" rel="noopener noreferrer">WETH</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_FRAX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_FRAX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_FRAX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_FRAX.Underlying}" target="_blank" rel="noopener noreferrer">FRAX</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_FRAX.Underlying}" target="_blank" rel="noopener noreferrer">FRAX</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_GMX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_GMX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_GMX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_GMX.Underlying}" target="_blank" rel="noopener noreferrer">GMX</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_GMX.Underlying}" target="_blank" rel="noopener noreferrer">GMX</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDC.e</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_wstETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_wstETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestarHodl_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestarHodl_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fLODE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned ARB is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestarHodl_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>. The earned LODE is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault}" target="_blank" rel="noopener noreferrer">fLODE</a> where it is earning auto-compounding LODE rewards. The fLODE rewards can be claimed with the "Claim All" button.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_LODE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_LODE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault stakes 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.Underlying}" target="_blank" rel="noopener noreferrer">LODE</a> with Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_LODE.Underlying}" target="_blank" rel="noopener noreferrer">LODE</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_ARB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_ARB.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_ARB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a> to Venus, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.XVS}" target="_blank" rel="noopener noreferrer">XVS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_FRAX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_FRAX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_FRAX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_FRAX.Underlying}" target="_blank" rel="noopener noreferrer">FRAX</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_FRAX.Underlying}" target="_blank" rel="noopener noreferrer">FRAX</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_GMX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_GMX.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_GMX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_GMX.Underlying}" target="_blank" rel="noopener noreferrer">GMX</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_GMX.Underlying}" target="_blank" rel="noopener noreferrer">GMX</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_wstETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_wstETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">wstETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_wstETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_wstETH.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> wstETH </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> wstETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_rETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_rETH.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_rETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_rETH.Underlying}" target="_blank" rel="noopener noreferrer"> rETH </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_rETH.Underlying}" target="_blank" rel="noopener noreferrer"> rETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_ETH_frxeth',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.MAGPIE,
      params: [addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.wombat.exchange/pool?pool=frxETH&token=WETH&action=DEPOSIT&chain=arbitrum`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.Underlying}" target="_blank" rel="noopener noreferrer">WETH-LP</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.Underlying}" target="_blank" rel="noopener noreferrer">WETH-LP</a>.
      </p>
      <p> Get 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.Underlying}" target="_blank" rel="noopener noreferrer">WETH-LP</a> on 
      <a href="https://app.wombat.exchange/pool?pool=frxETH&token=WETH&action=DEPOSIT&chain=arbitrum" target="_blank" rel="noopener noreferrer">Wombat Exchange</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_ETH.Underlying}" target="_blank" rel="noopener noreferrer">wETH</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_ETH.Underlying}" target="_blank" rel="noopener noreferrer">wETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_DAI.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_DAI.Underlying}" target="_blank" rel="noopener noreferrer">DAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_USDCe',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_USDCe.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDCe</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDCe</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lodestar_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lodestar_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lodestar_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_ARB_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-arb-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-arb-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_DAI_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/usdc-dai-stable`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/usdc-dai-stable" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_GMX_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-gmx-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-gmx-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_GRAIL_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/grail-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/grail-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_LINK_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-link-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-link-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_WBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/wbtc-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/wbtc-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_ARB_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/arb-usdc-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/arb-usdc-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_ETH_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-usdt-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-usdt-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-usdc-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-usdc-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>, without creating a spNFT.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_wstETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_wstETH_ETH.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_wstETH_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_wstETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.gamma.xyz/vault/qi/polygon/details/wsteth-weth-pegged-price`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wsteth-weth-pegged-price" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_WBTC_USDC_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.gamma.xyz/vault/qi/polygon/details/wbtc-usdc.e-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wbtc-usdc.e-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_WBTC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://app.gamma.xyz/vault/qi/polygon/details/wbtc-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wbtc-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_axlUSDC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_axlUSDC_ETH.Underlying,
        addresses.BASE.V2.baseswap_axlUSDC_ETH.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_axlUSDC_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_axlUSDC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_axlUSDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_axlUSDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_axlUSDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0xEB466342C4d449BC9f53A865D5Cb90586f405215/0x4200000000000000000000000000000000000006" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_axlWBTC_USDbC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_axlWBTC_USDbC.Underlying,
        addresses.BASE.V2.baseswap_axlWBTC_USDbC.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_axlWBTC_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_axlWBTC_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_axlWBTC_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_axlWBTC_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_axlWBTC_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad/0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_ETH_DAI',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_ETH_DAI.Underlying,
        addresses.BASE.V2.baseswap_ETH_DAI.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_ETH_DAI.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_ETH_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_ETH_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_ETH_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_ETH_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x4200000000000000000000000000000000000006/0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_USDbC_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_USDbC_USDC.Underlying,
        addresses.BASE.V2.baseswap_USDbC_USDC.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_USDbC_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_USDbC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDbC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDbC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDbC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_USDp_USDbC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_USDp_USDbC.Underlying,
        addresses.BASE.V2.baseswap_USDp_USDbC.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_USDp_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_USDp_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDp_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDp_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDp_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376/0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_USDC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_USDC_ETH.Underlying,
        addresses.BASE.V2.baseswap_USDC_ETH.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_USDC_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_USDC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_USDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x4200000000000000000000000000000000000006/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'xBSX',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.xBSX.NewPool,
    collateralAddress: addresses.BASE.V2.xBSX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault holds  
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a> to allow distribution to BaseSwap LP stakers. 
       See available BaseSwap LP vaults 
       <a href="https://app.harvest.finance/?search=baseswap" target="_blank" rel="noopener noreferrer">here</a>!
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_CBETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_CBETH.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_CBETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_CBETH.Underlying}" target="_blank" rel="noopener noreferrer"> CBETH </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_CBETH.Underlying}" target="_blank" rel="noopener noreferrer"> CBETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_DAI.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_WETH.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_DAIp_USDp',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_DAIp_USDp.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_DAIp_USDp.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DAIp_USDp.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DAIp_USDp.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DAIp_USDp.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x65a2508c429a6078a7bc2f7df81ab575bd9d9275&token1=0xb79dd08ea68a908a97220c76d19a6aa9cbde4376&stable=true" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_USDp_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_USDp_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_USDp_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDp_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDp_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_USDp_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0xb79dd08ea68a908a97220c76d19a6aa9cbde4376&token1=0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca&stable=true" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_DOLA_USDbC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_DOLA_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_DOLA_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDbC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4621b7a9c75199271f773ebd9a499dbd165c3191&token1=0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca&stable=true" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'curve_USDC_USDbC_axlUSDC_crvUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.Underlying, CHAIN_IDS.BASE],
    },
    contractAddress: addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.NewPool,
    collateralAddress: addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://basescan.org/token/${addresses.BASE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.crvUSD}" target="_blank" rel="noopener noreferrer">crvUSD</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/base/pools/factory-v2-1/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_EQB_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_EQB_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_EQB_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_EQB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_EQB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.EQB}" target="_blank" rel="noopener noreferrer">EQB</a>.
       At every harvest, the earned GRAIL and EQB are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_EQB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_EQB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_RELAY_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_RELAY_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_RELAY_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_RELAY_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_RELAY_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RELAY}" target="_blank" rel="noopener noreferrer">RELAY</a>.
       At every harvest, the earned GRAIL and RELAY are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_RELAY_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_RELAY_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_THALES_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_THALES_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_THALES_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_THALES_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_THALES_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.THALES}" target="_blank" rel="noopener noreferrer">THALES</a>.
       At every harvest, the earned GRAIL and THALES are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_THALES_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_THALES_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_AERO_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_AERO_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_AERO_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_AERO_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_AERO_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_AERO_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x940181a94a35a4569e4529a3cdfb74e38fd98631&token1=0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_cbETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_cbETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_cbETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_cbETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22&token1=0x4200000000000000000000000000000000000006&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_ETH_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_tBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_tBTC_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_tBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_tBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_tBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_tBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x236aa50979d5f3de3bd1eeb40e81137f22ab794b&token1=0x4200000000000000000000000000000000000006&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_tBTC_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_tBTC_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_tBTC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_tBTC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_tBTC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_tBTC_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x236aa50979d5f3de3bd1eeb40e81137f22ab794b&token1=0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'aerodrome_wUSDR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_wUSDR_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_wUSDR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x9483ab65847a447e36d21af1cab8c87e9712ff93&token1=0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'USDbC_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC </a>to Compound V3, earning 
       <a href="https://basescan.org/token/${addresses.BASE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'WETH_base',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.WETH.NewPool,
    collateralAddress: addresses.BASE.V2.WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>to Compound V3, earning 
       <a href="https://basescan.org/token/${addresses.BASE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'USDCe_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Compound V3, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_BSX_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_BSX_ETH.Underlying,
        addresses.BASE.V2.baseswap_BSX_ETH.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_BSX_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_BSX_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x4200000000000000000000000000000000000006/0xd5046B976188EB40f6DE40fB527F89c05b323385" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_BSWAP_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_BSWAP_ETH.Underlying,
        addresses.BASE.V2.baseswap_BSWAP_ETH.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_BSWAP_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_BSWAP_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSWAP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSWAP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x4200000000000000000000000000000000000006/0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_CBETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_CBETH_ETH.Underlying,
        addresses.BASE.V2.baseswap_CBETH_ETH.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_CBETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_CBETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_CBETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_CBETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x4200000000000000000000000000000000000006/0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_DAI_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_DAI_USDC.Underlying,
        addresses.BASE.V2.baseswap_DAI_USDC.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_DAI_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_DAI_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb/0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'baseswap_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BASESWAP,
      params: [
        addresses.BASE.V2.baseswap_ETH_USDC.Underlying,
        addresses.BASE.V2.baseswap_ETH_USDC.BaseToken,
      ],
    },
    contractAddress: addresses.BASE.V2.baseswap_ETH_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.baseswap_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxBSX'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens </a>in a BaseSwap farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BSX}" target="_blank" rel="noopener noreferrer">BSX</a>, 
       <a href="https://basescan.org/token/${addresses.BASE.BSWAP}" target="_blank" rel="noopener noreferrer">BSWAP</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.V2.xBSX.Underlying}" target="_blank" rel="noopener noreferrer">xBSX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_BSX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a>. The earned xBSX is deposited in to 
       <a href="https://app.harvest.finance/base/${addresses.BASE.V2.xBSX.NewVault}" target="_blank" rel="noopener noreferrer">fxBSX</a>. The fxBSX rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the
      <a href="https://basescan.org/token/${addresses.BASE.V2.baseswap_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> BaseSwap LP tokens</a> by supplying liquidity on 
      <a href="https://baseswap.fi/add/0x4200000000000000000000000000000000000006/0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA" target="_blank" rel="noopener noreferrer">BaseSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_DOLA_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_tBTC_WBTC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_tBTC_WETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>. 
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_GENE_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_GENE_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_GENE_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_GENE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GENE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GNOME}" target="_blank" rel="noopener noreferrer">GNOME</a>.
       At every harvest, the earned GNOME is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GENE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GENE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
        <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
     </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_GNOME_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_GNOME_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_GNOME_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_GNOME_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GNOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GENE}" target="_blank" rel="noopener noreferrer">GENE</a>. 
       At every harvest, the earned GENE is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GNOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GNOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
        <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
     </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_GRAIL_ARB',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_GRAIL_ARB.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_GRAIL_ARB.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_GRAIL_ARB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GRAIL_ARB.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GRAIL_ARB.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
        <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GRAIL_ARB.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
        <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
     </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_ARB_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_ARB_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_ARB_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_ARB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_iFARM_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.iFARM}" target="_blank" rel="noopener noreferrer">iFARM</a>.
       At every harvest, the earned GRAIL is converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL and iFARM rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'xGRAIL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.xGRAIL.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM, addresses.ARBITRUM_ONE.ARB],
    rewardTokenSymbols: ['iFARM', 'ARB'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault allocates 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> in to Camelot Dividends, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.DMT}" target="_blank" rel="noopener noreferrer">DMT</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WINR}" target="_blank" rel="noopener noreferrer">WINR</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">CamelotV3 ETH-USDC LP tokens</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_OETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_OETH.NewPool,
    collateralAddress: addresses.V2.curve_OETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-298'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_OETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_OETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_OETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-v2-298/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_crvUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_crvUSD_USDC.NewPool,
    collateralAddress: addresses.V2.curve_crvUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-crvusd-0'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_crvUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_crvUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_crvUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-crvusd-0/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_2EUR_PAR_v2',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.MATIC.V2.balancer_2EUR_PAR_v2.PoolId, CHAIN_IDS.POLYGON_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.balancer_2EUR_PAR_v2.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2EUR_PAR_v2.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [
      addresses.MATIC.miFARM,
      addresses.MATIC.JEUR,
      addresses.MATIC.JRT,
      addresses.MATIC.pMIMO,
    ],
    rewardTokenSymbols: ['iFARM', 'JEUR', 'JRT', 'MIMO'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_PAR_v2.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_PAR_v2.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_PAR_v2.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_2EUR_PAR_v2.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_RDNT_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'sushi_DPX_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.PoolId, CHAIN_IDS.ARBITRUM_ONE],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SUSHI}" target="_blank" rel="noopener noreferrer">SUSHI</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.DPX}" target="_blank" rel="noopener noreferrer">DPX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'iPoison',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.iPoison.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.iPoison.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.iPoison.Underlying}" target="_blank" rel="noopener noreferrer"> iPOISON </a>in a Poison farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.POISON}" target="_blank" rel="noopener noreferrer">POISON</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.iPoison.Underlying}" target="_blank" rel="noopener noreferrer"> iPOISON</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'poison_pGOLD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens </a>in a Poison farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.POISON}" target="_blank" rel="noopener noreferrer">POISON</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_MATIC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wmatic-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_MATIC_ETH_wide',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wmatic-weth-wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_MATIC_USDC_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wmatic-usdc.e-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_USDC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.GAMMA_API,
      params: [addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/usdc.e-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'convex_pETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_pETH.NewPool,
    collateralAddress: addresses.V2.convex_pETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-194'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.convex_pETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.convex_pETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.convex_pETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-v2-194/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'convex_CVX_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_CVX_ETH.NewPool,
    collateralAddress: addresses.V2.convex_CVX_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-4'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.convex_CVX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.convex_CVX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.convex_CVX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/cvxeth/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'convex_cvxCRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_cvxCRV.NewPool,
    collateralAddress: addresses.V2.convex_cvxCRV.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.convex_cvxCRV.Underlying}" target="_blank" rel="noopener noreferrer"> cvxCRV </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a> & 
       <a href="https://etherscan.io/token/${addresses.THREE_POOL}" target="_blank" rel="noopener noreferrer">3CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.convex_cvxCRV.Underlying}" target="_blank" rel="noopener noreferrer"> cvxCRV</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ORC_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_ORC_ETH.NewVault, 'UniV3_ORC_ETH', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ORC_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_ORC_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.ORC],
    rewardTokenSymbols: ['iFARM', 'ORC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.UniV3_ORC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Orbit farm, earning 
       <a href="https://etherscan.io/token/${addresses.ORC}" target="_blank" rel="noopener noreferrer">ORC</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.UniV3_ORC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LOOKS,
      params: [addresses.V2.looks_LOOKS.RewardPool],
    },
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'LOOKS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.looks_LOOKS.NewPool,
    collateralAddress: addresses.V2.looks_LOOKS.NewVault,
    rewardAPY: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.looks_LOOKS.Underlying}" target="_blank" rel="noopener noreferrer"> LOOKS </a>in a LooksRare farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.looks_LOOKS.Underlying}" target="_blank" rel="noopener noreferrer"> LOOKS</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.uni_LOOKS_ETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'uni_LOOKS_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.uni_LOOKS_ETH.NewPool,
    collateralAddress: addresses.V2.uni_LOOKS_ETH.NewVault,
    rewardAPY: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.uni_LOOKS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a LooksRare farm, earning 
       <a href="https://etherscan.io/token/${addresses.LOOKS}" target="_blank" rel="noopener noreferrer">LOOKS</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.uni_LOOKS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.MATIC.V2.SUSHI_GENE_ETH.Underlying, CHAIN_IDS.POLYGON_MAINNET],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'SUSHI_GENE_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.SUSHI_GENE_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.SUSHI_GENE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM, addresses.MATIC.pGNOME],
    rewardTokenSymbols: ['iFARM', 'GNOME'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.SUSHI_GENE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Harvest farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.pGNOME}" target="_blank" rel="noopener noreferrer">pGNOME</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.SUSHI_GENE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.MATIC.V2.SUSHI_GNOME_ETH.Underlying, CHAIN_IDS.POLYGON_MAINNET],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'SUSHI_GNOME_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.SUSHI_GNOME_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.SUSHI_GNOME_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM, addresses.MATIC.pGENE],
    rewardTokenSymbols: ['iFARM', 'GENE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.SUSHI_GNOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Harvest farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.pGENE}" target="_blank" rel="noopener noreferrer">pGENE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.SUSHI_GNOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'polygon_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.polygon_WETH.NewPool,
    collateralAddress: addresses.MATIC.V2.polygon_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.polygon_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>in an IDLE farm.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.polygon_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_CNG_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_CNG_ETH.NewVault, 'UniV3_CNG_ETH', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_CNG_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_CNG_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.ecoCNG],
    rewardTokenSymbols: ['iFARM', 'ecoCNG'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.CNG}" target="_blank" rel="noopener noreferrer"> CNG </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.MATIC.V2.quickswap_IFARM_QUICK.PoolId, CHAIN_IDS.POLYGON_MAINNET],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickswap_IFARM_QUICK',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.quickswap_IFARM_QUICK.NewPool,
    collateralAddress: addresses.MATIC.V2.quickswap_IFARM_QUICK.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickswap_IFARM_QUICK.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap V2 LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.QUICK}" target="_blank" rel="noopener noreferrer">QUICK</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickswap_IFARM_QUICK.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap V2 LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'profit-sharing-farm',
    type: POOL_TYPES.PROFIT_SHARING,
    contractAddress: addresses.pools.ProfitSharingFARMUpstream,
    autoStakePoolAddress: addresses.pools.ProfitSharingFARMAutoStake,
    collateralAddress: addresses.FARM,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: null,
    hideNativeApy: true,
    watchAsset: {
      address: addresses.FARM,
      symbol: 'FARM',
      decimals: '18',
      icon: '/icons/farm.png',
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p>
      This is the profit sharing pool of Harvest. When you supply 
      <a href="https://etherscan.io/token/${addresses.FARM}" target="_blank" rel="noopener noreferrer">FARM</a> 
      you will be rewarded with a share of the profits of the platform paid out in 
      <a href="https://etherscan.io/token/${addresses.FARM}" target="_blank" rel="noopener noreferrer">FARM</a> 
      rewards. When depositing into the vault you obtain the yield-bearing token 
      <a href="https://etherscan.io/token/${addresses.iFARM}" target="_blank" rel="noopener noreferrer">iFARM</a>.
      You can swap iFARM for the underlying FARM at any time.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'YCRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.YCRV.NewPool,
    collateralAddress: addresses.V2.YCRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['ypool'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.YCRV}" target="_blank" rel="noopener noreferrer"> YCRV </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.YCRV}" target="_blank" rel="noopener noreferrer"> YCRV</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'ThreePool',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.ThreePool.NewPool,
    collateralAddress: addresses.V2.ThreePool.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['0'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.THREE_POOL}" target="_blank" rel="noopener noreferrer"> 3CRV </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.THREE_POOL}" target="_blank" rel="noopener noreferrer"> 3CRV</a>.
      </p>
    </div>
   `,
    zapperFiTokens: ['USDC', 'DAI', 'USDT', 'WETH'],
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvCOMPOUND',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvCOMPOUND.NewPool,
    collateralAddress: addresses.V2.crvCOMPOUND.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['compound'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.crvCOMPOUND}" target="_blank" rel="noopener noreferrer"> CRV:COMPOUND </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.crvCOMPOUND}" target="_blank" rel="noopener noreferrer"> CRV:COMPOUND</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.USDC.NewPool,
    collateralAddress: addresses.V2.USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to the Morpho Gauntlet Frontier Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.USDT.NewPool,
    collateralAddress: addresses.V2.USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT </a>to the Morpho Steakhouse Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.USDT.Underlying}" target="_blank" rel="noopener noreferrer"> USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'TUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.TUSDPool,
    collateralAddress: addresses.ProxiedVaultTUSD,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.TUSD}" target="_blank" rel="noopener noreferrer"> TUSD </a>in a farm.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.TUSD}" target="_blank" rel="noopener noreferrer"> TUSD</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.DAI.NewPool,
    collateralAddress: addresses.V2.DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI </a>to the Morpho Gauntlet Core Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI</a>.
      </p>
    </div>
  `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvOBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvOBTC.NewPool,
    collateralAddress: addresses.V2.crvOBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['obtc'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvOBTC.Underlying}" target="_blank" rel="noopener noreferrer"> OBTC </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.crvOBTC.Underlying}" target="_blank" rel="noopener noreferrer"> OBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'TBTCMixed',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.TBTCMixed.NewPool,
    collateralAddress: addresses.V2.TBTCMixed.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['tbtc'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.TBTC_MIXED}" target="_blank" rel="noopener noreferrer"> TBTC </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.TBTC_MIXED}" target="_blank" rel="noopener noreferrer"> TBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvRenWBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvRenWBTC.NewPool,
    collateralAddress: addresses.V2.crvRenWBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['ren'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.CRVRENWBTC}" target="_blank" rel="noopener noreferrer"> RENWBTC </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.CRVRENWBTC}" target="_blank" rel="noopener noreferrer"> RENWBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'renBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.renBTC.NewPool,
    collateralAddress: addresses.V2.renBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.RENBTC}" target="_blank" rel="noopener noreferrer"> renBTC </a>in a farm.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.RENBTC}" target="_blank" rel="noopener noreferrer"> renBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.WETH.NewPool,
    collateralAddress: addresses.V2.WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.WETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH </a>to the Morpho MEV Capital Vault, earning 
       <a href="https://etherscan.io/token/${addresses.MORPHO}" target="_blank" rel="noopener noreferrer">MORPHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.WETH.Underlying}" target="_blank" rel="noopener noreferrer"> ETH</a>.
      </p>
    </div>
  `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_SUSHI_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_SUSHI_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_SUSHI_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.sushi_SUSHI_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.SUSHI}" target="_blank" rel="noopener noreferrer">SUSHI</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.sushi_SUSHI_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_DAI_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_DAI_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_DAI_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x6B175474E89094C44Da98b954EedeAC495271d0F`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer">DAI</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_USDT_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_USDT_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_USDT_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xdAC17F958D2ee523a2206206994597C13D831ec7`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_USDT_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer">USDT</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDT_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_WBTC_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_WBTC_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_WBTC_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.WBTC}" target="_blank" rel="noopener noreferrer">WBTC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'oneInch_ETH_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_DAI.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a 1Inch farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer">DAI</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'oneInch_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_USDC.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a 1Inch farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'oneInch_ETH_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_USDT.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a 1Inch farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer">USDT</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvGUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvGUSD.NewPool,
    collateralAddress: addresses.V2.crvGUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['gusd'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvGUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.crvGUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvSTETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvSTETH.NewPool,
    collateralAddress: addresses.V2.crvSTETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-303'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvSTETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>. 
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.crvSTETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.crvSTETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-v2-303/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'SUSHI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.SUSHI.NewPool,
    collateralAddress: addresses.V2.SUSHI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.SUSHI.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.SUSHI}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.SUSHI.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_DAI_WETH_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_DAI_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_DAI_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x6B175474E89094C44Da98b954EedeAC495271d0F`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer">DAI</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_USDC_WETH_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_USDC_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_USDC_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_USDC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_USDT_WETH_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_USDT_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_USDT_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xdAC17F958D2ee523a2206206994597C13D831ec7`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_USDT_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer">USDT</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDT_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_WBTC_WETH_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_WBTC_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_WBTC_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.WBTC}" target="_blank" rel="noopener noreferrer">WBTC</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    id: 'nft20_Muse',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Muse.NewPool,
    collateralAddress: addresses.V2.nft20_Muse.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Muse.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.MUSE}" target="_blank" rel="noopener noreferrer">MUSE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Muse.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    id: 'nft20_Dudes',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Dudes.NewPool,
    collateralAddress: addresses.V2.nft20_Dudes.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Dudes.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.NUDES20}" target="_blank" rel="noopener noreferrer">NUDES20</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Dudes.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    id: 'nft20_Mooncat',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Mooncat.NewPool,
    collateralAddress: addresses.V2.nft20_Mooncat.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Mooncat.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.MCAT20}" target="_blank" rel="noopener noreferrer">MCAT20</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Mooncat.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    id: 'nft20_Meme',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Meme.NewPool,
    collateralAddress: addresses.V2.nft20_Meme.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Meme.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.MEME20}" target="_blank" rel="noopener noreferrer">MEME20</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Meme.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    uniPool: true,
    id: 'uni_ETH_MVI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.uni_ETH_MVI.NewPool,
    collateralAddress: addresses.V2.uni_ETH_MVI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.uni_ETH_MVI.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.MVI}" target="_blank" rel="noopener noreferrer">MVI</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.uni_ETH_MVI.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ETH_sETH2',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_ETH_sETH2.NewVault, 'UniV3_ETH_sETH2', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ETH_sETH2.NewPool,
    collateralAddress: addresses.V2.UniV3_ETH_sETH2.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>and 
       <a href="https://etherscan.io/token/${addresses.sETH2}" target="_blank" rel="noopener noreferrer"> sETH2 </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_ETH',
    type: POOL_TYPES.UNIV3,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_USDC_ETH.NewVault, 'UniV3_USDC_ETH', strat15PercentFactor],
    },
    contractAddress: addresses.V2.UniV3_USDC_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_USDC_USDT.NewVault, 'UniV3_USDC_USDT', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_USDT.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>and
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_WBTC_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_WBTC_ETH.NewVault, 'UniV3_WBTC_ETH', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_WBTC_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_WBTC_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.WBTC}" target="_blank" rel="noopener noreferrer"> WBTC </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ETH_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_ETH_USDT.NewVault, 'UniV3_ETH_USDT', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ETH_USDT.NewPool,
    collateralAddress: addresses.V2.UniV3_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>and 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_USDC',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_DAI_USDC.NewVault, 'UniV3_DAI_USDC', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_USDC.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>and 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_V3,
      params: [addresses.V2.UniV3_DAI_ETH.NewVault, 'UniV3_DAI_ETH', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are converted into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvThreeCrypto',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvThreeCrypto.NewPool,
    collateralAddress: addresses.V2.crvThreeCrypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-0'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvThreeCrypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.crvThreeCrypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'bal_BAL_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_BAL_WETH.NewPool,
    collateralAddress: addresses.V2.bal_BAL_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_BAL_WETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.bal_BAL_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.bal_BAL_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'bal_POLYBASE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.MATIC.V2.balancer_POLYBASE.PoolId, CHAIN_IDS.POLYGON_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.balancer_POLYBASE.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_POLYBASE.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.balancer_POLYBASE.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_POLYBASE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_POLYBASE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_YEL_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_YEL_ETH.NewPool,
    collateralAddress: addresses.V2.sushi_YEL_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.sushi_YEL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.YEL}" target="_blank" rel="noopener noreferrer">YEL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.sushi_YEL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
]
