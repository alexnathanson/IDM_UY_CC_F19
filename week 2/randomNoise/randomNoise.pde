int oldYR = 0;
int newYR = 0;
int oldXR = 0;

int oldYN = 0;
int newYN= 0;
int oldXN = 0;

float perlinNoise;

float t = 0.0;
void setup(){
  size(800,800);
  background(200);
}

void draw(){
  //Random
  int newXR = (frameCount % (width/4))*4;
 
  if (newXR == 0){
    background(200);
    oldXR = 0;
    oldXN = 0;
  }
  
  newYR = int(random(height/2));

  line(oldXR, oldYR, newXR, newYR);
  
  oldYR = newYR;
  oldXR = newXR;
  
  //Perlin Noise
  
  perlinNoise = noise(t) * height/2;
  println(perlinNoise);
  
  int newXN = (frameCount % (width/4))*4;
 
  newYN = int(perlinNoise + (height/2));
  line(oldXN, oldYN, newXN, newYN);
  
  oldYN = newYN;
  oldXN = newXN;
  
  t+= 0.02;
}
