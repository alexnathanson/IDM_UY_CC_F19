float gTheta = 0;

int[] moonCount = {0,0,1,2,79,62,27,14};
float[] planetDistances = {0.38,0.72,1.0,1.52,5.2,9.58,19.14,30.2};
float[] planetSizes= {4879,12104,12756,3475,6792,142984,120536,51118,49528};

int earthDistance = 20;
int earthDim = 20;
int sunDim = 200;

SolarSystemElement theSun = new SolarSystemElement(200,200);
Planet Earth = new Earth(50,50);
Planet Mars = new Mars(30,30);
Planet[] Planets = new Planet[8];

int bckgrnd = 0;

void setup(){
  fullScreen();
  //size(1000,1000);
  background(bckgrnd);
  
  int[] newPlanetSizes = rescaleSizes(planetSizes);
  printArray(newPlanetSizes);
  for (int p = 0; p<Planets.length;p++){
    //int pSize = int(random(10,50));
    Planets[p] = new Planet(newPlanetSizes[p],newPlanetSizes[p], moonCount[p], planetDistances[p]);
  }
}

void draw(){
  background(bckgrnd);
  
  gTheta+=0.005;
  
  theSun.setTranslate(width/2,height/2);
  theSun.setTheta(gTheta);
  theSun.setColor(color(255,255,0));
  theSun.display();//sun
  
  for (int p = 0; p<Planets.length;p++){
    
   int thisTranslation = int((earthDistance * planetDistances[p])+(sunDim/4));
   
    push();
      Planets[p].setTranslate(thisTranslation,thisTranslation);
      Planets[p].setTheta(gTheta*4);
      Planets[p].display();
    pop();
  }
        
}

int[] rescaleSizes(float[] tempArray){
  float tempEarth = tempArray[2];
  
  int[] newSizes = new int[9];
  for(int s = 0; s < tempArray.length;s++){
    println((tempArray[s]/tempEarth)*earthDim);
    newSizes[s]=int((tempArray[s]/tempEarth)*earthDim);
  }
  
  return newSizes;
}
class SolarSystemElement{
  int elX, elY, elWidth, elHeight,elTranslateX,elTranslateY;
  float theta;
  color elementColor;
  
  SolarSystemElement(int tempWidth, int tempHeight){
    elX=0;
    elY=0;
    elTranslateX = 0;
    elTranslateY = 0;
    elWidth = tempWidth;
    elHeight = tempHeight;
    theta = 0.0;
    elementColor = color(255,255,255,255);
  }
  
  void display(){
    translate(elTranslateX, elTranslateY); 
    rotate(theta);
    fill(elementColor);
    ellipse(elX,elY,elWidth, elHeight);
  }
  
  void setTranslate(int tempTranX, int tempTranY){
    elTranslateX = tempTranX;
    elTranslateY = tempTranY;
  }
  
  float getTheta(){
    return theta;
  }
  
  void setTheta(float tempTheta){
    theta = tempTheta;
  }
  
  void setColor(color tempColor){
    elementColor = tempColor;
  }
}

class Planet extends SolarSystemElement{
  int moons;
  int[][] moonDeets; //size + position
  float[] moonThetas;//Theta multiplier
  
  //constructor
  Planet(int tempWidth, int tempHeight, int tempMoons, float tempDist){
    super(tempWidth, tempHeight);
    moons = tempMoons;
    moonDeets = new int[moons][2];
    moonThetas = new float[moons];
  }
  
  void display(){
    super.display();
    if(moons > 0){
      displayMoons();
    }
  }
  
  void setMoons(int tempMoons){
    moons = tempMoons;
    moonDeets = new int[moons][2];
    moonThetas = new float[moons];
    
    for (int m = 0; m < moons; m++){
      moonDeets[m][0]=int(random(4,15));
      moonDeets[m][1]=int(random(super.elWidth/2,super.elWidth+15));
      moonThetas[m]= random(0.5, 1.5);
      println(moonThetas[m]);
    }
  }
  
  void displayMoons(){
    for (int m = 0; m < moons; m++){
      push();
        //println(super.getTheta());
        rotate(super.getTheta()*moonThetas[m]);
        translate(moonDeets[m][1],moonDeets[m][1]);
        ellipse(0,0,moonDeets[m][0],moonDeets[m][0]);
      pop();
    }
  }
}

class Earth extends Planet{
  int moons;
  
  Earth(int tempWidth, int tempHeight){
    super(tempWidth,tempHeight, 1,100);
    moons = 1;
    super.setMoons(moons);
    super.elementColor = color(0,255,0);
  }
}

class Mars extends Planet{
  int moons;
  
  Mars(int tempWidth, int tempHeight){
    super(tempWidth,tempHeight,2,150);
    moons = 2;
    super.setMoons(moons);
    super.elementColor = color(255,0,0);
  }
}
