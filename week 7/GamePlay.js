
class GamePlay{
	constructor(){
		this.round = 1;
		this.shape = 0;
		this.lives = 3;
		this.speed = this.round;
		this.roundTime = 0.0;
	}

	//can the constructor just be rerun?
	reset(){
		this.round = 1;
		this.shape = 0;
		this.lives = 3;
		this.speed = this.round;
		this.roundTime = millis();
	}

	nextRound(){
		//switch between 0 and 1 every round
		this.round ++;

		this.shape = abs(this.shape-1);

		this.speed = this.round;

		this.roundTime = millis();
	}

	newRoundAnimation(){
		//3 second long new round animation
		let nRT = (millis()-this.roundTime)/1000.0;
		if( nRT< 4){
			fill(random(255),random(255),random(255));
			textAlign(CENTER,CENTER);
			textSize(50* nRT);
			text("Round " + this.round,width/2,height/2)
			return true;
		} else{
			return false;
		}
	}

	displayGameInfo(argX, argY){
		fill(0);
		textAlign(LEFT);
		textSize(20);
		text("Round: "+ this.round,argX,argY);
		text("Lives: " + this.lives, argX, argY + 30);
	}

	drawChecker(dCX,dCY,dCDimX,dCDimY,tColor1,tColor2,tColor3){
		let xBox = 4;
		let yBox = 20;

		let rectX = dCDimX/xBox;
		let rectY = dCDimY/yBox;

		let cColor = color(tColor1,tColor2,tColor3);

		noFill();
		stroke(0);
		rectMode(CORNER);
		rect(dCX,dCY,dCDimX,dCDimY);
		fill(cColor);

		for (let cX = 0; cX < xBox; cX++){
			for(let cY =0;cY < yBox;cY++){
				if(cX%2 == 0 && cY % 2 ==0){
					rect(dCX+(cX*rectX),dCY+(cY*rectY),rectX,rectY);
				}
				else if(cX%2 != 0 && cY % 2 !=0){
					rect(dCX+(cX*rectX),dCY+(cY*rectY),rectX,rectY);
				}
			}
		}
	}

	checkKey(){
		let kP = [0,0];

		if(keyIsDown(LEFT_ARROW)){
			kP[0] = -1 - this.round;//-2 compensates for the obstacle shifts
		} else if(keyIsDown(RIGHT_ARROW)){
			kP[0] = this.round;
		}

		if(keyIsDown(UP_ARROW)){
			kP[1] = -1 * this.round;
		}else if(keyIsDown(DOWN_ARROW)){
			kP[1] = this.round;
		}

		return kP;

	}

	set roundNumber(arg){
		this.round = arg;
	}

	get roundNumber(){
		return this.round;
	}

	set gShape(arg){
		this.shape = arg;
	}

	get gShape(){
		return this.shape;
	}

	get glives(){
		return this.lives;
	}

	set glives(arg){
		this.lives = arg;
	}

	get getSpeed(){
		return this.speed;
	}
}

