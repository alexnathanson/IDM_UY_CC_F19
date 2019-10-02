let theHouse;

let allHouses = [];

function setup(){
	createCanvas(800,800);

	theHouse = new House(int(random(width)),
		int(random(height)),
		int(random(5,50)),
		int(random(5,50)),
		0,
		color(255,0,0),
		random(10,20));

	for (let h = 0;h < 10;h++){
		allHouses.push(new House(int(random(width)),
			int(random(height)),
			int(random(5,50)),
			int(random(5,50)),
			color(int(random(100,255)),int(random(100,255)),int(random(100,255))),
			color(int(random(100,255)),int(random(100,255)),int(random(100,255))),
			random(10,30)));
	}
}

function draw(){
	for(let h in allHouses){
		allHouses[h].displayIt();
	}

	theHouse.displayIt();
}

class House {
  constructor(posX, posY, tempHHeight, tempHWidth,tempHColor,tempHStroke,tempRoofHeight) {
    this.hHeight = tempHHeight;
    this.hWidth = tempHWidth;
    this.posX = posX;
    this.posY = posY;
    this.color = tempHColor;
    this.stroke = tempHStroke;
    this.strokeWeight = 3;
    this.roofHeight = tempRoofHeight;
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
  	strokeWeight(this.strokeWeight);
  	stroke(this.stroke);
  	fill(this.color);
  	rect(this.posX,this.posY,this.hWidth,this.hHeight);
  	this.roof();
  }

  roof(){
  	triangle(this.posX,this.posY, this.posX+(this.hWidth*0.5),this.posY-this.roofHeight,this.posX+this.hWidth,this.posY);
  }
}