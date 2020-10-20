/// <reference path="./p5.global-mode.d.ts" />;

function setup() {
  createCanvas(800, 600);
  background(51);
}

function draw() {
  background(51);
  fill(255);

  circle(mouseX, mouseY, 400);
}
