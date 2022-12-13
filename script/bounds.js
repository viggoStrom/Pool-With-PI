/** @type {HTMLCanvasElement} */


class bound {
    constructor(canvas) {
        this.canvas = canvas

        this.floorHeightDivisor = 5 // it's unclear but this is just the telling it to cover 1/5 of the canvas for the floor
        this.width = this.canvas.width / 15 // it makes the wall one fifteenth of the width of the canvas 

        this.xPosition = 0
    }

    // draws the wall and floor
    draw = () => {

        // fills wall
        ctx.fillStyle = this.canvas.color.wall
        ctx.fillRect(0, 0, this.width, this.canvas.height)
        
        // fills floor
        ctx.fillStyle = this.canvas.color.floor
        ctx.fillRect(0, this.canvas.height - this.canvas.height / this.floorHeightDivisor, this.canvas.width, this.canvas.height / this.floorHeightDivisor)
        
        // strokes floor
        ctx.strokeStyle = this.canvas.color.gray
        ctx.strokeRect(0, this.canvas.height - this.canvas.height / this.floorHeightDivisor, this.canvas.width, this.canvas.height / this.floorHeightDivisor)
    }

    // draws the small marks in the ground. theyre mostly esthetic
    measuringMarks = () => {

        ctx.strokeStyle = this.canvas.color.gray

        // it draws these 15 lines with a spacing of 10px and they are also 20px tall
        for (let index = 10; index < 150; index += 10) {
            ctx.beginPath()
            ctx.moveTo(index * 10, this.canvas.height - this.canvas.height / this.floorHeightDivisor)
            ctx.lineTo(index * 10, this.canvas.height - this.canvas.height / this.floorHeightDivisor + 20)
            ctx.stroke()
        }
    }

    // collects all of the other methods into one so its cleaner to call them all
    update = () => {
        this.draw()
        this.measuringMarks()
    }
}