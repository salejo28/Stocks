import { UserRoutes } from './users.routes'
import { Trade } from './trade.routes'
import { Stock } from './stock.routes'

const userRoutes: any = new UserRoutes().router
const trade: any = new Trade().router
const stock: any = new Stock().router

export default {
    userRoutes,
    trade,
    stock
}