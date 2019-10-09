let capture;
let cropped;

function setup() {
  createCanvas(480, 480);
  //this automatically creates a HTML5 video element, which is why it needs to be hidden
  capture = createCapture(VIDEO);
  capture.hide();
  

}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
 //filter(BLUR,map(mouseX,0,width,0,10));

}

/*
class VideoFX{
	constructor(){

	}

	chromaKey(coloyKey, precision){

	}

	lumaKey(luma, precision,){

	}

	vignette(vX,vY,vRadius){

	}
}*/
