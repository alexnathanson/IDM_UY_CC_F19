let mic, recorder;
let samples = [];
let loopAmt = 4;
let loopColor = [];

function setup() {
  createCanvas(windowWidth,400);
  background(200);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);


  for(let g = 0; g <loopAmt;g++){
    samples[g] = new p5.SoundFile();
    loopColor[g]= color(255,255,0,255);
  }
}

function keyPressed() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (mic.enabled && !recorder.recording) {
    
    let numKey = int(key) - 1;
    if(key==1 || key==2 || key==3 || key==4){
      loopColor[numKey]=color(255,0,0,255);
      drawRect(numKey);
      let recordLength = 3;
      samples[numKey] = new p5.SoundFile();
      recorder.record(samples[numKey], recordLength,function(){playRecording(numKey)});//this is an anonymous function
    }
  }
}

//pause and start samples with mouse clicks
function mouseReleased(){
  if(mouseY<height){
    let samNum;
  if(mouseX < windowWidth * .25){
    samNum = 0;
  } else if (mouseX >= windowWidth * .25 && mouseX < windowWidth * .5){
    samNum = 1;
  } else if (mouseX >= windowWidth * .5 && mouseX < windowWidth * .75){
    samNum = 2;
  } else if (mouseX >= windowWidth * .75){
    samNum = 3;
  }

  if(samples[samNum].isPlaying()){
    loopColor[samNum] =color(255,255,0,255);
    samples[samNum].stop();
  } else {
    loopColor[samNum] =color(0,255,0,255);
    samples[samNum].loop();
  }
  
  drawRect(samNum);
  } 
}

function playRecording(arg) {
  console.log(arg);
  loopColor[arg] =color(0,255,0,255);
  samples[arg].loop();
  drawRect(arg);
}

function drawRect(x){
   fill(loopColor[x]);
    rect(x * (windowWidth/loopAmt),0,windowWidth/loopAmt,height); 
    fill(0);
    textSize(18);
    text(str(x+1),x * (windowWidth/loopAmt) + 20,30);
}

