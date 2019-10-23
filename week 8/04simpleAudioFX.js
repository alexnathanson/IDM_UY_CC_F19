//apply FX to mic input
let bkgrnd = 255;
let reverbTime, decayRate;
let track;
let channel = 2;
let reverb,delay,compressor,filter,distortion,gain,gainOutput, fft,sine;
let dw, val;
let cFX;

function preload(){
	track = loadSound('assets/TomWaitsEmotionalWeatherReport.mp3');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);


	track.loop();
	//track will output, i.e. connect(), 
	//automatically, so it must be disconnected unless you want to hear it.
	track.disconnect();

	mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0
	
	sine = new p5.SinOsc();
	sine.freq(440);
	sine.disconnect();

	fft = new p5.FFT();

	gain = new p5.Gain();
	gain.setInput(track);

	gainOutput = new p5.Gain();
	gainOutput.connect();
	gainOutput.amp(.75);

	//some common effects
	reverb = new p5.Reverb();
	delay = new p5.Delay();
	compressor = new p5.Compressor();
	filter = new p5.BandPass;//a subset of p5.Filter;
	distortion = new p5.Distortion();
	
	// 3 second reverbTime, decayRate of 2%
	reverbTime = 3;
	decayRate = 2;
	reverb.process(gain, reverbTime, decayRate);
	reverb.disconnect();

	// source, delayTime, feedback, filter frequency
	delay.process(gain, .12, 0.7, 440);
	/*delay.delayTime(.12);
	delay.feedback(0.7);
	delay.filter(2300);*/
	delay.disconnect();

	compressor.process(gain);

	compressor.attack(.003);
    compressor.knee(5);//0-40
    compressor.ratio(12);//1-20
    compressor.release(.25);///0-1
    compressor.threshold(-24);//-100-0
	compressor.disconnect();

	//set frequency (10-22050hz) and resonance (width of the frequency)
	filter.process(gain,2000,50);
	filter.disconnect();

	//source, distoration amount
	distortion.process(gain,0.4);
	//distortion.set(0.0);
	distortion.disconnect();

	cFX = "";
}



function draw(){
	background(200);
	
	drawFFT();

	textStyle(BOLD);
	textSize(48);

	
	if(channel == 1){
		fill(255,0,0);
		text("Mic (1)",20,50);
		fill(0);
		text("Audio Track (2)",20, 100);
		fill(0);
		text("Sine Wave (3)",20, 150);  
	} else if (channel == 2){
		fill(0);
		text("Mic (1)",20,50);
		fill(255,0,0);
		text("Audio Track (2)",20, 100); 
		fill(0);
		text("Sine Wave (3)",20, 150); 
	}
	else if (channel == 3){
		fill(0);
		text("Mic (1)",20,50);
		fill(0);
		text("Audio Track (2)",20, 100); 
		fill(255,0,0);
		text("Sine Wave (3)",20, 150); 
	}

	fill(0);
	text(cFX,20, 200); 

	textSize(24);
	text("toggle FX: reverb(a) compressor(s) delay(d) filter(f) distortion(g) clean(h)",20,250);
	text("dry/wet (mouseX): " + dw,20,280);
	text("scaled value (mouseY): " + val,20,310);


	/*reverb.drywet(map(mouseY,0,height,0.0,1.0));
	distortion.drywet(map(mouseX,0,width,0.0,1.0));
	delay.drywet(map(mouseX,width,0,0.0,1.0));*/
	//filter.set(map(mouseY,0,height,10,20000));

}

function keyPressed(){
	if(key == 1){
		track.disconnect();
		sine.disconnect();
		gain.setInput(mic);
		channel = 1;
	} else if (key == 2){
		mic.disconnect();
		sine.disconnect();
		gain.setInput(track);
		channel = 2;

	} else if (key == 3){
		mic.disconnect();
		track.disconnect();
		sine.start();
		gain.setInput(sine);
		channel = 3;
		
	}else if (key== 'd'){	//delay
		reverb.disconnect();
		compressor.disconnect();
		filter.disconnect();
		distortion.disconnect();

		delay.connect(gainOutput);

		cFX = "delay";
	} else if (key == 'a'){ //reverb
		delay.disconnect();
		compressor.disconnect();
		filter.disconnect();
		distortion.disconnect();
		
		reverb.connect(gainOutput);

		cFX = 'reverb';

	} else if (key == 's'){ //compressor
		delay.disconnect();
		reverb.disconnect();
		filter.disconnect();
		distortion.disconnect();
		
		compressor.connect(gainOutput);

		cFX = 'compressor';
	} else if (key == 'f'){ //filter
		delay.disconnect();
		reverb.disconnect();
		compressor.disconnect();
		distortion.disconnect();
		
		filter.connect(gainOutput);

		cFX = 'filter';
	}else if (key == 'g'){ //distortion
		delay.disconnect();
		reverb.disconnect();
		compressor.disconnect();
		filter.disconnect();
		
		distortion.connect(gainOutput);

		cFX = 'distortion';

	} else if (key == 'h'){ //clean
		delay.disconnect();
		reverb.disconnect();
		compressor.disconnect();
		filter.disconnect();
		distortion.disconnect();

		gain.connect(gainOutput);

		cFX = "";
	}
}

function mouseReleased(){
	dw = int(map(mouseX,0, width,0.0,1.0)*1000)/1000.0;

	//console.log(int(dw*1000)/1000.0);
	delay.drywet(dw);
	reverb.drywet(dw);
	compressor.drywet(dw);
	filter.drywet(dw);
	distortion.drywet(dw);

	val= int(map(mouseY,0, height,1.0,0.0)*1000)/1000.0;

	delay.delayTime(val);
	//console.log("delay time " + val);
	filter.freq(map(val,0.0,1.0,20,20000));
	//console.log("filter freq " + map(val,0.0,1.0,20,15000))
	reverb.set(map(val,0.0,1.0,0.0,5.0),2);

	distortion.set(map(val,0.0,1.0,0.0,5.0));

    compressor.threshold(map(val,0.0,1.0,-100,0));//-100-0

}

function drawFFT(){
	let freqs = fft.analyze();

	  noStroke();
  fill(0,255,0); // spectrum is green
  for (let i = 0; i< freqs.length; i++){
    let x = map(i, 0, freqs.length, 0, width);
    let h = -height + map(freqs[i], 0, 255, height, 0);
    rect(x, height, width / freqs.length, h )
  }


  let waveform = fft.waveform();

   noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}