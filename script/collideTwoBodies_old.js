/** @type {HTMLCanvasElement} */

class collideTwoBodies {
    constructor(wall, box1, box2) {
        this.wall = wall;
        this.box1 = box1;
        this.box2 = box2;
    }

    checkCollision = () => {
        if (this.box1 instanceof bound && this.box2.xPosition < this.box1.xPosition + this.box1.width) {
            // Check if the first object is a bound object and the second object is colliding with it
            // In this case, only the x-velocity of the second object needs to be updated

            // Update the x-velocity of the second object using a constant value
            this.box2.xVelocity = -this.box2.xVelocity;
        }
        else if (this.box2 instanceof bound && this.box1.xPosition < this.box2.xPosition + this.box2.width) {
            // Check if the second object is a bound object and the first object is colliding with it
            // In this case, only the x-velocity of the first object needs to be updated

            // Update the x-velocity of the first object using a constant value
            this.box1.xVelocity = -this.box1.xVelocity;
        }
        else if (this.box1.xPosition + this.box1.width > this.box2.xPosition) {
            // Check if the objects are colliding

            // Calculate the final velocities of the colliding objects using the equations of motion for an elastic collision
            const v1Prime = (this.box1.mass - this.box2.mass) / (this.box1.mass + this.box2.mass) * this.box1.xVelocity + (2 * this.box2.mass) / (this.box1.mass + this.box2.mass) * this.box2.xVelocity;
            const v2Prime = (this.box2.mass - this.box1.mass) / (this.box1.mass + this.box2.mass) * this.box2.xVelocity + (2 * this.box1.mass) / (this.box1.mass + this.box2.mass) * this.box1.xVelocity;

            // Update the x-velocities of the colliding objects using the calculated final velocities
            this.box1.xVelocity = v1Prime
            this.box2.xVelocity = v2Prime;
        }

        update = () => {
            this.checkCollision();
        }
    }
}