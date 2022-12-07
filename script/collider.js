/** @type {HTMLCanvasElement} */

class collide {
    constructor(box1, box2, wall, canvas) {
        this.box1 = box1
        this.box2 = box2
        this.wall = wall
        this.canvas = canvas
        this.m1 = this.box1.mass
        this.m2 = this.box2.mass
    }

    check = () => {
        // Check for collisions between the first box and the wall
        if (this.box1.xPosition < this.wall.xPosition + this.wall.width && this.box1.xPosition < this.wall.xPosition + this.wall.width) {
            if (this.box1.xVelocity < 0) {
                this.box1.xVelocity *= -1
                this.canvas.nrOfCollisions++
            }
        }

        // Check for collisions between the second box and the wall (should not trigger but its a failsafe so things dont phase through matter)
        if (this.box2.xPosition < this.wall.xPosition + this.wall.width) {
            this.box2.xVelocity *= -1

            this.canvas.nrOfCollisions++
        }

        // checks for collision between the first and second box
        if (this.box1.xPosition + this.box1.width > this.box2.xPosition) {
            // Calculate the final velocities of the colliding objects using the equations of motion for an elastic collision
            const v1 = (this.box1.xVelocity * (this.m1 - this.m2) + 2 * this.m2 * this.box2.xVelocity) / (this.m1 + this.m2)
            const v2 = (this.box2.xVelocity * (this.m2 - this.m1) + 2 * this.m1 * this.box1.xVelocity) / (this.m1 + this.m2)

            // Update the x-velocities of the colliding objects using the calculated final velocities
            this.box1.xVelocity = v1;
            this.box1.velocityInput.value = v1.toFixed(2);
            this.box2.xVelocity = v2;
            this.box2.velocityInput.value = v2.toFixed(2);

            this.canvas.nrOfCollisions++
        }
    }

    // the reason why i even have an update method is for consistency's sake with the other classes 
    // when I draw a frame i call the update() method for every class instead of e.g.:
    // 
    // wall.draw();
    // floor.draw();
    // box1.draw();
    // box1.update();
    // box2.draw();
    // box2.update();
    // collider.check();
    // 
    // i think it's cleaner to have an update that consolidates every method

    update = () => {
        this.check()
    }
}