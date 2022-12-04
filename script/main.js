// helps intellisense to autocomplete canvas api calls
/** @type {HTMLCanvasElement} */

// finds canvas element and defines a context in which things are rendered
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);

// set up variables
var hasTheProgramStarted = true
canvas.height = "1000";
canvas.width = "10000";
canvas.frames = 0;
canvas.frameTime = 0;
canvas.perfDiv = document.getElementById("performance");

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
    canvas.perfDiv.children[0].innerText = `frames: ${canvas.frames.toFixed(2)}`;
    canvas.perfDiv.children[1].innerText = `fps: ${(canvas.frames/(performance.now() - canvas.timeAtStart)*1000).toFixed(2)}`;
    canvas.perfDiv.children[2].innerText = `frametime: ${(canvas.frameTime).toFixed(2)}`;
    canvas.perfDiv.children[3].innerText = `time: ${(performance.now() - canvas.timeAtStart).toFixed(2)} ms`;
}

const floor = new hardBound(0, 900, canvas.width, canvas.height-900, "rgb(216, 216, 216)");


const draw = () => {
    canvas.frameTime = performance.now(); // frametime tracking
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw each element
    floor.draw();

    
    // debug stuff
    canvas.frames++;
    canvas.frameTime = performance.now() - canvas.frameTime; // frametime tracking
    canvas.perfDisplay();
}

const initiate = () => {
    if(hasTheProgramStarted){
        canvas.timeAtStart = performance.now();
        setInterval(draw, 16.66666666666);
        hasTheProgramStarted = false
    }
}