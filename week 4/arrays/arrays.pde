/*
An array is a list of data.
While a single variable points to a single piece of data,
an array points to multiple pieces of data.
An array tracks both the data itself and its position (index) in an array.
Arrays are indexed starting at 0.

In Processing an array can include any data type,
but you can't mix data types.
Also, once initialized arrays have a fixed size.
*/

//declare and create an array in 1 or 2 lines of code

int[] myIntArray;

//int[] myIntArray = new int[10]; //specify how much memory to allocate

//fill the array manually (you can only use hardcoded values like this when initializing)
float[] myFloatArray = {1.3, 1.6, 9.5, 3.5, 7.54, 5.6, 42.2, 1.65};

void setup(){
  size(800,800);
  
  myIntArray = new int [width];

  //fill the array manually
  //myIntArray[0] = 100;
  println(myIntArray.length);

  for (int a = 0; a < myIntArray.length; a++){
    myIntArray[a] = int(random(255));
  }
  
  //println(myIntArray);
  //myIntArray = arrayOperation(myIntArray);
  //println(myIntArray);

}

void draw(){
  
  drawArray(myIntArray);
  
  //shiftArray(myIntArray);
}


int[] arrayOperation(int[] myTempArray){
  for (int aO = 0; aO < myTempArray.length; aO++){
    myTempArray[aO]*=2;
  }
  
  return myTempArray;
}

void keyPressed(){
  //clear the array when the delete key is pressed
  if (keyCode == 127){
    for(int delIt = 0; delIt < myIntArray.length;delIt++){
      myIntArray[delIt] = 0;
    }
  } else {
    for (int a = 0; a < myIntArray.length; a++){
      myIntArray[a] = int(random(255));
    }
  }
}

void drawArray(int[] arrayToDraw){
  for(int aX = 0; aX < width; aX ++){
    for(int aY = 0; aY < height; aY++){
      set(aX,aY,color(arrayToDraw[aX]));
    }
  }
}

int[] shiftArray(int[] arrayToShift){
  int tempValue = arrayToShift[0];
  for (int sA = 0; sA < arrayToShift.length-1; sA++){
    arrayToShift[sA]=arrayToShift[sA+1];
  }
  arrayToShift[arrayToShift.length-1]=tempValue;
  
  return arrayToShift;
}
