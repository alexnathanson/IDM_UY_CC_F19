int counter = 0;
int elapsedTime = millis();

float frameSeconds = 1000.0/30.0;

void setup(){
  size(800, 800);
  frameRate(30.0);//set the amount of frames displayed per second. default is 60
  println(frameRate);
  float frameSeconds = 1000.0/frameRate;
  println(frameSeconds);

}

void draw(){
  background(255);

  counter++;
  //println(counter % 10);
  elapsedTime = millis(); //time elapsed since start of the program
  
  translate(500,500);
  fill(elapsedTime % 255,elapsedTime % 250,elapsedTime % 245);
  ellipse(sin(elapsedTime % (float(1000)/30))*100, cos(elapsedTime % 1000)*100, 10,10);
  //println(counter + " Today's date: " + day() + "/" + month() + "/" + year() + ":" + hour() + ":" + minute() +  ":" +second());
}
