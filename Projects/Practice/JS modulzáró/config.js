// 10. feladat

function initialConfig(obj) {
    let { initialSpeed, position } = obj
    if (initialSpeed === null) {
        throw new Error("Az initialSpeed property hibás")
    }
    if (position === null) {
        throw new Error("Az position property hibás")
    }
    else {
        console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)
    }
}
export { initialConfig }