//apply FX to mic input
let bkgrnd = 255;
let reverbTime, decayRate;
let track;
let sliderNames = ['input vol','input rate','reverb','delay','compressor','filter','distoration'];
let trackVolSlider, trackRateSlider, reverbSlider,delaySlider,compressorSlider,filterSlider,distortionSlider;
let channel = 2;

function preload(){
	track = loadSound('assets/TomWaitsEmotionalWeatherReport.mp3');
}

function setup(){
	createCanvas(windowWidth,200);
	background(200);

	trackVolSlider = createSlider(0.0,2.0,1,0.1);
	trackRateSlider = createSlider(0.0,3.0,1,0.1);
	reverbSlider = createSlider(0.0,1.0,0,0.1);
	delaySlider = createSlider(0.0,1.0,0,0.1);
	compressorSlider = createSlider(0.0,1.0,0,0.1);
	filterSlider = createSlider(0.0,1.0,0,0.1);
	distortionSlider = createSlider(0.0,1.0,0,0.1);

	track.loop();
	//track will output, i.e. connect(), 
	//automatically, so it must be disconnected unless you want to hear it.
	track.disconnect();

	mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0

	//some common effects
	reverb = new p5.Reverb();
	delay = new p5.Delay();
	compressor = new p5.Compressor();
	filter = new p5.Filter('lowpass');
	distortion = new p5.Distortion();
	
	// 3 second reverbTime, decayRate of 2%
	reverbTime = 0;
	decayRate = 2;
	reverb.process(track, reverbTime, decayRate);
	//reverb.disconnect();

	// source, delayTime, feedback, filter frequency
	//delay.process(reverb, .12, 0.7, 2300);
	delay.delayTime(0);
	delay.feedback(0.7);
	delay.filter(2300);
	delay.disconnect();

	compressor.disconnect();

	//set frequency (10-22050hz) and resonance (width of the frequency)
	filter.set(2000);
	filter.disconnect();

	//source, distoration amount
	//distortion.process(delay,0.7);
	distortion.set(0.0);
	distortion.disconnect();

	reverb.chain(delay,distortion);

}



function draw(){
	background(200);

	push()
	textStyle(BOLD);
	textSize(48);
	if(channel == 1){
		fill(255,0,0);
		text("Mic: 1",20,50);
		fill(0);
		text("Audio Track: 2",20, 100); 
	} else if (channel == 2){
		fill(0);
		text("Mic: 1",20,50);
		fill(255,0,0);
		text("Audio Track: 2",20, 100); 
	}
	pop();


	push();
	textAlign(CENTER,BOTTOM);
	textSize(24);
	for(let sNames = 0;sNames < sliderNames.length;sNames++){
		text(sliderNames[sNames],83+(165*sNames),height);
	}
	pop();
	/*reverb.drywet(map(mouseY,0,height,0.0,1.0));
	distortion.drywet(map(mouseX,0,width,0.0,1.0));
	delay.drywet(map(mouseX,width,0,0.0,1.0));*/
	//filter.set(map(mouseY,0,height,10,20000));

}

function keyPressed(){
	if(key == 1){
		track.disconnect();
		reverb.process(mic, reverbTime, decayRate);
		channel = 1;
	} else if (key == 2){
		mic.disconnect();
		reverb.process(track, reverbTime, decayRate);
		channel = 2;
	} else if (key== 'j'){
		jumpAhead(2);//jump ahead by 2 seconds
	}
}

function mouseReleased(){
	//updateSliders();
}

function mouseDragged(){
	updateSliders();
}

function updateSliders(){
	track.setVolume(trackVolSlider.value());//scale 0-2
	mic.amp(trackVolSlider.value());
	track.rate(trackRateSlider.value());//scale 0-3

	reverb.set(reverbSlider.value()*5.0,0);
	console.log("reverb: " + reverb._seconds);
	delay.delayTime(delaySlider.value());//scale 0-1
	//console.log(delaySlider.value());
	//compressor.set(compressorSlider.value());
	//filter.set(filterSlider.value());*/
	distortion.set(distortionSlider.value());//scale 0-1
	console.log("distortation: " + distortionSlider.value());
}

//pass this function a floating point number 0.0-1.0
function jumpAhead(arg){
	let len = track.duration();
	let cT = track.currentTime();
	console.log(cT);

	if(cT + arg < len){
		track.jump(cT + arg);
	} else {
		track.jump(0);
	}
	
}

function bkChange(arg){
	bkgrnd = arg;
	console.log("Change!");
}