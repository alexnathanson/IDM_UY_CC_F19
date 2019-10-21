let track, eq, eqSize,fft, bandNames;
function preload(){
	track = loadSound('assets/TomWaitsEmotionalWeatherReport.mp3');
}

function setup(){
	createCanvas(windowWidth, 400);

	track.loop();
	track.amp(0.5);
	track.disconnect();

	eqSize = 8;
	eq = new p5.EQ(eqSize);

	eq.process(track);

	fft = new p5.FFT();

}

function draw(){
	background(255);

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

function keyPressed(){
	if(int(key)<8){
		for (let i = 0; i < eq.bands.length; i++) {
			eq.bands[i].gain(0);
		}

	eq.bands[int(key)-1].gain(-40);

	}
}