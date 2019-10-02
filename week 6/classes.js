

let theHouses;

let allHouse = [];

function setup(){
	createCanvas(800,800);

	theHouses = new House(int(random(width)),int(random(height)),int(random(5,50)),int(random(5,50)));

}

function draw(){
	theHouse.displayIt();
}

class House {
  constructor(posX, posY, tempHHeight, tempHWidth) {
    this.hHeight = tempHHeight;
    this.hWidth = tempHWidth;
    this.posX = posX;
    this.posY = posY;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.hHeight * this.hWidth;
  }

  displayIt(){
  	rect(this.PosX,this.PosY,this.hWidth,this.hHeight);
  }
}