let img;
let c;
function preload() {
  // preload() runs once
  img = loadImage('assets/flowmeter.jpg');
}

function setup() {
  // setup() waits until preload() is done
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width / 2, img.height / 2);
}

function draw() {
  background(c);
  image(img, 25, 25, 50, 50);
}


let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('img/flowmeter.jpg'); // Load the image


  // Create an Audio input
  mic = new p5.AudioIn();


  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);
  image(img, 0, height / 2, img.width / 2, img.height / 2);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);
  background(255);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);

  fill(color(0, 200, 400));
 
  // create a for loop that iterates over an x value from (0, height) -> (width, height)
  ellipse(width / 2, h - 31, 60, 60);
}


function changeBackground(color) {
   document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('white'); });