/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")


canvas.height = "1000"
canvas.width = canvas.height * 1.5
canvas.color = {
    bound: "#999696",
    box: "#95ff91"
}

const smallBox = new box("Small Box", canvas, 500, 1, 150)
const bigBox = new box("Big Box", canvas, 1000, 4, 200)
const engine = new engine(canvas, smallBox, bigBox)

smallBox.update()
bigBox.update()

engine.addVelocity()