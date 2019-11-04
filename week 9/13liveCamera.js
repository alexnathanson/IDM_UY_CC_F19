let capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  console.log(capture);
  capture.elt.controls = true;

}

function draw() {
  background(255);
  //image(capture, 0, 0, 320, 240);
  //filter(INVERT);

  imageToDots();
}

function imageToDots(){
  fill(0);
  capture.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < capture.height; y += stepSize) {
    for (let x = 0; x < capture.width; x += stepSize) {
      const i = y * capture.width + x;
      const darkness = (255 - capture.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}