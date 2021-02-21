import { App } from './App'
import { saveActions } from './middlewares/Stocks'

async function main() {
    const app = new App(4000)
    await app.listen()
    saveActions()   
}

main()
