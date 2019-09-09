void setup(){
  //size(900,900);
  fullScreen();
}

void draw(){
  background(255);
  fill(0,255,0);
  /*
  //rectMode(CORNER);
  rectMode(CORNERS);
  //rectMode(CENTER);
  //rectMode(RADIUS);
  //strokeWeight(10); //thickness of the outline
  //noStroke();
  //stroke(255); //color of the outline
  strokeJoin(ROUND);//BEVEL, MITER, ROUND
  rect(mouseX, mouseY, 200, 200);
  */
  
  /*
  stroke(0);
  strokeWeight(10);
  point(500,500);
  */
  
  //quad(100,100, 500, 200, 500, 500, 50, 500);
  
  
  strokeWeight(3);

  beginShape(TRIANGLE_FAN); //default is a polygon
  vertex(200, 200);
  vertex(400, 200);
  vertex(400, 400);
  vertex(600, 400);
  vertex(600, 600);
  vertex(200, 600);
  endShape(CLOSE);
  /*
  beginShape(TRIANGLE_FAN);
  vertex(57.5, 50);
  vertex(57.5, 15); 
  vertex(92, 50); 
  vertex(57.5, 85); 
  vertex(22, 50); 
  vertex(57.5, 15); 
  endShape();
  */
}
