// helps intellisense to autocomplete canvas api calls
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Set up canvas variables
canvas.hasTheProgramStarted = true;
canvas.height = "1000";
canvas.width = "1500";
canvas.perfDiv = document.getElementById("performance");
canvas.frames = 0;
canvas.frameTime = 0;
canvas.nrOfCollisions = 0;
canvas.color = {
  background: "#252525",
  boundFill: "#cccccc",
  darkGray: "#363636",
  boxFill: "#fce5cd",
  vector: "#d6060b"
};

// Declare all of my objects (with default values that will/can be changed later)
const floor = new bound(0, 850, canvas.width, canvas.height - 850, canvas.color.boundFill, canvas.color.darkGray);
const wall = new bound(0, 0, 250, canvas.height, canvas.color.boundFill, canvas.color.darkGray);
const box1 = new box(600, 750, 100, 0, 1, canvas.color.boxFill, canvas.color.vector);
const box2 = new box(1000, 650, 200, 2, 100, canvas.color.boxFill, canvas.color.vector);
const collider = new collide(box1, box2, wall, canvas);

box1.createInputGroup("Little Box")
box2.createInputGroup("Bigger Box")

// Displays some stats about the simulation
canvas.perfDisplay = () => {
  const frames = canvas.frames.toFixed(1);
  const fps = (canvas.frames / (performance.now() - canvas.timeAtStart) * 1000).toFixed(2);
  const frametime = (performance.now() - canvas.frameTime).toFixed(2);
  const time = (performance.now() - canvas.timeAtStart).toFixed(2);
  const collisions = canvas.nrOfCollisions;

  canvas.perfDiv.children[0].innerText = `frames: ${frames}`;
  canvas.perfDiv.children[1].innerText = `fps: ${fps}`;
  canvas.perfDiv.children[2].innerText = `frametime: ${frametime} ms`;
  canvas.perfDiv.children[3].innerText = `time: ${time} ms`;
  canvas.perfDiv.children[4].innerText = `collisions: ${collisions}`;

  canvas.frameTime = performance.now();
  canvas.frames++;
}

const getUserInput = () => {
  box1.getUserInput()
  box2.getUserInput()
}

const draw = () => {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each element
  wall.update();
  floor.update();
  box1.update();
  box2.update();
  collider.update();

  // Displays some stats about the simulation
  canvas.perfDisplay();
}

// Shows text in the middle of the screen with instructions
const instructions = () => {
  ctx.fillStyle = "#363636";
  ctx.fillRect(canvas.width / 20, canvas.height / 2 - 60, canvas.width * 18 / 20, 90);
  ctx.font = "50px roboto mono";
  ctx.fillStyle = "white";
  ctx.fillText("Press 'space' or simply click on the screen", canvas.width / 15, canvas.height / 2);
}

// Starts the game, but with a check for if it's already on
const initiate = () => {
  if (canvas.hasTheProgramStarted) {
    canvas.timeAtStart = performance.now();

    getUserInput()

    setInterval(draw, 10); // 10 ms since it's the lowest value setInterval accepts (fps should be around 100)

    canvas.hasTheProgramStarted = false;
  }
}

// Start the game when the space key is pressed or when the screen is clicked
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32) {
    initiate();
  }
});

draw();
instructions();