//drawing video aka faceworms

let capture;
let noiseScale;
let toff= [];

function setup() {
  createCanvas(640,480);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  //capture.hide();
	noiseScale = 0.005;

	for(let t = 0; t<200;t++){
		toff.push(random(1000));
	}
	noStroke();
}

function draw() {
	
	drawVideo();
}

function drawVideo(){
	
	for(let i = 0; i < 200;i++){
		toff[i]+=noiseScale;
		let eX = width*noise(toff[i]);
		//this needs to be offset so that  x doesn't equal y and
		//it doesn't move in a 45 degree angle
		let eY = height*noise(toff[i]+5);
		capture.loadPixels();
		let eC = capture.get(eX,eY);
		fill(eC[0],eC[1],eC[2]);
		ellipse(eX,eY,5,5);
	}

}

