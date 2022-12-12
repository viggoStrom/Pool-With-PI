/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

ctx.clearRect(0, 0, canvas.width, canvas.height)


// declaring som variables
canvas.hasTheProgramStarted = true;

canvas.height = "1000"
canvas.width = canvas.height * 1.5

canvas.perfDiv = document.getElementById("performance");
canvas.frames = 0
canvas.frameTime = 0
canvas.timeFactor = 55

canvas.color = {
    wall: "#999696",
    floor: "#a1a1a1",
    box: "#95ff91",
    gray: "#252525"
}


// declaring all of my objects


canvas.perfDisplay = () => {
    const frames = canvas.frames.toFixed(1);
    const fps = (canvas.frames / (performance.now() - canvas.timeAtStart) * 1000).toFixed(2);
    const frametime = (performance.now() - canvas.frameTime).toFixed(2);
    const time = (performance.now() - canvas.timeAtStart).toFixed(2);

    // changes the values of the text under the canvas to reflect current stats
    canvas.perfDiv.children[0].innerText = ` frames: ${frames} `;
    canvas.perfDiv.children[1].innerText = ` fps: ${fps} `;
    canvas.perfDiv.children[2].innerText = ` frametime: ${frametime} ms `;
    canvas.perfDiv.children[3].innerText = ` time: ${time} ms `;

    // these are used to calculate frametimes, total frames ellapsed, and fps
    canvas.frameTime = performance.now();
    canvas.frames++;
}

// main frame loop
const frame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    canvas.perfDisplay()

    window.requestAnimationFrame(frame)
}

// starts the game and makes sure it's not already running
const initiate = () => {
    // simple boolean check wether it's already running or not
    if (canvas.hasTheProgramStarted) {

        canvas.hasTheProgramStarted = false;

        // needed for performance tracking
        canvas.timeAtStart = performance.now()

        physics.initiate()

        canvas.timeFactor = document.getElementById("timeFactor").value
        
        for (let index = 0; index < canvas.timeFactor; index++) {
            window.requestAnimationFrame(frame)
        }
    }
}

// if space is pressed, initiate is called
document.addEventListener('keydown', function (event) {
    // i choose to ignore this warning
    if (event.keyCode === 32) {
        initiate();
    }
});

// render some elements before starting so the user gets feedback that its actually working
ctx.clearRect(0, 0, canvas.width, canvas.height)