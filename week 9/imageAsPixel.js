let   mediaDirectory = 'assets/';

function preload(){
  img = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //a value of zero sets the ratio to be the same
  img.resize(50,0);

  console.log(img.width);
  console.log(img.height);

  for(let x = 0; x <img.width;x++){
    for(let y = 0; y< img.height;y++){
      img.loadPixels();
      
      image.brightness()
      image(img,x*img.width,y*img.width);
    }
  }
 }


function draw(){  
}
