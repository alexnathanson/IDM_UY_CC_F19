//drawing video aka faceworms

let capture;
//hist is an array with 256 values representing the amount of that pixel
let trackThis = [0,0,0];

function setup() {
	createCanvas(320,240);
	capture = createCapture(VIDEO);
	capture.size(320,240);
	capture.hide();
}

function draw() {
  //background(0,0,0);

  if(capture){
	  image(capture,0,0);
	  //avgBrightness();
	  fill(255,0,0,100);
	  let thisLoc = colorTracker(trackThis);
	  ellipse(thisLoc[0],thisLoc[1],20,20);
  }
}

//arg is the color to track
function colorTracker(arg){
	//capture.loadPixels();

	let colLoc = [0,0];
	let colDist = 1000;

	  for(let bY =0; bY < capture.height; bY++){
	  	for(let bX=0;bX<capture.width;bX++){
	  		//let index = 4 * bX +(bY * capture.width);
	  		
	  		let r = capture.get(bX,bY)[0];
	  		let g =capture.get(bX,bY)[1];
	  		let b = capture.get(bX,bY)[2];

	  		let newDist = dist(r,g,b,arg[0],arg[1],arg[2]);
	  		if(newDist<colDist){
	  			colDist = newDist;
	  			colLoc = [bX,bY];
	  		}
	  	}
  	}
  //console.log(colDist);
  return colLoc;
}

function mousePressed(){
  //get the pixel data for the selected pixel
  let pixelData = capture.get(mouseX,mouseY);
  trackThis = [pixelData[0],pixelData[1],pixelData[2]];
    console.log(trackThis);
}