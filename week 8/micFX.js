//apply FX to mic input
let bckgrnd;

let guis = [];
let fx = [];
let fxNames = ['reverb','delay','compressor','filter','distortion'];

let reverbTime, decayRate;

function setup(){
	createCanvas(windowWidth, windowHeight);

	for (let fxAmt = 0; fxAmt < 5; fxAmt++){
		guis[fxAmt]= new FxGUI(150+(150*fxAmt),windowHeight/2);
		guis[fxAmt].name = fxNames[fxAmt];
	}

	bckgrnd = color(255);

	mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0

	//some common effects
	reverb = new p5.Reverb();
	delay = new p5.Delay();
	compressor = new p5.Compressor();
	filter = new p5.Filter();
	distortion = new p5.Distortion();
	
	// 3 second reverbTime, decayRate of 2%
	reverbTime = 3;
	decayRate = 2;
	//reverb.process(mic, reverbTime, decayRate);
	//reverb.disconnect();
	// source, delayTime, feedback, filter frequency
	//delay.process(mic, .12, 0.7, 2300);

	//source, distoration amount
	//distortion.process(mic,0.7);
	mic.connect(reverb);
	reverb.chain(delay,distortion);
}

function draw(){
	background(bckgrnd);
	
	for (let fxAmt = 0; fxAmt < 5; fxAmt++){
		//guis[fxAmt].sliderClicked();
		guis[fxAmt].slider();
	}

	distortion.drywet(map(mouseX,0,width,0.0,1.0));

	inputLevel = mic.getLevel();

	

}

function mouseDragged(){
	for (let fxAmt = 0; fxAmt < 5; fxAmt++){
		guis[fxAmt].sliderClicked();
	}
}

class FxGUI{
	constructor(tempX, tempY){
		this.x = tempX;
		this.y = tempY;
		this.value = 1.0;
		this.wetdry = 1.0;
		this.width = 40;
		this.height = 300;
		this.xWD = this.x + this.width + 15;
		this.yWD =this.y;
		this.wdGUI = true;
		this.scaledValue = map(this.value,0.0,1.0,0,this.height);
		this.scaledWetDry = map(this.value,0.0,1.0,0,this.height);
		this.color = color(0, 255,0);
		this.labels = true;
		this.name = "FX";
		this.digits = false;
	}

	set val(arg){
		this.value = arg;
	}
	slider(){
		if(this.labels){
			textAlign(CENTER);
			text(this.name,this.x+(this.width/2), this.y - 10);
		}

		push()
		fill(this.color);
		noStroke();
		rect(this.x,this.y+(this.height-this.scaledValue),this.width,this.scaledValue);
		noFill();
		stroke(0);
		rect(this.x,this.y,this.width,this.height);
		pop();
		
		if(this.wdGUI){
			if(this.labels){
			textAlign(CENTER);
			text("W/D",this.xWD+(this.width/2), this.yWD - 10);
		}
		push()
		fill(this.color);
		noStroke();
		rect(this.xWD,this.yWD+(this.height-this.scaledWetDry),this.width,this.scaledWetDry);
		noFill();
		stroke(0);
		rect(this.xWD,this.yWD,this.width,this.height);
		pop();
		}	
	}

	sliderClicked(){
		//check collision
		if(mouseX > this.x && 
			mouseX < this.x+this.width &&
			mouseY > this.y &&
			mouseY < this.y + this.height){

				this.scaledValue = this.height-(mouseY-this.y);
				this.value = map(this.scaledValue,0.0,this.height,0.0,1.0);
				//console.log(this.value);
		}

		if(this.wdGUI){

			//check wet/dry collision
			if(mouseX > this.xWD && 
				mouseX < this.xWD+this.width &&
				mouseY > this.yWD &&
				mouseY < this.yWD + this.height){

					this.scaledWetDry = this.height-(mouseY-this.yWD);
					this.wetdry = map(this.scaledWetDry,0.0,this.height,0.0,1.0);
					//console.log(this.value);
			}
		}
	}
}