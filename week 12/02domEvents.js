let button;
let p = [];

function setup(){
	button = createButton("click me!");
	button.mousePressed(myCallback);

	for(let l =0; l<5;l++){
		p.push(createP("my great paragraph"));
		p[l].mouseOver(thisCallback);
		p[l].mouseOut(thisCallbackOut);
	}
	
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