export function onlyNumber(e) {
    
    var key = e.keyCode || e.which

    var keyboard = String.fromCharCode(key)

    var number = '0123456789'

    var special = "8-37-38-46"

    var keyboard_special = false

    for (let i in special) {
        if (key === special[i]) {
            keyboard_special = true
        }
    }
    
    if (number.indexOf(keyboard) === -1 && !keyboard_special) {
        e.preventDefault()
        return false
    }

    return true

}