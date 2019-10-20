let gRX, gRY, gRDX, gRDY, gCX, gCY, gCR;

function setup(){
	createCanvas(windowWidth,600);

	gRX = int(width * .333);
	gRY = 250;
	gRDX = 300;
	gRDY =300;

	gCX = int(width * .66);
	gCY = 250;
	gCD = 400;
}

function draw(){
	background(255);

	noFill();
	stroke(1);

	push();
	rectMode(CENTER);
	mouseInRect(gRX,gRY,gRDX,gRDY);
	strokeWeight(3);
	rect(gRX,gRY,gRDX,gRDY);
	pop();

	push();
	ellipseMode(CENTER);
	mouseInCircle(gCX,gCY,gCD);
	strokeWeight(3);
	ellipse(gCX,gCY,gCD,gCD);
	strokeWeight(1);
	line(mouseX,mouseY,gCX,gCY);
	pop();

	fill(0);
	ellipse(mouseX,mouseY,10);
}


//this is for CENTER mode
function mouseInCircle(cX,cY,cD){

	let d = dist(cX,cY,mouseX,mouseY);
	//console.log(d);
	if(d < (cD/2)){
		//console.log("Mouse in circle");
		fill(255,0,0);
	}
}

//this is for CENTER mode
function mouseInRect(rX,rY,rDX,rDY){
	//demo lines
	line(0,rY-(rDY/2),width,rY-(rDY/2));
	line(0,rY+(rDY/2),width,rY+(rDY/2));
	line(rX-(rDY/2),0,rX-(rDY/2),height);
	line(rX+(rDY/2),0,rX+(rDY/2),height);

	if(mouseX > rX - (rDX/2) && //greater than lower X bound
		mouseX < rX + (rDX/2) && //greater than higher X bound
		mouseY > rY - (rDY/2) && //greater than lower Y bound
		mouseY < rY + (rDY/2)){// greater than higher Y bound

			//console.log("Mouse in rectangle");
		fill(255,0,0);
		} 
}