
/*Processing is a statically and strongly typed language

Statically typed languages:
- every variable is bound to a data type when it is compiled.

 in a weakly typed language variables can be implicitly coerced to unrelated types - in a strongly typed language explicit conversion is required.)
*/
int myInteger = 150; //for integers (without a decimal)
int bckgrnd = myInteger;
float myFloat = 3.14; //for decimal numbers
String myWord = "one hundred"; //2 quotation marks
char myLetter = 'o'; //for storing alpha-numeric symbols - one quotation mark
boolean myBool = true; //true or false
byte myByte = -17; //values between -128 and 128. integers only

void setup(){
  size(800, 800);
  
  //bckgrnd = "100"; //this wont work
  bckgrnd = int("100"); //this will work
  bckgrnd = int("one hundred"); //this wont work in the way you want it to
  print(bckgrnd);
}

void draw(){
  if (mousePressed){
    //background(bckgrnd);
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  
 
}
