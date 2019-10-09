let x;
let y;
let dim;
let fract;

//spiral variables
let radius = 0;
let theta = 0;

function setup(){
	createCanvas(800,800);
	x = 0;
	y = 0;
	dim = width/4;
	
	fract = new Fractal(0,0,dim, 25, 0.6);
	noFill(); 
	translate(width/2,height/2);
	fract.displayEllipse(fract.posX,fract.posY,fract.rDim);
	//fract.displayLine(fract.posX,fract.posY,200,.2);

}

function draw(){
	translate(width/2,height/2);
	//fractFunct(0, 0, 600);
}

function fractFunct(fx,fy,fd){
	ellipse(fx,fy,fd,fd);

	fd*= 0.7;
	if(fd > 200){
		fractFunct(fx-(fd/2),fy,fd);
		//fractFunct(fx+(fd/2),fy,fd);
		fractFunct(fx,fy-(fd/2),fd);
		//fractFunct(fx,fy+(fd/2),fd);
	}
}

class Fractal{
	constructor(tempPosX, tempPosY, tempDim,tempDepth,tempRate){
		this.posX = tempPosX;
		this.posY = tempPosY;
		this.depth = tempDepth;
		this.rDim = tempDim;
		this.rate = tempRate;
		this.radian = .1;
	}

	displayEllipse(dFX,dFY,dFDim){

		ellipse(dFX,dFY,dFDim);
		
		dFDim*= this.rate;
		if(dFDim > this.depth){
			this.displayEllipse(dFX-(dFDim/2),dFY,dFDim);
			this.displayEllipse(dFX+(dFDim/2),dFY,dFDim);
			this.displayEllipse(dFX,dFY-(dFDim/2),dFDim);
			this.displayEllipse(dFX,dFY+(dFDim/2),dFDim);
		}
	}

	displayLine(dFX,dFY,dFDim,dFRad){

		let dFXend = sin(dFRad)*dFDim;
		let dFYend = cos(dFRad)*dFDim*-1;

		line(dFX,dFY,dFXend,dFYend);
		
		dFDim*= this.rate;
		dFRad+= .01;
		this.radian*=this.rate;
		if(dFDim > this.depth){
			this.displayLine(dFXend*-1,dFYend,dFDim,dFRad);
			this.displayLine(dFXend,dFYend,dFDim,dFRad);
		}
	}

	calcPoint(cPDim){
		let CP = [sin(this.radian)*cPDim,cos(this.radian)*cPDim];
		console.log(CP);
		return CP;
	}
}