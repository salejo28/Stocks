import { Request, Response } from 'express'

import { connect } from '../Database'
import { Trade } from '../interfaces/Stocks.interface'

export class TradeController {

    async getTrade(req: Request, res: Response): Promise<Response> {

        const { id } = req.user
        const idTrade = req.params.id

        const conn = await connect()

        const trade: any = await conn.query('SELECT * FROM trade WHERE user_id = ? AND id = ?', [id, idTrade])

        return res.json({
            success: true,
            trade: trade[0][0]
        })

    }

    async getTrades(req: Request, res: Response): Promise<Response> {

        const { id } = req.user
        const conn = await connect()
        const trades = await conn.query('SELECT * FROM trade WHERE user_id = ?', [id]);

        /* console.log(trades[0]) */

        return res.json({
            success: true,
            trades: trades[0]
        })

    }

    async createTrade(req: Request, res: Response): Promise<Response> {

        const { id } = req.user

        const { company, color, date_trade, unit_price, quantity, brokerage } = req.body
        console.log(company)

        const conn = await connect()

        const stock:any = await conn.query('SELECT * FROM stocks WHERE company = ?', [company])

        const newData: Trade = {
            company,
            ticker: stock[0][0].ticker,
            sector: stock[0][0].sector,
            color,
            date_trade,
            sold: false,
            unit_price,
            quantity,
            total: quantity*unit_price,
            brokerage,
            user_id: id
        }

        await conn.query('INSERT INTO trade SET ?', [newData])

        return res.json({
            success: true,
            message: 'Trade Creado'
        })

    }

    async deleteTrade(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

    async updateTrade(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

}