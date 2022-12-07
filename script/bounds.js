/** @type {HTMLCanvasElement} */



class bounds {
    constructor(canvas) {
        this.canvas = canvas
    }

    draw = () => {
        ctx.fillStyle = this.canvas.color.bounds
        ctx.beginPath()
        ctx.fillRect()
    }

    update = () => {

    }
}