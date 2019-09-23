/*
Classes are the cookie cutter
objects are the cookie

The naming convention for Classes
is to capitalize the first letter
*/

/*
objects are considered complex data types,
because they store both data and functionality
(previously we've been almost exclusively looking
at primitive data types)
*/
Gradients myGradient1; //declare the object

void setup(){
  size(800,800);
  background(200);

/*
initialize the object with the "new" operator
unlike primitive data types this MUST be initialized 
or you will get a null pointer exception error
*/
  myGradient1 = new Gradients(int(random(400)), int(random(400)), "cool"); //parameters

}

void draw(){
  background(200);
  myGradient1.moveGradient();
  myGradient1.drawGradient();
  
  if(frameCount%100 == 0){
    myGradient1.printGradientData();
  }
  
}

void mouseReleased(){
  
  if (myGradient1.colorTemp == "hot"){
    myGradient1.colorTemp = "cool";
  } else if (myGradient1.colorTemp == "cool"){
    myGradient1.colorTemp = "hot";
  }

}
