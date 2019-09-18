import processing.pdf.*;

int absoluteV = 0;

boolean q = true;

void setup(){
  size(800,800);
 // println(typeOf(mousePressed));
     
  // Note that #### will be replaced with the frame number. Fancy!
  beginRecord(PDF, "frame-####.pdf"); 

}

void draw(){
  
  stroke(255, 0,0);
  absoluteV = abs(mouseX-pmouseX);
  strokeWeight(absoluteV);
  line(mouseX, mouseY,pmouseX,pmouseY);
  //rect(mouseX,mouseY,50,50);
  
  
  if (!q) {
    endRecord();
  }
}

void mousePressed(){
  //background(200);
  q = false;
}
