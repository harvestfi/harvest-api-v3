const { web3ARBITRUM } = require('../web3')
const { getTokenPrice } = require('../../prices')
const { token: tokenContract } = require('../web3/contracts')
const { CHAIN_IDS } = require('../constants')
const BigNumber = require('bignumber.js')

const vaultFormPairs = {
  '0x24174022D382CD155C33A847404cDA5Bc7978802': '0x98D39dFA5F47D8d8cB26978C676f2366B8ae3745',
  '0x2EC0160246461F0ce477887DdE2C931Ee8233de7': '0x25A22c5DFC1794462086A52B1caCc3d1Bb2BEb9C',
  '0x32DB5Cbac1C278696875eB9F27eD4cD7423dd126': '0x8CcC40030365274f98D19B4c343fCEBD0A2c37bC',
  '0x2b70238022589f17E7b266BC753E74027D57009F': '0x40499f550E2DfC9Cd41ADEf4fd55B952869F0855',
  '0x0D15225454474ab3cb124083278c7bE03f8a99Ff': '0xdbA1ec5C652f76f3EB90d6abA6F3f318671dD121',
  '0xBCC2B58Ab9a4F6bb576F80Def62ea2BC91fC49c2': '0x9D60a5a52402176F7639CfccEc2e24AC786ef7F3',
  '0xc76387330F1614D7e10e045cfcc7C9f7Ff2AdC1F': '0x8e2d9d329Ea3E3CBe67AaC89B1E5E3d60D7244ea',
  '0xEF39eF2069A9A65cD6476b6C9a6FB7dD2910f370': '0x1e36272cDE6fA4F1D4D0fB39aE949CA19851114c',
  '0x710A1AB6Cb8412DE9613ad6c7195453Ce8b5ca71': '0x82f9488f1CA014FC371E22476fE054148F14D760',
  '0x76FE2516D16d93fd20b03873aD0413a7c0AC9773': '0xb68F697eeFA21bB8842C5Baa8D1E7F5EAA89a0Fd',
}
const rewardTokens = ['0x912CE59144191C1204E64559FE8253a0e49E6548']

const superformRewardData = async () => {
  const returnData = {}
  const web3 = web3ARBITRUM
  const currentBlock = await web3.eth.getBlockNumber()
  const blocksPerWeek = 7 * 24 * 3600 * 4
  for (let vaultAddress of Object.keys(vaultFormPairs)) {
    returnData[vaultAddress.toLowerCase()] = {}
    const formAddress = vaultFormPairs[vaultAddress]
    let rewardUsdPerWeek = new BigNumber(0)
    for (let rewardToken of rewardTokens) {
      const rewardTokenInstance = new web3.eth.Contract(tokenContract.contract.abi, rewardToken)
      const tokenTransfers = (
        await rewardTokenInstance.getPastEvents('Transfer', {
          fromBlock: 245193055,
          toBlock: 'latest',
          filter: { to: formAddress, from: '0x35C469919cAf33C24D4Ff2283057E761EaE6095a' },
        })
      ).map(event => ({
        blockNumber: event.blockNumber,
        amount: event.returnValues.value,
      }))
      const lastTransfer = tokenTransfers[tokenTransfers.length - 1]
      if (lastTransfer.blockNumber + blocksPerWeek < currentBlock) {
        continue
      }
      const rewardPrice = new BigNumber(await getTokenPrice(rewardToken, CHAIN_IDS.ARBITRUM_ONE))
      rewardUsdPerWeek = rewardUsdPerWeek.plus(rewardPrice.times(lastTransfer.amount).div(1e18))
    }

    const vaultTokenInstance = new web3.eth.Contract(tokenContract.contract.abi, vaultAddress)
    const vaultDecimals = await tokenContract.methods.getDecimals(vaultTokenInstance)
    const formBalance = new BigNumber(
      await tokenContract.methods.getBalance(formAddress, vaultTokenInstance),
    ).div(10 ** vaultDecimals)
    const vaultPrice = new BigNumber(await getTokenPrice(vaultAddress, CHAIN_IDS.ARBITRUM_ONE))

    const formTvlUsd = formBalance.times(vaultPrice)
    const rewardApr = rewardUsdPerWeek.times(52).div(formTvlUsd).times(100)
    returnData[vaultAddress.toLowerCase()].formAddress = formAddress
    returnData[vaultAddress.toLowerCase()].formTvlUsd = formTvlUsd.toFixed(4)
    returnData[vaultAddress.toLowerCase()].rewardPerWeekUsd = rewardUsdPerWeek.toFixed(4)
    returnData[vaultAddress.toLowerCase()].rewardApr = rewardApr.toFixed(4)
  }
  return returnData
}

module.exports = {
  superformRewardData,
}
