
/*Processing is a static and strongly typed language

Strong vs Weak:
In a strongly typed language variable types need to be specified and explicit conversion is required (casting).
In a weakly typed language variables can be implicitly coerced to unrelated types.

Static vs Dynamic:
In a static typed language every variable is bound to a data type when it is compiled. This means that the compiler will check for errors and any issues will throw an error at this stage.
In a dynamic typed language this occurs at run time, so if there is an error in the code, but that line of code isn't executed for some reason you wont necessarily get an error.
*/

/*
variables must have a type so the computer knows exactly how much memory to allocate
when you declare variables up here, it is a global variable
the naming convention for multi word names is a lowercase first word and 
upper case first letter for all the words that follow (Upper case first words are reserved for Classes)
these are all of the "primitive" variables
*/
String myWord = "one hundred"; //2 quotation marks
boolean myBool = true; //true or false
char myCharacter = 'o'; //for storing alpha-numeric symbols - one quotation mark
byte myByte = -17; //values between -128 and 128. integers only
short myShort = 378; //-32,768 to 32,767
int myInteger = 1500; //for integers (without a decimal) -2,147,483,648 to 2,147,483,647
long myLong = 231231231245L; //for very big numbers. must write L at the end.
float myFloat = 3.14159; //for decimal numbers
double myDouble = 3.1400000000000000000000000000000000000001;//for very long decimal number. only needed for extreme precision calculations

//variables can be equal to other variables.
int bckgrnd = myInteger;

void setup(){
  size(800, 800);
  
  //strongly typed language example:
  //bckgrnd = "100"; //this wont work
  //bckgrnd = int("100"); //this will work
  //bckgrnd = int("one hundred"); //this wont work 
 
}

void draw(){
  
  ellipse(mouseX, mouseY, 80, 80);
  
 
}
