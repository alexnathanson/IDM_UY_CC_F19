
function setup(){
	let canvas = createCanvas(500,500);

	//let p5.canvas2 = createCanvas(500,500);
	//# symbol for the parent ID is assumed with the parent method
	//canvas.parent("pId");
	//canvas.position(200,200);
	let par = select("#pId");
	par.child(canvas);
}

function draw(){
	background(100);
	ellipse(100,100,random(30,60),random(30,60));
}
