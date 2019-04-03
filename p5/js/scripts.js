var ellipseDiameter=100;
var ellipseRandom;
var colors;

function setup(){
console.log('--setup--');
 createCanvas(windowWidth, windowHeight);
 colors = ["powderblue","red","black"];
console.log (colors)
}

function draw(){
ellipseRandom = random (1,ellipseDiameter);
console.log(ellipseRandom);


if (mouseIsPressed) {
    noStroke();
    fill(getRandomColor());
  
  } else {
  stroke (0);
   fill(255);
   
 }
ellipse(mouseX,mouseY,ellipseRandom,ellipseRandom);

}
function getRandomColor(){
  console.log (colors.length);
  return colors [int(random(0,colors.length))];
}