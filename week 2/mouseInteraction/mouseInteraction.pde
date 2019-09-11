int absoluteV = 0;

void setup(){
  size(800,800);
 // println(typeOf(mousePressed));
}

void draw(){
  stroke(255, 0,0);
  absoluteV = abs(mouseX-pmouseX);
  strokeWeight(absoluteV);
  line(mouseX, mouseY,pmouseX,pmouseY);
  //rect(mouseX,mouseY,50,50);
}

void mousePressed(){
  background(200);
}
