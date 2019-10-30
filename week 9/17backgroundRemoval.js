//drawing video aka faceworms

let capture, backgroundImg,foregroundImg,threshold,toff;

function preload(){
	img = loadImage("assets/stranger-things-gang.jpg");
}
function setup() {
	createCanvas(windowWidth,240);
	capture = createCapture(VIDEO);
	capture.size(320,240);
	capture.hide();

	threshold = 20;
	backgroundImg = createImage(capture.width,capture.height);
	foregroundImg = createImage(capture.width,capture.height);
	//foregroundImg.copy(capture,0,0,capture.width,capture.height,0,0,capture.width,capture.height);
	captureBackground();

	toff= 0;

	img.resize(0,240);

}

function draw() {
	toff+= 0.01;
	let c = color(255*noise(toff),255*noise(toff+5),255*noise(toff+10));
  	background(c);
  	
  	image(capture,0,0);

	image(backgroundImg,320,0);

	subtract();

	image(img,640,0);
  	image(foregroundImg,640,0);


}

//arg is the color to track
function subtract(){
	capture.loadPixels();
	backgroundImg.loadPixels();
	foregroundImg.loadPixels();

	for(let bY =0; bY < capture.height; bY++){
	  	for(let bX=0;bX<capture.width;bX++){
	  		let index = 4 * (bX +(bY * capture.width));
	  		
	  		let r = capture.pixels[index];
	  		let g =capture.pixels[index+1];
	  		let b = capture.pixels[index+2];

	  		let rB = backgroundImg.pixels[index];
	  		let gB =backgroundImg.pixels[index+1];
	  		let bB = backgroundImg.pixels[index+2];

	  		let dista = dist(r,g,b,rB,gB,bB);
	  		if(dista<threshold){
	  			foregroundImg.pixels[index+3]=0;
	  		} else {
	  			//set foreground to capture
	  			foregroundImg.pixels[index] =r;
	  			foregroundImg.pixels[index+1]=g;
	  			foregroundImg.pixels[index+2]=b;
	  			foregroundImg.pixels[index+3]=255;

	  		}
	  	}
  	}

  	foregroundImg.updatePixels();
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

function keyPressed(){
	if(key=='c'){
		captureBackground();
	}
}

function mouseDragged(){
	threshold=map(mouseX,0,width,0,255);
}