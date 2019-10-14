let angle = 0;

function setup(){
	//by default this is a 2D html5 canvas
	//by adding WEBGL you can access 3 dimensions
	createCanvas(windowWidth, windowHeight, WEBGL);
}

let zAxis,zScale = 0;
function draw(){
	background(255);

	//rotate(angle);

	zAxis+= 10;
	zScale+= 0.0001;
	if (zAxis>500){
		zAxis = -6000;
		zScale = 0;
	}
	push();
	translate(0,0,zAxis);
	scale(zScale);
	//rotateX(angle);
	//rotateZ(angle);
	rotateY(angle);
	//noStroke();
	//fill is function here as a "basic" material
	fill(255,0,0);
	//noFill();
	
	//normalMaterial();

	//translate is required to move things aroun in 3d
	//rectMode(CENTER);
	//box(150);
	torus(100,50);
	
	angle+= 0.05;

	pop();
	
	//noise1D();
}


function noise1D(){
	/*xoff needs to be global, otherwise it wont change every frame
	because xoff is reset to 0 everytime it produces the same output
	(but only as long as the program is running i.e. refreshing the page creates a new output)
	*/
	let xoff=0;

	for (let x=0; x < windowWidth*2; x++) {
		xoff = xoff + 0.005;
		let n = noise(xoff);
		push();
		//reset origin to traditional 0,0 then set height of boxes
		translate(-width/2,(-height/2)+(height*n),map(mouseX,10,width,-1000,1000));

		//noStroke();
		//fill(255*n,0,0);
		stroke(0,255*n,0);
		//rect(x, 0,2, height*2);
		line(x,0,0,x,height*2,0);
		pop();
	}
}