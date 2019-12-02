

int inByte;
int ledPin = 13;
// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);

  pinMode(ledPin, OUTPUT);

}

// the loop routine runs over and over again forever:
void loop() {
    
   if (Serial.available() > 0) {
    inByte = Serial.read();
    //Serial.println("loop back: " + inByte);
   }
    //l key turns on LED
   if(inByte == 108){
      digitalWrite(ledPin, HIGH);
   } else {
    digitalWrite(ledPin, LOW);
   }


    // read the input on analog pin 0:
    int sensorValue = analogRead(A0);
    // print out the value you read:
    //must divide by 4 to be in range of 0-255
    //Serial.write(sensorValue/4);//for processing
  Serial.println(sensorValue/4);

  delay(100);        // delay in between reads for stability
}


void establishContact() {
  while (Serial.available() <= 0) {
    Serial.print('A');   // send a capital A
    delay(300);
  }
}
