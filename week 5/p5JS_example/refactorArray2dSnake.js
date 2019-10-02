//a multi dimensional array could also be thought of as nested arrays
// a 2D array like the one below is an array of arrays 

let size;
let pos;
let scaleShape;

function setup(){
  createCanvas(800,800);
 // printArray(pos[0]);//this doesn't work for nested arrays

  size = 20;
  pos = [[0,0]];
  scaleShape = 15.0;
}


function draw(){
  background(200);
  
  
  //mouse
  //if(mouseX!=pmouseX && mouseY != pmouseY){
    pos = newMouse(pos, mouseX, mouseY);
 //}
 
  
  /*
  //automate
  if(frameCount%4==0){
    posX = newMouse(posX, constrain(posX[posX.length-1]+(100-int(random(200))),0,width));
    posY = newMouse(posY, constrain(posY[posY.length-1]+(100-int(random(200))),0,width));
  }
  */
  for(let drawIt = 0; drawIt < pos.length; drawIt++){
    fill(map(drawIt,0,pos.length-1,50, 255));
    ellipse(pos[drawIt][0],pos[drawIt][1], (pos.length-drawIt)*scaleShape,(pos.length - drawIt)*scaleShape);
  }
}

function newMouse(tempArray, newDataX, newDataY){
  
  for (let nM = 0; nM < tempArray.length-1; nM++){
    tempArray[nM][0] = tempArray[nM+1][0];
    tempArray[nM][1] = tempArray[nM+1][1];
  }
  tempArray[tempArray.length-1][0]= newDataX;
  tempArray[tempArray.length-1][1]= newDataY;
  //println(tempArray);
  return tempArray;
}
