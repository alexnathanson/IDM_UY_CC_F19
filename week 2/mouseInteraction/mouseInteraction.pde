void setup(){
  size(800,800);
 // println(typeOf(mousePressed));
}

void draw(){
  stroke(255, 0,0);
  strokeWeight(abs(mouseX-pmouseX));
  line(mouseX, mouseY, pmouseX, pmouseY);
}

void mousePressed(){
  background(200);
}
