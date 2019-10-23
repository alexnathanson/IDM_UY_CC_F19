let x, rate
let notePos = [];
let notes = [];
let envs = [];
let envsBool = [];
let diam = 30;

let attackLevel = 1.0;
let releaseLevel = 0;

let attackTime = 0.001;
let decayTime = 0.2;
let susPercent = 0.2;
let releaseTime = 0.3;

function setup(){
	createCanvas(windowWidth,windowHeight);
	rate = 5;
	x = 0;
}

function draw(){
	background(255);

	noFill();
	for(let d = 0; d< notePos.length;d++){
		ellipse(notePos[d][0],notePos[d][1],diam,diam);
	}
	x+=rate;
	if(x > width){
		x = 0;
	}

	push();
	fill(0,255,0,100);
	rect(0,0,300,75);
	fill(0);
	textAlign(CENTER,CENTER);
	text('click to create/ remove notes, \'c\' to clear,',150,25);
	text('number keys set speed (current speed: '+rate+ ')',150,50);
	pop();
	line(x,0,x,height);

	playNotes();
}

function mouseReleased(){
	//if there is no note in that location
	//create the note. if there is remove the note
	if(!checkNotes(mouseX,mouseY)){
		notePos.push([mouseX,mouseY]);
		notes.push(new p5.Oscillator(map(mouseY,0,height,5000,100),'sine'));
		
		envs.push(new p5.Envelope());
	  	envs[envs.length-1].setADSR(attackTime, decayTime, susPercent, releaseTime);
	  	envs[envs.length-1].setRange(attackLevel, releaseLevel);
	  	envsBool.push(false);
		//you can also do this same thing by changing the amplitude, rather than turning it on or off.
		notes[notes.length-1].amp(envs[envs.length-1]);
		notes[notes.length-1].start();

	}

}

//check if a note is added or removed
function checkNotes(argX,argY){
	let isCollision = false;
	for(let n =0;n < notePos.length;n++){
		if (abs(notePos[n][0] - argX) < diam/2 && abs(notePos[n][1] - argY) < diam/2){
			notePos.splice(n,1);//splice is used to remove elements from any position in an array
			notes[n].stop();//make sure the notes stops playing first...
			notes.splice(n,1);
			envs.splice(n,1);
			envsBool.splice(n,1);
			isCollision = true;
			break;
		}
	}
	return isCollision;
}

function playNotes(){
	for(let n =0;n < notePos.length;n++){
		if(abs(notePos[n][0]-x) < diam/2 /*&& !notes[n].started*/ && envsBool[n]== false){
			//notes[n].start();
			//envs[n].play();
			envs[n].triggerAttack();
			envsBool[n] = true;
		} else if (abs(notePos[n][0]-x) > diam/2 /*&& notes[n].started*/&&envsBool[n]== true){
			//notes[n].stop();
			envs[n].triggerRelease();
			envsBool[n]= false;


		}
	}
}

function keyPressed(){
	if(key =='c'){
		notePos=[];
		notes=[];
	} else if (int(key)<10){
		rate = int(key);
	}
}