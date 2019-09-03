float angle;
float angle2;
int globalLineAmt = 200;

void setup(){
  size(800, 800);
}

void draw(){
  background(155);
  globalLineAmt = mouseX/2;
  //place in center of window
  pushMatrix();

  translate(width/2, height/2);
  //scale(.9);
  rect(-(width/2), -(height /2), width, height);
  
  squareOfLines(globalLineAmt);
  popMatrix();
  
  pushMatrix();
  translate(width/2, height/2);
  anotherRotateFunction();
  //scale(.81);
  squareOfLines(globalLineAmt);
  //
  popMatrix();

}



void squareOfLines(int amtLines){
  stroke(0);
 
  float lIncrement = width / float(amtLines+1);
  
  strokeWeight(2);
  //center on point 0,0
  for (int l = 1; l <= amtLines; l = l +1){
      line(lIncrement * l - (width/2), -(height/2), lIncrement * float(l) - (width/2), height/2);
  }
}

void rotateLines(){

  angle = angle + second() % (2*PI);
  float c = cos(angle);
  rotate(c);
}

void anotherRotateFunction(){
  float speed = mouseY/1000.0;//0.005;
  float angleDirection =1;
  angle2+=speed * angleDirection;
  if((angle2>QUARTER_PI)|| (angle2<(QUARTER_PI*-1))){
    angleDirection *= -1;
  }
  rotate(angle2);
}
