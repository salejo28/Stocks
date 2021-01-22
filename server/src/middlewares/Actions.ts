import fs from 'fs'

import { connect } from '../Database'

export async function saveActions() {

    const data_json = fs.readFileSync("src/data/actions.json", "utf-8")

    const conn = await connect()

    const data = JSON.parse(data_json)

    const actions = data.Actions.Colombia

    for(let i in actions) {
        await conn.query('INSERT INTO actions SET ?', [actions[i]])
    }

}