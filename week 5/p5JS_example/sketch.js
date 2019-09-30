function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	
}

var winDimX = 16;
var winDimY = 9;

//drawing code
function draw() {
	
	background(200);
	//vertical lines
	for (var i = 1; i < winDimX; i++){
		//strokeWeight(i);
		line((windowWidth/winDimX)*i,0,(windowWidth/winDimX)*i, windowHeight);
	}
	
	//horizontal lines
	for (var i = 1; i < winDimY; i++){
		//strokeWeight(i);
		line(0,(windowHeight/winDimY)*i,windowWidth, (windowHeight/winDimY)*i);
	}
	
	//tell me what the location is
	if(mouseIsPressed){
		fill(0);
		//console.log(typeof(mouseX));
		//console.log(typeof(mouseX.toString()));
		text(mouseX.toString() + " " + mouseY.toString(),mouseX, mouseY);
	}

}