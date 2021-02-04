import { Request, Response } from 'express'

import { connect } from '../Database'

export class TradeController {

    async getAction(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

    async getActions(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

    async createAction(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

    async deleteAction(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

    async updateAction(req: Request, res: Response): Promise<Response> {

        return res.json({
            success: true
        })

    }

}