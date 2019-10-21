/*
basic playing and manipulation of an audio file including:
playback, looping, pause, stop, volume, rate, panning, cueing, duration, currenttime, etc.
*/

let bkgrnd;
let track;
let trackVolSlider, trackRateSlider;
let channel = 2;
let c5  = true;

function preload(){
	track = loadSound('assets/opera.mp3');
}

function setup(){
	createCanvas(400,400);

	bkgrnd = color(255,0,0);
	background(bkgrnd);

	trackVolSlider = createSlider(0.0,2.0,0.5,0.1);
	trackRateSlider = createSlider(0.0,5.0,1.0,0.1);

	//track.onended(resetCues);//this only works if its not set to loop

	track.loop();
	//track.play();

	//addCue isn't working properly atm
	track.addCue(0.5,bkChange);
	track.addCue(5,bkChange);

}



function draw(){
	background(bkgrnd);
	track.pan(map(mouseX,0,windowWidth,-1,1));
	console.log(track.getPan());
	diyCue();
}

function keyPressed(){
	if (key== 'j'){
		jumpAhead(2);//jump ahead by 2 seconds
	} else if (key == "p"){
		if(track.isPlaying()){
			track.pause();
			console.log("pause");
		} else {
			track.loop();
			console.log('loop');
		}
	} else if (key == "s"){
		if(track.isPlaying()){
			track.stop();
			console.log('stop');
		} else {
			track.loop();
			console.log('loop');
		}
	}
}

function mouseReleased(){
	updateSliders();
}
function mouseDragged(){
	updateSliders();
}

function updateSliders(){
	track.setVolume(trackVolSlider.value());//scale 0-2
	track.rate(trackRateSlider.value());//scale 0-5
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

function diyCue(){
	let cT = track.currentTime();

	if(cT >= 5 && c5){
		bkgrnd = int(random(255));
		c5 = false;
	}
}

function resetCues(){
	c5 = true;
	console.log("reset");
}
function bkChange(){
	bkgrnd = int(random(255));
	console.log("changed!");
}