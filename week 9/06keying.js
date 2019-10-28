let   mediaDirectory = 'assets/';
let origImages = [];
let procImage, chromaRange;

function preload(){
  //origImages[0] = loadImage(mediaDirectory + "1970-s-retro-television-set-1411612-1278x965.jpg");
    origImages[0] = loadImage(mediaDirectory + "greenTV.jpg");
  origImages[1] = loadImage(mediaDirectory + "stranger-things-gang.jpg");
}

 function setup(){
  createCanvas(windowWidth,windowHeight);

  origImages[1].resize(800,0);
  chromaRange = 50;
  //this loads the pixels into the pixels attribute
  origImages[0].loadPixels();

  //create a new image for our processed media
  procImage = createImage(origImages[0].width,origImages[0].height);
  procImage.loadPixels();

  //copy pixels - not just referrence the images
  for(let p =0;p<origImages[0].pixels.length;p++){
      procImage.pixels[p]=origImages[0].pixels[p];
    }

    origImages[0].updatePixels();
    procImage.updatePixels();


 }

function draw(){
  
  background(200);
  image(origImages[1],230,230);
  image(procImage,0,0);

}

function mChromaKey(col){
  console.log('keying... ');

  //load pixels
  procImage.loadPixels();
  origImages[0].loadPixels();

  //reset the processed image
  for(let p =0;p<origImages[0].pixels.length;p++){
      procImage.pixels[p]=origImages[0].pixels[p];
    }

  //loop through all pixels
  for (let bX = 0; bX < origImages[0].width; bX++) {
    for (let bY = 0; bY < origImages[0].height; bY++) {
      let index = (bX+ (bY * origImages[0].width)) * 4;

      let r = origImages[0].pixels[index+0];
      let g = origImages[0].pixels[index+1];
      let b = origImages[0].pixels[index+2];
      let a = origImages[0].pixels[index+3];
      
      //this keys based on most prominant color    
      let maxi = max([r,g,b]);

      /*if(maxi == b){
        procImage.pixels[index + 3] = 0;

      }*/

      //if the pixels in the green channel are within the range of the chroma value make transparent
    if(r > col[0]-chromaRange && r < col[0]+chromaRange &&
      g > col[1]-chromaRange && g < col[1]+chromaRange &&
      b > col[2]-chromaRange && b < col[2]+chromaRange){
        procImage.pixels[index + 3] = 0;
      }
    }
  }
  procImage.updatePixels();
  origImages[0].updatePixels();

  console.log('keyed');
}

function mousePressed(){
  mChromaKey(origImages[0].get(mouseX,mouseY));
}