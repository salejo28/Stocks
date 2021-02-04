import { Request, Response } from 'express'

import { connect } from '../Database'

export class StockController {

    async searchStock(req: Request, res: Response): Promise<Response> {

        const { value } = req.body

        const conn = await connect()

        const query: string = `SELECT * FROM stocks WHERE company LIKE '%${value}%'`

        console.log(query)
        const stock: any = await conn.query(query)
        console.log(stock)

        return res.json({
            success: true
        })

    }

}