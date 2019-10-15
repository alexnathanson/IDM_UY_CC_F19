let interface = [];

void setup(){
	createCanvas(windowWidth,600);

}

void draw(){

}

class SoundInterface{
	constructor(){
		this.channels = [];
		this.sliderWidth = 10;
		this.sliderHeight = 100;
	}

	displaySlider(argX,argY){
		stroke(0);
		noFill();
		rect(argX, argY,sliderWidth,sliderHeight);
		fill(0,255,0)
		rect(argX,argY+(sliderHeight-volume),sliderWidth,)
	}

	displayKnob(){
		line();
		ellipse();
	}

	displayText(){

	}
}