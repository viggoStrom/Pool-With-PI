// helps intellisense to autocomplete canvas api calls
/** @type {HTMLCanvasElement} */

// finds canvas element and defines a context in which things are rendered
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);

// set up variables
canvas.hasTheProgramStarted = true
canvas.height = "1000";
canvas.width = "17777";
canvas.frames = 0;
canvas.frameTime = 0;
canvas.perfDiv = document.getElementById("performance");
canvas.color = {
    background: "#252525",
    boundFill: "#cccccc",
    darkGray: "#363636",
    boxFill: "#fce5cd",
    vector: "#720e10"
};

canvas.perfDisplay = () => {
    //param ...catagoriesShown
    //what should be displayed? frames: boolean, fps: boolean, framtime: boolean, time: boolean
    // var settings = {
    //     frames: false,
    //     fps: false,
    //     frametime: false,
    //     time: false
    // }
    // for (let i = 0; i < catagoriesShown.length; i++) {
    //     if (catagoriesShown[i]) {
    //         settings[i] = true
    //     }
    // }
    canvas.perfDiv.children[0].innerText = `frames: ${canvas.frames.toFixed(1)}`;
    canvas.perfDiv.children[1].innerText = `fps: ${(canvas.frames / (performance.now() - canvas.timeAtStart) * 1000).toFixed(2)}`;
    canvas.perfDiv.children[2].innerText = `frametime: ${(performance.now() - canvas.frameTime).toFixed(2)}`;
    canvas.perfDiv.children[3].innerText = `time: ${(performance.now() - canvas.timeAtStart).toFixed(2)} ms`;
    canvas.frameTime = performance.now()
    canvas.frames++;
}

const floor = new bound(0, 850, canvas.width, canvas.height - 850, canvas.color.boundFill, canvas.color.darkGray);
const wall = new bound(0, 0, 800, canvas.height, canvas.color.boundFill, canvas.color.darkGray);
const box1 = new box(1000, 700, 100, canvas.color.boxFill, canvas.color.darkGray, -100, canvas.color.vector)

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clears canvas

    // draw each element
    wall.update();
    floor.update();
    box1.update();

    // debug stuff
    canvas.perfDisplay();
}

const initiate = () => {
    if (canvas.hasTheProgramStarted) {
        canvas.timeAtStart = performance.now();
        setInterval(draw, 20); // 10 ms since it's the lowest value setInterval accepts (fps should be around 100)
        canvas.hasTheProgramStarted = false;
    }
}

initiate();