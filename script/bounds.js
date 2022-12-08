/** @type {HTMLCanvasElement} */


class bound {
    constructor(canvas) {
        this.canvas = canvas
        this.floorHeightDivisor = 5
    }

    draw = () => {
        ctx.fillStyle = this.canvas.color.wall
        ctx.fillRect(0, 0, this.canvas.width / 15, this.canvas.height)
        ctx.fillStyle = this.canvas.color.floor
        ctx.fillRect(0, this.canvas.height - this.canvas.height / this.floorHeightDivisor, this.canvas.width, this.canvas.height / this.floorHeightDivisor)
        ctx.strokeStyle = this.canvas.color.gray
        ctx.strokeRect(0, this.canvas.height - this.canvas.height / this.floorHeightDivisor, this.canvas.width, this.canvas.height / this.floorHeightDivisor)
    }

    measuringMarks = () => {
        ctx.strokeStyle = this.canvas.color.gray
        for (let index = 10; index < 150; index += 10) {
            ctx.beginPath()
            ctx.moveTo(index * 10, this.canvas.height - this.canvas.height / this.floorHeightDivisor)
            ctx.lineTo(index * 10, this.canvas.height - this.canvas.height / this.floorHeightDivisor + 20)
            ctx.stroke()
        }
    }

    update = () => {
        this.draw()
        this.measuringMarks()
    }
}