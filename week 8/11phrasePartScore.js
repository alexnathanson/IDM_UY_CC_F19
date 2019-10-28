//a phrase is a pattern of musical events
//a part is composed of phrases
//a score is the notation for an entire piece of music

let mySoundA,mySoundB, myPhraseA, myPhraseB,myScore;
let pA,pB,pC; //these are the parts

//zero indicates a rest (and the callback will not be called)
let patternA = [1,0,0,4,0,0,0,2];
let patternB = [1,1,1,4,0,4,0,2];
let scorePattern;

function preload() {
  mySoundB = loadSound('assets/clap.wav');
  mySoundA = loadSound('assets/drum.mp3');

}

function setup() {
  createCanvas(windowWidth,600);

  noStroke();
  fill(255);
  textAlign(CENTER);
  masterVolume(0.1);

  //mySoundB.play();

  //the phrase object handles the time, the callback
  //(in this case makeSound) handles the playback
  myPhraseA = new p5.Phrase('A', makeSoundA, patternA);
  myPhraseB = new p5.Phrase('B', makeSoundB, patternB);

  pA = new p5.Part();
  pA.addPhrase(myPhraseA);

  pB = new p5.Part();
  pB.addPhrase(myPhraseB);

  pC = new p5.Part();
  pC.addPhrase(myPhraseA);
  pC.addPhrase(myPhraseB);

  pA.setBPM(60);
  pB.setBPM(60);  
  pC.setBPM(120);
  
/*  scorePattern = [pA,pB,pA,pC];
*/  
  myScore = new p5.Score();
  myScore.parts = [pA,pB,pA,pC];//score wouldn't work when passing this as an argument
  //myScore.setBPM(60);//sets BPM for all parts
}

function draw() {
  background(0);
}

function makeSoundA(time, playbackRate) {
  console.log(time);
  console.log(playbackRate);
  mySoundA.rate(playbackRate);
  mySoundA.play(time);
}

function makeSoundB(time, playbackRate) {
  mySoundB.rate(playbackRate);
  mySoundB.play(time);
}


function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    //myScore.loop(); 
    pA.start();
    //pC.start();
  }
}