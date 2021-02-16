import { Router } from 'express'

import { TradeController } from '../controllers/trade.controller'
import { auth } from '../middlewares/Auth'

export class Trade {

    router: Router
    controller: TradeController

    constructor() {
        this.router = Router()
        this.controller = new TradeController()

        this.createTrade()
        this.getTrade()
        this.getTrades()
        this.deleteTrade()
        this.updateTrade()
    }

    createTrade() {
        this.router.post('/create', auth, this.controller.createTrade)
    }

    getTrade() {
        this.router.get('/getstock/:id', auth, this.controller.getTrade)
    }

    getTrades() {
        this.router.get('/getstocks', auth, this.controller.getTrades)
    }

    deleteTrade() {
        this.router.delete('/delete/:id', auth, this.controller.deleteTrade)
    }

    updateTrade() {
        this.router.put('/edit/:id', auth, this.controller.updateTrade)
    }

}