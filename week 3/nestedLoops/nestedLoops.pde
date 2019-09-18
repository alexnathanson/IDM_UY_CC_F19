boolean isTrue = true;

void setup(){
  size(800,800);
  
}


void draw(){
  background(200);
  int a = 0;
  
  /*
  stroke(0,255,0);
  //checks condition at start of loop
  //like conditionals, it uses a boolean test
  //avoid infinite loops!
  while(a < 50){
    line(0,0,random(width),random(height));
    a++;
  }
  */
  
  
  
  //checks condition at end of loop
  //not really necessesary
  
  //stroke(255,0,0);
  for(int x = 0; x < width*.9; x++){
    for (int y = 0; y < height*.9; y++){
      //println(x + ", " + y);
       color c = color(map(x,0,width, 0, 255),map(y,0, height,0, 255),map((x+y)*.5,0, height,0, 255));
       set(x+int(width*.05),y+int(height*.05),c);
    }
    /*
    for(int x1 = 0; x1 < width/4; x1++){
      for (int y1 = 0; y1 < height/4; y1++){
        //println(x + ", " + y);
         color c = color(map(x1,0,width/4, 0, 255),map(y1,0, height/4,0, 255),map((x1+y1)*.5,0, height/4,z0, 255));
         fill(c);
         square(x1+int(width/8),y1+int(height/8),4);
      }
    }
    */
  }
}
