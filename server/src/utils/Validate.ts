export function checkSignUp(body: any) {

    let errors: any = {}

    if (!body) {
        errors.path = ["username", "password", "email", "confirmPassword"]
        errors.message = 'Complete este campo'
    }

    if (!body.fullname) {
        errors.path = ["fullname"]
        errors.message = 'Complete este campo'
    }

    if (!body.username) {
        errors.path = ["username"]
        errors.message = 'Complete este campo'
    }

    if (!body.email) {
        errors.path = ["email"]
        errors.message = 'Complete este campo'
    } else {
        const validEmail = checkEmail(body.email)
        if (!validEmail) {
            errors.path = ["email"]
            errors.message = 'El email no es valido'
        }
    }

    if (!body.password) {
        errors.path = ["password"]
        errors.message = 'Complete este campo'
    } else {
        if (!body.confirmPassword) {
            errors.path = ["confirmPassword"]
            errors.message = 'Complete este campo'
        } else {
            const checkPasswords = matchPasswords(body.password, body.confirmPassword)
            if (!checkPasswords) {
                errors.path = ["confirmPassword"]
                errors.message = 'Las contraseñas no coinciden'
            }
        }
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}

export function checkSignIn(body: any) {

    let errors: any = {}

    if (!body) {
        errors.path = ["email", "password"]
        errors.message = 'Completa este campo'
    }

    if (!body.email) {
        errors.path = ["email"]
        errors.message = 'Completa este campo'
    } else {
        const validEmail = checkEmail(body.email)

        if (!validEmail) {
            errors.path = ["email"]
            errors.message = 'Email invalido'
        }
    }

    if (!body.password) {
        errors.path = ["password"]
        errors.message = 'Completa este campo'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}

function matchPasswords(password: string, confirmPassword: string) {

    if (password !== confirmPassword) {
        return false
    }

    return true

}

export function checkEmail(email: string) {

    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

    if (!validEmail) return false

    return true

}