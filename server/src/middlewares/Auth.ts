import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import config from '../config/config'

declare global  {
    namespace Express {
        interface Request {
            user: any
        }
    }
}

export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-token']

    if (!token) {
        return res.json({
            success: false,
            message: "Acceso Denegado"
        })
    }

    try {
        const verify = jwt.verify(<string>token, <string>config.token.secret_key)

        if (!verify) {
            return res.json({
                success: false,
                message: 'Token Invalido'
            })
        }

        req.user = verify
        next()
    } catch (error) {
        console.log(error)
    }

}