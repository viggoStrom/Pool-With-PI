/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")


canvas.height = "1000"
canvas.width = canvas.height * 1.5
canvas.color = {
    bound: "#999696",
    box: "#"
}

const smallBox = new box("Small Box", canvas, 500, -1, 150)
const bigBox = new box()

smallBox.update()