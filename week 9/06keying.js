let   mediaDirectory = 'assets/';
let origImages = [];
let procImage;

function preload(){
  origImages[0] = loadImage(mediaDirectory + "stranger-things-gang.jpg");
  origImages[1] = loadImage(mediaDirectory + "1970-s-retro-television-set-1411612-1278x965.jpg");
}

 function setup(){
  createCanvas(windowWidth,windowHeight);

  //this loads the pixels into the pixels attribute
  origImages[0].loadPixels();

  //create a new image for our processed media
  procImage = createImage(origImages[0].width,origImages[0].height);
  procImage.loadPixels();

  //console.log(origImages[0].pixels);
  //copy pixels - not just referrence the images
  for(let p =0;p<origImages[0].pixels.length;p++){
      procImage.pixels[p]=origImages[0].pixels[p];
    }

    origImages[0].updatePixels();
    procImage.updatePixels();

  image(procImage,0,0);
  //mBrightness(.9);

 }

function draw(){
  
  //background(0,100,45);
  

}

function keyPressed(){
  //console.log(map(mouseY,0,height,1.0,0.0));
  if(key=='b'){
      mBrightness(map(mouseY,0,height,1.0,0.0));
  } else if (key =='c'){
      mCompressRange(50,150);

  }
}

function mBrightness(brightVal){
  console.log('updating brightness... ' + brightVal);
  procImage.loadPixels();
  origImages[0].loadPixels();
  for (let bX = 0; bX < origImages[0].width; bX++) {
    for (let bY = 0; bY < origImages[0].height; bY++) {
      let index = (bX+ (bY * origImages[0].width)) * 4;
      procImage.pixels[index] = int(brightVal * origImages[0].get(bX,bY)[0]);
      procImage.pixels[index + 1] = int(brightVal * origImages[0].get(bX,bY)[1]);
      procImage.pixels[index + 2] = int(brightVal * origImages[0].get(bX,bY)[2]);
      procImage.pixels[index + 3] = 255;
    }
  }
  procImage.updatePixels();
  origImages[0].updatePixels();
  image(procImage,0,0);
  console.log('updated brightness');
}

function mCompressRange(compMin,compMax){
   console.log('updating dynamic range... ' + compMin + ' to ' + compMax);
  procImage.loadPixels();
  origImages[0].loadPixels();
  for (let bX = 0; bX < origImages[0].width; bX++) {
    for (let bY = 0; bY < origImages[0].height; bY++) {
      let index = (bX+ (bY * origImages[0].width)) * 4;

      procImage.pixels[index] = map(origImages[0].get(bX,bY)[0],0,255,compMin,compMax);
      procImage.pixels[index + 1] = map(origImages[0].get(bX,bY)[1],0,255,compMin,compMax);
      procImage.pixels[index + 2] = map(origImages[0].get(bX,bY)[2],0,255,compMin,compMax);
      procImage.pixels[index + 3] = 255;
    }
  }
  procImage.updatePixels();
  origImages[0].updatePixels();
  image(procImage,0,0);
  console.log('updated threshhold');
}