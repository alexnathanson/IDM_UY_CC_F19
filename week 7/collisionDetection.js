let shapes = [];

let t = 0;
let inc = 0.005;

function setup(){
	createCanvas(windowWidth,500);
	
	for (let h = 0; h < 15; h++){
		shapes[h] = new SomeShapes(int(random(2)));
	}

	/*shapes[0] = new SomeShapes(1);
	shapes[1] = new SomeShapes(0);
	*/

}

function draw(){
	background(255);

	t += inc;

	//move it
	for(let s = 0; s < shapes.length;s++){
		shapes[s].moveIt(t);
	}

	//shapes[1].mouseIt();

	//check for collisions
	for(let sB = 0; sB < shapes.length;sB++){
		for(let sA = sB+1; sA < shapes.length;sA++){
			//if they collided, update the 2nd shape
			if(shapes[sB].detectCollision(shapes[sA])){
				shapes[sA].collision = true;
			}
			
		}
	}

	//display it
	for(let s = 0; s < shapes.length;s++){
		shapes[s].display();
	}
	
}

class SomeShapes{
	constructor(tempShape){
		this.shape = tempShape;//0 = ellipse, 1 = rectangle
		this.x = width/2;
		this.y = height/2;
		this.dimX = int(random(50,150));
		this.dimY = int(random(50,150));
		this.noiseOff = int(random(100));
		this.color = color(20,20,20,0);
		this.hitColor = color(int(random(255)),int(random(255)),int(random(255)),150);
		this.collision = false;
		this.collisionVisual = true;
	}

	moveIt(argT){
		this.x = constrain(width * noise(argT + this.noiseOff),this.dimX/2,width-(this.dimX/2));
		this.y = constrain(height * noise(argT + this.noiseOff + 5),this.dimY/2,height-(this.dimY/2));
	}

	mouseIt(){
		this.x = mouseX;
		this.y = mouseY;
	}

	detectCollision(arg){
		let result = false;
		//circle to circle
		if(this.shape == 0 && arg.shape ==0){
			//check if the distance between centers is less
			//than the radii combined
			if(dist(this.x,this.y,arg.x,arg.y) < (this.dimX/2)+(arg.dimX/2)){
				this.collision = true;
				result = true;
			}
		} else if (this.shape == 1 && arg.shape ==1){ //rect to rect
			let minDistX = (this.dimX/2) + (arg.dimX/2);
			let minDistY = (this.dimY/2) + (arg.dimY/2);

			if(abs(this.x-arg.x) < minDistX && abs(this.y-arg.y) < minDistY){
				this.collision = true;
				result = true;
			}

			

		} else if (this.shape != arg.shape){//circle to rect

			let circX,circY,circDia, rectX, rectY,rectDimX,rectDimY;
			//if this is a circle & arg is a rect
			if (this.shape == 0){
				circX = this.x;
				circY = this.y;
				circDia = this.dimX;
				rectX = arg.x;
				rectY = arg.y;
				rectDimX = arg.dimX;
				rectDimY= arg.dimY;

			//if this is a rectangle and arg is a circle
			} else{
				circX = arg.x;
				circY = arg.y;
				circDia = arg.dimX;
				rectX = this.x;
				rectY = this.y;
				rectDimX = this.dimX;
				rectDimY= this.dimY;
			}
			/*1) check if the circle is inside the outer radius of the rectangle
			2) check if the circle is inside the inner radius of the circle
			3) check the points*/
			
			
			//outer radius of rect
			let outerRect;
			//inner radius of rect
			let innerRect;
			
			outerRect = dist(rectX,rectY, rectX-(rectDimX),rectY-(rectDimY));

			if(rectDimX > rectDimY){
				innerRect = rectDimY;
			} else{
				innerRect = rectDimX;
			}

			//part 1check if its within the outer radius
			if(dist(circX,circY,rectX,rectY) < (circDia/2)+(outerRect/2)){
				if(this.collisionVisual){
					noFill();
					stroke(255,0,0);
					ellipse(rectX,rectY,outerRect,outerRect);
				}
				//part 2 check if its within the inner radius
				if(dist(circX,circY,rectX,rectY) < (circDia/2)+(innerRect/2)){
					//display inner radius
					if(this.collisionVisual){
						ellipse(rectX,rectY,innerRect,innerRect);
					}
					this.collision = true;
					result = true;
				} else {

					//check where the shapes are in relation to one another
					if(circY + (circDia/2) > rectY - (rectDimY/2) && circY - (circDia/2) < rectY + (rectDimY/2)){
						if(circX < rectX){
							if(dist(circX,circY,rectX-(rectDimX/2),circY) < circDia/2){
								this.collision = true;
								result = true;
							}			
						} else {
							if(dist(circX,circY,rectX+(rectDimX/2),circY) < circDia/2){
								this.collision = true;
								result = true;
							}
						}
					
					} else {
						if(circY < rectY){
							if(dist(circX,circY,circX,rectY-(rectDimY/2)) < circDia/2){
								this.collision = true;
								result = true;
							}			
						} else {
							if(dist(circX,circY,circX,rectY+(rectDimY/2))< circDia/2){
								this.collision = true;
								result = true;
							}
						}
					}
				}
			}
		} else {
			this.collision = false;
			result = false;
		}

		return result;
	}

	display(){
		rectMode(CENTER);
		ellipseMode(CENTER);

		if(this.collision == true){
			fill(this.hitColor);
		} else if (this.collision == false) {
			fill(this.color);
		}

		if(this.shape == 0){
			ellipse(this.x,this.y,this.dimX,this.dimX);
		} else if (this.shape ==1){
			rect(this.x,this.y,this.dimX,this.dimY);
		}

		this.collision = false;
	}
}