//apply FX to mic input

let track,mic,gainTrack,gainMic,gainOutput;

let crossFade = false;

function preload(){
	track = loadSound('assets/TomWaitsEmotionalWeatherReport.mp3');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);


	track.loop();
	track.disconnect();

	mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0
	mic.disconnect();

	gainTrack = new p5.Gain();
	gainMic = new p5.Gain();
	gainOutput = new p5.Gain();

	gainTrack.setInput(track);
	gainTrack.connect(gainOutput);

	gainMic.setInput(mic);
	gainMic.connect(gainOutput);

	gainOutput.connect();

}



function draw(){
	background(255);

	let mode;
	if(crossFade){
		mode = "crossfade"; 
		
	} else {
		mode = "stereo mixer";	
		
	}

fill(0,255,0);
	rect(0,height-(gainMic.output.gain.value*height),windowWidth/2,height);
	rect(windowWidth/2,height-(gainTrack.output.gain.value*height),windowWidth,height);
	
	
	textStyle(BOLD);
	textSize(48);
	fill(255,0,0);
	text("Mic: " + gainMic.output.gain.value,20,50);
	text("Audio Track: " +gainTrack.output.gain.value,(width/2)+20, 50); 
	text('Mode (m): ' + mode,20, height - 50);

	
}

function keyPressed(){
	//cross fade
	if(key == 'm'){
		crossFade = !crossFade;
	}
}

function mouseDragged(){
	if(!crossFade){
		if(mouseX<windowWidth/2){
			gainMic.amp(map(mouseY,0,height,1.0,0.0));
		} else{
			gainTrack.amp(map(mouseY,0,height,1.0,0.0));
		}
	} else{
		gainMic.amp(map(mouseX,0,windowWidth,1.0,0.0));
		gainTrack.amp(map(mouseX,0,windowWidth,0.0,1.0));
	}
}