/** @type {HTMLCanvasElement} */


class engine {
    constructor(canvas, bound, ...objectsThatWillCollide) {
        this.canvas = canvas
        this.bound = bound

        // this class should scale with any number of boxes so this is an array that contains them all 
        this.objects = objectsThatWillCollide
    }

    // adds the xVelocity to the xPosition (/1000 for precision since it might phase through the walls otherwise)
    addVelocities = () => {
        this.objects.forEach(element => {
            element.xPosition -= element.xVelocity / 1000
        });
    }

    // runs through and checks for collisions between all of the boxes and the wall (bound)
    checkCollisions = () => {

        // loops through all of the objects and check if they are colliding with the wall
        this.objects.forEach(element => {

            // did the box collides with the wall?
            if (element.xPosition < this.bound.xPosition + this.bound.width) {
                // the box has collided with the wall

                // inverts the veloxity of the object
                element.xVelocity *= -1

                // increments the counter for how many collisions there have been
                this.canvas.nrOfCollisions++

                // plays a (bad) sound clip after the bounce to add some 'flair'
                this.audio.play()
            }
        });

        // for every i
        for (let i = 0; i < this.objects.length; i++) {

            // for every j
            for (let j = i + 1; j < this.objects.length; j++) {

                // Check if the bounding boxes of objects[i] and objects[j] are overlapping
                if (this.objects[i].xPosition < this.objects[j].xPosition + this.objects[j].width &&
                    this.objects[i].xPosition + this.objects[i].width > this.objects[j].xPosition) {
                    // The objects are colliding

                    // --- ELASTIC COLLISION CALCULATION! --- //
                    // --- ELASTIC COLLISION CALCULATION! --- //
                    // --- ELASTIC COLLISION CALCULATION! --- //
                    // --- ELASTIC COLLISION CALCULATION! --- //
                    // --- ELASTIC COLLISION CALCULATION! --- //
                    // --- YOU SIMPLY CANNOT MISS IT NOW! --- //
                    const v1 = (this.objects[i].xVelocity * (this.objects[i].mass - this.objects[j].mass) + 2 * this.objects[j].mass * this.objects[j].xVelocity) / (this.objects[i].mass + this.objects[j].mass)
                    const v2 = (this.objects[j].xVelocity * (this.objects[j].mass - this.objects[i].mass) + 2 * this.objects[i].mass * this.objects[i].xVelocity) / (this.objects[i].mass + this.objects[j].mass)

                    this.objects[i].xVelocity = v1;
                    this.objects[j].xVelocity = v2;

                    // increments the counter for how many collisions there have been
                    this.canvas.nrOfCollisions++

                    // plays a (bad) sound clip after the bounce to add some 'flair'
                    this.audio.play()
                }
            }
        }
    }

    // this method gets called when starting the simulation
    initiate = () => {

        // for every element it gets the data from the input boxes for that element 
        this.objects.forEach(element => {
            element.getUserInput()
        });

        this.audio = document.getElementById("audio")
    }

    update = () => {
        this.checkCollisions()
        this.addVelocities()
    }
}
