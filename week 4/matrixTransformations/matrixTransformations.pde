void setup() {
  size(800,800);
  background(100);
  textSize(24);
}

void draw() {
  //background(100);
  //translate(mouseX,mouseY);
  
  //translation moves the coordinate system

//just rotation
/*
  text("Just rotation", 100, 50);
  //rotate moves objects around 0,0
  rotate(mouseX/100.0);
  //centered on middle of window
  rect((width * .5) - 10, (height*.5)-50, 20, 100, 5);
  //centered on 0,0
  rect(-10, -50, 20, 100, 5);
*/

//just translation
/*
  fill(255, 0,0);
  text("Just translation", 100, 50);
  translate(mouseX, mouseY);
  //centered on middle of window
  rect((width * .5) - 10, (height*.5)-50, 20, 100, 5);
  //centered on 0,0
  rect(-10, -50, 20, 100, 5);
*/

  /*
//Translation then rotation
  fill(255, 0,0);
  text("Translation then Rotation", 100, 50);
  translate(mouseX, mouseY);
  rotate(mouseX/100.0);
  //centered on middle of window
  fill(50);
  rect((width * .5) - 10, (height*.5)-50, 20, 100, 5);
  //centered on 0,0
  fill(255);
  rect(-10, -50, 20, 100, 5);
*/
  
  
//Rotation then translation
  
  fill(255, 0,0);
  text("Rotation then Translation", 100, 50);
  rotate(mouseX/100.0);
  translate(mouseX, mouseY);
  //centered on middle of window
  fill(50);
  rect((width * .5) - 10, (height*.5)-50, 20, 100, 5);
  //centered on 0,0
  fill(255);
  rect(-10, -50, 20, 100, 5);
  
  if(mousePressed){
    background(100);
  }

}
