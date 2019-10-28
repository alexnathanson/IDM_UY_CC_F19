let cX,cY;
let yLine;

function setup(){
	cX = windowWidth;
	cY = windowHeight;
	createCanvas(cX,cY);
	yLine = 50;
	
	pixelDensity(1);

	loadPixels();
	console.log("Canvas: " + cX + ' * ' + cY + ' = ' + (cX*cY));
	console.log((cX*cY) + ' * 4 = ' +(cX*cY*4));
	console.log('Pixel length: ' + pixels.length);

	/*//fill the canvas with random RGBA values
	for(let index = 0;index<width*height*4;index++){
		pixels[index]=int(random(255));
	}*/
	
	//pixel density is needed for some displays, like Apple Retina displays
	for (let pX = 0; pX < width; pX++) {
	  for (let pY = 0; pY < height; pY++) {
	    // loop over
	    index =  4 *(pX+(pY*width));
	    //console.log(index);
	    if(pY != yLine){
		    	pixels[index] = map(pX,0,width,0,255);
			    pixels[index+1] = map(pY,0,height,0,255);
			    pixels[index+2] = map(pY,0,height,255,0);
			    pixels[index+3] = 255;
			} else {
				pixels[index] = 255;
			    pixels[index+1] = 0;
			    pixels[index+2] = 0;
			    pixels[index+3] = 255;
			}
	  	}
	}
	
	updatePixels();

}

function draw(){
	yLine++;
	if(yLine > 100){
		yLine=0;
	}

	/*for (let pX = 0; pX < 100; pX++) {
		for (let pY = 0; pY < 100; pY++) {
		    // loop over
		    index =  4 *(pX+(pY*width));
		    //console.log(index);
		    if(pY = yLine){
				pixels[index] = 255;
			  	pixels[index+1] = 0;
			    pixels[index+2] = 0;
			    pixels[index+3] = 255;
			}
		}
	}*/
}


function pixelCircle(){
	theta+=.05;
	radius = 200;
	x=cos(theta) * radius;
	y=sin(theta) * radius;

	ellipse(x,y,50,50);
}