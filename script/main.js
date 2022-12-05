// helps intellisense to autocomplete canvas api calls
/** @type {HTMLCanvasElement} */

// finds canvas element and defines a context in which things are rendered
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);


// set up variables
canvas.hasTheProgramStarted = true
canvas.height = "1000";
canvas.width = "1500";
canvas.frames = 0;
canvas.frameTime = 0;
canvas.perfDiv = document.getElementById("performance");
canvas.nrOfCollisions = -1
canvas.color = {
    background: "#252525",
    boundFill: "#cccccc",
    darkGray: "#363636",
    boxFill: "#fce5cd",
    vector: "#d6060b"
};

// declare all of my objects
const floor = new bound(0, 850, canvas.width, canvas.height - 850, canvas.color.boundFill, canvas.color.darkGray);
const wall = new bound(0, 0, 250, canvas.height, canvas.color.boundFill, canvas.color.darkGray);
const box1 = new box(500, 750, 100, -2, 10, canvas.color.boxFill, canvas.color.vector)
const box2 = new box(1200, 650, 200, -1, 1000, canvas.color.boxFill, canvas.color.vector)
const collisionCheckBox1And2 = new collideTwoBodies(box1, box2, canvas)
const collisionCheckBox1AndWall = new collideTwoBodies(wall, box1, canvas)


canvas.perfDisplay = () => {
    canvas.perfDiv.children[0].innerText = `frames: ${canvas.frames.toFixed(1)}`;
    canvas.perfDiv.children[1].innerText = `fps: ${(canvas.frames / (performance.now() - canvas.timeAtStart) * 1000).toFixed(2)}`;
    canvas.perfDiv.children[2].innerText = `frametime: ${(performance.now() - canvas.frameTime).toFixed(2)}`;
    canvas.perfDiv.children[3].innerText = `time: ${(performance.now() - canvas.timeAtStart).toFixed(2)} ms`;
    canvas.perfDiv.children[4].innerText = `collisions: ${canvas.nrOfCollisions}`;
    canvas.frameTime = performance.now()
    canvas.frames++;
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clears canvas
    
    // draw each element
    wall.update();
    floor.update();
    box1.update();
    box2.update();
    collisionCheckBox1And2.update()
    collisionCheckBox1AndWall.update()

    // debug stuff
    canvas.perfDisplay();
}

draw()

const initiate = () => {
    if (canvas.hasTheProgramStarted) {
        canvas.timeAtStart = performance.now();
        setInterval(draw, 10); // 10 ms since it's the lowest value setInterval accepts (fps should be around 100)
        canvas.hasTheProgramStarted = false;
    }
}

// initiate();
