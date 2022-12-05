/** @type {HTMLCanvasElement} */

class collideTwoBodies {
    constructor(body1, body2) {
        this.m1 = body1.mass
        this.m2 = body2.mass
        this.u1 = body1.xVelocity
        this.u2 = body2.xVelocity
    }

    checkCollision = () => {
        if (this.body1.xPosition + this.body1.width > this.body2.xPosition) {
            body1.xVelocity = ((this.m1 - this.m2) / (this.m1 + this.m2)) * this.u1 + ((2 * this.m2) / (this.m1 + this.m2)) * this.u2
            body2.xVelocity = ((2 * this.m1) / (this.m1 + this.m2)) * this.u1 + ((this.m2 - this.m1) / (this.m1 + this.m2)) * this.u2
        }
    }

    update = () => {
        this.checkCollision()
    }
}