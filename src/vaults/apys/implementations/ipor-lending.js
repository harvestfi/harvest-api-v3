const BigNumber = require('bignumber.js')
const { getWeb3 } = require('../../../lib/web3')
const {
  plasmaVault: plasmaVaultData,
  rewardsClaimManager: rewardsClaimManagerData,
} = require('../../../lib/web3/contracts')
const { getCachedContract } = require('../../../lib/web3/contractCache')
const logger = require('../../../lib/logger')
const { IPOR_API_URL } = require('../../../lib/constants')
const { client } = require('../../../lib/http')
const { get } = require('lodash')

const SECONDS_PER_YEAR = new BigNumber(365.2425).times(86400)
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// Returns the Token Incentives APY (in %) currently being distributed by the
// IPOR Plasma Vault's `RewardsClaimManager`. Mirrors the front-end formula at
// app.ipor.io: `(lastUpdateBalance / totalAssets) * (SECONDS_PER_YEAR / vestingTime) * 100`.
const getApy = async (plasmaVault, factor = 1, chain) => {
  let baseApy, incentivesApy
  try {
    const chainId = parseInt(chain, 10)
    const url = `${IPOR_API_URL}/fusion/vaults-history/${chainId}/${plasmaVault.toLowerCase()}`

    const response = await client.get(url)
    const history = get(response, 'data.history', [])

    if (!Array.isArray(history) || history.length === 0) {
      return new BigNumber(0).toFixed(2)
    }

    let interestApy = null
    for (let i = history.length - 1; i >= 0; i--) {
      const candidate = history[i] && history[i].apy
      if (candidate !== null && candidate !== undefined && candidate !== '') {
        interestApy = candidate
        break
      }
    }

    baseApy = interestApy ? new BigNumber(interestApy).times(factor) : new BigNumber(0)
  } catch (err) {
    logger.error('IPOR interest APY error:', err)
    baseApy = new BigNumber(0)
  }

  try {
    const web3 = await getWeb3(chain)

    const {
      methods: { getTotalAssets, getRewardsClaimManagerAddress },
      contract: { abi: plasmaVaultAbi },
    } = plasmaVaultData
    const {
      methods: { getVestingData },
      contract: { abi: rewardsClaimManagerAbi },
    } = rewardsClaimManagerData

    const vaultInstance = getCachedContract({
      web3,
      abi: plasmaVaultAbi,
      address: plasmaVault,
    })

    const rcmAddress = await getRewardsClaimManagerAddress(vaultInstance)
    if (!rcmAddress || rcmAddress.toLowerCase() === ZERO_ADDRESS) {
      incentivesApy = new BigNumber(0)
    } else {
      const rcmInstance = getCachedContract({
        web3,
        abi: rewardsClaimManagerAbi,
        address: rcmAddress,
      })

      const [totalAssets, vestingData] = await Promise.all([
        getTotalAssets(vaultInstance),
        getVestingData(rcmInstance),
      ])

      const totalAssetsBn = new BigNumber(totalAssets)
      const vestingTime = new BigNumber(vestingData.vestingTime || vestingData[0] || 0)
      const lastUpdateBalance = new BigNumber(vestingData.lastUpdateBalance || vestingData[3] || 0)

      if (totalAssetsBn.lte(0) || vestingTime.lte(0) || lastUpdateBalance.lte(0)) {
        incentivesApy = new BigNumber(0)
      } else {
        // (lastUpdateBalance / totalAssets) * (SECONDS_PER_YEAR / vestingTime) * 100
        const apy = lastUpdateBalance
          .div(totalAssetsBn)
          .times(SECONDS_PER_YEAR.div(vestingTime))
          .times(100)
          .times(factor)

        incentivesApy = apy.gte(0) ? apy : new BigNumber(0)
      }
    }
  } catch (err) {
    logger.error('IPOR token incentives APY error:', err)
    incentivesApy = new BigNumber(0)
  }

  return baseApy.plus(incentivesApy).toFixed(2)
}

module.exports = {
  getApy,
}
