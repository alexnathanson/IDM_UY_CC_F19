int pressedCount = 0;
int releasedCount = 0;

void setup(){
  size(800,800);
}

void draw(){
  println("Key: " + key); //holds the last key pressed
  println(millis());
  println("");
  
  //special keys such as up,down, left, right
  if (key == CODED){
    if (keyCode == UP){ //keyCode is used for keys without ascii values
      println("UP!!!!");
    }
  }
  
  if(keyPressed){
    println("Key pressed: " + key); //holds the last key pressed
  }
  
  println("Press count: " + pressedCount);
  println("Release count: " + releasedCount);

}

void keyPressed(){
  pressedCount++;
}

void keyReleased(){
  releasedCount++;  
}
