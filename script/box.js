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

    applyVelocity = () => {
        this.xPosition += this.xVelocity
    }

    text = () => {
        ctx.fillStyle = "white"
        ctx.font = "30px roboto mono"
        ctx.fillText(`${this.mass.toFixed(2)} kg`, this.xPosition, this.yPosition - 30, this.width * 10)
        ctx.fillText(`${-this.xVelocity.toFixed(2)} m/s`, this.xPosition, this.yPosition - 70, this.width * 10)
    }

    createHtmlInput = () => {

    }

    update = () => {
        this.applyVelocity()
        this.rectangle();
        this.text()
    }
}