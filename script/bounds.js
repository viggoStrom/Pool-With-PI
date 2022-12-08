/** @type {HTMLCanvasElement} */


class bound {
    constructor(canvas) {
        this.canvas = canvas
    }

    draw = () => {
        ctx.fillStyle = this.canvas.color.bound
        ctx.beginPath()
        ctx.fillRect()
    }

    update = () => {
        this.draw()
    }
}