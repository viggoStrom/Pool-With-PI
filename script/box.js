/** @type {HTMLCanvasElement} */

class box {
    constructor(xPosition, yPosition, width, xVelocity, mass, fillColor, vectorColor) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.fillColor = fillColor;
        this.xVelocity = xVelocity;
        this.vectorColor = vectorColor
        this.mass = mass
    }

    rectangle = () => {
        ctx.beginPath();
        ctx.lineWidth = .5
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.xPosition, this.yPosition, this.width, this.width);
    }

    vector = () => {
        ctx.strokeStyle = this.vectorColor
        ctx.lineWidth = 30
        ctx.beginPath()
        ctx.moveTo(this.xPosition + this.width / 2, this.yPosition + this.width / 2)
        ctx.lineTo(this.xPosition + this.width + this.xVelocity * 80, this.yPosition + this.width / 2)
        ctx.stroke()
    }

    applyVelocity = () => {
        this.xPosition += this.xVelocity
    }

    text = () => {
        ctx.fillStyle = "white"
        ctx.font = "30px roboto mono"
        ctx.fillText(`${this.mass} kg`, this.xPosition, this.yPosition-30, this.width * 10)
        ctx.fillText(`${this.xVelocity} m/s`, this.xPosition, this.yPosition-70, this.width * 10)
    }

    update = () => {
        this.applyVelocity()
        // this.vector()
        this.rectangle();
        this.text()
    }
}