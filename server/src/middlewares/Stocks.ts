import fs from 'fs'

import { connect } from '../Database'

export async function saveActions() {

    const data_json = fs.readFileSync("src/data/stocks.json", "utf-8")

    const conn = await connect()

    const data = JSON.parse(data_json)

    const stocks = data.Actions.Colombia


    const stockQuery = await conn.query('SELECT * FROM stocks')

    if (Object.keys(stockQuery[0]).length === 0) {
        for (const i in stocks) {
            await conn.query('INSERT INTO stocks SET ?', [stocks[i]])
        }
    }

}