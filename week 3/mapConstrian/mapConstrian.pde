int newX;
int newY;
int offsetX;
int offsetY;

void setup(){
  size(800,800);
  background(200);
  
  offsetX = width/2;
  offsetY = height/2;
}

void draw(){
  background(200);
  fill(255);
  rectMode(CENTER);
  ellipse(offsetX-(width/6), offsetY, 200, 200);
  ellipse(offsetX+(width/6), offsetY, 200, 200);

  newX = int(map(mouseX, 0, width, -60, 60));
  newY = int(map(mouseY, 0, width, -60, 60));
  
  //iris
  fill(random(255),random(255),random(255));
  int irisSize = int(random(30, 60));
  ellipse(offsetX-(width/6) + newX, offsetY + newY, irisSize,irisSize);
  ellipse(offsetX+(width/6) + newX, offsetY + newY, irisSize,irisSize);
  
  //pupil
  fill(0);
  ellipse(offsetX-(width/6) + newX, offsetY + newY, 20, 20);
  ellipse(offsetX+(width/6) + newX, offsetY + newY, 20, 20);

}
