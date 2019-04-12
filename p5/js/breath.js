window.alert("Try blowing to the top of the page");
alert ("You got this!");



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


