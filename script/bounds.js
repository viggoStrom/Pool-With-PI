/** @type {HTMLCanvasElement} */


class bounds {
    constructor() {
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