import { Router } from 'express'

import { ActionCntroller } from '../controllers/actions.controller'
import { auth } from '../middlewares/Auth'

export class Actions {

    router: Router
    controller: ActionCntroller

    constructor() {
        this.router = Router()
        this.controller = new ActionCntroller()

        this.createAction()
        this.getAction()
        this.getActions()
        this.deleteAction()
        this.updateAction()
    }

    createAction() {
        this.router.post('/createaction', auth, this.controller.createAction)
    }

    getAction() {
        this.router.get('/getaction/:id', auth, this.controller.getAction)
    }

    getActions() {
        this.router.get('/getactions', auth, this.controller.getActions)
    }

    deleteAction() {
        this.router.delete('/deleteaction/:id', auth, this.controller.deleteAction)
    }

    updateAction() {
        this.router.put('/editaction', auth, this.controller.updateAction)
    }

}