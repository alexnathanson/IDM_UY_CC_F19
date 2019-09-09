int counter = 0;
int elapsedTime = millis();

void setup(){
  size(800, 800);
  frameRate(30);//the amount of frames displayed per second
}

void draw(){
  //background(255);

  counter++;
  //println(counter % 10);
  elapsedTime = millis();
  
  translate(500,500);
  fill(elapsedTime % 255,elapsedTime % 250,elapsedTime % 245);
  ellipse(sin(elapsedTime % 360)*100, cos(elapsedTime % 360)*100, 10,10);
  println(counter + " Today's date: " + day() + "/" + month() + "/" + year() + ":" + hour() + ":" + minute() +  ":" +second());
}
