int rndSeed = 1000;
int pseudoRnd = 0;

void setup(){
  size(300,300);
  randomSeed(rndSeed); //this sets the random seed for random()
  println(random(10));//random() produces floats
  println(random(12));
  println(random(10));
  println(random(10));
  
  println("first loop!");
  for(int i = 0; i <10;i++){
      println(random(12));
  }
}

void draw(){
  randomSeed(rndSeed); //this sets the random seed for random()
  if(frameCount < 10){
    println("loop # " + frameCount);

    for(int i = 0; i <10;i++){
        println(random(12));//the "behind the scenes" seed value is the previous randomly generated value
    }
  }
}
