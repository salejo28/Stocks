import jwt from 'jsonwebtoken'

import config from '../config/config'

export function createToken(user: any, usename: string) {
    
    return jwt.sign({
        id: user[0].insertId,
        username: usename
    }, <string>config.token.secret_key)

}

export function createTokenSignIn(user: any) {
    
    return jwt.sign({
        id: user.id,
        username: user.username
    }, <string>config.token.secret_key)

}