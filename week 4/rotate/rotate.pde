/*
basic rotate example
rotate uses radians (degrees * pi/180 = radians...360 degrees = 2 pi)
rotate() rotates from the origin point
*/

int dim = 100;
float theta = 0;

void setup(){
  size(800,800, P3D);
  background(200);
  
}

void draw(){
  background(200);
  rectMode(CENTER);

  theta+=.01;

    translate(width/2,height/2);
    rotateY(theta);
    rotateX(theta);
    fill(255);
    rect(0,0,dim,dim);
  
}
