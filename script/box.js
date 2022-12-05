/** @type {HTMLCanvasElement} */

class box {
    constructor(xPosition, yPosition, sideLength, xVelocity, mass, fillColor, strokeColor, vectorColor) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.sideLength = sideLength;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.xVelocity = xVelocity;
        this.vectorColor = vectorColor
        this.mass = mass
    }

    rectangle = () => {
        ctx.beginPath();
        ctx.lineWidth = .5
        ctx.fillStyle = this.fillColor;
        // ctx.strokeStyle = this.strokeColor;
        ctx.fillRect(this.xPosition, this.yPosition, this.sideLength, this.sideLength);
        // ctx.strokeRect(this.xPosition, this.yPosition, this.sideLength, this.sideLength);
    }

    vector = () => {
        ctx.strokeStyle = this.vectorColor
        ctx.lineWidth = 30
        ctx.beginPath()
        ctx.moveTo(this.xPosition + this.sideLength / 2, this.yPosition + this.sideLength / 2)
        ctx.lineTo(this.xPosition + this.sideLength + this.xVelocity * 80, this.yPosition + this.sideLength / 2)
        ctx.stroke()
    }

    applyVelocity = () => {
        this.xPosition += this.xVelocity
    }

    text = () => {
        ctx.fillStyle = "white"
        ctx.font = "30px roboto mono"
        ctx.fillText(`${this.mass}kg`, this.xPosition, this.yPosition-30, this.sideLength * 10)
    }

    update = () => {
        this.applyVelocity()
        // this.vector()
        this.rectangle();
        this.text()
    }
}