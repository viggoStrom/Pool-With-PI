/** @type {HTMLCanvasElement} */

class collideTwoBodies {
    constructor(body1, body2, canvas) {
        this.body1 = body1
        this.body2 = body2
        this.canvas = canvas
        this.m1 = body1.mass
        this.m2 = body2.mass
        this.u1 = body1.xVelocity
        this.u2 = body2.xVelocity
    }

    checkCollision = () => {
        if (this.body2 instanceof bound) {
            if (this.body1.xPosition < this.body2.xPosition + this.body2.width) {
                this.body1.xVelocity *= -1
            }
        }
        else if (this.body1 instanceof bound) {
            if (this.body2.xPosition < this.body1.xPosition + this.body1.width) {
                this.body2.xVelocity *= -1
            }
        }
        else {
            if (this.body1.xPosition + this.body1.width > this.body2.xPosition) {
                this.body1.xVelocity = ((this.m1 - this.m2) / (this.m1 + this.m2)) * this.u1 + ((2 * this.m2) / (this.m1 + this.m2)) * this.u2
                this.body2.xVelocity = ((2 * this.m1) / (this.m1 + this.m2)) * this.u1 + ((this.m2 - this.m1) / (this.m1 + this.m2)) * this.u2
                this.canvas.nrOfCollisions++
            }
        }
    }

    update = () => {
        this.checkCollision()
    }
}