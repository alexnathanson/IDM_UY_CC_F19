function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  background((millis()/100)%255);
  fill(255,0,0);
  rect(10,10,200,400);
}