let   mediaDirectory = 'assets/';

function preload(){
  img1 = loadImage(mediaDirectory + "1970-s-retro-television-set-1411612-1278x965.jpg");
  img2 = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
 }


function draw(){
  /*you can also load an image as a background image
  by passing the variable as an argument to background()
  but it must be the same size as the canvas*/
  background(0,255,0);
  
  push();
  //when tint is in the draw loop it tints everything if you dont include the push & pop
 // tint(0, 153, 204); // Tint blue
  image(img1, 0, 0, img1.width, img1.height);
  pop();

  /*push();
  //matrix transformations can be applied to images
  translate(img1.width/2,img1.height/2);
  //rotate(mouseX%TWO_PI);
  noTint();
  tint(255,126);//tint can also be used to set transparency
  imageMode(CENTER);//sets the position mode
  image(img2,0,0,img2.width,img2.height);
  pop();
*/
  //applies an image filter to the entire canvas
  //THRESHOLD, GRAY,OPAQUE,INVERT,BLUR,ERODE,DILATE
  filter(BLUR,map(mouseY,0,width,0,20));
}