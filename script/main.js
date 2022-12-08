/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

ctx.clearRect(0, 0, canvas.width, canvas.height)

canvas.hasTheProgramStarted = true;
canvas.height = "1000"
canvas.width = canvas.height * 1.5
canvas.nrOfCollisions = 0
canvas.color = {
    wall: "#999696",
    floor: "#a1a1a1",
    box: "#95ff91",
    gray: "#252525"
}

const wallAndFloor = new bound(canvas)
const smallBox = new box("Small Box", canvas, 500, -10, 150, 1)
const bigBox = new box("Big Box", canvas, 1000, 10, 200, 100)
const physics = new engine(canvas, {}, smallBox, bigBox)

const frame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    wallAndFloor.update()
    physics.update()
    smallBox.update()
    bigBox.update()

    // frame()
}

const instructions = () => {
    ctx.fillStyle = "#363636";
    ctx.fillRect(canvas.width / 20, canvas.height / 2 - 60, canvas.width * 18 / 20, 90);
    ctx.font = "50px roboto mono";
    ctx.fillStyle = "white";
    ctx.fillText("Press 'space' or simply click on the screen", canvas.width / 15, canvas.height / 2);
}

// starts the game and makes sure it's not already running
const initiate = () => {
    instructions()
    
    // simple boolean check wether it's already running or not
    if (canvas.hasTheProgramStarted) {
        frame()

        canvas.hasTheProgramStarted = false;
    }
}

document.addEventListener('keydown', function (event) {
    // i choose to ignore this warning
    if (event.keyCode === 32) {
        initiate();
    }
});