
float perlinNoise;

float xT =0.0;
float yT = 0.0;
float inc = 0.1;
float t = 0.1;

int ptCloudDiv = 4;
void setup(){
  size(400,400);
  frameRate(30);
}

void draw(){  
  //background(200);
  
  
  //Three dimensional perlin noise
  //noiseDetail(8,.02);
  xT = 0.0;
  for (int pX = 0; pX < (width/ptCloudDiv);pX++){
    yT = 0.0;
    for(int pY =0; pY <(height/ptCloudDiv); pY++){
      perlinNoise = noise(xT,yT,t) * 255.0;
      println(perlinNoise);
      
      //stroke(random(256));
      stroke(perlinNoise);
      
      strokeWeight(ptCloudDiv);
      point(pX*ptCloudDiv,pY*ptCloudDiv);
      
      yT += inc;
    }
    xT += inc;
  }
  t+= inc;
  
  
}

void mousePressed(){
  background(200);
  
  //Two dimensional perlin noise
  //noiseDetail(8,.02);
  for (int pX = 0; pX < (width/ptCloudDiv);pX++){
    yT = 0.0;
    for(int pY =0; pY <(height/ptCloudDiv); pY++){
      perlinNoise = noise(xT,yT) * 255.0;
      println(perlinNoise);
      
      //stroke(random(256));
      stroke(perlinNoise);
      
      strokeWeight(ptCloudDiv);
      point(pX*ptCloudDiv,pY*ptCloudDiv);
      
      yT += inc;
    }
    xT += inc;
  }
}
