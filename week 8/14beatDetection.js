//based off of https://p5js.org/reference/#/p5.FFT

let mic, fft;
let bckgrnd;
let triggerC;
let triggerB = false;
let beatDetection= [];
let thresh,nrg,nX,nY;
let fr = 2000;
let bpm;
let pattern = [1,1,1,1];

function setup(){
  createCanvas(windowWidth,600);
  //default smooth = 0.8, default bins = 1024 (can be changed to any power of 2 between 2-1024)
  fft = new p5.FFT();
  
  /*mic = new p5.AudioIn();
  mic.start();
  mic.amp(1.0);//set mic input volume to 1.0
  mic.connect();*/


  /*sine = new p5.Oscillator(fr,'sine');
  sine.start();
  sine.amp(.25);*/

  phrase = new p5.Phrase('A', makeSound, pattern);
  phrase.setBPM(60);

  bckgrnd = 0;
  triggerC = color(int(random(255)),int(random(255)),int(random(255)));

  thresh=100;
}

function draw(){
  background(bckgrnd);

  /**********visualization**********************************************************************/

  //analyze outputs an array (length = num of bins) with the amplitudes at each frequency
  let spectrum = fft.analyze();
  noStroke();
  fill(0,255,0); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    
    //r & g are mapped to frequency, b is mapped to amplitude
    let specMap = map(x,0,spectrum.length,0,255);
    fill(specMap,255-specMap,spectrum[i]);

    rect(x, height, width / spectrum.length, h )
  }


  //waveform
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
  textSize(24);
  text('click to play/pause', 4, 10);

  /**********beat detection**********************************************************************/

  //fft.analyze must be called be getEnergy()
  nrg = fft.getEnergy(fr);
  nX = map(fr,20,20000,0, width);
  nY = map(nrg,0,255,height,0);

  push();
  let threshY = map(thresh,0,255,height,0);
  strokeWeight(3);
  stroke(triggerC);
  line(0,threshY,width,threshY);
  fill(triggerC);
  strokeWeight(1);
  ellipse(nX,nY+10,20,20);
  pop();


  if(nrg>thresh && triggerB == false){
    beatDetection.push(millis());
    triggerB = true;
    beatAvg();
  } else if (nrg<100 && triggerB == true){
    triggerB = false;
  }

}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

function mouseClicked(){
  togglePlay();
}

function beatAvg(anArray){
  let tempTimes = [];
  if(anArray.length>=2){
    for (let b = 1;b< anArray.length;b++){
      tempTimes.push(anArray[b]=anArray[b-1]);
    }

    let avgTime = sum(tempTimes)/tempTimes.length;

    bpm = avgTime/60;
    console.log(bpm);
  }
  
}

function makeSound(time, playbackRate) {
  mySound.rate(playbackRate);
  mySound.play(time);
}


function keyReleased(){
  switch key{
    case 'c':

  }
}