let theta;
let radius;

function setup(){
	createCanvas(windowWidth,windowHeight);
	theta = PI;
	radius = 300;
}

function draw(){
	translate(windowWidth/2,windowHeight/2)
	circled();

}



function circled(){

	theta+=.5;
	//radius= 50;
	x=cos(theta) + radius;
	y=sin(theta) + radius;

	console.log(x);
	rect(x,y,50,50);

}
