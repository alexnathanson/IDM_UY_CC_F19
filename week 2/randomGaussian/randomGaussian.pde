/*
   randomGaussian() returns a float from a random series of numbers
   having a mean of 0 and standard deviation of 1.
   
   Numbers closer to the mean have a higher probability of being returned.
*/

 float sd = 50;   //standard deviation scaler              
 float mean;  
 
void setup(){
  size(800,800);
  background(0);
  mean = width/2; //this needs to happen after window size has been determined

}

void draw(){
  //background(150);
  stroke(random(100,256),random(100,256),random(100,256));
  float x = randomGaussian()*sd; //this will scale the number
  println(x);
  line(mean, (height/2) - 200, x+mean, height/2);
 
}

void mousePressed(){
  background(0);
}
