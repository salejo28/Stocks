// Validate for input to create new trade
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

// random color to charts
export function randomColor() {
    const red = Math.random() * 255
    const green = Math.random() * 255
    const blue = Math.random() * 255

    let color = `rgba(${Math.ceil(red)}, ${Math.ceil(green)}, ${Math.ceil(blue)}, .6)`

    return color
}

// Format date for table
export function formatDate(date) {

    const newDate = new Date(date)

    // DD/MM/YYYY
    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()

    return day + '/' + month + '/' + year

}

// Format price for table
export function formatPrice(number) {    
    const format = new Intl.NumberFormat("es-CO", {
        style: 'currency',
        currency: 'COP'
    }).format(number)

    return format
}