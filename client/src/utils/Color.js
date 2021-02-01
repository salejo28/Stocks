export function randomColor() {
    const red = Math.random() * 255
    const green = Math.random() * 255
    const blue = Math.random() * 255

    let color = `rgba(${Math.ceil(red)}, ${Math.ceil(green)}, ${Math.ceil(blue)}, .6)`

    return color
}