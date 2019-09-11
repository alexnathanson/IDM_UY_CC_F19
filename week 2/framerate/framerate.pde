int frameCt = 0;

void setup(){
  size(800,800);
  frameRate(30);
  println(frameRate);//this is a running average, so this will look wrong
}

void draw(){
  background(255);
  println(frameRate);//this will look correct
  frameCt = int(frameCount/1.5);
  print(frameCt);
  
  translate(500,500);
  fill(frameCt % 255,frameCt % 250,frameCt % 245);
  ellipse(sin(frameCt % 1000)*100, cos(frameCt % 1000)*100, 10,10);
}
