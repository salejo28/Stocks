import { Request, Response } from 'express'

import { connect } from '../Database'

export class StockController {

    async searchStock(req: Request, res: Response): Promise<Response | null> {

        const { value } = req.body

        if (value === '') {
            return null
        }

        const conn = await connect()

        const query: string = `SELECT * FROM stocks WHERE company OR ticker LIKE '%${value}%'`

        const stock: any = await conn.query(query)

        if (Object.keys(stock[0]).length === 0) {
            return res.json({
                success: false,
                message: 'No se encuentra esa accion'
            })
        }

        return res.json({
            success: true,
            stock: stock[0]
        })

    }

}