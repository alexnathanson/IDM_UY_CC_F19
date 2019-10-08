let scrollingNoiseArray;
let xoff,yoff;
let tofftoff = 0;

function setup(){
	createCanvas(windowWidth,800);
	xoff=0;
	yoff=0;
	toff = 0;
	scrollingNoiseArray = new Array(windowWidth);



}


function draw() {
  //background(204);
  

  //noise1D();

  //scrollingNoise1D();

  //noise2D();

 	noise3D();


}

//noise1D is in red
function noise1D(){
	/*xoff needs to be global, otherwise it wont change every frame
	because xoff is reset to 0 everytime it produces the same output
	(but only as long as the program is running i.e. refreshing the page creates a new output)
	*/
	xoff=0;

	for (let x=0; x < windowWidth; x++) {
		xoff = xoff + 0.005;
		let n = noise(xoff);
		stroke(255*n,0,0);
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

function noise3D(){
	//xoff = 0;
	//yoff = 0;
	let noiseScale = 0.005;

	toff+= 0.01;
	for (let x=0; x < 400; x++) {
		for(let y = 0; y<400;y++){
			
			let n = noise(x*noiseScale,y*noiseScale,toff);
			let c = color(255 * n);
    		set(x,y,c);
		}
	}
	updatePixels();
}

function noiseVectors(){
	
}