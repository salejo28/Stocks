export function validRegister(args) {

    const argsLength = Object.keys(args).length === 0

    if (argsLength) {
        return false
    }

    if (!args.fullname || !args.username || !args.email || !args.password || !args.confirmPassword) {
        return false
    }

    return true

}

export function matchPasswords(args) {
    
    if (args.password !== args.confirmPassword) {
        return false
    }

    return true

}

export function validateEmail(email) {

    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

    if (!validEmail) {
        return false
    }

    return true


}