let PHI = 1.61803398875
var n = 0;
var c = 5;
let size = 2;
let angle = 0;
var a, r, x, y;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  fill(220);
  colorMode(HSB);
  // noStroke();
  strokeWeight(0.25);
  background(15);
  angle = 360 / PHI;
}

function draw() {
  if (n < 100) {
    changeColor()
    drawPoint();
    n++;
  }
}

function drawPoint() {
  translate(width / 2, height / 2);
  a = n * angle;
  r = c * sqrt(n);
  x = r * cos(a);
  y = r * sin(a);

  scale(3);
  ellipse(x, y, size);

}

function changeColor() {
  fill(n % 256, 255, 255);
}