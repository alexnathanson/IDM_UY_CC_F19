
let osc, env,noise,fft;

let attackLevel = 1.0;
let releaseLevel = 0;

let attackTime = 0.001;
let decayTime = 0.3;
let susPercent = 0.2;
let releaseTime = 0.4;

function setup(){
		
	env = new p5.Envelope();
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);
	//this is another way to make a sine wave oscillator
	/*osc = new p5.Oscillator();
	osc.amp(env);
	osc.freq(440);
	osc.setType('sine');
	osc.start();
	osc.disconnect();
*/
	//in p5.js noise is a type of oscillator that generatese buffers of random values
	noise = new p5.Noise();//noise can be white,brown,or pink
	noise.amp(env);
	noise.start();
	//noise.disconnect();

	fft = new p5.FFT();
}

function draw(){
	createCanvas(windowWidth,600);

	let freqs = fft.analyze();

	push();
	noStroke();
	  fill(0,255,0); // spectrum is green
	  for (let i = 0; i< freqs.length; i++){
	    let x = map(i, 0, freqs.length, 0, width);
	    let h = -height + map(freqs[i], 0, 255, height, 0);
	    rect(x, height, width / freqs.length, h )
	  }
	  pop();


	textSize(24);
	text('\'a\' to play note once',20,100);
	text('\'s\' to begin attack',20,130);
	text('\'d\' to release note',20,160);


}

function keyPressed(){
	if(key=='s'){
		env.triggerAttack();
	}

}
function keyReleased(){
	if (key =='a'){
		env.play();
	} if (key=='d'){
		env.triggerRelease();
	}
}

function mouseDragged(){
	osc.freq(map(mouseX,0,width,20,5000));
}