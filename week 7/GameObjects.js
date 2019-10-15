
class Obstacles{
	constructor(tempX,tempY,tempDimX,tempDimY,tempShape){
		this.x = tempX;
		this.y = tempY;
		this.dimX = tempDimX;
		this.dimY = tempDimY;
		this.cBool = false;
		this.cBoolBool = false;
		this.shape = tempShape;
	}

	display(){

		if(this.cBool){
			fill(255,0,0);
		} else{
			fill(100);
		}

		this.shift();

		if(this.shape == 0){
			rectMode(CENTER);
			rect(this.x,this.y,this.dimX,this.dimY);
		} else if (this.shape == 1){
			ellipse(this.x,this.y,this.dimX,this.dimX);
		}
		
	}

	checkCollision(tempPosition){
		if(tempPosition[0]>30){
			if(this.shape == 0){ //rect
				//the radius of the player + the radius of this obstacle
				let minDistanceX = (this.dimX + tempPosition[2])/2;
				let minDistanceY = (this.dimY + tempPosition[3])/2;
				
				if(abs(this.x - tempPosition[0]) < minDistanceX && abs(this.y - tempPosition[1]) < minDistanceY){
					this.cBool = true;
				} else{
					this.cBool = false;
					this.cBoolBool = false;
				}
			} else if (this.shape ==1){ //ellipse
				//the radius of the player + the radius of this obstacle
				//find the distance between the two center points and check if it is less than the sum of both radii
				let minDistanceX = (this.dimX + tempPosition[2])/2;
				let minDistanceY = (this.dimY + tempPosition[3])/2;
				
				if(dist(this.x,this.y,tempPosition[0],tempPosition[1]) < minDistanceX){
					this.cBool = true;
				} else{
					this.cBool = false;
					//this 2nd boolean makes sure it doesn't keep counting collisions with the same object
					this.cBoolBool = false;
				}
			}

			if(this.cBool && !this.cBoolBool){
				this.cBoolBool  = true;
				myGame.glives = myGame.glives - 1;
				explosionSound.play();
				if(myGame.glives<=0){
					myGame.reset();
				}
			}
		}
		
	}

	shift(){
		this.x -= myGame.getSpeed;
		//this.y -= 1;

		if(this.x + (this.dimX/2) <0){
			this.x = windowWidth + this.dimX;
		}
	}
}

class Player extends Obstacles{
	constructor(tempX,tempY,tempDimX,tempDimY,tempShape){
		super(tempX,tempY,tempDimX,tempDimY,tempShape);
		this.x = 0;
	}

	get position(){
		return [this.x,this.y,this.dimX,this.dimY];
	}

	set position(xY){
		this.x += xY[0];
		this.y += xY[1];

		//incremement the round when you reach the checkered boxes
		if(this.x+(this.dimX/2) > width-40){
			this.x = 0;
			//myGame.roundNumber = myGame.roundNumber +1;
			myGame.nextRound();
			this.shape = myGame.gShape;
			createObstacles(myGame.roundNumber);
		}
	}

	display(){
		//let cBool = this.checkCollision();
		fill(0,0,255);
		
		if(this.shape == 0){
			rectMode(CENTER);
			rect(this.x,this.y,this.dimX,this.dimY);
		} else if (this.shape == 1){
			ellipse(this.x,this.y,this.dimX,this.dimX);
		}
	}
}