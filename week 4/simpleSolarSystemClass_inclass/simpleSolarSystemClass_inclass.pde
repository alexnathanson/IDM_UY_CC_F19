float theta = 0;
int bckgrnd = 0;

Planet Sun = new Planet(300,300);
Planet Earth = new Planet(60,50);

Moon theMoon = new Moon();

void setup(){
  fullScreen();
  background(bckgrnd);

}

void draw(){
  background(bckgrnd);
  
  theta+=0.005;
  
  push();
    translate(width/2,height/2);
    rotate(theta);
    Sun.display();
    
   
    //earth
    push();
      translate(-350,350);
      rotate(theta*4);
      Earth.display();
      translate(40,40);
      theMoon.display();
    pop();
   
    /*
    //some other planet
    push();
      rotate(theta*2);//if the rotation is placed ahead of the translate, it has the effect of adding to the previous rotate
      translate(250,250);
      ellipse(0,0,30,30);
      push();
        rotate(theta*4);
        translate(30,30);
        ellipse(0,0,12,12);
      pop();
      push();
        rotate(theta*10);
        translate(-20,20);
        ellipse(0,0,10,10);
      pop();
    pop();*/
    
  pop();
    
  
}

class Planet{
  int sizeX, sizeY, distX, distY;
  
  Planet(int tempSizeX, int tempSizeY){
    sizeX = tempSizeX;
    sizeY = tempSizeY;
    distX = 0;
    distY = 0;
  }
  
  void display(){
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
    super(50,50);
  }
  
  void display(){
    fill(255,0,0);
    ellipse(distX,distY, sizeX,sizeY);
  }
}
