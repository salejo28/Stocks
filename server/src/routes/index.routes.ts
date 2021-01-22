import { UserRoutes } from './users.routes'
import { Actions } from './actions.routes'

const userRoutes: any = new UserRoutes().router
const actionsRoutes: any = new Actions().router

export default {
    userRoutes,
    actionsRoutes
}