
PFont f1, f2;//declare PFont variable

String myString = "My String";

String[] textFile;

void setup(){
  size(800,800);
  background(200);
  
  //text files should be plain text (created with a simple text editor with the txt file extension)
  textFile = loadStrings("FirstWordLastWord_MichaelNaimark.txt");

  //loading fonts can be slow - almost always best to do it in setup
  f1 = createFont("Constantia", 24);
  f2 = createFont("Arial",64);
  
  textFont(f1); //specify the font to use
  
  //here we are retrieving the value length from the array text file
  println("there are " + textFile.length + " lines");
  for (int i = 0 ; i < textFile.length; i++) {
    println(textFile[i]);
  }
  
  //print a list of all available fonts
  //printArray((PFont.list()));
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
