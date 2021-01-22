import express from 'express'
import morgan from 'morgan'

// Routes
import routes from './routes/index.routes'

export class App {

    app: express.Application

    constructor(private port?: string | number) {
        this.app = express()

        this.Settings()
        this.Middlewares()
        this.Routes()
    }

    Settings() {
        this.app.set('port', process.env.PORT || this.port)
    }

    Middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    Routes() {
        this.app.use('/users', routes.userRoutes)
        this.app.use('/actions', routes.actionsRoutes)
    }

    async listen() {
        const port = this.app.get('port')
        await this.app.listen(port)
        console.log('Server on port', port)
    }

}