float gTheta = 0;

int[] moonCount = {0,1,2,27,14,0};
float[] planetDistances = {0.2,1.0,2.0,3.52,5.2,7.3};
float[] planetSizes= {4879,12104,12756,3475,6792,14536};

int earthDistance = 40;
int earthDim = 40;
int sunDim = 200;

SolarSystemElement theSun = new Sun(200);
Planet Earth = new Earth(50,50);
Planet Mars = new Mars(30,30);
Planet[] Planets = new Planet[6];

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
    
   int thisTranslation = int((earthDistance * planetDistances[p])+(sunDim/2));
   
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
