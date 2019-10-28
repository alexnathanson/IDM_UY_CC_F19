let img;

function preload(){
  img = loadImage("assets/stranger-things-gang.jpg");
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);

  //frameRate(30);

  //this loads the pixels into the pixels attribute
  img.loadPixels();

    //gray scale image
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var index = (x + y * width)*4;
          var r = img.pixels[index+0];
          var g = img.pixels[index+1];
          var b = img.pixels[index+2];
          var a = img.pixels[index+3];     
          
          //this is the luma formula which is a weighted average
          var luma = r *.299 + g *.587 + b *.0114;
          
          img.pixels[index+0] = luma;
          img.pixels[index+1] = luma;
          img.pixels[index+2] = luma;
    }
  }
  img.updatePixels();

 }

function draw(){

  image(img,0,0);

  //display the frame rate
  textSize(24);
  fill(255,0,0);
  text(frameRate(),20,50);
}
