import { App } from './App'
import { saveActions } from './middlewares/Stocks'

async function main() {
    const app = new App(4000)
    await app.listen()
    saveActions()   

    /* const res = await axios.get('http://localhost:5000')
    const stocks_values: any[] = res.data.stocks
    stocks_values.map(stock => {
        console.log('Name: ',stock.name)
        console.log('Value:', stock.last_value)
        console.log('\n')
    }) */
}

main()
