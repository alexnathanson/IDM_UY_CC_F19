//drawing video aka faceworms

let capture;
//hist is an array with 256 values representing the amount of that pixel
let hist = [[]];

function setup() {
	createCanvas(320,240);
	capture = createCapture(VIDEO);
	capture.size(320,240);
	capture.hide();

	//console.log(capture);
	//initialize the histogram values at 0
  	let histVal = [0,0,0];
  	hist[0]=histVal;
	for(let h=0;h<255;h++){
		hist.push(histVal);
	}
}

function draw() {
  //background(0,0,0);

  if(capture){
	  image(capture,0,0);
	  //avgBrightness();
	  fill(255,0,0,100);
	  //let thisLoc = brightestPixel();
	  let thisLoc = colorTracker([255,255,0]);
	  ellipse(thisLoc[0],thisLoc[1],20,20);
  }
  
}



function avgBrightness(){
  capture.loadPixels();
  let all = 0;
  for(let bY =0; bY < capture.height; bY++){
  	for(let bX=0;bX<capture.width;bX++){
  		all += avgPixel(capture.get(bX,bY));
  	}
  }
  let avg = all/(capture.width*capture.height);
  //console.log(avg);

}

function avgPixel(arg){
	let oneAvg = 0;
	for(let pV = 0;pV<3;pV++){
		oneAvg +=arg[pV];
	}
	oneAvg = oneAvg/3;
	return oneAvg;
}

//tracks the brights pixel(but chooses the top left if multiple pixels have the same brightest value)
function brightestPixel(){
	let br = 0.0;
	let brLoc = [0,0];

	capture.loadPixels();
	  for(let bY =0; bY < capture.height; bY++){
	  	for(let bX=0;bX<capture.width;bX++){
	  		/*let index = bX +(bY * capture.width);
	  		let onePix = capture.pixels[index];*/
	  		//average the pixel
	  		let oneAvg = avgPixel(capture.get(bX,bY));
	  		//console.log(max([br,oneAvg]));
	  		if(max([br,oneAvg])!=br){
	  			br=oneAvg;
	  			brLoc = [bX,bY];
	  		}
	  	}
  	}
  return brLoc;
}

//arg is the color to track
function colorTracker(arg){
	capture.loadPixels();

	let colLoc = [0,0];
	let colDist = 600;

	  for(let bY =0; bY < capture.height; bY++){
	  	for(let bX=0;bX<capture.width;bX++){
	  		let index = 4 * bX +(bY * capture.width);
	  		
	  		let r = capture.pixels[index];
	  		let g = capture.pixels[index + 1];
	  		let b = capture.pixels[index + 2];

	  		let newDist = dist(r,g,b,arg[0],arg[1],arg[2]);
	  		if(newDist<colDist){
	  			colDist = newDist;
	  			colLoc = [bX,bY];
	  		}
	  	}
  	}
  return colLoc;
}

function histogram(){
	vid.loadPixels();
	for (let y = 0; y < vid.height; y++) {
		for (let x = 0; x < vid.width; x++) {
		  hist[vid.pixels[i]][0]++;
		  hist[vid.pixels[i+1]][0]++;
		  hist[vid.pixels[i+2]][0]++;
		}
	}
}