/*
Modulation is when two oscillators are used to create a rhythm.
These two oscillators are called the carrier and the modulator.

The carrier is what is heard. The modulator is generally not heard.

Amplitude Modulation (am) uses the modulator to control the amplitude of the carrier.
Frequency Modulation (fm) uses the modulator to controle the frequency of the carrier.
*/


let carrier; // this is the oscillator we will hear
let modulator; // this oscillator will modulate the amplitude of the carrier
let fft; // we'll visualize the waveform 
let displayText, displayType;
let oscType;

function setup() {
  createCanvas(windowWidth,600);
  noFill();

  carrier = new p5.Oscillator('sine');
  carrier.amp(1); // set amplitude
  carrier.freq(220); // set frequency
  carrier.start(); // start oscillating

  modulatorFM = new p5.Oscillator('sawtooth');
  modulatorFM.disconnect();
  modulatorFM.amp(1); // will map to mouseX
  modulatorFM.mult(300).add(100)
  modulatorFM.freq(4); // will map to mouseY
  modulatorFM.start();

  modulatorAM = new p5.Oscillator('sawtooth');
  modulatorAM.disconnect();
  modulatorAM.amp(1); // will map to mouseX
  modulatorAM.freq(4); // will map to mouseY
  modulatorAM.start();

  // create an fft to analyze the audio
  fft = new p5.FFT();

  oscType='sawtooth';
  displayType='sawtooth';
  am();
}

function draw() {
  background(30);

	push();
	fill(255,0,0);
	strokeWeight(3);
	textSize(24);
	text(displayText,20,100);
	text(displayType,20,130);
	pop();

  // map mouseY to moodulator freq between 0 and 20hz
  let modFreq = map(mouseY, 0, height, 20, 0);
  modulatorAM.freq(modFreq);
  modulatorFM.freq(modFreq);

  // change the original amplitude of the sawOsc, before it's scaled.
  // negative amp reverses the waveform, and sounds percussive
  let modAmp = map(mouseX, 0, width, -1, 1);
  modulatorAM.amp(modAmp);
  modulatorFM.amp(modAmp);


  // analyze the waveform
  waveform = fft.waveform();

  // draw the shape of the waveform
  stroke(255);
  strokeWeight(10);
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();

}


function keyPressed(){
	if(key=='a'){
		am();
	} else if (key =='f'){
		fm();
	} else {
		switch(key){
			case '1':
				oscType = 'sine';
				break;			
			case '2':
				oscType='square';
				break;
			case '3':
				oscType='sawtooth';
				break;
			case '4':
				oscType='triangle';
		}
		modulatorAM.setType(oscType);
		modulatorFM.setType(oscType);
		displayType=oscType;
	}
}

function fm(){
	displayText='FM';
	carrier.amp(1);
	// multiply amplitude range by 200, then add 100
	carrier.freq(modulatorFM);
}

function am(){
	displayText='AM';
	carrier.amp(modulatorAM);
	carrier.freq(220);
}