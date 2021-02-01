export function validateLogin(data) {

    let errors = {}

    if (!data) {
        errors.message = 'Completa todos los campos'
        errors.path = ['email', 'password']
    }

    if (!data.email) {
        errors.message = 'Complete este campo'
        errors.path = ['email']
    } else {
        const validEmail = validateEmail(data.email)

        if (!validEmail) {
            errors.message = 'Email invalido'
            errors.path = ['email']
        }
    }

    if (!data.password) {
        errors.message = 'Complete este campo'
        errors.path = ['password']
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}

export function validateEmail(email) {

    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

    if (!validEmail) {
        return false
    }

    return true


}