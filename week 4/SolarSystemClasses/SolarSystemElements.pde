
//the SolarSystemElement class defines the basic characteristics of solar system elements
class SolarSystemElement{
  int elX, elY, elWidth, elHeight,elTranslateX,elTranslateY;
  float theta,thetaFactor,elDist;
  color elementColor;
  
  SolarSystemElement(int tempWidth, int tempHeight,float tempDist){
    elX=0; //shape X
    elY=0; //shape Y
    elTranslateX = 0; //origin translation X (i.e. relationship to center)
    elTranslateY = 0; //origin translation Y (i.e. relationship to center)
    elWidth = tempWidth; //shape width
    elHeight = tempHeight; //shape height
    elDist = tempDist; //distance to center of the system
    theta = 0.0; //rotation
    thetaFactor = random(.2,1.5);
    elementColor = color(255,255,255,255);//shape color
  }
  
  void display(){
    translate(elTranslateX+elDist, elTranslateY+elDist); 
    rotate(theta*thetaFactor);
    fill(elementColor);
    ellipse(elX,elY,elWidth, elHeight);
  }
  
  void setTranslate(int tempTranX, int tempTranY){
    elTranslateX = tempTranX;
    elTranslateY = tempTranY;
  }
  
  void setTheta(float tempTheta){
    theta = tempTheta;
  }
  
  float getTheta(){
    return theta;
  }
  
  void setColor(color tempColor){
    elementColor = tempColor;
  }
}

//the sun is always a circle at the center of the system
class Sun extends SolarSystemElement{
  
  Sun(int tempDim){
    super(tempDim, tempDim, 0);
  }
}

//planets can have moons
class Planet extends SolarSystemElement{
  int moons;
  int[][] moonDeets; //size + position
  float[] moonThetas;//Theta multiplier
  
  //constructor
  Planet(int tempWidth, int tempHeight, int tempMoons, float tempDist){
    super(tempWidth, tempHeight,tempDist);
    moons = tempMoons;
    moonDeets = new int[moons][2];
    moonThetas = new float[moons];
    
    if(moons > 0){
      setMoons(moons);
    }
  }
  
  void display(){
    //super.display(); //run the display method of the parent class
    rotate(theta*thetaFactor);
    translate(elTranslateX+elDist, elTranslateY+elDist); 
    fill(elementColor);
    rectMode(CENTER);
    rect(elX,elY,elWidth, elHeight);

    if(moons > 0){
      displayMoons();
    }
  }
  
  void setMoons(int tempMoons){
    moons = tempMoons;
    moonDeets = new int[moons][2];
    moonThetas = new float[moons];
    for (int m = 0; m < moons; m++){
      moonDeets[m][0]=int(random(5,15));//circle size
      moonDeets[m][1]=int(random(elWidth,elWidth+ 20));//distance from planet
      moonThetas[m]= random(0.5, 1.5);
      //println(moonThetas[m]);
    }
  }
  
  void displayMoons(){    
    for (int m = 0; m < moons; m++){
      push();
        fill(255,0,0);
        rotate(theta*moonThetas[m]);
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
