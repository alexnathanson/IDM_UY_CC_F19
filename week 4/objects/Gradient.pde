//class name
class Gradients{
  
  //data
  int gWidth;
  int gHeight;
  int gX;
  int gY;
  color gColor;
  int gStep;
  String colorTemp;
  
  //constructor with arguments
  Gradients(int tempGX, int tempGY, String tempColorTemp){
    gWidth = 200;
    gHeight = 200;
    gX = tempGX;
    gY = tempGY;
    gStep = 2;
    colorTemp = tempColorTemp;
    gColor = getColorTemp(0,0);

  }
  
  //these are methods (basically the same as functions)
  void drawGradient(){
    
    for (int cGX = gX; cGX < gWidth + gX; cGX++){
      for(int cGY = gY; cGY < gHeight + gY; cGY++){
        
        gColor= getColorTemp(cGX, cGY);
        set(cGX,cGY,gColor);
      }
    }
    noFill();
    rect(gX,gY,gWidth, gHeight);

  }
  
  void moveGradient(){
    gX += (gStep - int(random((gStep*2)+1)));
    
    gX = constrain(gX,0,800-gWidth);
    gY += (gStep - int(random((gStep*2)+1)));
    gY = constrain(gY,0,800-gHeight);

  }
  
  color getColorTemp(int cTX, int cTY){
     int gR = 255, gG = 50, gB = 255;
     
    if(colorTemp == "hot"){
      gR = int(map(cTX, gX, gWidth+gX, 0, 255));
      gB = int(map(cTY, gY, gHeight+gY, 0, 50));
      gG = int(map(cTY, gHeight+gY, gY, 0, 100));
    } else if(colorTemp == "cool"){
      gR = int(map(cTX, gX, gWidth+gX, 0, 50));
      gB = int(map(cTY, gY, gHeight+gY, 0, 255));
      gG = int(map(cTX, gHeight+gX, gX, 0, 255));
    }
    
    //gG = int(map(gX*cTY, gX*gY, gWidth*gHeight, 0, 255));
    return color(gR,gG,gB,255);
 
  }
  
  void printGradientData(){
    println("");
    println(gX);
    println(gY);
    println(colorTemp);
  }
}

//getters

//setters
