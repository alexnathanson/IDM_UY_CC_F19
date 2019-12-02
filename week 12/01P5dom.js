//creating DOM elements

let pX,pY;
let from,to;
let p = [];
let canvas;

function setup(){
	canvas = createCanvas(windowWidth/2,600);

	pX = random(width);
	pY = random(height);

	from = color(218, 165, 32);
	to = color(72, 61, 139);
}

function draw(){
	canvas.position(400, 300);

	let i = map(sin(frameCount * 0.01),-1.0,1.0,0.0,1.0);
	let bkgrnd = lerpColor(from, to, i);
	background(bkgrnd);

	fill(0,255,0);
	pX++;
	if(pX > width+25){
		pX = 0 - 50;
	}

	pY= constrain(pY + random(1,3)-2,0, height-50);
	stroke(0);
	ellipse(pX,pY,random(40,50),random(40,50));
}

function keyPressed(){
	switch (key){
		case "c":
			console.log(document);
			break;
		case "p":
			p.push(createP("a new paragraph!"));
			//p[p.length-1].class('myClass');
			p[p.length-1].style('font-size', '32px');
			break;
		case "a":
			break;
	}
}