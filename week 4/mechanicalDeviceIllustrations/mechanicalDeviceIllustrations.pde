void setup() {
  //size(800,800);
  fullScreen();
  background(100);
}

int anchorX = -10;
int anchorY = -10;

float angle=0.0;
float speed = 0.005;
int angleDirection =1;

float gAngle=0.0;
float gSpeed = 0.05;
int gAngleDirection = 1;

float aAngle=0.0;
float aSpeed = 0.05;
float aAngleDirection = 1;

void draw() {
  background(100);
  fill(255);
//machine arm
  push();
  
    //move to start position
    translate((width/3)+anchorX, (height/3)+anchorY);
    //rotate(mouseX/100.0);
    rotate(angle);
    //top section
    rect(anchorX, anchorY, 20, 100,5);
    ellipse(0, 0, 5, 5);

    //move middle joint
    translate(0, 80);
    //rotate(mouseX/100.0);
    rotate(angle*2);
  
    //middle section
    rect(-8, -5, 16, 70, 5);
    ellipse(0, 0, 5, 5);

    //move bottom joint
    translate(0, 60);
    //rotate(mouseX/100.0);
    rotate(angle*2.5);
  
    //bottom section
    rect(-5, -5, 10, 50, 5);
    ellipse(0, 0, 5, 5);

  //reset rotations and translations
  pop();
  
  angle+=speed * angleDirection;
  if((angle>QUARTER_PI)|| (angle<(QUARTER_PI*-1))){
    angleDirection *= -1;
  }



//gear
  //move to start position
  push();
    translate(2*(width/3), (height/2));

    push();
      rotate(gAngle);
      ellipse(0,0, 200,200);//main gear

      //main gear details
      gearDetail(8,50,50,25);

      fill(255);
      //pivot point
      ellipse(0,0, 10,10);

      //gear teeth
      push();
        translate(0,115);
        fill(0);
        quad(-20,-20, 20, -20, 10, 10, -10, 10);
        //rect(-10,-10,20,20);
      pop();
  pop();
  
  //big gear #2
    push();
      translate(-200,0);
      rotate(gAngle);
      ellipse(0,0, 200,200);//main gear

      //main gear details
      gearDetail(8,50,50,25);

      fill(255);
      //rect(-10, -10, 200, 20,5);//gear arm
      //pivot point
      ellipse(0,0, 10,10);
    pop();
  
  //gear arm
  push();
    //translate((mouseX/100.0),(mouseX/100.0));
    int tX = int(map(sin(gAngle),-1.0, 1.0,90,-90));
    int tY = int(map(cos(gAngle),-1.0, 1.0,-90,90));

    translate(tX,tY);

    rect(-225, -10, 250, 20,5);//gear arm
  pop();
  
    //2nd gear
    push();
      translate(0,150);
      rotate(gAngle*-1.0);
      ellipse(0,0,100,100);
      gearDetail(6,25,25,10);
    pop();
  pop();
  
  gAngle+=gSpeed * gAngleDirection;
  if((gAngle>TWO_PI) || (gAngle<(TWO_PI*-1))){
    gAngleDirection *= -1;
  }
  
  
  


//standalone gear arm2
  push();
    translate(300,300);
  
    push();
      //translate(0,150);
      rotate(aAngle*-1);
      ellipse(0,0,100,100);
      ellipse(0,0,10,10);
      gearDetail(6,25,25,10);
    pop();
  
    int aX = int(map(sin(aAngle),-1.0, 1.0,-50,50));
    int aY = int(map(cos(aAngle),-1.0, 1.0,-50,50));

    //translate(aX,aY);
  rect(-10,map(cos(aAngle),-1.0,1.0,200,300)-10,20,200);
    strokeWeight(10);

  line(aX,aY,0,map(cos(aAngle),-1.0,1.0,200,300));
  
    //rect(-125, 0, 250, 20,5);//gear arm
  pop();
  
  aAngle+=aSpeed * aAngleDirection;
  
}

void gearDetail(int amtDeets, int posDeetsX, int posDeetsY, int sizeDeets){
  fill(100);
  for(int d = 0; d < amtDeets; d++){
    //fill((255/amtDeets)*d);
    push();
    rotate(TWO_PI * d / amtDeets);
    ellipse(posDeetsX,posDeetsY,sizeDeets,sizeDeets);
    pop();
  }
}
