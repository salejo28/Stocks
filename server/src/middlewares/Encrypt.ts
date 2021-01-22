import bcrypt from 'bcryptjs'

export async function hashPassword(password:string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    return hash
}

export async function comparePassword(password: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, userPassword)
}