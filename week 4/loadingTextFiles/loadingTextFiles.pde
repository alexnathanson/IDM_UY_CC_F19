
PFont f;//declare PFont variable

//text file is an array sepeated by lines
String[] textFile;

void setup(){
  size(800,800);
  background(200);
  
  //text files should be plain text (created with a simple text editor with the txt file extension)
  textFile = loadStrings("FirstWordLastWord_MichaelNaimark.txt");

  f = createFont("Vladimir Script",32);
  textFont(f); //specify the font to use
  
  //here we are retrieving the value length from the array text file
  println("there are " + textFile.length + " lines");
  for (int i = 0 ; i < textFile.length; i++) {
    println(textFile[i]);
  }
  
  
}

void draw(){
  background(200);
  
  String outputString = textFile[int(frameCount/30)%textFile.length];
  
  
  //devide it by sentances
  String[] words = split(outputString," ");
  printArray(words);
  
  //here we are calling the function length() from the string class
  //println("The string has " + outputString.length() + " characters and is " +  textWidth(outputString) + " long.");//the amount of characters in the string (including white spaces
  fill(0);
  ellipse(width/2,height/2,5,5);
  //textSize(32);//set the font size
 
  fill(255,255,0);
  textAlign(CENTER,TOP);//RIGHT,CENTER,LEFT & BOTTOM,CENTER,TOP
  text(outputString, width/2, height/2);
}
