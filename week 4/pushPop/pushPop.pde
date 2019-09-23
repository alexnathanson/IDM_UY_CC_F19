/*
push() and pop() allow you to control what elements style and matrix transformations are applied to.
push() and pop () apply to both style and matrix transformations...
you can also you pushStyle(), popStyle() which only applies to style changes or
pushMatrix() and popMatrix() which only applies to matrix transformations
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
  
  pushStyle();
    translate(width/2,height/2);
    rotateY(theta);
    rotateX(theta);
    fill(0);
    rect(0,0,dim,dim);
  popStyle();
  
  push();
    translate(width/3,height/3);
    rotateY(theta*2);
    rotateX(-theta*3);
    rotateZ(theta);
    rect(0,0,dim,dim);
  pop();
}
