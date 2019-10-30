//drawing video aka faceworms

let capture, prevCapture,motion,threshold;

function setup() {
	createCanvas(windowWidth,240);
	capture = createCapture(VIDEO);
	capture.size(320,240);
	capture.hide();

	threshold = 20;
	prevCapture = createImage(capture.width,capture.height);
	motion = createImage(capture.width,capture.height);

	copyFrame();

}

function draw() {

  	background(0);
  	
  	image(capture,0,0);

	detectMotion();

	image(motion,320,0);

	copyFrame();
}

function copyFrame(){
	prevCapture.copy(capture,0,0,capture.width,capture.height,0,0,capture.width,capture.height);
	//prevCapture.updatePixels();
}

//arg is the color to track
function detectMotion(){
	capture.loadPixels();
	prevCapture.loadPixels();
	motion.loadPixels();
	
	let totalMotion = 0;

	for(let bY =0; bY < capture.height; bY++){
	  	for(let bX=0;bX<capture.width;bX++){
	  		let index = 4 * (bX +(bY * capture.width));
	  		
	  		let r = capture.pixels[index];
	  		let g =capture.pixels[index+1];
	  		let b = capture.pixels[index+2];

	  		let rB = prevCapture.pixels[index];
	  		let gB =prevCapture.pixels[index+1];
	  		let bB = prevCapture.pixels[index+2];

	  		let dista = dist(r,g,b,rB,gB,bB);

	  		totalMotion+=dista;

	  		//you dont need to display the motion to measure it
	  		if(dista<threshold){
	  			motion.pixels[index+3]=0;
	  		} else {
	  			//set foreground to capture
	  			motion.pixels[index] =r;
	  			motion.pixels[index+1]=g;
	  			motion.pixels[index+2]=b;
	  			motion.pixels[index+3]=255;

	  		}
	  	}
  	}
  	motion.updatePixels();

  	let avgMotion = totalMotion/(capture.width*capture.height);

  	ellipse(width/2,height/2,avgMotion,avgMotion);
}

function captureBackground(){
	capture.loadPixels();
	backgroundImg.loadPixels();

	for(let ca =0;ca<capture.pixels.length;ca++){
		backgroundImg.pixels[ca] = capture.pixels[ca];
	}

	backgroundImg.updatePixels();
	//capture.updatePixels();
}

function mouseDragged(){
	threshold=map(mouseX,0,width,0,255);
}