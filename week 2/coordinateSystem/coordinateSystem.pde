int winDimX = 16;
int winDimY = 9;

void setup(){
  fullScreen();
}

void draw(){
  background(255);
  
  //vertical lines
  for (int i = 1; i < winDimX; i++){
    //strokeWeight(i);
    line((width/winDimX)*i,0,(width/winDimX)*i, height);
  }
  
  //horizontal lines
  for (int i = 1; i < winDimY; i++){
    //strokeWeight(i);
    line(0,(height/winDimY)*i,width, (height/winDimY)*i);
  }
  
  //tell me what the location is
  if(mousePressed){
    fill(0);
    
    /*
    //change position so the text is legible
    if(mouseX < (width/2) && mouseY < (height/2)){
      textAlign(LEFT, TOP);
    } else if (mouseX > (width/2) && mouseY < (height/2)) {
      textAlign(RIGHT, TOP);
    } else if (mouseX > (width/2) && mouseY > (height/2)) {
      textAlign(RIGHT, BOTTOM);
    }else if (mouseX < (width/2) && mouseY > (height/2)) {
      textAlign(LEFT, BOTTOM);
    }*/
     textAlign(CENTER,BOTTOM);
    //position within our grid
    text(str(int(winDimX*(mouseX/float(width)))) + " " + str(int(winDimY*(mouseY/float(height)))),mouseX, mouseY);
    
    //"real" position
    textAlign(RIGHT,TOP);
    text(str(mouseX) + " " + str(mouseY),mouseX, mouseY);
  }
}
