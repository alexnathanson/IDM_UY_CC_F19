let vid, playing, vidVol;

function setup() {
  createCanvas(windowWidth,600);

  playing = true;
  vidVol = .2;
  // specify multiple formats for different browsers
  vid = createVideo(
    'assets/Telephone_ChristianMarclay_1995.mp4',
    vidLoad
  );
  vid.hide();
  console.log(vid);
  //vid.scale(640,480);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  
  //this might produce a flicker on some browsers...
  //vidBrightness(.5);

  //imageToDots();
  image(vid,0,0);

  canBrightness(.5);
}

function vidLoad() {

  if(playing){
    vid.loop();
    //vid.play();
      vid.volume(vidVol);
  }
}

function imageToDots(){
  vid.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < vid.height; y += stepSize) {
    for (let x = 0; x < vid.width; x += stepSize) {
      const i = y * vid.width + x;
      const darkness = (255 - vid.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}

function vidBrightness(bVal){
  vid.loadPixels();
  for (let y = 0; y < vid.height; y++) {
    for (let x = 0; x < vid.width; x++) {
      const i = 4* ((y * vid.width) + x);
      vid.pixels[i] *= bVal;//255;
      vid.pixels[i+1] *= bVal;
      vid.pixels[i+2] *= bVal;
      //vid.pixels[i+3] = vid.pixels[i] * bVal;

    }
  }
  vid.updatePixels();
}

function canBrightness(bVal){
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {

      if(x<vid.width&&y<vid.height){
        const i = 4* ((y * width) + x);
        pixels[i] *= bVal;//255;
        pixels[i+1] *= bVal;
        pixels[i+2] *= bVal;
        //vid.pixels[i+3] = vid.pixels[i] * bVal;
      }
    }
  }
  updatePixels();
}