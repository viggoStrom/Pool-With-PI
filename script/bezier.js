/** @type {HTMLCanvasElement} */


class quadBezier {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.interpolatedPointX
        this.interpolatedPointy
    }

    linearInterpolation = () => {
        
    }

    draw = () => {
        ctx.moveTo(this.x1, this.y1)
        ctx.beginPath()
        ctx.lineTo(this.x2, this.y2)
    }

    update = () => {
        this.draw()
    }
}
