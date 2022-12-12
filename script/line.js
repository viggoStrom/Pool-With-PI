/** @type {HTMLCanvasElement} */


class line {
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

    draw = (firstDot, lastDot) => {
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"

        if (firstDot) {
            ctx.moveTo(this.x1, this.y1)
            ctx.beginPath()
            ctx.arc(this.x1,this.y1,8,0,2*Math.PI)
            ctx.stroke()
        }
        
        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.stroke()

        if (lastDot) {
            ctx.moveTo(this.x2, this.y2)
            ctx.beginPath()
            ctx.arc(this.x2,this.y2,8,0,2*Math.PI)
            ctx.stroke()
        }
    }
    
    update = () => {
        this.draw()
    }
}
