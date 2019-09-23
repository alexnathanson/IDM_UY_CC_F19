//functions can also be called methods

//these are global variables
int globalInt;

void setup(){
  size(800,800);
  background(200);
}

void draw(){
  //println(anInt);//this will throw an error
  fill(0,0,0,1);
  rect(0,0,width,height);
  //background(0);
 //intReturned();
  
  drawFace();
}

//void returns noting
void nothingReturned(){
  rect(100,100,50,60);
}

int intReturned(){
  return 100;
}
//returns an int
// specify the data type of the arguments
void drawFace(){
  
  int drawX = int(random(width));
  int drawY = int(random(height));
  
  int faceW = int(random(10,60));
  int faceH = int(random(10,60));
  fill(random(25,225));
  
  //body
  rect(drawX-((faceW*.6)*.5),drawY+(faceH*.25),faceW*.6,faceW*(1+ random(.05,.4)));
  
  
  //head
  ellipse(drawX,drawY,faceW,faceH);
  //eyes
  fill(random(255),random(255),random(255));
  ellipse(drawX-(faceW*.333),drawY-(faceH*.333),faceW*.2,faceW*.2);
  ellipse(drawX+(faceW*.333),drawY-(faceH*.333),faceW*.2,faceW*.2);
  //mouth
  fill(0);
  ellipse(drawX,drawY+(faceH*.333),random(2,10),random(2,10));

}
