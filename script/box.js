/** @type {HTMLCanvasElement} */


class box {
    constructor(name, canvas, xPosition, xVelocity, sideLength, mass) {
        this.name = name
        this.canvas = canvas
        this.xPosition = xPosition
        this.xVelocity = xVelocity
        this.width = sideLength
        this.mass = mass
    }

    draw = () => {
        ctx.fillStyle = this.canvas.color.box
        ctx.beginPath()
        ctx.fillRect(this.xPosition, 800 - this.width, this.width, this.width)
    }

    update = () => {
        this.draw()
    }
}