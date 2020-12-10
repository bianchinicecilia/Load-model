// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Video: https://youtu.be/FUI7HEEz9B0

let angle = 0;
let kitten;
let train;

function preload() {
  kitten = loadImage('ModelSnowStorm.jpg');
  train = loadModel('SnowStorm_Low.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  //ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle * 0.05);
  rotateY(angle * 0.09);
  rotateZ(angle * 0.07);
  //box(100);
  translate(0, 0, 0);
  texture(kitten);
  model(train);
  angle += 0.03;
}
