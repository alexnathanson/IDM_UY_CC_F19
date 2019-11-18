let button, p;

function setup(){
	button = createButton("click me!");
	button.mousePressed(myCallback);

	p = createP("my great paragraph");
	p.mouseOver(thisCallback);
	p.mouseOut(thisCallbackOut);
}

function draw(){

}

function myCallback(){
	background(random(255));
}

function thisCallback(){
	this.style("border", "3px");
	this.style("background-color", "#73AD21");
}

function thisCallbackOut(){
	this.style("border", "3px");
	this.style("background-color", "blue");
}