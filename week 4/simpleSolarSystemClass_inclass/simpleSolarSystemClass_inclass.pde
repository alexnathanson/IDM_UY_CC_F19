float theta = 0;
int bckgrnd = 0;

Planet Sun = new Planet(300,300);
Planet Earth = new Planet(60,50);

Moon theMoon = new Moon();

Planet[] listPlanets = new Planet[5];

void setup(){
  fullScreen();
  background(bckgrnd);
  
  for(int a =0;a <listPlanets.length;a++){
    listPlanets[a] = new Planet(int(random(20,100)),int(random(20,100)));
    listPlanets[a].planetColor = color(int(random(255)),int(random(255)),int(random(255)));
    listPlanets[a].translateX = int(random(20,400));
    listPlanets[a].translateY = int(random(20,400));

  }

}

void draw(){
  background(bckgrnd);
  
  theta+=0.005;
  
  push();
    translate(width/2,height/2);
    rotate(theta);
    Sun.display();
    
   
    //earth
    for(int p = 0;p < listPlanets.length;p++){
      push();
      translate(listPlanets[p].translateX, listPlanets[p].translateY);
      rotate(theta*4);
      listPlanets[p].display();
      //translate(40,40);
      //theMoon.display();
    pop();
    }
    
  
  pop();
    
  
}

class Planet{
  int sizeX, sizeY, distX, distY,translateX,translateY;
  color planetColor;
  
  Planet(int tempSizeX, int tempSizeY){
    sizeX = tempSizeX;
    sizeY = tempSizeY;
    distX = 0;
    distY = 0;
    translateX = 0;
    translateY = 0;
    planetColor = color(255,0,0);
  }
  
  void display(){
    fill(planetColor);
    ellipse(distX,distY, sizeX,sizeY);
  }
  
  int getSizeX(){
    return sizeX;
  }
  
  void setSizeX(int tempSizeX){
    sizeX = tempSizeX;
  }
}

class Moon extends Planet{
  Moon(){
    super(15,15);
  }
  
  void display(){
    fill(255,0,0);
    ellipse(distX,distY, sizeX,sizeY);
  }
}
