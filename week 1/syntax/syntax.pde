//this is a comment
//my first processing program!

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
  //size(800, 800);
  
  //could also use fullscreen() instead of size()
  fullScreen(); //esc exits full screen'
  background(0,255,0);
}

/*the draw function is called directly after the setup function
this loops continuously for the entire duration of your program*/
void draw(){
  
  //this is a function call with arguments in the ()
  //color 0-255 (1 byte = 8 bits, 2^8=256)
  fill(100,0,0, 50);
  stroke(255,200,200);
  strokeWeight(1);
  ellipse(400, 400, 80, 80);
    fill(100,100,0, 50);
   ellipse(450, 450, 80, 80);
  strokeWeight(10);
  line(500, 500, 800, 500);
  
}
