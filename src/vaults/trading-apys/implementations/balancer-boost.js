const BigNumber = require('bignumber.js')
const { getPoolInfo } = require('../../../lib/third-party/balancer')
const { getAaveV2Market } = require('../../../lib/third-party/aave')
const boostInfo = require('./balancer-boost-info.json')
const { executeTradingApyFunction } = require('../index.js')
const { getDefiLlamaData } = require('../../../lib/third-party/defillama')
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
      let boost
      if (Object.keys(boostInfo).includes(token)) {
        boost = true
      } else {
        boost = false
      }
      partApy = await getLPApy(token, networkId, boost)
    } else if (types[i] == 'stakedToken') {
      const stakeDataRaw = await getDefiLlamaData()
      const stakeData = stakeDataRaw.data
      partApy = await getStakingApy(token, stakeData)
    } else {
      console.error(`Balancer boost type: ${types[i]} not recognized`)
      continue
    }
    apy = apy.plus(tokenWeight.times(partApy))
  }
  return apy.toNumber()
}

const getLPApy = async (token, networkId, boost) => {
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
  let apy
  if (boost) {
    apy = await executeTradingApyFunction('LP', [token, id, true, networkId])
  } else {
    apy = await executeTradingApyFunction('LP', [token, id])
  }
  return apy
}

const getAaveApy = async tokenId => {
  const aaveData = await getAaveV2Market()
  const aavePool = JSON.parse(JSON.stringify(aaveData.reserves)).filter(({ id }) => id === tokenId)
  return new BigNumber(aavePool[0].liquidityRate).times(100)
}

const getStakingApy = async (token, stakeData) => {
  if (
    //stETH
    token == '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0' ||
    token == '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD' ||
    token == '0x5979D7b546E38E414F7E9822514be443A4800529'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '747c1d2a-c668-4682-b9f9-296708a3dd90')
    return poolDetail.apy
  } else if (
    //rETH
    token == '0xae78736Cd615f374D3085123A210448E74Fc6393' ||
    token == '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == 'd4b3c522-6127-4b89-bedf-83641cdcd2eb')
    return poolDetail.apy
  } else if (
    //sfrxETH
    token == '0xac3E018457B222d93114458476f3E3416Abbe38F' ||
    token == '0xEe327F889d5947c1dc1934Bb208a1E792F953E96' ||
    token == '0x95aB45875cFFdba1E5f451B950bC2E42c0053f39'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '77020688-e1f9-443c-9388-e51ace15cc32')
    return poolDetail.apy
  } else if (
    //cbETH
    token == '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704' ||
    token == '0x1DEBd73E752bEaF79865Fd6446b0c970EaE7732f'
  ) {
    const poolDetail = stakeData.find(obj => obj.pool == '0f45d730-b279-4629-8e11-ccb5cc3038b4')
    return poolDetail.apy
  } else if (token == '0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6') {
    //MATICX
    const poolDetail = stakeData.find(obj => obj.pool == '5b1fe146-7cbd-448d-bf53-8df9c3501016')
    return poolDetail.apy
  } else if (token == '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4') {
    //stMATIC
    const poolDetail = stakeData.find(obj => obj.pool == 'bf3a7f07-80a0-4d5b-a311-b0f06f650f83')
    return poolDetail.apy
  } else if (token == '0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2') {
    //sUSDe
    const poolDetail = stakeData.find(obj => obj.pool == '66985a81-9c51-46ca-9977-42b4fe7bc6df')
    return poolDetail.apy
  } else if (token == '0xe3b3FE7bcA19cA77Ad877A5Bebab186bEcfAD906') {
    //sFRAX
    const poolDetail = stakeData.find(obj => obj.pool == '55de30c3-bf9f-4d4e-9e0b-536a8ef5ab35')
    return poolDetail.apy
  }
}

module.exports = {
  getBoostAPY,
}
