import { Router } from 'express'

import { UserController } from '../controllers/user.controller'
import { auth } from '../middlewares/Auth'

export class UserRoutes {

    router: Router
    controller: UserController

    constructor() {
        this.router = Router()
        this.controller = new UserController()

        this.getUser()
        this.SignUp()
        this.SignIn()
        this.update()
        this.delete()
    }

    getUser() {
        this.router.get('/getUser', auth, this.controller.getUser)
    }

    SignUp() {
        this.router.post('/signup', this.controller.signUp)
    }

    SignIn() {
        this.router.post('/signin', this.controller.signIn)
    }

    update() {
        this.router.put('/update', auth, this.controller.updateUser)
    }

    delete() {
        this.router.delete('/delete', auth, this.controller.deleteUser)
    }

}