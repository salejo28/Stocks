import { createPool, Pool } from 'mysql2/promise'

import config from './config/config'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: config.db.host,
        user: config.db.user,
        database: config.db.database
    })
    
    return connection
}