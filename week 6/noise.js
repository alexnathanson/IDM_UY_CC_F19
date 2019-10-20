let scrollingNoiseArray;
let xoff,yoff,toff;

function setup(){
	createCanvas(windowWidth,800);
	xoff=0;
	yoff=0;
	toff = 0;
	scrollingNoiseArray = new Array(windowWidth);



}


function draw() {
  background(204,0,0);
  

  //noise1D();

  //noiseMountains2D();
  //scrollingNoise1D();

  //noise2D();


 noise3D();

 //ellipseNoise1D();
 
 //flowField();

}

//noise1D is in red
function noise1D(){
	/*xoff needs to be global, otherwise it wont change every frame
	because xoff is reset to 0 everytime it produces the same output
	(but only as long as the program is running i.e. refreshing the page creates a new output)
	*/
	xoff=0;

	for (let x=0; x < windowWidth; x++) {
		xoff = xoff + .005;
		let n = noise(xoff);
		stroke(255*n,0,0);
		line(x, height*n,x, height);
	}
}

let mT = 0;
function noiseMountains2D(){
	/*xoff needs to be global, otherwise it wont change every frame
	because xoff is reset to 0 everytime it produces the same output
	(but only as long as the program is running i.e. refreshing the page creates a new output)
	*/
	xoff=0;
	mT+= 0.01;
	for (let x=0; x < windowWidth; x++) {
		xoff = xoff + .005;
		let n = noise(xoff,mT);
		stroke(255*n,0,255*n);
		line(x, height*n,x, height);  	
	}
}

//this in green
function scrollingNoise1D(){
	//xoff =0;
	
	//remove the first item from an array
	scrollingNoiseArray.shift();

	//get a new noise value
	xoff = xoff + 0.005;
	n = noise(xoff);
	//add the new value to the end of the array
	scrollingNoiseArray.push(n);

	//draw it
	for (let a=0; a < scrollingNoiseArray.length; a++) {
		stroke(0,255*scrollingNoiseArray[a],0);
		line(a, height*scrollingNoiseArray[a], a, height);  	
	}
}

function noise2D(){
	//xoff = 0;
	//yoff = 0;
	let noiseScale = 0.005;

	for (let x=0; x < 400; x++) {
		for(let y = 0; y<400;y++){
			
			let n = noise(x*noiseScale,y*noiseScale);
			let c = color(255 * n);
    		set(x,y,c);
		}
	}
	updatePixels();
}

function ellipseNoise1D(){
	//xoff = 0;
	//yoff = 0;
	let noiseScale = 0.005;
	toff+= 0.005;

	let eX = windowWidth*noise(toff);
	//this needs to be offset so that  x doesn't equal y and
	//it doesn't move in a 45 degree angle
	let eY = windowHeight*noise(toff+5);
	fill(255*noise(toff+10));
	ellipse(eX,eY,50,50)
}

function noise3D(){
	//xoff = 0;
	//yoff = 0;
	let noiseScale = 0.05;
	let tScale = 0.00005;

	for (let x=0; x < 400; x++) {
		for(let y = 0; y<400;y++){
			
			let n = noise(x*noiseScale,y*noiseScale,tScale*millis());
			let c = color(255 * n);
    		set(x,y,c);
		}
	}
	updatePixels();
}

function flowField(){
	
	let inc = 0.1;
	let vecScale = 20;
	let rows = floor(width/vecScale);
	let columns = floor(height/vecScale);
	toff+=inc;
	xoff=0; 
	for (let x=0; x < rows; x++) {
		yoff=0;
		for(let y = 0; y< columns;y++){
			let index = (x+y * width) * 4;
			let radi = noise(xoff,yoff,toff) * TWO_PI;//multiply TWO_PI by 4 to get a fuller range of directions
			let v = p5.Vector.fromAngle(radi);
			yoff+=inc;
			stroke(0);
			push();
			translate(x*vecScale,y*vecScale);
			rotate(v.heading());
			line(0,0,vecScale,0);
			pop();
		}
		xoff+=inc;
	}
}