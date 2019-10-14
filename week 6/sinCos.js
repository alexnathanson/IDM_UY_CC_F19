let x;
let y;

//spiral variables
let radius = 0;
let theta = 0;

function setup(){
	createCanvas(windowWidth,800);
	
	//sinWave();
	//cosWave();

}

function draw(){
	push();
	translate(width/2,height/2);
	spiral();
	//circledTen();
	pop();
}

function sinWave(){
	push();
	fill(255,0,0);
	translate(0,height/2);

	let amp = 200;
	let oldSY = 0;
	theta=0;
	for(let sx = 0; sx < width/10;sx++){
		let newSY = sin(theta)*amp;
		ellipse(sx*10,newSY,6,6);
		theta+=0.1;
	}
	pop();
}

function cosWave(){
	push();
	fill(0,255,255);
	translate(0,height/2);

	let amp = 200;
	let oldSY = 0;
	theta=0;
	for(let sx = 0; sx < width/10;sx++){
		let newSY = cos(theta)*amp;
		ellipse(sx*10,newSY,6,6);
		theta+=0.1;
	}
	pop();
}

function spiral(){
	noFill();
	theta+= .1;
	radius+= .5;
	x=cos(theta);
	y=sin(theta);

	ellipse(x*radius,y*radius,50,50);
}

function circled(){

	theta+=.05;
	radius = 200;
	x=cos(theta) * radius;
	y=sin(theta) * radius;

	ellipse(x,y,50,50);
}


function circledTen(){

	//theta+=.05;
	radius = 200;

	for (let o = 0;o <10;o++){
		theta = (TWO_PI/10)*o;
		x=cos(theta) * radius;
		y=sin(theta) * radius;

	ellipse(x,y,50,50);
	}
	
}