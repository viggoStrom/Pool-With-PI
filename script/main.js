/** @type {HTMLCanvasElement} */

// this is boilerplate code that defines "canvas" and makes the canvas render things in 2d  
const canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

// clears the canvas so theres is no wierd remains of stuff that shouldent be there. its probably uneccesary but its a nice comfort
ctx.clearRect(0, 0, canvas.width, canvas.height)


// declaring som variables
canvas.hasTheProgramStarted = false; // control variable that is used in initiate()
canvas.timeFactor = 55

canvas.height = "1000"
canvas.width = canvas.height * 1.5

// debug/stat things
canvas.perfDiv = document.getElementById("performance");
canvas.nrOfCollisions = 0
canvas.frames = 0
canvas.frameTime = 0

canvas.color = {
    wall: "#999696",
    floor: "#a1a1a1",
    box: "#95ff91",
    gray: "#252525"
}


// declaring all of my objects
const wallAndFloor = new bound(canvas)
const smallBox = new box("Small Box", canvas, canvas.width * 10 / 15, 100, 0, 1)
const bigBox = new box("Big Box", canvas, canvas.width * 12 / 15, 200, 100, 1000000)
const physics = new engine(canvas, wallAndFloor, smallBox, bigBox)


// this method displays the diffrent performance and stat
canvas.perfDisplay = () => {
    const frames = canvas.frames.toFixed(1);
    const fps = (canvas.frames / (performance.now() - canvas.timeAtStart) * 1000).toFixed(2);
    const frametime = (performance.now() - canvas.frameTime).toFixed(2);
    const time = (performance.now() - canvas.timeAtStart).toFixed(2);
    const collisions = canvas.nrOfCollisions;

    // changes the values of the text under the canvas to reflect current stats
    canvas.perfDiv.children[0].innerText = ` frames: ${frames} `;
    canvas.perfDiv.children[1].innerText = ` fps: ${fps} `;
    canvas.perfDiv.children[2].innerText = ` frametime: ${frametime} ms `;
    canvas.perfDiv.children[3].innerText = ` time: ${time} ms `;
    canvas.perfDiv.children[4].innerText = ` collisions: ${collisions} `;

    // these are used to calculate frametimes, total frames ellapsed, and fps
    canvas.frameTime = performance.now();
    canvas.frames++;
}

// draws instructions in the middle of the canvas
canvas.instructions = () => {

    ctx.fillStyle = "#363636";
    ctx.fillRect(canvas.width / 20, canvas.height / 2 - 60, canvas.width * 18 / 20, 90);
    ctx.font = "50px roboto mono";
    ctx.fillStyle = "white";
    ctx.fillText("Press 'space' or simply click on the screen", canvas.width / 15, canvas.height / 2);
}


// main frame loop
const frame = () => {

    // clears the canvas every frame so that new content isnt just on top of old stuff
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // calling every update method (i should probably move the box updates to the engine class since it already has an array of them all)
    physics.update()
    wallAndFloor.update()
    smallBox.update()
    bigBox.update()

    // updates the performance/stats values of the <p> in the index file
    canvas.perfDisplay()

    // i use requestAnimationFrame since it optimises stuff in the background otherwise you would use setInterval() but its less efficient and inaccurate
    window.requestAnimationFrame(frame)
}

// after starting i want the controls to appear dim to clearify that theyre not accessible
const dimInputs = () => {

    // dims all text
    document.body.style.color = "gray"

    // dims all of the input fields (they didn't want to inherit the body's style)
    document.querySelectorAll(".inputField").forEach(element => {
        element.style.color = "gray"
    });
}

// starts the game and makes sure it's not already running
const initiate = () => {

    // simple boolean check wether it's running or not
    if (!canvas.hasTheProgramStarted) {

        // inverts the value of the boolean so it wont start again
        canvas.hasTheProgramStarted = true;

        // needed for performance tracking
        canvas.timeAtStart = performance.now()

        // it calls some other funtions that are needed for some other code i.e. the input fields on the left 
        physics.initiate()

        // this timefactor thing is really just how many times its gonna ask the browser to make a frame
        // and this gets that number
        canvas.timeFactor = document.getElementById("timeFactor").value

        // and this uses that number to request that many frames
        for (let index = 0; index < canvas.timeFactor; index++) {
            window.requestAnimationFrame(frame)
        }

        // let's hide dem' inputs yo!
        dimInputs()
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
wallAndFloor.update()
smallBox.update()
bigBox.update()
canvas.instructions()