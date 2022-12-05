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
        if (this.body1 instanceof bound && this.body2.xPosition < this.body1.xPosition + this.body1.width) {
            this.body2.xVelocity *= -1
        }
        else if (this.body1.xPosition + this.body1.width > this.body2.xPosition) {
            // Calculate the final velocities of the colliding objects using the equations of motion for an elastic collision
            const v1Prime = (this.m1 - this.m2) / (this.m1 + this.m2) * this.u1 + (2 * this.m2) / (this.m1 + this.m2) * this.u2;
            const v2Prime = (this.m2 - this.m1) / (this.m1 + this.m2) * this.u2 + (2 * this.m1) / (this.m1 + this.m2) * this.u1;

            // Update the x-velocities of the colliding objects using the calculated final velocities
            this.body1.xVelocity = v1Prime;
            this.body2.xVelocity = v2Prime;

            // Increment the number of collisions that have occurred
            this.canvas.nrOfCollisions++;
        }
    }

    update = () => {
        this.checkCollision()
    }
}