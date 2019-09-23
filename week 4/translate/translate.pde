/*
basic translate example
translate moves the origin point (0,0);
translations are cumulative and only apply to what comes below it, but reset every loop
*/

int dim = 50;
int x = dim/2;
int y;

void setup(){
  size(800,800);// must add a 3rd argument (that uses a different openGL rendered) to use z axis: P3D
  background(200);
  
  y = height/2;
}

void draw(){
  background(200);
  rectMode(CENTER);

  x++;
  
  if(x - (dim/2) > width){
    x = -(dim/2);
  }
  
  fill(150);
  rect(0, 0,dim,dim);
 
  translate(x, y);
  fill(0);
  rect(0, 0,dim,dim);
  
  /*
  translate(10, 10);
  fill(255);
  rect(100, 100,dim,dim);
  */
}
