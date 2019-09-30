function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

var anchorX = -10;
var anchorY = -10;

var angle=0.0;
var speed = 0.005;
var angleDirection =1;

var gAngle=0.0;
var gSpeed = 0.05;
var gAngleDirection = 1;

var aAngle=0.0;
var aSpeed = 0.05;
var aAngleDirection = 1;

function draw() {
	background(100);
	fill(255);
//machine arm
	push();
	
		//move to start position
		translate((windowWidth/3)+anchorX, (windowHeight/3)+anchorY);
		//rotate(mouseX/100.0);
		rotate(angle);
		//top section
		rect(anchorX, anchorY, 20, 100,5);
		ellipse(0, 0, 5, 5);

		//move middle joint
		translate(0, 80);
		//rotate(mouseX/100.0);
		rotate(angle*2);
	
		//middle section
		rect(-8, -5, 16, 70, 5);
		ellipse(0, 0, 5, 5);

		//move bottom joint
		translate(0, 60);
		//rotate(mouseX/100.0);
		rotate(angle*2.5);
	
		//bottom section
		rect(-5, -5, 10, 50, 5)
		ellipse(0, 0, 5, 5);

	//reset rotations and translations
	pop();
	
	angle+=speed * angleDirection;
	if((angle>QUARTER_PI)|| (angle<(QUARTER_PI*-1))){
		angleDirection *= -1;
	}



//gear
	//move to start position
	push();
		translate(2*(windowWidth/3), (windowHeight/2));

		push();
			rotate(gAngle);
			ellipse(0,0, 200);//main gear

			//main gear details
			gearDetail(8,50,50,25);

			fill(255);
			//pivot point
			ellipse(0,0, 10);

			//gear teeth
			push();
				translate(0,115);
				fill(0);
				quad(-20,-20, 20, -20, 10, 10, -10, 10);
				//rect(-10,-10,20,20);
			pop();
	pop();
	
	//big gear #2
		push();
			translate(-200,0);
			rotate(gAngle);
			ellipse(0,0, 200);//main gear

			//main gear details
			gearDetail(8,50,50,25);

			fill(255);
			//rect(-10, -10, 200, 20,5);//gear arm
			//pivot point
			ellipse(0,0, 10);
		pop();
	
	//gear arm
	push();
		//translate((mouseX/100.0),(mouseX/100.0));
		var tX = map(sin(gAngle),-1.0, 1.0,90,-90);
		var tY = map(cos(gAngle),-1.0, 1.0,-90,90);

		translate(tX,tY);

		rect(-225, -10, 250, 20,5);//gear arm
	pop();
	
		//2nd gear
		push();
			translate(0,150);
			rotate(gAngle*-1.0);
			ellipse(0,0,100);
			gearDetail(6,25,25,10);
		pop();
	pop();
	
	gAngle+=gSpeed * gAngleDirection;
	if((gAngle>TWO_PI) || (gAngle<(TWO_PI*-1))){
		gAngleDirection *= -1;
	}
	
	
	


//standalone gear arm2
	push();
		translate(300,300);
	
		push();
			//translate(0,150);
			rotate(aAngle*-1);
			ellipse(0,0,100);
			ellipse(0,0,10);
			gearDetail(6,25,25,10);
		pop();
	
		var aX = map(sin(aAngle),-1.0, 1.0,-50,50);
		var aY = map(cos(aAngle),-1.0, 1.0,-50,50);

		//translate(aX,aY);
	rect(-10,map(cos(aAngle),-1.0,1.0,200,300)-10,20,200);
		strokeWeight(10);

	line(aX,aY,0,map(cos(aAngle),-1.0,1.0,200,300));
	
		//rect(-125, 0, 250, 20,5);//gear arm
	pop();
	
	aAngle+=aSpeed * aAngleDirection;
	
}

function gearDetail(amtDeets, posDeetsX, posDeetsY, sizeDeets){
	fill(100);
	for(var d = 0; d < amtDeets; d++){
		//fill((255/amtDeets)*d);
		push();
		rotate(TWO_PI * d / amtDeets);
		ellipse(posDeetsX,posDeetsY,sizeDeets);
		pop();
	}
}