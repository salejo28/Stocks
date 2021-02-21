import { Request, Response } from 'express'
import axios from 'axios'

import { connect } from '../Database'
import { Trade } from '../interfaces/Stocks.interface'
import config from '../config/config'

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

    async getLastValues(req: Request, res: Response): Promise<Response> {

        const { id } = req.user

        const conn = await connect()
        const trades: any[] = await conn.query('SELECT * FROM trade WHERE user_id = ?', [id])
        const scraping = await axios.get(<string>config.uri_scraping)

        const stocks_values: any[] = scraping.data.stocks

        let response: any[] = []

        stocks_values.map((stock_value) => {
            trades[0].map((trade: any) => {
                if (trade.company === stock_value.stock) {
                    response.push({
                        'stock': stock_value.stock,
                        'last_price': stock_value.last_price.replace(/,/g, '')
                    })            
                }
            })
        })

        response.map(async stock => {
            await conn.query('UPDATE trade SET actual_value = ? WHERE user_id = ? AND company = ?', [stock.last_price, id, stock.stock])
        })

        return res.json({
            success: true,
            message: "El precio actual ha sido actualizado"
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

        const conn = await connect()

        const stock: any = await conn.query('SELECT * FROM stocks WHERE company = ?', [company])

        const scraping = await axios.get(<string>config.uri_scraping)
        const stocks_values: any[] = scraping.data.stocks

        let actual_value

        stocks_values.map(stock_value => {
            if (stock_value.stock === company) {
                actual_value = stock_value.last_price.replace(/,/g, '')
            }
        })

        const newData: Trade = {
            company,
            ticker: stock[0][0].ticker,
            sector: stock[0][0].sector,
            color,
            date_trade,
            sold: false,
            unit_price,
            quantity,
            total: quantity * unit_price,
            brokerage,
            actual_value,
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