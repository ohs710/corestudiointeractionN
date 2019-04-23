let y = 100;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(windowWidth, windowHeight); // Size must be the first statement
  background(0);
  strokeWeight(20);
  frameRate(2);
}

function draw() {
  for (let i = 0; i < width; i++) 
  {
    let r = random(100);
    stroke(r); 
    fill ('#0f0');
    line(i, 0, i, height);
  }
};

