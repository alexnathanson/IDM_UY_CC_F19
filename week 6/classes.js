let theHouse;

let allBuildings = [];

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

		let bR = random(1);
		console.log(bR);
		//5% of buildings are schools
		 if (bR < 0.05){
			allBuildings.push(new School(int(random(width)),
			int(random(height)),
			int(random(20,100)),
			int(random(20,100)),
			color(int(random(100,255)),int(random(100,255)),int(random(100,255))),
			color(int(random(100,255)),int(random(100,255)),int(random(100,255))),
			random(10,30)));
		} else {
			//95% of buildings are houses
			allBuildings.push(new House(int(random(width)),
			int(random(height)),
			int(random(5,50)),
			int(random(5,50)),
			color(int(random(100,255)),int(random(100,255)),int(random(100,255))),
			color(int(random(100,255)),int(random(100,255)),int(random(100,255))),
			random(10,30)));
		}

		
	}

	/*
	console.log(this);
	console.log(window)
	console.log(this.document);
	console.log(document);
	*/
}

function draw(){

	background(255);
	for(let h in allBuildings){
		allBuildings[h].displayIt();
		if(allBuildings[h].posX<width){
			allBuildings[h].posX+=1;
			//allHouse[h].posY+=1;
		} else {
			allBuildings[h].posX = 0 - allBuildings[h].bWidth;
			allBuildings[h].posY = int(random(windowHeight));
			allBuildings[h].color= color(int(random(100,255)),int(random(100,255)),int(random(100,255)));


		}
		

	}

	//theHouse.displayIt();
}

class Building {
	constructor(tempPosX, tempPosY,tempHHeight, tempHWidth){
		this.posX = tempPosX;
    	this.posY = tempPosY;
    	this.bHeight = tempHHeight;
    	this.bWidth = tempHWidth;
    	//console.log("BUILDING CONSTRUCTOR");
    	//console.log(this);
	}

	displayIt(){
		rect(this.posX,this.posY,this.hWidth,this.hHeight);
	}
}

//inheritance
class House extends Building{
  constructor(tempPosX, tempPosY,tempHHeight, tempHWidth,tempHColor,tempHStroke,tempRoofHeight) {
  	super(tempPosX, tempPosY,tempHHeight, tempHWidth)
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
  	rect(this.posX,this.posY,this.bWidth,this.bHeight);
  	this.roof();
  }

  roof(){
  	triangle(this.posX,this.posY, this.posX+(this.bWidth*0.5),this.posY-this.roofHeight,this.posX+this.bWidth,this.posY);
  }
}

class School extends Building{
	constructor(tempPosX, tempPosY,tempHHeight, tempHWidth,tempHColor,tempHStroke,tempRoofHeight) {
	  	super(tempPosX, tempPosY,tempHHeight, tempHWidth)
	    this.color = tempHColor;
	    this.stroke = tempHStroke;
	    this.strokeWeight = 3;
	    this.roofHeight = tempRoofHeight;
	  }

	displayIt(){
	  	strokeWeight(this.strokeWeight);
	  	stroke(this.stroke);
	  	fill(this.color);
	  	rect(this.posX,this.posY,this.bWidth,this.bHeight);
	  	this.roof();
	}

	roof(){
	  	quad(this.posX,this.posY, this.posX+(this.bWidth*0.25),this.posY-this.roofHeight,this.posX+(this.bWidth*0.75),this.posY-this.roofHeight,this.posX+this.bWidth,this.posY);
	}
}