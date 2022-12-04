/** @type {HTMLCanvasElement} */

class box {
    constructor(xPosition, yPosition, sideLength, fillColor, strokeColor, xVelocity, vectorColor) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.sideLength = sideLength;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.xVelocity = xVelocity;
        this.centerX = this.xPosition - this.sideLength/2
        this.centerY = this.yPosition - this.sideLength/2
        this.vectorColor = vectorColor
    }

    rectangle = () => {
        ctx.beginPath();
        ctx.lineWidth = .5
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.fillRect(this.xPosition, this.yPosition, this.sideLength * 10, this.sideLength);
        ctx.strokeRect(this.xPosition, this.yPosition, this.sideLength * 10, this.sideLength);
        ctx.closePath();
    }

    vector = () => {
        ctx.strokeStyle = this.vectorColor
        ctx.lineWidth = 10
        ctx.moveTo(this.centerX,this.centerY)
        ctx.beginPath()
        ctx.lineTo(this.centerX+this.xVelocity*1000,this.centerY)
        ctx.stroke()
        ctx.closePath()
    }    

    update = () => {
        this.rectangle();
        this.vector()
    }
}