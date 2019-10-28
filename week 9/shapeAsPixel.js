let   mediaDirectory = 'assets/';

function preload(){
  img = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //a value of zero sets the ratio to be the same
  //img.resize(50,0);

  console.log(img.width);
  console.log(img.height);

  img.loadPixels();

  /*for(let x = 0; x <img.width;x++){
    for(let y = 0; y< img.height;y++){

      image.brightness()
      image(img,x*img.width,y*img.width);
    }
  }*/
 }


function draw(){  
  for(let m = 0; m <20; m++){
    makeMark();
  }
}

function makeMark(){
  let shape = int(random(2));

  let xP = int(random(img.width));
  let yP = int(random(img.height));
  let dim = constrain(height/(millis()/1000),0,width);

  fill(img.get(xP,yP));
  noStroke();
  switch (shape){
    case 0:
      ellipse(xP,yP,dim,dim);
      break;
    case 1:
      rectMode(CENTER);
      rect(xP,yP,dim,dim);
      break;

  }
}