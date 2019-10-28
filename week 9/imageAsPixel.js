let   mediaDirectory = 'assets/';
let imgCopy;
let index;
function preload(){
  img = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //resize the image
  //a value of zero sets the ratio to be the same
  img.resize(100,0);

  //create an image for the copies
  imgCopy = createImage(int(width/img.width),int(height/img.height));

  //load the origin pixel's images and
  img.loadPixels();

  //make an array of luma values from the original
  let origLuma = [];
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      index = (x + y * img.width)*4;
      let r = img.pixels[index+0];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let a = img.pixels[index+3];     
      
      //this is the luma formula which is a weighted average
      let luma = r *.299 + g *.587 + b *.0114;
      //console.log(luma);
      origLuma.push(map(luma,0,255,0,1));
    }
  }

  //console.log(origLuma);

  //loop through the destination images and set their brightness to the corresponding luma value
  for(let iY = 0; iY <img.height;iY++){
    for(let iX = 0; iX< img.width;iX++){
      imgCopy.loadPixels();

      for (let bX = 0; bX < imgCopy.width; bX++) {
        for (let bY = 0; bY < imgCopy.height; bY++) {
          index = (bX+ (bY * imgCopy.width)) * 4;
          imgCopy.pixels[index] = img.pixels[index] * origLuma[iX*iY];
          imgCopy.pixels[index + 1] = img.pixels[index + 1] * origLuma[iX*iY];
          imgCopy.pixels[index + 2] = img.pixels[index + 2] * origLuma[iX*iY];
          imgCopy.pixels[index + 3] = 255;
        }
      }

      imgCopy.updatePixels();
      image(imgCopy,iX*imgCopy.width,iY*imgCopy.height);
    }
  }
  img.updatePixels();

 }


function draw(){  
}