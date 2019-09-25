//a multi dimensional array could also be thought of as nested arrays
// a 2D array like the one below is an array of arrays 

int size = 20;
int[][] pos = new int[size][2];
float scaleShape = 15.0;

void setup(){
  size(800,800);
  printArray(pos[0]);//this doesn't work for nested arrays
  
  for(int t = 0; t < pos.length;t++){
    for(int tn =0; tn<pos[0].length;tn++){
      
      pos[t][tn]=int(random(15));
    }
  }
  
  printArray(pos[0]);
}


void draw(){
  background(200);
  
  
  
}
