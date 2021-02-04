import { Router } from 'express'

import { TradeController } from '../controllers/trade.controller'
import { auth } from '../middlewares/Auth'

export class Trade {

    router: Router
    controller: TradeController

    constructor() {
        this.router = Router()
        this.controller = new TradeController()

        this.createAction()
        this.getAction()
        this.getActions()
        this.deleteAction()
        this.updateAction()
    }

    createAction() {
        this.router.post('/create', auth, this.controller.createAction)
    }

    getAction() {
        this.router.get('/getstock/:id', auth, this.controller.getAction)
    }

    getActions() {
        this.router.get('/getstocks', auth, this.controller.getActions)
    }

    deleteAction() {
        this.router.delete('/delete/:id', auth, this.controller.deleteAction)
    }

    updateAction() {
        this.router.put('/edit', auth, this.controller.updateAction)
    }

}