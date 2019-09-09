int counter = 0;
int elapsedTime = millis();

void setup(){
  size(800, 800);
  frameRate(30);//the amount of frames displayed per second
}

void draw(){
  counter++;
  //println(counter % 10);
  elapsedTime = millis();
  println("Today's date: " + day());
}
