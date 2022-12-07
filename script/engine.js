/** @type {HTMLCanvasElement} */


class engine {
    constructor(canvas, ...objectsThatWillCollide) {
        this.canvas = canvas
        this.objects = objectsThatWillCollide
    }

    addVelocities = () => {
        this.objects.forEach(element => {
            element.objects.xPosition -= element.objects.xVelocity
        });
    }

    update = () => {
        this.addVelocities
    }
}