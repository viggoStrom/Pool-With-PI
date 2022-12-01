console.clear();
var bool = true

// helps intellisense to autocomplete canvas api calls
/** @type {HTMLCanvasElement} */

// finds canvas element and defines a context in which things can be rendered
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);

// set up variables
canvas.height = "1000";
canvas.width = "1000";
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

const mainWall = new wall(200, 700, 600, 100, "#aaaaaa");


const draw = () => {
    canvas.frameTime = performance.now(); // frametime tracking
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw each element
    mainWall.draw();

    
    // debug stuff
    canvas.frames++;
    canvas.frameTime = performance.now() - canvas.frameTime; // frametime tracking
    canvas.perfDisplay();
}

const initiate = () => {
    if(bool){
        canvas.timeAtStart = performance.now();
        setInterval(draw, 16.66666666666);
        bool = false
    }
}