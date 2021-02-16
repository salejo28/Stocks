import { App } from './App'
import { saveActions } from './middlewares/Stocks'
import { getValueToday } from './middlewares/Scrapig'

async function main() {
    const app = new App(4000)
    await app.listen()
    saveActions()   
    await getValueToday()
}

main()