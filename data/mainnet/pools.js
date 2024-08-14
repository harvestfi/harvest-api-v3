const { CHAIN_IDS, TRADING_APY_TYPES, POOL_TYPES } = require('../constants')
const addresses = require('./addresses.json')

const strat15PercentFactor = '0.85'

module.exports = [
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_nETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.NOTIONAL_API,
      params: [addresses.V2.notional_nETH.Underlying],
    },
    contractAddress: addresses.V2.notional_nETH.NewPool,
    collateralAddress: addresses.V2.notional_nETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://notional.finance/liquidity-variable/mainnet/ETH',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_nETH.Underlying}" target="_blank" rel="noopener noreferrer"> nETH </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_nETH.Underlying}" target="_blank" rel="noopener noreferrer"> nETH</a>.
      </p>
      <p> Get
      <a href="https://etherscan.io/token/${addresses.V2.notional_nETH.Underlying}" target="_blank" rel="noopener noreferrer"> nETH </a>by supplying liquidity on 
      <a href="https://notional.finance/liquidity-variable/mainnet/ETH" target="_blank" rel="noopener noreferrer">NotionalV3</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_nGHO',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.NOTIONAL_API,
      params: [addresses.V2.notional_nGHO.Underlying],
    },
    contractAddress: addresses.V2.notional_nGHO.NewPool,
    collateralAddress: addresses.V2.notional_nGHO.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://notional.finance/liquidity-variable/mainnet/GHO',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_nGHO.Underlying}" target="_blank" rel="noopener noreferrer"> nGHO </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a> & 
       <a href="https://etherscan.io/token/${addresses.GHO}" target="_blank" rel="noopener noreferrer">GHO</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_nGHO.Underlying}" target="_blank" rel="noopener noreferrer"> nGHO</a>.
      </p>
      <p> Get
      <a href="https://etherscan.io/token/${addresses.V2.notional_nGHO.Underlying}" target="_blank" rel="noopener noreferrer"> nGHO </a>by supplying liquidity on 
      <a href="https://notional.finance/liquidity-variable/mainnet/GHO" target="_blank" rel="noopener noreferrer">NotionalV3</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_nUSDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.NOTIONAL_API,
      params: [addresses.V2.notional_nUSDC.Underlying],
    },
    contractAddress: addresses.V2.notional_nUSDC.NewPool,
    collateralAddress: addresses.V2.notional_nUSDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://notional.finance/liquidity-variable/mainnet/USDC',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_nUSDC.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDC </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_nUSDC.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDC</a>.
      </p>
      <p> Get
      <a href="https://etherscan.io/token/${addresses.V2.notional_nUSDC.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDC </a>by supplying liquidity on 
      <a href="https://notional.finance/liquidity-variable/mainnet/USDC" target="_blank" rel="noopener noreferrer">NotionalV3</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ETH_MAINNET,
    id: 'notional_nUSDT',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.NOTIONAL_API,
      params: [addresses.V2.notional_nUSDT.Underlying],
    },
    contractAddress: addresses.V2.notional_nUSDT.NewPool,
    collateralAddress: addresses.V2.notional_nUSDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: 'https://notional.finance/liquidity-variable/mainnet/USDT',
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.V2.notional_nUSDT.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDT </a>in a Notional farm, earning 
       <a href="https://etherscan.io/token/${addresses.NOTE}" target="_blank" rel="noopener noreferrer">NOTE</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_nUSDT.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDT</a>.
      </p>
      <p> Get
      <a href="https://etherscan.io/token/${addresses.V2.notional_nUSDT.Underlying}" target="_blank" rel="noopener noreferrer"> nUSDT </a>by supplying liquidity on 
      <a href="https://notional.finance/liquidity-variable/mainnet/USDT" target="_blank" rel="noopener noreferrer">NotionalV3</a>.
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
    id: 'convex_pETH',
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_APW_ETH.Underlying, 'balancerv2_eth'],
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
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_cbETH_rETH_wstETH.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
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
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_rETH_wETH.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
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
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_rsETH_wETH.Underlying, 'balancerv2_arbitrum'],
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
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wstETH_sfrxETH.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAIN_IDS.ARBITRUM_ONE,
      ],
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
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
    id: 'curve_ETHp_WETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_ETHp_WETH.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_ETHp_WETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_ETHp_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-57/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_ETHp_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RSR}" target="_blank" rel="noopener noreferrer">RSR</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_ETHp_WETH.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_ETHp_WETH.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-57/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_eUSD_USDC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RSR}" target="_blank" rel="noopener noreferrer">RSR</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
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
    id: 'curve_KNOX_eUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CURVE_API,
      params: [addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying, CHAIN_IDS.ARBITRUM_ONE],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://curve.fi/#/arbitrum/pools/factory-stable-ng-63/deposit`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.RSR}" target="_blank" rel="noopener noreferrer">RSR</a> & 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens</a>.
      </p>
      <p> Get the 
      <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_KNOX_eUSD.Underlying}" target="_blank" rel="noopener noreferrer">Curve LP tokens</a> by supplying liquidity on 
      <a href="https://curve.fi/#/arbitrum/pools/factory-stable-ng-63/deposit" target="_blank" rel="noopener noreferrer">Curve</a>.
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.curve_WBTC_tBTC.Underlying}" target="_blank" rel="noopener noreferrer"> Curve LP tokens </a>in a Curve Gauge, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
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
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.RF}" target="_blank" rel="noopener noreferrer">RF</a> and interest.
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
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.RF}" target="_blank" rel="noopener noreferrer">RF</a> and interest.
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
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.RF}" target="_blank" rel="noopener noreferrer">RF</a> and interest.
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
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.RF}" target="_blank" rel="noopener noreferrer">RF</a> and interest.
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
    contractAddress: addresses.ZKSYNC.V2.zkswap_ETH_USDCe.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_ETH_USDCe.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/ETH/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ETH_USDCe.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/add/ETH/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_LONG_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zkswap_LONG_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_LONG_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/0x5165ec33b491d7b67260B3143f96Bb4aC4736398/ETH`,
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
        <a href="https://zkswap.finance/add/0x5165ec33b491d7b67260B3143f96Bb4aC4736398/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_USDCe_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zkswap_USDCe_USDT.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_USDCe_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/0x493257fD37EDB34451f62EDf8D2a0C418852bA4C/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4`,
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
        <a href="https://zkswap.finance/add/0x493257fD37EDB34451f62EDf8D2a0C418852bA4C/0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_WBTC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zkswap_WBTC_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_WBTC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/0xBBeB516fb02a01611cBBE0453Fe3c580D7281011/ETH`,
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
        <a href="https://zkswap.finance/add/0xBBeB516fb02a01611cBBE0453Fe3c580D7281011/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_wstETH_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zkswap_wstETH_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_wstETH_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/0x703b52F2b28fEbcB60E1372858AF5b18849FE867/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_wstETH_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/add/0x703b52F2b28fEbcB60E1372858AF5b18849FE867/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_ZF_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zkswap_ZF_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_ZF_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/0x31C2c031fDc9d33e974f327Ab0d9883Eae06cA4A/ETH`,
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
        <a href="https://zkswap.finance/add/0x31C2c031fDc9d33e974f327Ab0d9883Eae06cA4A/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
      </p>
    </div>
   `,
  },
  {
    chain: CHAIN_IDS.ZKSYNC,
    id: 'zkswap_ZK_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ZKSYNC.V2.zkswap_ZK_ETH.NewPool,
    collateralAddress: addresses.ZKSYNC.V2.zkswap_ZK_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ZKSYNC.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl: `https://zkswap.finance/add/0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E/ETH`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> to a zkSwap farm, earning 
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.ZF}" target="_blank" rel="noopener noreferrer">ZF</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a>.
      </p>
      <p> Get the 
        <a href="https://era.zksync.network/token/${addresses.ZKSYNC.V2.zkswap_ZK_ETH.Underlying}" target="_blank" rel="noopener noreferrer">zkSwap LP tokens</a> by supplying liquidity on 
        <a href="https://zkswap.finance/add/0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E/ETH" target="_blank" rel="noopener noreferrer">zkSwap</a>.
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
    id: 'aerodrome_WELL_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BASE.V2.aerodrome_WELL_ETH.NewPool,
    collateralAddress: addresses.BASE.V2.aerodrome_WELL_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BASE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    liquidityUrl:
      'https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xFF8adeC2221f9f4D8dfbAFa6B9a297d17603493D&stable=false',
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
    id: 'aave_USDC',
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_USDC_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.lodestar_ARB.Underlying}" target="_blank" rel="noopener noreferrer">ARB</a> to Lodestar, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.LODE}" target="_blank" rel="noopener noreferrer">LODE</a> and
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>.
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GMX_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/grail-weth-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_GRAIL_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_WBTC_ETH.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/arb-usdc-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ARB_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-usdt-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDT.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
    liquidityUrl: `https://app.gamma.xyz/vault/camelot/arbitrum/details/weth-usdc-narrow`,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault deposits 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a> in to a Camelot farm, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.ARB}" target="_blank" rel="noopener noreferrer">ARB</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.GRAIL}" target="_blank" rel="noopener noreferrer">GRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.camelotV3_ETH_USDC.Underlying}" target="_blank" rel="noopener noreferrer">Gamma Vault tokens</a>. The earned xGRAIL is deposited in to 
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fxGRAIL'],
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
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault allocates 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a> in to Camelot Dividends, earning 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.V2.xGRAIL.Underlying}" target="_blank" rel="noopener noreferrer">xGRAIL</a>, 
       <a href="https://arbiscan.io/token/${addresses.ARBITRUM_ONE.DMT}" target="_blank" rel="noopener noreferrer">DMT</a> & 
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
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.notional_WBTC.Underlying}" target="_blank" rel="noopener noreferrer"> nWBTC</a>.
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
    zapperFiTokens: ['DAI', 'USDT'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
       <a href="https://etherscan.io/token/${addresses.USDC}" target="_blank" rel="noopener noreferrer"> USDC </a>to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns  
       <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
       <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a> rewards.
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
    zapperFiTokens: ['USDC', 'USDT'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <p> The vault supplies
        <a href="https://etherscan.io/token/${addresses.DAI}" target="_blank" rel="noopener noreferrer"> DAI </a>to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns  
        <a href="https://etherscan.io/token/${addresses.COMP}" target="_blank" rel="noopener noreferrer">COMP</a> & 
        <a href="https://etherscan.io/token/${addresses.IDLE}" target="_blank" rel="noopener noreferrer">IDLE</a> rewards.
        At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
        At every harvest, the earned rewards are converted into more
        <a href="https://etherscan.io/token/${addresses.WETH}" target="_blank" rel="noopener noreferrer"> WETH</a> to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_DAI_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.sushi_WBTC_WETH}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
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
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.nft20_Meme.Underlying}" target="_blank" rel="noopener noreferrer"> Uniswap LP tokens</a>.
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
       At every harvest, the earned rewards are converted into more
       <a href="https://polygonscan.com/token/${addresses.MATIC.V2.balancer_POLYBASE.Underlying}" target="_blank" rel="noopener noreferrer"> Balancer LP tokens</a>.
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
       <a href="https://etherscan.io/token/${addresses.V2.sushi_YEL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens </a>in a Sushi farm, earning 
       <a href="https://etherscan.io/token/${addresses.YEL}" target="_blank" rel="noopener noreferrer">YEL</a>.
       At every harvest, the earned rewards are converted into more
       <a href="https://etherscan.io/token/${addresses.V2.sushi_YEL_ETH.Underlying}" target="_blank" rel="noopener noreferrer"> Sushi LP tokens</a>.
      </p>
    </div>
   `,
  },
]
