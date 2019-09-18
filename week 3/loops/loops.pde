/*global variables are accessible anywhere in the program
 local variables are scope to the function block
 even if Processing will let you declare a local variable with the same name as a global variable, you shouldn't.
*/

//global variables
boolean isGlobal = true;

void setup(){
  size(800,800);
  background(200);
  
  //a local variable
  int a = 0;

  stroke(0,0,0);
  strokeWeight(1);
  
  //checks condition at start of loop
  //like conditionals, it uses a boolean test
  //avoid infinite loops!
  while(a < 10){
    line(0,0,random(width),random(height));
    a++;
  }
}


void draw(){
  //background(200);  

  
  
  /*
  //a while loop with lerp()
  int x1 = 15;
  int y1 = 10;
  int x2 = 600;
  int y2 = 700;
  line(x1, y1, x2, y2);
  
  while(a < 25){
   
    float x = lerp(x1, x2, a/25.0) + 100;
    float y = lerp(y1, y2, a/25.0);
    point(x, y);
   
    a++;
  }*/
  
  /*
  stroke(0);
  
  //a for loop
  for(int lX = 0; lX <= 10; lX++){
    //println(lX); 
    line(lX * (width/10),0,random(width/10)+(lX*(width/10))-(width/20),random(height*.5)+(height*.5));
  }
  */
  //println(lX);//this will throw an error


}
