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
            // Check if the first object is a bound object and the second object is colliding with it
            // In this case, only the x-velocity of the second object needs to be updated

            // Update the x-velocity of the second object using a constant value
            this.body2.xVelocity = -this.body2.xVelocity;

            // Increment the number of collisions that have occurred
            this.canvas.nrOfCollisions++;
        }
        else if (this.body2 instanceof bound && this.body1.xPosition < this.body2.xPosition + this.body2.width) {
            // Check if the second object is a bound object and the first object is colliding with it
            // In this case, only the x-velocity of the first object needs to be updated

            // Update the x-velocity of the first object using a constant value
            this.body1.xVelocity = -this.body1.xVelocity;

            // Increment the number of collisions that have occurred
            this.canvas.nrOfCollisions++;
        }
        else if (this.body1.xPosition + this.body1.width > this.body2.xPosition) {
            // Check if the objects are colliding

            // Calculate the final velocities of the colliding objects using the equations of motion for an elastic collision
            const v1Prime = ((this.m1 - this.m2) / (this.m1 + this.m2)) * this.u1 + ((2 * this.m2) / (this.m1 + this.m2)) * this.u2;
            const v2Prime = ((this.m2 - this.m1) / (this.m1 + this.m2)) * this.u2 + ((2 * this.m1) / (this.m1 + this.m2)) * this.u1;

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

class collide {
    constructor(box1, box2, wall, canvas) {
        this.box1 = box1
        this.box2 = box2
        this.wall = wall
        this.canvas = canvas
        this.m1 = box1.mass
        this.m2 = box2.mass
        // initial velocities
        this.u1 = box1.xVelocity 
        this.u2 = box2.xVelocity
    }

    check = () => {
        if (this.box1.xPosition + this.box1.width > this.box2.xPosition) {
            // Calculate the final velocities of the colliding objects using the equations of motion for an elastic collision
            const v1Prime = (this.m1 - this.m2) / (this.m1 + this.m2) * this.u1 + (2 * this.m2) / (this.m1 + this.m2) * this.u2;
            const v2Prime = (this.m2 - this.m1) / (this.m1 + this.m2) * this.u2 + (2 * this.m1) / (this.m1 + this.m2) * this.u1;

            // Update the x-velocities of the colliding objects using the calculated final velocities
            this.body1.xVelocity = v1Prime;
            this.body2.xVelocity = v2Prime;
            
            this.canvas.nrOfCollisions++
        }
    }

    update = () => {

    }
}