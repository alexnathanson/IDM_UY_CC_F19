let   mediaDirectory = 'assets/';
let bckgrnd;

function preload(){
  img = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
  bckgrnd = color(0);
 }


function draw(){
  background(bckgrnd);
  
 
  image(img,0,0,img.width,img.height);
}

function mousePressed(){
  //get the pixel data for the selected pixel
  let pixelData = img.get(mouseX,mouseY);
  //console.log(pixelData);
  bckgrnd = color(pixelData);
}