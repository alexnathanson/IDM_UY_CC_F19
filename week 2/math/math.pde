float x=0.0;
int y=height;

int mod;

void setup(){
  size(800,800);  
}

void draw(){
  background(150);
  x+=0.1; //add and asign
  y--; //incriment
  line(0,0,x,height);
  
  mod = int(x) % 5;
  textSize(64+mod);
  textMode(CENTER);
  text(str(mod), (width/2), height/2);
}
