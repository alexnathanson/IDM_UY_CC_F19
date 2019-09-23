
PFont f1, f2;//declare PFont variable

String myString = "My String";

void setup(){
  size(800,800);
  background(200);
   
  //print a list of all available fonts
  printArray((PFont.list()));
  
  int fontAmt = PFont.list().length;
  String randFont = PFont.list()[int(random(fontAmt))];
  println("First font: " + randFont);
  //loading fonts can be slow - almost always best to do it in setup
  f1 = createFont(randFont, 32);
  randFont = PFont.list()[int(random(fontAmt))];
  println("Second front: " + randFont);
  f2 = createFont(randFont,64);
  
  textFont(f1); //specify the font to use

}

void draw(){
  background(200);
  
  String outputString = myString + " " + frameCount;

  //change font every 100 frames
  if(int(frameCount/100)%2==0){
      textFont(f1);
  }else{
      textFont(f2);
  }
  //here we are calling the function length() from the string class
  //println("The string has " + outputString.length() + " characters and is " +  textWidth(outputString) + " long.");//the amount of characters in the string (including white spaces
  fill(0);
  ellipse(width/2,height/2,5,5);
  //textSize(32);//set the font size
 
  fill(255,255,0);
  textAlign(CENTER,TOP);//RIGHT,CENTER,LEFT & BOTTOM,CENTER,TOP
  text(outputString, width/2, height/2);
}
