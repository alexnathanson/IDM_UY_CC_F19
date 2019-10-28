let img,imgCopy;

function preload(){
  img = loadImage("assets/stranger-things-gang.jpg");
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  imgCopy = createImage(img.width,img.height);

  img.loadPixels();
  imgCopy.loadPixels();

  //frameRate(30);
  for(let p =0;p<img.pixels.length;p++){
      imgCopy.pixels[p]=img.pixels[p];
    }

  img.updatePixels();
  imgCopy.updatePixels();
 }

function draw(){

  //mVignette();

  image(imgCopy,0,0);

  //display the frame rate
  textSize(24);
  fill(255,0,0);
  text(frameRate(),20,50);
}

function mousePressed(){
  mVignette();
}

function mVignette(){
  img.loadPixels();
  imgCopy.loadPixels();
    for (var y = 0; y < imgCopy.height; y++) {
        for (var x = 0; x < imgCopy.width; x++) {
          var index = (x + y * img.width)*4;
          var r = img.pixels[index+0];
          var g = img.pixels[index+1];
          var b = img.pixels[index+2];
          var a = img.pixels[index+3];     
          
          //this is the luma formula which is a weighted average
          
          imgCopy.pixels[index+0] =  r* map(abs(dist(mouseX,mouseY,x,y)),0,height,1,0);
          imgCopy.pixels[index+1] = g* map(abs(dist(mouseX,mouseY,x,y)),0,height,1,0);
          imgCopy.pixels[index+2] = b * map(abs(dist(mouseX,mouseY,x,y)),0,height,1,0);
    }
  }
  img.updatePixels();
  imgCopy.updatePixels();
}