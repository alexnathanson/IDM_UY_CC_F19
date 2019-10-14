

let img,imgB,imgP;

let plantImgs = [];

let plantObj = [];

//preload runs once before setup and forces the program to wait until it is finished
function preload(){
	img = loadImage("images/bee.png");
	imgB = loadImage("images/bee_reversed.png");
	
	//imgP = loadImage("images/plants1.png");

	/*plantImgs[0] = loadImage("images/plants1.png");
	plantImgs[1] = loadImage("images/plants2.png");
	plantImgs[2] = loadImage("images/plants3.png");*/

	for (let p = 0; p < 3;p++){
		plantImgs[p] = loadImage(`images/plants${p+1}.png`);//must ` not ' for template literals
	}
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	
	//imageMode(CENTER);
	MyBee = new Bee(img,imgB,0,0,100,100);

	for (let p = 0; p<200;p++){
		let aPlant = plantImgs[int(random(plantImgs.length))];
		let pDimScaler = aPlant.height/aPlant.width;
		let pX = int(random(100,500));
		let pY = pX * pDimScaler;
		plantObj[p]= new ImageObject(aPlant,int(random(width))-100,int(random(height))-100,pX,pY);
	}

}

function draw(){
	background(50,150,0);

	//image(imgP,0,0);
	//image(plantImgs[int(random(plantImgs.length-1))],0,0);
	//plantObj[0].display();
	
	for(let i =0; i<plantObj.length;i++){
		plantObj[i].display();
	}

	//plantObj[0].display();

	MyBee.display();
}

class ImageObject{
	constructor(tempImg,tempX,tempY,tempDimX,tempDimY){
		this.img = tempImg;
		this.x = tempX;
		this.y = tempY;
		this.dimX = tempDimX;
		this.dimY = tempDimY;
		this.imageScaler = 1.0;
	}

	display(){
		image(this.img,this.x,this.y,this.dimX,this.dimY);
	}
}

class Bee extends ImageObject {
	constructor(tempImg, tempImg2,tempX,tempY,tempDimX,tempDimY){
		super(tempImg,tempX,tempY,tempDimX,tempDimY);
		this.img2 = tempImg2;
		this.nX = 0.0;
		this.nY = 0;
		this.t = 0.0;
		this.inc= 0.005;
		this.oldNX = 0;
	}

	display(){
		this.noise();
		if (this.oldNX>this.nX){
			image(this.img2,width*this.nX,height*this.nY,this.dimX,this.dimY);
		} else {
			image(this.img,width*this.nX,height*this.nY,this.dimX,this.dimY);
		}
		this.oldNX = this.nX;

	}

	noise(){
		this.nX = noise(this.t);
		this.nY = noise(this.t + 5);
		this.t+= this.inc;
	}
}