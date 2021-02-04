import { Router } from 'express'

import { StockController } from '../controllers/stock.controller'
import { auth } from '../middlewares/Auth'

export class Stock {

    router: Router
    controller: StockController

    constructor() {
        this.router = Router()
        this.controller = new StockController()

        this.searchStock()
    }

    searchStock() {
        this.router.post('/search', auth, this.controller.searchStock)
    }

}