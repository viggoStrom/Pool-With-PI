/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

ctx.clearRect(0, 0, canvas.width, canvas.height)

canvas.height = "1000"
canvas.width = canvas.height * 1.5
canvas.nrOfCollisions = 0
canvas.color = {
    bound: "#999696",
    box: "#95ff91"
}

const smallBox = new box("Small Box", canvas, 500, 1, 150, 1)
const bigBox = new box("Big Box", canvas, 1000, 4, 200, 100)
const physics = new engine(canvas, {}, smallBox, bigBox)


for (let index = 0; index < 1000; index++) {
    smallBox.update()
    bigBox.update()

    physics.addVelocities()
}