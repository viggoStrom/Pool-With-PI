/** @type {HTMLCanvasElement} */


class engine {
    constructor(canvas, bound, ...objectsThatWillCollide) {
        this.canvas = canvas
        this.bound = bound
        this.objects = objectsThatWillCollide
    }

    addVelocities = () => {
        this.objects.forEach(element => {
            element.xPosition -= element.xVelocity / 1000
        });
    }

    checkCollisions = () => {
        this.objects.forEach(element => {
            if (element.xPosition < this.bound.xPosition + this.bound.width) {
                element.xVelocity *= -1
                this.canvas.nrOfCollisions++
                this.audio.play()
            }
        });

        // Check if any of the objects are colliding
        for (let i = 0; i < this.objects.length; i++) {
            for (let j = i + 1; j < this.objects.length; j++) {
                // Check if the bounding boxes of objects[i] and objects[j] are overlapping
                if (this.objects[i].xPosition < this.objects[j].xPosition + this.objects[j].width &&
                    this.objects[i].xPosition + this.objects[i].width > this.objects[j].xPosition) {
                    // The objects are colliding

                    const v1 = (this.objects[i].xVelocity * (this.objects[i].mass - this.objects[j].mass) + 2 * this.objects[j].mass * this.objects[j].xVelocity) / (this.objects[i].mass + this.objects[j].mass)
                    const v2 = (this.objects[j].xVelocity * (this.objects[j].mass - this.objects[i].mass) + 2 * this.objects[i].mass * this.objects[i].xVelocity) / (this.objects[i].mass + this.objects[j].mass)

                    this.objects[i].xVelocity = v1;
                    this.objects[j].xVelocity = v2;

                    this.canvas.nrOfCollisions++
                    this.audio.play()
                }
            }
        }
    }

    initiate = () => {
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
