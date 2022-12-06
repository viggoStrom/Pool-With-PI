/** @type {HTMLCanvasElement} */

class collide {
    constructor(box1, box2, wall, canvas) {
        this.box1 = box1
        this.box2 = box2
        this.wall = wall
        this.canvas = canvas
        this.m1 = this.box1.mass
        this.m2 = this.box2.mass
        // initial velocities
        this.u1 = this.box1.xVelocity
        this.u2 = this.box2.xVelocity
    }

    check = () => {
        if (this.box1.xPosition < this.wall.xPosition + this.wall.width) {
            this.box1.xVelocity *= -1
        }
        if (this.box1.xPosition + this.box1.width > this.box2.xPosition) {
            // Calculate the final velocities of the colliding objects using the equations of motion for an elastic collision
            const v1 = (this.u1 * (this.m1 - this.m2) + 2 * this.m2 * this.u2) / (this.m1 + this.m2)
            const v2 = (this.u2 * (this.m2 - this.m1) + 2 * this.m1 * this.u1) / (this.m1 + this.m2)

            // const v1 = (this.m2 * (this.u2 - this.u1) + this.m1 * this.u1 + this.m2 * this.u2) / (this.m1 + this.m2)
            // const v2 = (this.m1 * (this.u1 - this.u2) + this.m1 * this.u1 + this.m2 * this.u2) / (this.m1 + this.m2)

            // const v1 = ((this.m1 - this.m2) / (this.m1 + this.m2)) * this.u1 + ((2 * this.m2) / (this.m1 + this.m2)) * this.u2
            // const v2 = ((this.m2 - this.m1) / (this.m1 + this.m2)) * this.u1 + ((2 * this.m1) / (this.m1 + this.m2)) * this.u2

            // Update the x-velocities of the colliding objects using the calculated final velocities
            this.box1.xVelocity = v1;
            this.box2.xVelocity = v2;

            this.canvas.nrOfCollisions++
        }
    }

    update = () => {
        this.check()
    }
}