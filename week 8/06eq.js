/*let track, eq, eqSize,fft, mic;
function preload(){
	track = loadSound('assets/TomWaitsEmotionalWeatherReport.mp3');
}

function setup(){
	createCanvas(windowWidth, 400);

	track.loop();
	track.amp(0.5);
	track.disconnect();

	mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0
	
	eqSize = 8;
	eq = new p5.EQ(eqSize);

	eq.process(mic);

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

function keyReleased(){
	let nK = int(key);
	if(nK<=8){
		for (let i = 0; i < eq.bands.length; i++) {
			eq.bands[i].gain(-40);
			//eq.bands[this.index].biquad.gain.value
		}

		eq.bands[nK-1].gain(10);
		console.log(eq.bands);

	}

	//all on
	if(key=='a'){
		for (let i = 0; i < eq.bands.length; i++) {
			eq.bands[i].gain(0);
			//eq.bands[this.index].biquad.gain.value
		}
	}

	//all off
	if(key=='s'){
		for (let i = 0; i < eq.bands.length; i++) {
			eq.bands[i].gain(-40);
			//eq.bands[this.index].biquad.gain.value
		}
	}
}


*/



/**
 *  Example: Apply a p5.EQ filter to a p5.Noise.
 *  Visualize the sound with FFT.
 *  Use control points to change the spline that shapes the soundwave
 */

var fft;

var eq, eqSize;

//Array to hold contrl points
var cntrlPts = []; 
var ctrlPtRad, cntrlIndex;

//Array to hold the spline vertices
var splineVerts = [];

var pressed; 
var description;


var soundFile;
let mic;

function setup() {
  createCanvas(710, 256);
  //sound wave color
  fill(255, 40, 255);
  ctrlPtRad = 15;
  
  eqSize = 8;
  eq = new p5.EQ(eqSize);

  mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0
	mic.disconnect();
	mic.connect(eq)
  
  //use an fft to visualize the sound
  fft = new p5.FFT();

  //Evenly spaced control points line up with logarithmically spaced
  //filter frequencies on the logarithmically drawn spectrum
  for (var i = 0; i < eqSize; i++) {
    cntrlPts[i] = new CntrlPt(i, 
              //map(x, 0, Math.log(1024), 0, width), height/2);
              i + i*101, height/2);
    splineVerts[i] = [cntrlPts[i].x,cntrlPts[i].y];

  }

}

function draw() {
  background(30);

  // Draw every value in the FFT spectrum analysis where
  // x = lowest (10Hz) to highest (22050Hz) frequencies,
  // h = energy / amplitude at that frequency
  var spectrum = fft.analyze();

  noStroke();
  for (var i = 0; i< spectrum.length; i++){
    //var x = map(i, 0, spectrum.length, 0, width);
    var x = map(Math.log((i+1)/8), 0, Math.log(spectrum.length/8), 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h) ;

  }


  //When mouse is pressed, move relevant control point, then display all
  if (pressed) {cntrlPts[cntrlIndex].move();}

  for (var i = 0; i < cntrlPts.length; i++) {
    cntrlPts[i].display();
    splineVerts[i] = [cntrlPts[i].x, cntrlPts[i].y];
  }

  //Draw a spline to connect control points
  stroke(255,255,255);
  noFill();
  beginShape();
    curveVertex( splineVerts[0][0],splineVerts[0][1])
    for (var i = 0; i < splineVerts.length; i++) {
      curveVertex( splineVerts[i][0],splineVerts[i][1]);
    }
    curveVertex( splineVerts[eqSize-1][0],splineVerts[eqSize-1][1])
  endShape();
}

//Class for each control point
function CntrlPt(i,x,y){
  this.c = color(255);
  this.x = x;
  this.y = y;
  this.index = i;

  this.display = function () {
    fill(this.c);
    ellipse(this.x,this.y,ctrlPtRad,ctrlPtRad);
    rectMode(CENTER);
    noStroke();

    var upDown = this.index % 2 > 0 ? 1 : -1
    var textY;
    var textX;
    if (this.index === 0) {
      textX = this.x + 10;
    }
    else if (this.index === eq.bands.length - 1){
     textX = this.x - 70;
    }
    else{
      textX = this.x - 18;
    }
    if (upDown > 0) {
      text("freq: " + eq.bands[this.index].freq(),textX,this.y + upDown*40);
      text("gain: " + eq.bands[this.index].gain(),textX,this.y + upDown *25);
    } else {
     text("gain: " + eq.bands[this.index].gain(),textX,this.y + upDown *40); 
     text("freq: " + eq.bands[this.index].freq(),textX,this.y + upDown*25);
    }
    
  }

  this.move = function () {
    if (mouseX < 1) { this.x = 1;}
    else if (mouseX > width) {this.x = width -1;}
    else if (mouseY < 1) {this.y = 1;}
    else if (mouseY > height) {this.y = height - 1;}
    else {
    this.y = mouseY;
    eq.bands[this.index].biquad.gain.value = map(this.y, 0, height, 40, -40);
    }
  }

  //Checks to see if mouse is ontop of control point
  this.mouseOver = function () {
    if (mouseX > this.x - ctrlPtRad && mouseX < this.x + ctrlPtRad
      && mouseY < this.y + ctrlPtRad && mouseY > this.y - ctrlPtRad){
      return true;
    } else {
      return false;
    }s
  }
}

function mousePressed(){
  for (var i = 0; i < cntrlPts.length; i++) {
    if (cntrlPts[i].mouseOver()){ 
      pressed = true; 
      cntrlIndex = i;
      break;
    }
  }
}

function mouseReleased(){
  pressed = false;
}
