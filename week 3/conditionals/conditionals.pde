/*
Relational boolean operators
>
<
>=
<=
==
!=

You can have a conditional with multiple boolean operators using:
&&
|| 
*/

boolean hungry = true;
boolean thirsty = false;
boolean tired = true;

int startX;
int startY;

float strokeW = 1.0;

void setup(){
  size(800,800);
}

void draw(){
  
  //single = sets one thing to another, double == compares to values
  startX = int(random(width));
  startY = int(random(height));
   
  strokeWeight(strokeW);
  
  if(mouseX < (width/2)){
    fill(random(255));
  } else {
    fill(random(255),random(255), random(255));
  }
  
  if (hungry){
    ellipse(startX, startY, random(2, 20),random(2, 20));
  } else if (thirsty){
    rect(startX, startY, random(6, 30), random(10, 100));
  } else if (hungry && thirsty){
    triangle(startX, startY, startX + (90 - random(10,100)), startY + (90 - random(10,100)),startX + (90 - random(10,100)), startY + (90 - random(10,100)));
  } else {
    line(startX, startY, startX + (90 - random(10,100)), startY + (90 - random(10,100)));
  }
  
  strokeW += 0.01;
  
}


void mousePressed(){
  if (hungry){
    hungry = false;
  } else {
    hungry = true;
  }
  
  if (!thirsty){
    thirsty = true;
  } else {
    thirsty = false;
  }
  
  tired = !tired;
  
  strokeW = 1;
}
