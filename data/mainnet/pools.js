const { CHAIN_IDS, TRADING_APY_TYPES, POOL_TYPES } = require('../constants')
const addresses = require('./addresses.json')

const strat15PercentFactor = '0.85'

module.exports = [
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GNOME}" target="_blank" rel="noopener noreferrer">GNOME</a> & 
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GENE}" target="_blank" rel="noopener noreferrer">GENE</a> & 
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
    id: 'balancer_bbaUSD_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>. 
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_bbaUSD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_bbwstETH_bbaUSD_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LDO}" target="_blank" rel="noopener noreferrer">LDO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_bbwstETH_bbaUSD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'balancer_wstETH_aWETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LDO}" target="_blank" rel="noopener noreferrer">LDO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_aWETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
       <a href="https://polygonscan.com/token/${addresses.MATIC.pUSDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_WBTC_ETH_USDC_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_WBTC_ETH_USDC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_WBTC_ETH_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_WBTC_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_WBTC_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_WBTC_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_WBTC_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_WBTC_ETH_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_frxETH_amETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_frxETH_amETH.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_frxETH_amETH.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_frxETH_amETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_frxETH_amETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_frxETH_amETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_frxETH_amETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_frxETH_amETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
    id: 'curve_crvUSD_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_crvUSD_USDT.NewPool,
    collateralAddress: addresses.V2.curve_crvUSD_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-crvusd-1'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_crvUSD_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_crvUSD_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_crvUSD_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-crvusd-1/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
    id: 'balancer_TNGBL_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_TNGBL_USDC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_TNGBL_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_TNGBL_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_TNGBL_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_TNGBL_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_TNGBL_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_TNGBL_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_MaticX_amMatic',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_MaticX_amMatic.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_MaticX_amMatic.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_MaticX_amMatic.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_MaticX_amMatic.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a> in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.SD}" target="_blank" rel="noopener noreferrer">SD</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_MaticX_amMatic.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_MaticX_amMatic.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_MaticX_amMatic.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
       <a href="https://polygonscan.com/token/${addresses.MATIC.pUSDC}" target="_blank" rel="noopener noreferrer">USDC</a>.
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'curve_aCRV_CRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_aCRV_CRV.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_aCRV_CRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_aCRV_CRV.Miner,
        addresses.MATIC.V2.curve_aCRV_CRV.PoolId,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_aCRV_CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a> in a Convex farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_aCRV_CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_aCRV_CRV.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/polygon/pools/factory-crypto-9/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'curve_USDR_3CRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_USDR_3CRV.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_USDR_3CRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_USDR_3CRV.Miner,
        addresses.MATIC.V2.curve_USDR_3CRV.PoolId,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_USDR_3CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a> in a Convex farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_USDR_3CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_USDR_3CRV.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/polygon/pools/factory-v2-339/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_OHM_DAI',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_OHM_DAI.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_OHM_DAI.NewPool,
    collateralAddress: addresses.V2.balancer_OHM_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://etherscan.io/token/${addresses.V2.balancer_OHM_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a> in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_OHM_DAI.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_OHM_DAI.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_OHM_DAI.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
    id: 'lizard_etsGamma_usdPlus',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'convex_FRAX_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.Miner,
        addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-v2-41/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lizard_ARB_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lizard_ARB_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'sushi_MAGIC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SUSHI}" target="_blank" rel="noopener noreferrer">SUSHI</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MAGIC}" target="_blank" rel="noopener noreferrer">MAGIC</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
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
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'sushi_RDPX_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SUSHI}" target="_blank" rel="noopener noreferrer">SUSHI</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.DPX}" target="_blank" rel="noopener noreferrer">DPX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'curve_3CRV_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_3CRV.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_3CRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_3CRV.Miner,
        addresses.MATIC.V2.curve_3CRV.PoolId,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_3CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_3CRV.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.curve_3CRV.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/polygon/pools/aave/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_frxETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_frxETH.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_frxETH.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_frxETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_frxETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_frxETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_frxETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_frxETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_SPHERE_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_SPHERE_MATIC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_SPHERE_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_SPHERE_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_SPHERE_MATIC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_SPHERE_MATIC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_SPHERE_MATIC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_SPHERE_MATIC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_stETH_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_stETH.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_stETH.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_stETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_stETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_stETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_stETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_stETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_wUSDR_USDC_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_wUSDR_USDC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_wUSDR_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_wUSDR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_wUSDR_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_OHM_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_OHM_ETH.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_OHM_ETH.NewPool,
    collateralAddress: addresses.V2.balancer_OHM_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.balancer_OHM_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_OHM_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_OHM_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_OHM_ETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_PENDLE_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_PENDLE_ETH.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_PENDLE_ETH.NewPool,
    collateralAddress: addresses.V2.balancer_PENDLE_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.balancer_PENDLE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_PENDLE_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_PENDLE_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_PENDLE_ETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_rETH_BADGER',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_rETH_BADGER.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.balancer_rETH_BADGER.NewPool,
    collateralAddress: addresses.V2.balancer_rETH_BADGER.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.balancer_rETH_BADGER.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_rETH_BADGER.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_rETH_BADGER.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_rETH_BADGER.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_stETH_rETH_sfrxETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_stETH_rETH_sfrxETH.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.balancer_stETH_rETH_sfrxETH.NewPool,
    collateralAddress: addresses.V2.balancer_stETH_rETH_sfrxETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.balancer_stETH_rETH_sfrxETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_stETH_rETH_sfrxETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_stETH_rETH_sfrxETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_stETH_rETH_sfrxETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'balancer_wUSDR_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_OHM_ETH.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_wUSDR_USDC.NewPool,
    collateralAddress: addresses.V2.balancer_wUSDR_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.balancer_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.balancer_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.balancer_wUSDR_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_wUSDR_USDC.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'curve_lvUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_lvUSD.NewPool,
    collateralAddress: addresses.V2.curve_lvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.curve_lvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://etherscan.io/token/${addresses.ARCH}" target="_blank" rel="noopener noreferrer">ARCH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.curve_lvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.curve_lvUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/ethereum/pools/factory-v2-268/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
       <a href="https://arbiscan.io/token/${addresses.V2.curve_lvUSD.Underlying}" target="_blank" rel="noopener noreferrer"> iPOISON</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'pGOLD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.pGOLD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.pGOLD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fiPoison'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.pGOLD.Underlying}" target="_blank" rel="noopener noreferrer"> pGOLD </a>in a Poison farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.POISON}" target="_blank" rel="noopener noreferrer">POISON</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.pGOLD.Underlying}" target="_blank" rel="noopener noreferrer"> pGOLD</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'pSLVR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.pSLVR.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.pSLVR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fiPoison'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.pSLVR.Underlying}" target="_blank" rel="noopener noreferrer"> pSLVR </a>in a Poison farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.POISON}" target="_blank" rel="noopener noreferrer">POISON</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.pSLVR.Underlying}" target="_blank" rel="noopener noreferrer"> pSLVR</a>.
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
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'poison_pSLVR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pSLVR_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pSLVR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pSLVR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens </a>in a Poison farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.POISON}" target="_blank" rel="noopener noreferrer">POISON</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pSLVR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'poison_pTSLA_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pTSLA_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pTSLA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pTSLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens </a>in a Poison farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.POISON}" target="_blank" rel="noopener noreferrer">POISON</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.poison_pTSLA_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Posion LP tokens</a>.
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
    id: 'lizard_SLIZ_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_SLIZ_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_SLIZ_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_SLIZ_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_SLIZ_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lizard_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_ETH_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lizard_agEUR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_agEUR_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_agEUR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_agEUR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_agEUR_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'lizard_LUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_LUSD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_LUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_LUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens </a>in a SolidLizard farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SLIZ}" target="_blank" rel="noopener noreferrer">SLIZ</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lizard_LUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> SolidLizard LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'convex_USDT_WBTC_WETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.Miner,
        addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/tricrypto/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'convex_USDC_USDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.Miner,
        addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.PoolId,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/2pool/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
    id: 'balancer_wBTC_wETH_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.Underlying,
        'balancerv2_arbitrum',
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
    id: 'Curve_EursUsd_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_EursUsd_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_EursUsd_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_EursUsd_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_EursUsd_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['eursusd'],
    },
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Curve_RenWbtc_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_RenWbtc_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_RenWbtc_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_RenWbtc_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.CRV}" target="_blank" rel="noopener noreferrer">CRV</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Curve_RenWbtc_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['ren'],
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
    id: 'Sushi_ETHGOHM_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.gOHM}" target="_blank" rel="noopener noreferrer">gOHM</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
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
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Sushi_ETHMIM_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.MIM}" target="_blank" rel="noopener noreferrer">MIM</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Sushi_ETHSPELL_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SPELL}" target="_blank" rel="noopener noreferrer">SPELL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ARBITRUM_ONE,
    id: 'Sushi_ETHSUSHI_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.WETH}" target="_blank" rel="noopener noreferrer">ETH</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.SUSHI}" target="_blank" rel="noopener noreferrer">SUSHI</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
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
      <a href="https://quickswap.gamma.xyz/vault-detail/WMATIC-WETH-0-Narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
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
      <a href="https://quickswap.gamma.xyz/vault-detail/WMATIC-WETH-0-Wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
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
      <a href="https://quickswap.gamma.xyz/vault-detail/WMATIC-USDC-0-Narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
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
      <a href="https://quickswap.gamma.xyz/vault-detail/WMATIC-USDC-0-Wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
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
      <a href="https://quickswap.gamma.xyz/vault-detail/USDC-WETH-0-Narrow" target="_blank" rel="noopener noreferrer">Gamma</a>.
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
      <a href="https://quickswap.gamma.xyz/vault-detail/USDC-WETH-0-Wide" target="_blank" rel="noopener noreferrer">Gamma</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_bbamusd',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_bbamusd.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_bbamusd.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_bbamusd.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_bbamusd.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_bbamusd.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_bbamusd.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_bbamusd.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_tetuBal',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_tetuBal.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_tetuBal.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_tetuBal.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_tetuBal.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_tetuBal.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_tetuBal.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_tetuBal.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_2BRLUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_2BRLUSD.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_2BRLUSD.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2BRLUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2BRLUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2BRLUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2BRLUSD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_2BRLUSD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'balancer_2BRL',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2BRL.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_2BRL.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2BRL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2BRL.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2BRL.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_2BRL.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.balancer_2BRL.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
    id: 'convex_DOLA_FRAXBP',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_DOLA_FRAXBP.NewPool,
    collateralAddress: addresses.V2.convex_DOLA_FRAXBP.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-176'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.convex_DOLA_FRAXBP.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.convex_DOLA_FRAXBP.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'convex_USDD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_USDD.NewPool,
    collateralAddress: addresses.V2.convex_USDD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-116'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.convex_USDD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.convex_USDD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
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
    id: 'meshswap_MESH_oMOOI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_MESH_oMOOI.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_MESH_oMOOI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_MESH_oMOOI.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.oMOOI}" target="_blank" rel="noopener noreferrer">oMOOI</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_MESH_oMOOI.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'meshswap_MESH_oZEMIT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_MESH_oZEMIT.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_MESH_oZEMIT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_MESH_oZEMIT.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.oZEMIT}" target="_blank" rel="noopener noreferrer">oZEMIT</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_MESH_oZEMIT.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'meshswap_USDC_oUSDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_USDC_oUSDC.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_USDC_oUSDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_USDC_oUSDC.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.MESH}" target="_blank" rel="noopener noreferrer">MESH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_USDC_oUSDC.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'meshswap_USDT_oUSDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_USDT_oUSDT.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_USDT_oUSDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_USDT_oUSDT.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.MESH}" target="_blank" rel="noopener noreferrer">MESH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_USDT_oUSDT.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'meshswap_WMATIC_MESH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_WMATIC_MESH.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_WMATIC_MESH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_WMATIC_MESH.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.MESH}" target="_blank" rel="noopener noreferrer">MESH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_WMATIC_MESH.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'meshswap_WMATIC_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_WMATIC_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_WMATIC_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_WMATIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens </a>in a Meshswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.MESH}" target="_blank" rel="noopener noreferrer">MESH</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.meshswap_WMATIC_USDT.Underlying}" target="_blank" rel="noopener noreferrer"> Meshswap LP tokens</a>.
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
    id: 'notional_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_USDC.NewPool,
    collateralAddress: addresses.V2.notional_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDC </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDC</a>.
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
    id: 'aura_auraBAL_lp',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_auraBAL_lp.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_auraBAL_lp.NewPool,
    collateralAddress: addresses.V2.aura_auraBAL_lp.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.aura_auraBAL_lp.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.aura_auraBAL_lp.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.aura_auraBAL_lp.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.aura_auraBAL_lp.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aura_bbaUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_bbaUSD.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_bbaUSD.NewPool,
    collateralAddress: addresses.V2.aura_bbaUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.aura_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.aura_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.aura_bbaUSD.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.aura_bbaUSD.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'aura_wstETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_wstETH.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_wstETH.NewPool,
    collateralAddress: addresses.V2.aura_wstETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.aura_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in an Aura farm, earning 
       <a href="https://etherscan.io/token/${addresses.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://etherscan.io/token/${addresses.AURA}" target="_blank" rel="noopener noreferrer">AURA</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.aura_wstETH.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://etherscan.io/token/${addresses.V2.aura_wstETH.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.aura_wstETH.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'bal_MaticX',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.bal_MaticX.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.bal_MaticX.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_MaticX.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_MaticX.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.SD}" target="_blank" rel="noopener noreferrer">SD</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_MaticX.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_MaticX.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.bal_MaticX.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'bal_stMatic',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.bal_stMatic.Underlying,
        'balancerv2_matic',
        true,
        CHAIN_IDS.POLYGON_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.bal_stMatic.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_stMatic.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_stMatic.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens </a>in a Balancer farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BAL}" target="_blank" rel="noopener noreferrer">BAL</a> & 
       <a href="https://polygonscan.com/token/${addresses.MATIC.LDO}" target="_blank" rel="noopener noreferrer">LDO</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_stMatic.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://polygonscan.com/token/${addresses.MATIC.V2.bal_stMatic.Underlying}" target="_blank" rel="noopener noreferrer">Balancer LP tokens</a> by supplying liquidity on 
      <a href="https://app.balancer.fi/#/polygon/pool/${addresses.MATIC.V2.bal_stMatic.PoolId}/add-liquidity" target="_blank" rel="noopener noreferrer">Balancer</a>.
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
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'crv_CRV_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crv_CRV_ETH.NewPool,
    collateralAddress: addresses.V2.crv_CRV_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-3'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.crv_CRV_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Convex farm, earning 
       <a href="https://etherscan.io/token/${addresses.CRV}" target="_blank" rel="noopener noreferrer">CRV</a> & 
       <a href="https://etherscan.io/token/${addresses.CVX}" target="_blank" rel="noopener noreferrer">CVX</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://etherscan.io/token/${addresses.V2.crv_CRV_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
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
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'polygon_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.polygon_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.polygon_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.polygon_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> WETH </a>in an IDLE farm.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.polygon_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> WETH</a>.
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
    type: POOL_TYPES.INCENTIVE_BUYBACK,
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
  {
    chain: CHAIN_IDS.POLYGON_MAINNET,
    id: 'ape_BTC_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_BTC_MATIC.ApePoolId, CHAIN_IDS.POLYGON_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_BTC_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_BTC_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.ape_BTC_MATIC.Underlying}" target="_blank" rel="noopener noreferrer"> Apeswap LP tokens </a>in a Apeswap farm, earning 
       <a href="https://polygonscan.com/token/${addresses.MATIC.BANANA}" target="_blank" rel="noopener noreferrer">pYEL</a>.
       At every harvest, the earned rewards are reinvested into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.ape_BTC_MATIC.Underlying}" target="_blank" rel="noopener noreferrer"> Apeswap LP tokens</a>.
      </p>
    </div>
   `,
  },
]
