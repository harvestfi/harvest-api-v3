const { checkFoldingLeverage } = require('../../src/script/fold-check')
const initDb = require('../../src/lib/db')
const { cliPreload } = require('../../src/runtime/pollers')

const main = async () => {
  await initDb()
  await cliPreload()
  await checkFoldingLeverage()
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
