float gTheta = 0;
int amtElements  =6;
int[] moonCount = {0,1,2,27,14,0};
float[] planetDistances = {0.2,1.0,2.0,3.52,5.2,7.3};
float[] planetSizes= {4879,12104,12756,3475,6792,14536};

SolarSystemElement theSun = new SolarSystemElement(0,0,200);

SolarSystemElement[] systemElements = new SolarSystemElement[amtElements];//we can now fill this array with any child class

int bckgrnd = 0;

void setup(){
  fullScreen();
  //size(1000,1000);
  background(bckgrnd);
  
  theSun.setColor(color(255,255,0));

  for (int s = 0; s < systemElements.length; s++){
    systemElements[s] = new SolarSystemElement(0,0,int(random(10,100)));
    systemElements[s].setColor(color(int(random(255)),int(random(255)),int(random(255))));
    systemElements[s].setTranslate(int(random(50,600)),int(random(50,600)));
  }
}

void draw(){
  background(bckgrnd);
  
  gTheta+=0.005;
  
  theSun.setTranslate(width/2,height/2);
  theSun.setTheta(gTheta);
  
  theSun.display();//sun
  
  for(int ds=0;ds<systemElements.length;ds++){
    push();
    systemElements[ds].setTheta(gTheta);
    systemElements[ds].display();
    pop();
  }
        
}

class SolarSystemElement{
  int elDim, elPosX,elPosY, elTranslateX, elTranslateY;
  color elFill;
  float elTheta;
  
  SolarSystemElement(int tempElPosX, int tempElPosY, int tempElDim){
    elDim = tempElDim;
    elPosX =tempElPosX;
    elPosY = tempElPosY;
    elTranslateX = 0;
    elTranslateY = 0;
    elFill = color(255);
    elTheta = 0.0;
  }
  
  void display(){
    translate(elTranslateX, elTranslateY);
    rotate(elTheta);
    fill(elFill);
    ellipse(elPosX,elPosY,elDim,elDim);
  }
  
  void setTranslate(int tempElTranslateX, int tempElTranslateY){
    elTranslateX = tempElTranslateX;
    elTranslateY = tempElTranslateY;
  }
  
  void setColor(color tempElColor){
    elFill = tempElColor;
  }
  
  void setTheta(float tempElTheta){
    elTheta= tempElTheta;
  }
  
  
}

class Planet extends SolarSystemElement{
  
  Planet(int tempElPosX, int tempElPosY, int tempElDim){
    super(tempElPosX, tempElPosY, tempElDim);
  }
}

class Astroid extends SolarSystemElement{
  int maxSize;
  
  Astroid(int tempElPosX, int tempElPosY, int tempElDim){
    super(tempElPosX, tempElPosY, tempElDim);
    
    //constrain the astroid size
    //constrainAstroid(tempElDim);

  }
  
  int constrainAstroid(int tempElDim){
    tempElDim = constrain(tempElDim, 2, 50);
    return tempElDim;
  }
}
