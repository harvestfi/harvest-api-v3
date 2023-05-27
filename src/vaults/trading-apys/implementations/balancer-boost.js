const BigNumber = require('bignumber.js')
const { getPoolInfo } = require('../../../lib/third-party/balancer')
const { getAaveV2Market } = require('../../../lib/third-party/aave')
const boostInfo = require('./balancer-boost-info.json')
const { executeTradingApyFunction } = require('../index.js')
const { get7MAAPRs } = require('../../../lib/third-party/lido')
const { getYearlyAPR } = require('../../../lib/third-party/rocket-pool')
const { getApy: getIdleApy } = require('../../apys/implementations/idle-finance')

const getBoostAPY = async (poolAddress, networkId) => {
  const poolBoostInfo = boostInfo[poolAddress]
  const poolId = poolBoostInfo.poolId
  const tokens = poolBoostInfo.boostedUnderlyings
  const types = poolBoostInfo.boostTypes

  const poolInfo = await getPoolInfo(poolId, networkId)
  const tokenValues = poolInfo.tokenValues
  const tvl = poolInfo.totalLiquidity

  let apy = new BigNumber(0)
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    const tokenWeight = tokenValues[token]
      ? tokenValues[token].div(tvl)
      : tokenValues[token.toLowerCase()].div(tvl)

    let partApy
    if (types[i] == 'Aave') {
      partApy = await getAaveApy(poolBoostInfo.aaveTags[i])
    } else if (types[i] == 'Idle') {
      partApy = await getIdleApy(poolBoostInfo.symbols[i], poolBoostInfo.idleTokens[i], 1)
    } else if (types[i] == 'balLP') {
      partApy = await getLPApy(token, networkId)
    } else if (types[i] == 'stakedMatic') {
      partApy = await getStakedMaticApy(token)
    } else if (types[i] == 'stakedEth') {
      partApy = await getStakedEthApy(token)
    } else {
      console.error(`Balancer boost type: ${types[i]} not recognized`)
      continue
    }
    apy = apy.plus(tokenWeight.times(partApy))
  }
  return apy.toNumber()
}

const getLPApy = async (token, networkId) => {
  let id
  if (networkId == '1') {
    id = 'balancerv2_eth'
  } else if (networkId == '137') {
    id = 'balancerv2_matic'
  } else if (networkId == '42161') {
    id = 'balancerv2_arbitrum'
  } else {
    console.error(`Network ID: ${networkId} not supported`)
    return 0
  }
  const apy = await executeTradingApyFunction('LP', [token, id])
  return apy
}

const getAaveApy = async tokenId => {
  const aaveData = await getAaveV2Market()
  const aavePool = JSON.parse(JSON.stringify(aaveData.reserves)).filter(({ id }) => id === tokenId)
  return new BigNumber(aavePool[0].liquidityRate).times(100)
}

const getStakedEthApy = async token => {
  if (
    token == '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0' ||
    token == '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD' ||
    token == '0x5979D7b546E38E414F7E9822514be443A4800529'
  ) {
    return await get7MAAPRs('1')
  } else if (
    token == '0xae78736Cd615f374D3085123A210448E74Fc6393' ||
    token == '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8'
  ) {
    return await getYearlyAPR('1')
  } else if (
    token == '0xac3E018457B222d93114458476f3E3416Abbe38F' ||
    token == '0xEe327F889d5947c1dc1934Bb208a1E792F953E96'
  ) {
    //HOTFIX
    return 4.88
  }
}

const getStakedMaticApy = async token => {
  if (token == '0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6') {
    //HOTFIX
    return 4.28
  } else {
    //HOTFIX
    return 4.74
  }
}

module.exports = {
  getBoostAPY,
}
