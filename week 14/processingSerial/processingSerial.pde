import processing.serial.*;

Serial myPort;  // Create object from Serial class
int val;      // Data received from the serial port

int inByte = -1;
int whichKey = -1;

void setup() 
{
  size(600, 600);
  // I know that the first port in the serial list on my mac
  // is always my  FTDI adaptor, so I open Serial.list()[0].
  // On Windows machines, this generally opens COM1.
  // Open whatever port is the one you're using.
  String portName = Serial.list()[0];
  println(portName);
  myPort = new Serial(this, portName, 9600);
  
  PFont myFont = createFont(PFont.list()[2], 14);
  textFont(myFont);
  textSize(24);
}

void draw()
{
  /*if ( myPort.available() > 0) {  // If data is available,
    val = myPort.read();         // read it and store it in val
    println(val);
  }*/

  background(0);             // Set background to white
  rect(map(inByte,0,255,0,width-100), (height/2)-50, 100, 100);
  
  text("Last Received: " + inByte, 10, 130);
  text("Last Sent: " + whichKey, 10, 100);
}


void serialEvent(Serial myPort) {
  inByte = myPort.read();
  println(inByte);
}


void keyPressed() {
  // Send the keystroke out:
  myPort.write(key);
  whichKey = key;
}
