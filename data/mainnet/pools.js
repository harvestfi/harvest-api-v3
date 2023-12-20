const { CHAIN_IDS, TRADING_APY_TYPES, POOL_TYPES } = require('../constants')
const addresses = require('./addresses.json')

const strat15PercentFactor = '0.85'

module.exports = [
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
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> and
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
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
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> and
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_rETH.Underlying}" target="_blank" rel="noopener noreferrer"> rETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_DAI_main',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_DAI_main.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_DAI_main.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_DAI_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-DAI</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_DAI_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-DAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_ETH_frxeth',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.Underlying}" target="_blank" rel="noopener noreferrer">LP-WETH</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_ETH_frxeth.Underlying}" target="_blank" rel="noopener noreferrer">LP-WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_USDCe_main',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_USDCe_main.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_USDCe_main.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_USDCe_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-USDC.e</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_USDCe_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-USDC.e</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_USDC_main',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_USDC_main.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_USDC_main.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_USDC_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-USDC</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_USDC_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_USDT_main',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_USDT_main.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_USDT_main.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_USDT_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-USDT</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_USDT_main.Underlying}" target="_blank" rel="noopener noreferrer">LP-USDT</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'magpie_WOM_mwom',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.magpie_WOM_mwom.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.magpie_WOM_mwom.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_WOM_mwom.Underlying}" target="_blank" rel="noopener noreferrer">LP-WOM</a> in to a Magpie farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WOM}" target="_blank" rel="noopener noreferrer">WOM</a>,
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MGP}" target="_blank" rel="noopener noreferrer">MGP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.magpie_WOM_mwom.Underlying}" target="_blank" rel="noopener noreferrer">LP-WOM</a>.
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_ETH.Underlying}" target="_blank" rel="noopener noreferrer">wETH</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDC.Underlying}" target="_blank" rel="noopener noreferrer">USDC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are reinvested into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">USDCe</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are reinvested into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_USDT.Underlying}" target="_blank" rel="noopener noreferrer">USDT</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are reinvested into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_WBTC.Underlying}" target="_blank" rel="noopener noreferrer">WBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'jones_wjAURA',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.jones_wjAURA.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.jones_wjAURA.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.jones_wjAURA.Underlying}" target="_blank" rel="noopener noreferrer">wjAURA</a> in to a JonesDAO farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.jones_wjAURA.Underlying}" target="_blank" rel="noopener noreferrer">wjAURA</a>.
      </p>
      <p> Get 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.jones_wjAURA.Underlying}" target="_blank" rel="noopener noreferrer">wjAURA</a> on 
      <a href="https://app.jonesdao.io/vaults/auto-compounders/aura" target="_blank" rel="noopener noreferrer">JonesDAO</a>.
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
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x912CE59144191C1204E64559FE8253a0e49E6548&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_DAI_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&token2=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8&token2=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LINK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0xf97f4df75117a78c1A5a0DBb814Af92458539FB4&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_LUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_LUSD_USDC.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_LUSD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_LUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_LUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x93b346b6BC2548dA6A1E7d98E9a421B42541425b&token2=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Stable" options.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelotV3_USDCe_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelotV3_USDCe_USDT.AlgebraPool, true],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelotV3_USDCe_USDT.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelotV3_USDCe_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_USDCe_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9&token2=0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Stable" options.
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
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f&token2=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x912CE59144191C1204E64559FE8253a0e49E6548&token2=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&type=v3&position=lp" target="_blank" rel="noopener noreferrer">Camelot</a>, using the "Auto", "GAMMA" and "Narrow" options.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_wstETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_wstETH_ETH.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_wstETH_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_wstETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wbtc-usdc-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_WBTC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_WBTC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are reinvested into more
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_USDC_USDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_USDC_USDT.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_USDC_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_USDC_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/usdc-usdt-stable" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_USDC_DAI',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_USDC_DAI.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_USDC_DAI.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_USDC_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_DAI.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/usdc-dai-stable" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_STAR_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_STAR_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_STAR_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_STAR_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_STAR_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_STAR_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
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
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> and
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> and
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
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
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> and
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> DAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'moonwell_USDbC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.moonwell_USDbC.NewPool,
    collateralAddress: addresses.BASE.V2.moonwell_USDbC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC </a>to Moonwell, earning 
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_USDbC.Underlying}" target="_blank" rel="noopener noreferrer"> USDbC</a>.
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
       <a href="https://basescan.org/token/${addresses.BASE.WELL}" target="_blank" rel="noopener noreferrer">WELL</a> and
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.moonwell_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'based_BASED_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.based_BASED_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.based_BASED_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.based_BASED_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in the Based.Farm Armory, earning 
       <a href="https://basescan.org/token/${addresses.BASE.bSHARE}" target="_blank" rel="noopener noreferrer">bSHARE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.based_BASED_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.based_BASED_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0x9CBD543f1B1166b2Df36b68Eb6bB1DcE24E6aBDf&stable=true" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      And check out the Armory on 
      <a href="https://based.farm/app/armory" target="_blank" rel="noopener noreferrer">Based.Farm</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'based_bSHARE_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.based_bSHARE_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.based_bSHARE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.based_bSHARE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in the Based.Farm Armory, earning 
       <a href="https://basescan.org/token/${addresses.BASE.bSHARE}" target="_blank" rel="noopener noreferrer">bSHARE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.based_bSHARE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.based_bSHARE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xD0A96c9b21565a7B73d006C02E56E09438b51C1B&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
      And check out the Armory on 
      <a href="https://based.farm/app/armory" target="_blank" rel="noopener noreferrer">Based.Farm</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    id: 'aerodrome_DOLA_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_DOLA_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_DOLA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_DOLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
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
      type: TRADING_APY_TYPES.CURVE_BASE,
      params: [addresses.BASE.V2.curve_USDC_USDbC_axlUSDC_crvUSD.Underlying],
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
       At every harvest, the earned rewards are reinvested into more
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
    chain: CHAIN_IDS.BASE,
    id: 'curve_CBETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_BASE,
      params: [addresses.BASE.V2.curve_CBETH_ETH.Pool],
    },
    contractAddress: addresses.BASE.V2.curve_CBETH_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.curve_CBETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_CBETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://basescan.org/token/${addresses.BASE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.crvUSD}" target="_blank" rel="noopener noreferrer">crvUSD</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_CBETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.curve_CBETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/base/pools/factory-crypto-1/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'curve_CRV_crvUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_BASE,
      params: [addresses.BASE.V2.curve_CRV_crvUSD.Pool],
    },
    contractAddress: addresses.BASE.V2.curve_CRV_crvUSD.NewPool,
    collateralAddress: addresses.BASE.V2.curve_CRV_crvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_CRV_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://basescan.org/token/${addresses.BASE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.crvUSD}" target="_blank" rel="noopener noreferrer">crvUSD</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_CRV_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.curve_CRV_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/base/pools/factory-crypto-4/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'curve_ETH_tBTC_crvUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_BASE,
      params: [addresses.BASE.V2.curve_ETH_tBTC_crvUSD.Underlying],
    },
    contractAddress: addresses.BASE.V2.curve_ETH_tBTC_crvUSD.NewPool,
    collateralAddress: addresses.BASE.V2.curve_ETH_tBTC_crvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_ETH_tBTC_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://basescan.org/token/${addresses.BASE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.crvUSD}" target="_blank" rel="noopener noreferrer">crvUSD</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.curve_ETH_tBTC_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.curve_ETH_tBTC_crvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/base/pools/factory-tricrypto-1/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_CVR_PEARL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_CVR_PEARL.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_CVR_PEARL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_CVR_PEARL.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_CVR_PEARL.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_CVR_PEARL.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_DAI_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_DAI_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_DAI_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_DAI_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_DAI_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_DAI_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_ETH_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_ETH_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_ETH_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_ETH_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_ETH_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_ETH_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_MATIC_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_MATIC_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_MATIC_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_MATIC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_MATIC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_MATIC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_PEARL_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_PEARL_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_PEARL_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_PEARL_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_PEARL_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_PEARL_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_TNGBL_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_TNGBL_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_TNGBL_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_TNGBL_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_TNGBL_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_TNGBL_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_USDC_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_USDC_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_USDC_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_USDC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_USDC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_USDC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_USDT_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_USDT_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_USDT_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_USDT_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_USDT_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_USDT_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_WBTC_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_WBTC_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_WBTC_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_WBTC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_WBTC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_WBTC_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'pearl_wUSDR_USDR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.pearl_wUSDR_USDR.NewPool,
    collateralAddress: addresses.MATIC.V2.pearl_wUSDR_USDR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'fCVR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_wUSDR_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> in to a Pearl farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.PEARL}" target="_blank" rel="noopener noreferrer">PEARL</a>.
       The earned PEARL is converted into 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> and deposited in to 
       <a href="https://app.harvest.finance/polygon/${addresses.MATIC.V2.CVR.NewVault}" target="_blank" rel="noopener noreferrer">fCVR</a> where it is earning auto-compounding CVR rewards. The fCVR rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.pearl_wUSDR_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl LP tokens</a> by supply liquidity on  
      <a href="https://www.pearl.exchange/liquidity/manage/${addresses.MATIC.V2.pearl_wUSDR_USDR.Underlying}" target="_blank" rel="noopener noreferrer">Pearl</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'CVR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.CVR.NewPool,
    collateralAddress: addresses.MATIC.V2.CVR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer"> CVR </a>to Caviar, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.USDR}" target="_blank" rel="noopener noreferrer">USDR</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer"> CVR</a>.
      </p>
      <p> Get  
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.CVR.Underlying}" target="_blank" rel="noopener noreferrer">CVR</a> through 
      <a href="https://www.tangible.store/caviar" target="_blank" rel="noopener noreferrer">Tangible</a>.
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
       At every harvest, the earned GRAIL and EQB are reinvested into more
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
    id: 'camelot_JONES_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_JONES_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_JONES_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_JONES_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_JONES_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_JONES_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_JONES_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_LODE_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_LODE_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_LODE_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_LODE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_LODE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a>.
       At every harvest, the earned GRAIL and LODE are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_LODE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_LODE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
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
       At every harvest, the earned GRAIL and RELAY are reinvested into more
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
       At every harvest, the earned GRAIL and THALES are reinvested into more
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
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_UMAMI_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_UMAMI_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_UMAMI_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_UMAMI_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_UMAMI_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_UMAMI_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_UMAMI_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_UWU_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_UWU_USDC.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_UWU_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_UWU_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_UWU_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.UWU}" target="_blank" rel="noopener noreferrer">UWU</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned GRAIL ,UWU and USDC are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_UWU_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_UWU_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    id: 'aerodrome_TAROT_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_TAROT_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_TAROT_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_TAROT_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens </a>in a Aerodrome farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.AERO}" target="_blank" rel="noopener noreferrer">AERO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_TAROT_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Aerodrome LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.aerodrome_TAROT_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Aerodrome LP tokens</a> by supplying liquidity on 
      <a href="https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xf544251d25f3d243a36b07e7e7962a678f952691&stable=false" target="_blank" rel="noopener noreferrer">Aerodrome</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    contractAddress: addresses.BASE.V2.USDC.NewPool,
    collateralAddress: addresses.BASE.V2.USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Compound V3, earning 
       <a href="https://basescan.org/token/${addresses.BASE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC </a>to Compound V3, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.COMP}" target="_blank" rel="noopener noreferrer">COMP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'USDC_polygon',
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.USDC.Underlying}" target="_blank" rel="noopener noreferrer"> USDC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'balancer_axlUSDC_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.BASE.V2.balancer_axlUSDC_USDC.PoolId, CHAIN_IDS.BASE],
    },
    contractAddress: addresses.BASE.V2.balancer_axlUSDC_USDC.NewPool,
    collateralAddress: addresses.BASE.V2.balancer_axlUSDC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_axlUSDC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_axlUSDC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_axlUSDC_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/base/pool/${addresses.BASE.V2.balancer_axlUSDC_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'balancer_cbETH_WETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.BASE.V2.balancer_cbETH_WETH.PoolId, CHAIN_IDS.BASE],
    },
    contractAddress: addresses.BASE.V2.balancer_cbETH_WETH.NewPool,
    collateralAddress: addresses.BASE.V2.balancer_cbETH_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_cbETH_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_cbETH_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_cbETH_WETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/base/pool/${addresses.BASE.V2.balancer_cbETH_WETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.BASE,
    id: 'balancer_GOLD_WETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.BASE.V2.balancer_GOLD_WETH.PoolId, CHAIN_IDS.BASE],
    },
    contractAddress: addresses.BASE.V2.balancer_GOLD_WETH.NewPool,
    collateralAddress: addresses.BASE.V2.balancer_GOLD_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_GOLD_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://basescan.org/token/${addresses.BASE.GOLD}" target="_blank" rel="noopener noreferrer">GOLD</a> & 
       <a href="https://basescan.org/token/${addresses.BASE.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_GOLD_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://basescan.org/token/${addresses.BASE.V2.balancer_GOLD_WETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/base/pool/${addresses.BASE.V2.balancer_GOLD_WETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_DOLA_USDC.Underlying, 'balancerv2_arbitrum'],
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
       At every harvest, the earned rewards are reinvested into more
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
    id: 'balancer_PAL_OHM',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.Underlying, 'balancerv2_arbitrum'],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_PAL_OHM.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_auraBAL_wstETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.Underlying, 'balancerv2_arbitrum'],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_auraBAL_wstETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_MAGIC_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.Underlying, 'balancerv2_arbitrum'],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in an Aura farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_MAGIC_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_tBTC_WBTC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_tBTC_WBTC.Underlying, 'balancerv2_arbitrum'],
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
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_tBTC_WETH.Underlying, 'balancerv2_arbitrum'],
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned GNOME is reinvested into more
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
       At every harvest, the earned GENE is reinvested into more
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
       At every harvest, the earned GRAIL is reinvested into more
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
    id: 'camelot_GMX_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_GMX_USDC.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_GMX_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_GMX_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GMX_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GMX_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GMX_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_SILO_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_SILO_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_SILO_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_SILO_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_SILO_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SILO}" target="_blank" rel="noopener noreferrer">SILO</a>.
       At every harvest, the earned GRAIL and SILO are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_SILO_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_SILO_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'camelot_VELA_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_VELA_ETH.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_VELA_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_VELA_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_VELA_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> &
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.VELA}" target="_blank" rel="noopener noreferrer">VELA</a>.
       At every harvest, the earned GRAIL and VELA are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_VELA_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_VELA_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
      <a href="https://app.camelot.exchange/liquidity" target="_blank" rel="noopener noreferrer">Camelot</a>, using V2 and the "Liquidity Only" option.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'verse_WBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.verse_WBTC_ETH.Underlying],
    },
    contractAddress: addresses.V2.verse_WBTC_ETH.NewPool,
    collateralAddress: addresses.V2.verse_WBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://etherscan.io/token/${addresses.V2.verse_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Verse LP tokens</a> in a Verse farm, earning 
       <a href="https://etherscan.io/token/${addresses.VERSE}" target="_blank" rel="noopener noreferrer">VERSE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.verse_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Verse LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.verse_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Verse LP tokens</a> by supplying liquidity on 
      <a href="https://verse.bitcoin.com/pools/eth/wbtc-eth/deposit/" target="_blank" rel="noopener noreferrer">Verse Dex</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'verse_USDC_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.verse_USDC_ETH.Underlying],
    },
    contractAddress: addresses.V2.verse_USDC_ETH.NewPool,
    collateralAddress: addresses.V2.verse_USDC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://etherscan.io/token/${addresses.V2.verse_USDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Verse LP tokens</a> in a Verse farm, earning 
       <a href="https://etherscan.io/token/${addresses.VERSE}" target="_blank" rel="noopener noreferrer">VERSE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.verse_USDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Verse LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.verse_USDC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Verse LP tokens</a> by supplying liquidity on 
      <a href="https://verse.bitcoin.com/pools/eth/usdc-eth/deposit/" target="_blank" rel="noopener noreferrer">Verse Dex</a>.
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
       At every harvest, the earned GRAIL is reinvested into more
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
    id: 'camelot_GRAIL_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CAMELOT,
      params: [addresses.ARBITRUM_ONE.V2.camelot_GRAIL_USDC.Underlying],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.camelot_GRAIL_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.camelot_GRAIL_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GRAIL_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned GRAIL is reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GRAIL_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a>. The earned xGRAIL is deposited in to 
       <a href="https://app.harvest.finance/arbitrum/${addresses.ARBITRUM_ONE.V2.xGRAIL.NewVault}" target="_blank" rel="noopener noreferrer">fxGRAIL</a> where it is earning auto-compounding xGRAIL rewards. The fxGRAIL rewards can be claimed with the "Claim All" button.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_GRAIL_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> by supplying liquidity on 
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
       At every harvest, the earned GRAIL is reinvested into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_iFARM_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Camelot LP tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.iFARM}" target="_blank" rel="noopener noreferrer">iFARM</a>.
       At every harvest, the earned GRAIL is reinvested into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault allocates 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> in to Camelot Dividens and Yield Boost, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelot_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Camelot ETH-USDC LP tokens</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_rETH_aWETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_rETH_aWETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_wstETH_amETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_wstETH_amETH.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_wstETH_amETH.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_wstETH_amETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_wstETH_amETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_wstETH_amETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_wstETH_amETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_wstETH_amETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'verse_VERSE_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.verse_VERSE_ETH.Underlying],
    },
    contractAddress: addresses.V2.verse_VERSE_ETH.NewPool,
    collateralAddress: addresses.V2.verse_VERSE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://etherscan.io/token/${addresses.V2.verse_VERSE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Verse LP tokens</a> in a Verse farm, earning 
       <a href="https://etherscan.io/token/${addresses.VERSE}" target="_blank" rel="noopener noreferrer">VERSE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.verse_VERSE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Verse LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.verse_VERSE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Verse LP tokens</a> by supplying liquidity on 
      <a href="https://verse.bitcoin.com/pools/eth/verse-eth/deposit/" target="_blank" rel="noopener noreferrer">Verse Dex</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_stMatic_amMatic',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_stMatic_amMatic.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_stMatic_amMatic.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_stMatic_amMatic.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_stMatic_amMatic.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_stMatic_amMatic.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_stMatic_amMatic.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_stMatic_amMatic.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_2EUR_PAR_v2',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2EUR_PAR_v2.Underlying, 'balancerv2_matic'],
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
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.Underlying, 'balancerv2_arbitrum'],
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
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.Underlying, 'sushiswap_arbitrum'],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'curve_3Crypto_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_3Crypto.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_3Crypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_3Crypto.Miner,
        addresses.MATIC.V2.curve_3Crypto.PoolId,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/polygon/pools/atricrypto3/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'curve_CRV_3Crypto_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_CRV_3Crypto.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_CRV_3Crypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_CRV_3Crypto.Miner,
        addresses.MATIC.V2.curve_CRV_3Crypto.PoolId,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_CRV_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_CRV_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_CRV_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/polygon/pools/factory-crypto-1/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'curve_MATIC_3Crypto_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_MATIC_3Crypto.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_MATIC_3Crypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_MATIC_3Crypto.Miner,
        addresses.MATIC.V2.curve_MATIC_3Crypto.PoolId,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_MATIC_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_MATIC_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_MATIC_3Crypto.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/polygon/pools/factory-crypto-83/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aura_bbiUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_bbiUSD.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_bbiUSD.NewPool,
    collateralAddress: addresses.V2.aura_bbiUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.aura_bbiUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.aura_bbiUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.aura_bbiUSD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.aura_bbiUSD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_wstETH_wETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Lido farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LDO}" target="_blank" rel="noopener noreferrer">LDO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_wstETH_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Lido farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LDO}" target="_blank" rel="noopener noreferrer">LDO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Curve_2pool_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_2pool_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_2pool_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_2pool_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_2pool_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['2pool'],
    },
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Curve_TriCrypto_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_TriCrypto_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_TriCrypto_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_TriCrypto_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_TriCrypto_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['tricrypto'],
    },
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'StargateUSDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.StargateUSDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.StargateUSDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.StargateUSDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Stargate LP tokens </a>in a Stargate farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.STG}" target="_blank" rel="noopener noreferrer">STG</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.StargateUSDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Stargate LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'StargateUSDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.StargateUSDT_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.StargateUSDT_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.StargateUSDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Stargate LP tokens </a>in a Stargate farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.STG}" target="_blank" rel="noopener noreferrer">STG</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.StargateUSDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Stargate LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Sushi_ETHDAI_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.DAI}" target="_blank" rel="noopener noreferrer">DAI</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Sushi_ETHMAGIC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MAGIC}" target="_blank" rel="noopener noreferrer">MAGIC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_MATIC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
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
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
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
       At every harvest, the earned rewards are reinvested into more
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
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wmatic-usdc-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_MATIC_USDC_wide',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/wmatic-usdc-wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_USDC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/usdc-weth-narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quickGamma_USDC_ETH_wide',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_USDC_ETH_wide.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_wide.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_wide.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_wide.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.dQUICK}" target="_blank" rel="noopener noreferrer">dQUICK</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.WMATIC}" target="_blank" rel="noopener noreferrer">WMATIC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_wide.Underlying}" target="_blank" rel="noopener noreferrer"> Gamma LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quickGamma_USDC_ETH_wide.Underlying}" target="_blank" rel="noopener noreferrer">Gamma LP tokens</a> by supplying liquidity on 
      <a href="https://app.gamma.xyz/vault/qi/polygon/details/usdc-weth-wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'apeStake',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.apeStake.NewPool,
    collateralAddress: addresses.V2.apeStake.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.apeStake.Underlying}" target="_blank" rel="noopener noreferrer"> APE </a>in an APE farm, earning 
       <a href="https://etherscan.io/token/${addresses.V2.apeStake.Underlying}" target="_blank" rel="noopener noreferrer">APE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.apeStake.Underlying}" target="_blank" rel="noopener noreferrer"> APE</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'meshswap_WMATIC_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_WMATIC_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_WMATIC_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_WMATIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.MESH}" target="_blank" rel="noopener noreferrer">MESH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_WMATIC_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_DAI.NewPool,
    collateralAddress: addresses.V2.notional_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> nDAI </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> nDAI</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_ETH.NewPool,
    collateralAddress: addresses.V2.notional_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> nETH </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> nETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_WBTC.NewPool,
    collateralAddress: addresses.V2.notional_WBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> nWBTC </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> nWBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_2EUR_EURT_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2EUR_EURT_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2EUR_EURT_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'WMATIC', 'fJRTSEP22_USDC', 'fJRTNOV22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2EUR_EURT_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.JRT_NOV22}" target="_blank" rel="noopener noreferrer">JRT_NOV22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2EUR_EURT_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2EUR_PAR.Underlying, 'balancerv2_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_2EUR_PAR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.balancer_2EUR_PAR.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2EUR_PAR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_PAR.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_PAR.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_PAR.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_2EUR_PAR.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.convex_cvxCRV.Underlying}" target="_blank" rel="noopener noreferrer"> cvxCRV</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aura_auraBAL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.aura_auraBAL.NewPool,
    collateralAddress: addresses.V2.aura_auraBAL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.aura_auraBAL.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.aura_auraBAL.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aura_rETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_rETH.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_rETH.NewPool,
    collateralAddress: addresses.V2.aura_rETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.aura_rETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.aura_rETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.aura_rETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.aura_rETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2EUR_agEUR.Underlying, 'balancerv2_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_2EUR_agEUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.balancer_2EUR_agEUR.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2EUR_agEUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_agEUR.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>. 
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_agEUR.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2EUR_agEUR.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_2EUR_agEUR.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DENJUL22_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_DENJUL22_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DENJUL22_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DENJUL22_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DENJUL22_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.DEN_JUL22}" target="_blank" rel="noopener noreferrer">DEN-JUL22</a>. 
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DENJUL22_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_2SGD_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2SGD_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2SGD_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'iFARM',
      'WMATIC',
      'fJRTMAY22_USDC',
      'fJRTJUL22_USDC',
      'fJRTSEP22_USDC',
      'fJRTNOV22_USDC',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2SGD_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.JRT_NOV22}" target="_blank" rel="noopener noreferrer">JRT_NOV22</a>. 
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2SGD_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_2JPY_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2JPY_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2JPY_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'iFARM',
      'WMATIC',
      'fSES_2JPY',
      'fJRTMAY22_USDC',
      'fJRTJUL22_USDC',
      'fJRTSEP22_USDC',
      'fJRTNOV22_USDC',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2JPY_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.JRT_NOV22}" target="_blank" rel="noopener noreferrer">JRT_NOV22</a>. 
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2JPY_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_2CAD_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2CAD_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2CAD_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'iFARM',
      'WMATIC',
      'fQUI_2CAD',
      'fJRTMAY22_USDC',
      'fJRTJUL22_USDC',
      'fJRTSEP22_USDC',
      'fJRTNOV22_USDC',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2CAD_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.JRT_NOV22}" target="_blank" rel="noopener noreferrer">JRT_NOV22</a>. 
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_2CAD_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_AUR3_USDC.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_AUR3_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AUR3_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AUR3_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_AUR3_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.AUR_APR22}" target="_blank" rel="noopener noreferrer">AUR_APR22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_AUR3_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ORC_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_ORC_ETH.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.UniV3_ORC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'bal_TUSD_STABLE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.bal_TUSD_STABLE.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.bal_TUSD_STABLE.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_TUSD_STABLE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_TUSD_STABLE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_TUSD_STABLE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.looks_LOOKS.Underlying}" target="_blank" rel="noopener noreferrer"> LOOKS</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.MSTABLE,
      params: ['imUSD', 'polygon'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'mUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.mUSD.NewPool,
    collateralAddress: addresses.MATIC.V2.mUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.mUSD.Underlying}" target="_blank" rel="noopener noreferrer"> mUSD </a>in a mStable farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.pMTA}" target="_blank" rel="noopener noreferrer">MTA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.mUSD.Underlying}" target="_blank" rel="noopener noreferrer"> mUSD</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.uni_LOOKS_ETH.Underlying, 'uniswap_eth'],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.uni_LOOKS_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.SUSHI_GENE_ETH.Underlying, 'sushiswap_matic'],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.SUSHI_GENE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.SUSHI_GNOME_ETH.Underlying, 'sushiswap_matic'],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.SUSHI_GNOME_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_AUR_USDC_V2.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_AUR_USDC_V2',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AUR_USDC_V2.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AUR_USDC_V2.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_AUR_USDC_V2.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.AURFEB22}" target="_blank" rel="noopener noreferrer">AURFEB22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_AUR_USDC_V2.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DENMAY22_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_DENMAY22_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DENMAY22_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DENMAY22_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DENMAY22_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.DEN_MAY22}" target="_blank" rel="noopener noreferrer">DEN-MAY22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DENMAY22_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DEN2_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_DEN2_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DEN2_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DEN2_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DEN2_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.DEN_MAR22}" target="_blank" rel="noopener noreferrer">DEN-MAR22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DEN2_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DEN_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_DEN_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DEN_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DEN_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DEN_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.DEN}" target="_blank" rel="noopener noreferrer">DEN</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_DEN_4EUR.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_4EUR_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_4EUR_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_4EUR_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'iFARM',
      'WMATIC',
      'fDEN_4EUR',
      'fDEN2_4EUR',
      'fDENMAY22_4EUR',
      'fDENJUL22_4EUR',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_4EUR_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.DEN_JUL22}" target="_blank" rel="noopener noreferrer">DEN_JUL22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_4EUR_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.quick_YEL_MATIC.Underlying, 'quickswap_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'quick_YEL_MATIC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.quick_YEL_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.quick_YEL_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quick_YEL_MATIC.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap V2 LP tokens </a>in a Quickswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.pYEL}" target="_blank" rel="noopener noreferrer">pYEL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.quick_YEL_MATIC.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap V2 LP tokens</a>.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.polygon_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_4200_5500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDC_ETH_4200_5500.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_ETH_4200_5500.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_4200_5500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_ETH_4200_5500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DAI_ETH_4200_5500.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH_4200_5500.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH_4200_5500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ETH_USDT_4200_5500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_ETH_USDT_4200_5500.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ETH_USDT_4200_5500.NewPool,
    collateralAddress: addresses.V2.UniV3_ETH_USDT_4200_5500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH </a>and 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_CNG_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_CNG_ETH.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_3000_4500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDC_ETH_3000_4500.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_ETH_3000_4500.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_3000_4500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_ETH_3000_4500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DAI_ETH_3000_4500.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH_3000_4500.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH_3000_4500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDT_ETH_3000_4500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDT_ETH_3000_4500.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDT_ETH_3000_4500.NewPool,
    collateralAddress: addresses.V2.UniV3_USDT_ETH_3000_4500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DON_WETH_full_range',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DON_WETH_full_range.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DON_WETH_full_range.NewPool,
    collateralAddress: addresses.V2.UniV3_DON_WETH_full_range.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.DON],
    rewardTokenSymbols: ['iFARM', 'DON'],
    vestingDescriptionOverride: {
      DON: '',
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.DON}" target="_blank" rel="noopener noreferrer"> DON </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'liquity_LQTY',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.liquity_LQTY.NewPool,
    collateralAddress: addresses.V2.liquity_LQTY.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.liquity_LQTY.Underlying}" target="_blank" rel="noopener noreferrer"> Liquity </a>in a Harvest farm, earning 
       <a href="https://etherscan.io/token/${addresses.V2.liquity_LQTY.Underlying}" target="_blank" rel="noopener noreferrer">Liquity</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.liquity_LQTY.Underlying}" target="_blank" rel="noopener noreferrer"> Liquity</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.quickswap_IFARM_QUICK.Underlying, 'quickswap_matic'],
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
       At every harvest, the earned rewards are reinvested into more
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
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.FARMSteadUSDC}" target="_blank" rel="noopener noreferrer"> FARMSteadUSDC </a>in a Harvest farm, earning 
       <a href="https://etherscan.io/token/${addresses.FARMSteadUSDC}" target="_blank" rel="noopener noreferrer">FARMSteadUSDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.FARMSteadUSDC}" target="_blank" rel="noopener noreferrer"> FARMSteadUSDC</a>.
      </p>
    </div>
   `,
    id: 'farmstead-usdc',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.FARMSteadUSDCPool,
    collateralAddress: addresses.FARMSteadUSDC,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.RARI_FARMSTEAD_USDC,
      params: [],
    },
    watchAsset: {
      address: addresses.FARMSteadUSDC,
      symbol: 'FARMSteadUSDC',
      decimals: '8',
    },
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'farm-weth',
    displayName: 'FARM/ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.FARM_WETH_LP, 'uniswap_eth'],
    },
    externalPoolURL: `https://v2.info.uniswap.org/pair/${addresses.FARM_WETH_LP}`,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.FARM_WETHPool,
    collateralAddress: addresses.FARM_WETH_LP,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.pools.FARM_WETHPool}" target="_blank" rel="noopener noreferrer"> Farm LP tokens </a>in a Harvest farm, earning 
       <a href="https://etherscan.io/token/${addresses.FARM}" target="_blank" rel="noopener noreferrer">FARM</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.pools.FARM_WETHPool}" target="_blank" rel="noopener noreferrer"> Farm LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'farm-grain',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.FARM_GRAIN_LP, 'uniswap_eth'],
    },
    externalPoolURL: `https://v2.info.uniswap.org/pair/${addresses.FARM_GRAIN_LP}`,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.GRAINPool,
    collateralAddress: addresses.FARM_GRAIN_LP,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.pools.GRAINPool}" target="_blank" rel="noopener noreferrer"> Farm LP tokens </a>in a Harvest farm, earning 
       <a href="https://etherscan.io/token/${addresses.FARM}" target="_blank" rel="noopener noreferrer">FARM</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.pools.GRAINPool}" target="_blank" rel="noopener noreferrer"> Farm LP tokens</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.THREE_POOL}" target="_blank" rel="noopener noreferrer"> 3CRV</a>.
      </p>
    </div>
   `,
    zapperFiTokens: ['USDC', 'DAI', 'USDT', 'WETH'],
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvHBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvHBTC.NewPool,
    collateralAddress: addresses.V2.crvHBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['hbtc'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.crvHBTC}" target="_blank" rel="noopener noreferrer"> HBTC </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.crvHBTC}" target="_blank" rel="noopener noreferrer"> HBTC</a>.
      </p>
    </div>
   `,
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.crvCOMPOUND}" target="_blank" rel="noopener noreferrer"> CRV:COMPOUND</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvUSDN',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvUSDN.NewPool,
    collateralAddress: addresses.V2.crvUSDN.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['25'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.crvUSDN}" target="_blank" rel="noopener noreferrer"> crvUSDN </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.crvUSDN}" target="_blank" rel="noopener noreferrer"> crvUSDN</a>.
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
    zapperFiTokens: ['DAI', 'USDT'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns  
       <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a> rewards.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC</a> to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.
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
    zapperFiTokens: ['USDC', 'DAI'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns  
       <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a> rewards.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT</a> to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.
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
       At every harvest, the earned rewards are reinvested into more
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
    zapperFiTokens: ['USDC', 'USDT'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns  
        <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
        <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a> rewards.
        At every harvest, the earned rewards are reinvested into more
        <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI</a> to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.CRVRENWBTC}" target="_blank" rel="noopener noreferrer"> RENWBTC</a>.
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
       <a href="https://etherscan.io/token/${addresses.WBTC}" target="_blank" rel="noopener noreferrer"> WBTC </a>in an Idle farm, earning 
       <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.WBTC}" target="_blank" rel="noopener noreferrer"> WBTC</a>.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.RENBTC}" target="_blank" rel="noopener noreferrer"> renBTC</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    uniPool: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.UNI_LP_WETH_DPI, 'uniswap_eth'],
    },
    id: 'uni_WETH_DPI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.UNI_LP_WETH_DPIPool,
    collateralAddress: addresses.VaultUNI_LP_WETH_DPI,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.UNI_LP_WETH_DPI}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.DPI}" target="_blank" rel="noopener noreferrer">DPI</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.UNI_LP_WETH_DPI}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
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
        <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH </a>to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns  
        <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
        <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a> rewards.
        At every harvest, the earned rewards are reinvested into more
        <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH</a> to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.
      </p>
    </div>
  `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UNI_MIC_USDT',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.UNI_MIC_USDT.NewPool,
    collateralAddress: addresses.V2.UNI_MIC_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://sushiswap.fi/pair/${addresses.V2.UNI_MIC_USDT.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.UNI_MIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.MIC}" target="_blank" rel="noopener noreferrer">MIC</a> & 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer">USDT</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.UNI_MIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UNI_MIS_USDT',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.UNI_MIS_USDT.NewPool,
    collateralAddress: addresses.V2.UNI_MIS_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://sushiswap.fi/pair/${addresses.V2.UNI_MIS_USDT.Underlying}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.UNI_MIS_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.MIS}" target="_blank" rel="noopener noreferrer">MIS</a> & 
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer">USDT</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.UNI_MIS_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    fullBuyback: true,
    id: 'sushi_PERP_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_PERP_ETH.Underlying, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_PERP_ETH.NewPool,
    collateralAddress: addresses.V2.sushi_PERP_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/${addresses.PERP}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.sushi_PERP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.PERP}" target="_blank" rel="noopener noreferrer">PERP</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.sushi_PERP_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_SUSHI_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_SUSHI_WETH.Underlying, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.sushi_SUSHI_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_DAI_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_DAI_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_USDC_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDC_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_USDC_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_USDC_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_USDC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_USDT_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDT_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDT_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_WBTC_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_WBTC_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_UST_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_UST_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_UST_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_UST_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.sushi_UST_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://etherscan.io/token/${addresses.UST}" target="_blank" rel="noopener noreferrer">UST</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_UST_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_DAI.Underlying],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_USDC.Underlying],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_USDT.Underlying],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_1INCH_USDC.Underlying],
    },
    id: 'oneInch_1INCH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_1INCH_USDC.NewPool,
    collateralAddress: addresses.V2.oneInch_1INCH_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_1INCH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a 1Inch farm, earning 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer">USDC</a> & 
       <a href="https://etherscan.io/token/${addresses['1INCH']}" target="_blank" rel="noopener noreferrer">1INCH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.oneInch_1INCH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvEURS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvEURS.NewPool,
    collateralAddress: addresses.V2.crvEURS.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['eurs'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvEURS.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.crvEURS.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
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
       At every harvest, the earned rewards are reinvested into more
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
       At every harvest, the earned rewards are reinvested into more
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
    id: 'crvLink',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvLink.NewPool,
    collateralAddress: addresses.V2.crvLink.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['link'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvLink.Underlying}" target="_blank" rel="noopener noreferrer"> CRV:LINK </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.crvLink.Underlying}" target="_blank" rel="noopener noreferrer"> CRV:LINK</a>.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.SUSHI.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_DAI_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDC_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDT_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_USDT_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_WBTC_WETH, 'sushiswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Muse.Underlying, 'uniswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Muse.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Dudes.Underlying, 'uniswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Dudes.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Mask.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Mask',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Mask.NewPool,
    collateralAddress: addresses.V2.nft20_Mask.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Mask.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.MASK20}" target="_blank" rel="noopener noreferrer">MASK20</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Mask.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Rope.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Rope',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Rope.NewPool,
    collateralAddress: addresses.V2.nft20_Rope.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Rope.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.ROPE20}" target="_blank" rel="noopener noreferrer">ROPE20</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Rope.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Mooncat.Underlying, 'uniswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Mooncat.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Meme.Underlying, 'uniswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Meme.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Gpunks.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Gpunks',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Gpunks.NewPool,
    collateralAddress: addresses.V2.nft20_Gpunks.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Gpunks.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Uniswap farm, earning 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a> & 
       <a href="https://etherscan.io/token/${addresses.GPUNKS20}" target="_blank" rel="noopener noreferrer">GPUNKS20</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Gpunks.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    uniPool: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.uni_ETH_MVI.Underlying, 'uniswap_eth'],
    },
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.uni_ETH_MVI.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.klondike_KXUSD_DAI.Underlying],
    },
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'klondike_KXUSD_DAI',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.klondike_KXUSD_DAI.NewPool,
    collateralAddress: addresses.V2.klondike_KXUSD_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.KXUSD}/${addresses.DAI}`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.klondike_KXUSD_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens </a>in a Klondike farm, earning 
       <a href="https://etherscan.io/token/${addresses.KXUSD}" target="_blank" rel="noopener noreferrer">KXUSD</a> & 
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer">DAI</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.klondike_KXUSD_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ZUSD_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3,
      params: [addresses.V2.UniV3_ZUSD_ETH.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ZUSD_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_ZUSD_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.zUSD}" target="_blank" rel="noopener noreferrer"> zUSD </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_zUSD_USDC_full_range',
    tradingApyFunction: {
      type: 'UNIV3_V2',
      params: [addresses.V2.UniV3_zUSD_USDC_full_range.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_zUSD_USDC_full_range.NewPool,
    collateralAddress: addresses.V2.UniV3_zUSD_USDC_full_range.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.zUSD}" target="_blank" rel="noopener noreferrer"> zUSD </a>and 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ETH_sETH2',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_ETH_sETH2.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.sETH2}" target="_blank" rel="noopener noreferrer"> sETH2 </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_ETH',
    type: POOL_TYPES.UNIV3,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_USDC_ETH.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_MANAGED',
    type: POOL_TYPES.UNIV3,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_USDC_ETH_MANAGED.NewVault, 'uniswapv3_eth', strat15PercentFactor],
    },
    contractAddress: addresses.V2.UniV3_USDC_ETH_MANAGED.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_MANAGED.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_UST_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_UST_USDT.NewVault, 'uniswapv3_eth', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_UST_USDT.NewPool,
    collateralAddress: addresses.V2.UniV3_UST_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.LUNA],
    rewardTokenSymbols: ['iFARM', 'LUNA'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.UST}" target="_blank" rel="noopener noreferrer"> UST </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_USDC_USDT.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_WBTC_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_WBTC_ETH.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_ETH_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_ETH_USDT.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_USDC',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_DAI_USDC.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_DAI_ETH.NewVault, 'uniswapv3_eth', strat15PercentFactor],
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
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_UNI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_UNI_ETH.NewVault, 'uniswapv3_eth', strat15PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_UNI_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_UNI_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.UNI}" target="_blank" rel="noopener noreferrer"> UNI </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDT_ETH_1400_2400',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDT_ETH_1400_2400.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDT_ETH_1400_2400.NewPool,
    collateralAddress: addresses.V2.UniV3_USDT_ETH_1400_2400.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDT}" target="_blank" rel="noopener noreferrer"> USDT </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_1400_2400',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDC_ETH_1400_2400.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_ETH_1400_2400.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_1400_2400.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_DAI_ETH_1400_2400',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DAI_ETH_1400_2400.NewVault,
        'uniswapv3_eth',
        strat15PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH_1400_2400.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH_1400_2400.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>and 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> ETH </a>in a UniswapV3 liquidity position, earning swap fees. At every harvest, the earned swap fees are reinvested into the UniswapV3 position.
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.crvThreeCrypto.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crvCVXCRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvCVXCRV.NewPool,
    collateralAddress: addresses.V2.crvCVXCRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['cvxcrv'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crvCVXCRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.crvCVXCRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.bal_BAL_WETH.Underlying, 'balancerv2_eth'],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.bal_BAL_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'bal_DAI_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_DAI_WETH.NewPool,
    collateralAddress: addresses.V2.bal_DAI_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_DAI_WETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.bal_DAI_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer">DAI</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.bal_DAI_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'bal_USDC_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_USDC_WETH.NewPool,
    collateralAddress: addresses.V2.bal_USDC_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_USDC_WETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.bal_USDC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer">USDC</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.bal_USDC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'bal_USDT_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_USDT_WETH.NewPool,
    collateralAddress: addresses.V2.bal_USDT_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_USDT_WETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.bal_USDT_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer">USDC</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.bal_USDT_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'bal_WBTC_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_WBTC_WETH.NewPool,
    collateralAddress: addresses.V2.bal_WBTC_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_WBTC_WETH.PoolId, CHAIN_IDS.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.bal_WBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://etherscan.io/token/${addresses.WBTC}" target="_blank" rel="noopener noreferrer">WBTC</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.bal_WBTC_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_BUSD_USDC',
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_BUSD_USDC.NewPool,
    collateralAddress: addresses.V2.UniV3_BUSD_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_BUSD_USDC.NewVault, 'uniswapv3_eth', strat15PercentFactor],
    },
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_PHTR_ETH.Underlying, 'sushiswap_eth'],
    },
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'sushi_PHTR_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_PHTR_ETH.NewPool,
    collateralAddress: addresses.V2.sushi_PHTR_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM, addresses.PHTR],
    rewardTokenSymbols: ['iFARM', 'PHTR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.sushi_PHTR_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.PHTR}" target="_blank" rel="noopener noreferrer">PHTR</a> & 
       <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer">WETH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.sushi_PHTR_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'UniV3_REI_ETH_full_range',
    tradingApyFunction: {
      type: 'UNIV3_V2',
      params: [addresses.V2.UniV3_REI_ETH_full_range.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_REI_ETH_full_range.NewPool,
    collateralAddress: addresses.V2.UniV3_REI_ETH_full_range.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_JEUR_USDC_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'WMATIC', 'fAURFEB22_USDC', 'fAURAPR22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.AUR_APR22}" target="_blank" rel="noopener noreferrer">AUR_APR22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_JGBP_USDC_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'WMATIC', 'fAURFEB22_USDC', 'fAURAPR22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.AUR_APR22}" target="_blank" rel="noopener noreferrer">AUR_APR22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.Underlying, 'kyber_matic'],
    },
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_JCHF_USDC_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM', 'WMATIC', 'fAURFEB22_USDC', 'fAURAPR22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.AUR_APR22}" target="_blank" rel="noopener noreferrer">AUR_APR22</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'jarvis_AUR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AUR_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AUR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_AUR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens </a>in a Jarvis farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.AUR0112}" target="_blank" rel="noopener noreferrer">AUR0112</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.jarvis_AUR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> KyberDMM LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'bal_POLYBASE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_POLYBASE.Underlying, 'balancerv2_matic'],
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
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_POLYBASE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_STABLE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_STABLE.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_STABLE.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_STABLE.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.balancer_STABLE.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_STABLE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_STABLE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_YEL_ETH.Underlying, 'sushiswap_eth'],
    },
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
       <a href="https://polygonscan.com/token/${addresses.V2.sushi_YEL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.pYEL}" target="_blank" rel="noopener noreferrer">pYEL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.V2.sushi_YEL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
]
