int size = 20;
int[] posX = new int[size];
int[] posY = new int[size];
float scaleShape = 15.0;

void setup(){
  size(800,800);
  
}


void draw(){
  background(200);
  
  
  //mouse
  //if(mouseX!=pmouseX && mouseY != pmouseY){
    posX = newMouse(posX, mouseX);
    posY = newMouse(posY, mouseY);
 //}
 
  
  /*
  //automate
  if(frameCount%4==0){
    posX = newMouse(posX, constrain(posX[posX.length-1]+(100-int(random(200))),0,width));
    posY = newMouse(posY, constrain(posY[posY.length-1]+(100-int(random(200))),0,width));
  }
  */
  for(int drawIt = 0; drawIt < posX.length; drawIt++){
    fill(map(drawIt,0,posX.length-1,50, 255));
    ellipse(posX[drawIt],posY[drawIt], (posX.length-drawIt)*scaleShape,(posX.length - drawIt)*scaleShape);
  }
}

int[] newMouse(int[] tempArray, int newData){
  
  for (int nM = 0; nM < tempArray.length-1; nM++){
    tempArray[nM] = tempArray[nM+1];
  }
  tempArray[tempArray.length-1]= newData;
  //println(tempArray);
  return tempArray;
}
