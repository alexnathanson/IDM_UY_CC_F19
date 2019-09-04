//this is a comment

/*
this is
a
multiline
comment
*/

//this is a function
// the setup function is run once when we start our program
void setup(){
  //size specifies the window dimensions and should always be the first line of code in the setup function
  size(800, 800);
  
  //could also use fullscreen() instead of size()
  //fullScreen(); //esc exits full screen'
  //background(0);
}

//the draw function is called directly after the setup function
void draw(){
  
  //this is a function call with arguments in the ()
  fill(45);
  stroke(255);
  strokeWeight(10);
  ellipse(500, 400, 80, 80);
  ellipse(800, 400, 80, 80);
  line(500, 500, 800, 500);
  
  /*
  noFill();
  ellipse(500, 500, 800, 700);
*/
  //ellipse(mouseX, mouseY, 80, 80);
  println(frameRate);
}
