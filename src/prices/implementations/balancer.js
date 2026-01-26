const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { getWeb3 } = require('../../lib/web3')
const { getPoolInfo } = require('../../lib/third-party/balancer')
const {
  balLpToken,
  balBoostLpToken,
  token: tokenContractData,
} = require('../../lib/web3/contracts')
const { getCachedContract } = require('../../lib/web3/contractCache')

const getPrice = async (contractAddress, poolId, networkId) => {
  const {
    methods: { getActualSupply },
    contract: { abi: lpTokenAbi },
  } = balLpToken
  const {
    methods: { getVirtualSupply },
    contract: { abi: lpBoostTokenAbi },
  } = balBoostLpToken
  const {
    methods: { getTotalSupply },
    contract: { abi: tokenAbi },
  } = tokenContractData

  const provider = getWeb3(networkId)

  const poolInfo = await getPoolInfo(poolId, networkId)

  let lpTokenInstance, totalSupply
  try {
    lpTokenInstance = getCachedContract({
      web3: provider,
      abi: lpTokenAbi,
      address: contractAddress,
    })
    totalSupply = new BigNumber(await getActualSupply(lpTokenInstance)).dividedBy(
      new BigNumber(1e18),
    )
  } catch (error) {
    try {
      lpTokenInstance = getCachedContract({
        web3: provider,
        abi: lpBoostTokenAbi,
        address: contractAddress,
      })
      totalSupply = new BigNumber(await getVirtualSupply(lpTokenInstance)).dividedBy(
        new BigNumber(1e18),
      )
    } catch (error) {
      lpTokenInstance = getCachedContract({
        web3: provider,
        abi: tokenAbi,
        address: contractAddress,
      })
      totalSupply = new BigNumber(await getTotalSupply(lpTokenInstance)).dividedBy(
        new BigNumber(1e18),
      )
    }
  }

  if (!get(poolInfo, 'dynamicData.totalLiquidity')) {
    console.error('Something went wrong with balancer api. totalLiquidity field is not avaiilable')
    return '0'
  } else {
    return new BigNumber(poolInfo.dynamicData.totalLiquidity).dividedBy(totalSupply).toString()
  }
}

module.exports = {
  getPrice,
}
