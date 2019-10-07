let theHouse;

let allHouses = [];

function setup(){
	createCanvas(windowWidth,800);

	theHouse = new House(int(random(width)),
		int(random(height)),
		int(random(5,50)),
		int(random(5,50)),
		0,
		color(255,0,0),
		random(10,20));

	for (let h = 0;h < 20;h++){
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

	background(255);
	for(let h in allHouses){
		allHouses[h].displayIt();
		if(allHouses[h].posX<width){
			allHouses[h].posX+=1;
			//allHouse[h].posY+=1;
		} else {
			allHouses[h].posX = 0 - allHouses[h].hWidth;
			allHouses[h].posY = int(random(windowHeight));
			allHouses[h].color= color(int(random(100,255)),int(random(100,255)),int(random(100,255)));


		}
		

	}

	//theHouse.displayIt();
}

class Building {
	constructor(tempPosX, tempPosY){
		this.posX = tempPosX;
    	this.posY = tempPosY;
	}
}

//inheritance
class House extends Building{
  constructor(tempPosX, tempPosY,tempHHeight, tempHWidth,tempHColor,tempHStroke,tempRoofHeight) {
  	super(tempPosX, tempPosY)
    this.hHeight = tempHHeight;
    this.hWidth = tempHWidth;
    this.color = tempHColor;
    this.stroke = tempHStroke;
    this.strokeWeight = 3;
    this.roofHeight = tempRoofHeight;
  }
  // Getter

  /*
  get posX() {
    return this.posX;
  }
   get posY() {
    return this.posY;
  }

  set posX(){

  }

  set postY(){

  }*/

  // Method
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