import { Request, Response } from 'express'

import { connect } from '../Database'
import { User } from '../interfaces/User.interface'
import { comparePassword, hashPassword } from '../middlewares/Encrypt'
import { createToken, createTokenSignIn } from '../middlewares/Token'

import { checkSignIn, checkSignUp, checkEmail } from '../utils/Validate'

export class UserController {

    async getUser(req: Request, res: Response): Promise<Response> {

        const conn = await connect()

        const { id } = req.user

        const user: any = await conn.query('SELECT * FROM users WHERE id = ?', [id])

        return res.json({
            success: true,
            user: user[0][0]
        })

    }

    async signUp(req: Request, res: Response): Promise<Response> {

        const conn = await connect()

        const data: User = req.body

        const { errors, valid } = checkSignUp(data)

        if (!valid) {
            return res.json({
                success: false,
                errors
            })
        }

        const newUser: User = {
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            password: data.password
        }

        const existUsername = await conn.query('SELECT * FROM users WHERE username = ?', newUser.username)


        if (Object.keys(existUsername[0]).length > 0) {
            return res.json({
                success: false,
                errors: {
                    path: ["username"],
                    message: "El username ya existe"
                }
            })
        }

        const existEmail = await conn.query('SELECT * FROM users WHERE email = ?', newUser.email)

        if (Object.keys(existEmail[0]).length > 0) {
            return res.json({
                success: false,
                errors: {
                    path: ["email"],
                    message: "El email ya existe"
                }
            })
        }

        newUser.password = await hashPassword(newUser.password)

        newUser.imgURI = `https://ui-avatars.com/api/?name=${newUser.fullname}&background=random&color=random`

        const user = await conn.query('INSERT INTO users SET ?', [newUser])

        const token = createToken(user, newUser.username)

        return res.set("Access-Control-Expose-Headers", "x-token").set("x-token", token).json({
            success: true,
            message: `Welcome ${newUser.username}`,
            token
        })

    }

    async signIn(req: Request, res: Response): Promise<Response> {

        const user = req.body

        const conn = await connect()

        const { errors, valid } = checkSignIn(user)

        if (!valid) {
            return res.json({
                success: false,
                errors
            })
        }

        // Check if exist email
        const existUser: any = await conn.query('SELECT * FROM users WHERE email = ?', [user.email])

        if (Object.keys(existUser[0]).length === 0) {
            return res.json({
                success: false,
                errors: {
                    path: ["email"],
                    message: 'El usuario no existe'
                }
            })
        }

        // Check if password is correct
        const matchPasswords = await comparePassword(user.password, existUser[0][0].password)

        if (!matchPasswords) {
            return res.json({
                success: false,
                errors: {
                    path: ["password"],
                    message: 'Contraseña Incorrecta'
                }
            })
        }

        const token = createTokenSignIn(existUser[0][0])

        return res.json({
            success: true,
            message: 'Welcome',
            token
        })

    }

    async updateUser(req: Request, res: Response): Promise<Response> {

        const { id }: any = req.user

        const conn = await connect()

        const { username, email,fullname, password } = req.body        

        if (username) {
            const existUser = await conn.query('SELECT * FROM users WHERE username = ?', [username])
            if (Object.keys(existUser[0]).length > 0) {
                return res.json({
                    success: false,
                    message: 'El username ya existe'
                })
            }

            await conn.query('UPDATE users SET username = ? WHERE id = ?', [username, id])
        } 

        if (email) {
            const validEmail = checkEmail(email)

            if (!validEmail) {
                return res.json({
                    success: false,
                    message: 'Email no valido'
                })
            }

            const existEmail = await conn.query('SELECT * FROM users WHERE email = ?', [email])
            if (Object.keys(existEmail[0]).length > 0) {
                return res.json({
                    success: false,
                    message: 'El email ya existe'
                })
            }

            await conn.query('UPDATE users SET email = ? WHERE id = ?', [email, id])
        }

        if (fullname) {
            const imgURI = `https://ui-avatars.com/api/?name=${fullname}&background=random&color=random`
            await conn.query('UPDATE users SET fullname = ?, imgURI = ? WHERE id = ?', [fullname, imgURI, id])
        }

        if (password) {
            const passwordHash = await hashPassword(password)
            await conn.query('UPDATE users SET password = ? WHERE id = ?', [passwordHash, id])
        }

        return res.json({
            success: true,
            message: 'Actualizado'
        })

    }

    async deleteUser(req: Request, res: Response): Promise<Response> {

        const { id }: any = req.user

        const conn = await connect()

        await conn.query('DELETE FROM users WHERE id = ?', [id])

        return res.json({
            success: true,
            message: 'Eliminado Correctamente'
        })

    }

}