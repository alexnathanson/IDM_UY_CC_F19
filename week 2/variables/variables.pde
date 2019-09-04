
/*Processing is a static and strongly typed language

Strong vs Weak:
In a strongly typed language variable types need to be specified and explicit conversion is required (casting).
In a weakly typed language variables can be implicitly coerced to unrelated types.

Static vs Dynamic:
In a static typed language every variable is bound to a data type when it is compiled. This means that the compiler will check for errors and any issues will throw an error at this stage.
In a dynamic typed language this occurs at run time, so if there is an error in the code, but that line of code isn't executed for some reason you wont necessarily get an error.
*/

//when you declare variables up here, it is a global variable
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
