/** @type {HTMLCanvasElement} */

class bound {
    constructor(xPosition, yPosition, sideLength, fillColor, strokeColor, xVelocity) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.sideLength = sideLength;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.xVelocity = xVelocity;
    }

    draw = () => {
        ctx.beginPath();
        ctx.lineWidth = .5
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.fillRect(this.xPosition, this.yPosition, this.sideLength, this.sideLength);
        ctx.strokeRect(this.xPosition, this.yPosition, this.sideLength, this.sideLength);
        ctx.closePath();
    }

    update = () => {
        this.draw();
    }
}