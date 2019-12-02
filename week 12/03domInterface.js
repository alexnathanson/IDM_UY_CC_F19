//interaction via DOM elements

let pX,pY;
let sliders = [];
let input, button,checkbox,radio;

function setup(){
	createCanvas(windowWidth/2,600);

	pX = random(width);
	pY = random(height);

	for(let s =0;s<4;s++){
		sliders.push(createSlider(0,255,1));
		sliders[sliders.length-1].position(100,100*sliders.length);
	}

	input = createInput();
	input.position(20,30);
	input.size(100,20);
	//input.changed(someCallback);
	//input.input(someCallback);

	button = createButton("do something");
	button.position(160,30);
	button.mousePressed(drawText);//create an event listeners with a callback

	checkbox = createCheckbox("check it?",true);

	radio = createRadio();
	radio.option('red');
	radio.option('green');
	radio.option('blue');
	radio.option('red');
	radio.option('green');
	radio.option('blue');
	//radio.style('width', '60px');
}

function draw(){

	let bkgrnd = color(sliders[0].value(),sliders[1].value(),sliders[2].value(),sliders[3].value());
	background(bkgrnd);

	checkRadio();

	pX++;
	if(pX > width){
		pX = 0 - 50;
	}

	pY= constrain(pY + random(1,3)-2,0, height-50);
	stroke(0);
	ellipse(pX,pY,random(40,50),random(40,50));
}

function checkRadio(){
	let rC = color(255);
	if(radio.value() =="red"){
		rC = color(255,0,0);
	} else if (radio.value() =="green"){
		rC = color(0,255,0);
	} else if (radio.value() =="blue"){
		rC = color(0,0,255);
	}

	fill(rC);
}

function keyPressed(){
	switch (key){
		case "p":
			console.log(input);
			break;
	}
}

function drawText(){
	let userText = input.value();
	textSize(32);
	text(userText,random(width),random(height));
}