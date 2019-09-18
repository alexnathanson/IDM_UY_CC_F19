int getInt = 1;

void setup(){
  size(800,800);
}

void draw(){
  //println(anInt);//this will throw an error
  
  //you do not have to use the value that is returned from a function
  //println("voidReturned: " + voidReturned()); //this wont work
  println("intReturned: " + intReturned());
  println("intReturnedArg: " + intReturnedArg(getInt));
  
}

//void returns noting
void voidReturned(){
  int anInt = 100;
}

//returns an int
int intReturned(){
  //this is a local variable
  int anInt = 10;
  return anInt;//return 10 would also work
}


//returns an int
int intReturnedArg(int inputInt){
  //this is a local variable
  inputInt*=10;
  return inputInt;
}
