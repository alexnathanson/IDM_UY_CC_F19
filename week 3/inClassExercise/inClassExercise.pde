/*mouse tracker using map + conditionals with key value + loops + custom functions
Part A
1) draw rectangle
2) draw another shape inside of that rectable
3) map the movement in the interior shape to the position of the mouse

Part B
1) add a conditional statement to change something based on keyboard input

Part C
1) Using a nested loop, set the background pixels inside of the rectangle

Part D
1) Move the interior shape to a custom function
2)
*/

int offsetX = 100;
int offsetY = 100;
int rColor = 255;
int eColor = 0;

void setup(){
  size(800,800);
  background(200);
}


void draw(){
  background(200);
  
  if(mouseX>width/2){
    rColor= 255;
    eColor= 0;
  } else {
    rColor= 0;
    eColor= 255;
  }
  fill(rColor);
  rect(offsetX,offsetY,300, 300);
  
  fill(eColor);
  ellipse(map(mouseX,0,width,0,300)+offsetX,map(mouseY,0,height,0,300)+offsetY,10,10);
}
