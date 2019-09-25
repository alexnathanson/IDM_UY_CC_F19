/*
basic scale example
this uses decimal percentages
scale() scales from the origin point
*/

int dim = 50;
float s = 0;

void setup(){
  size(800,800);
  background(200);
  
}

void draw(){
  background(200);
   rectMode(CENTER);

  s+=.01;
  
  translate(width/2,height/2);
  scale(s);
  fill(255);
  rect(0,0,dim,dim);
}
