let myName = "Alex Nathanson";
//let myString = new String("Alex Nathanson");

function setup(){
	createCanvas(windowWidth, windowHeight);
	textFont("Arial");
	
	console.log(myName[3]);

}

/*
some string methods:
length
indexOf
slice
substring
substr
search
replace
toUpperCase
toLowerCase
charAt
split(" ")
*/

function draw(){
	background(255);
	textSize(32);
	text(myName + " " + millis(),50,50);
	text("My name has " + myName.length + " characters (including spaces)",50,100);
	text("N is at position " + myName.indexOf("N"),50,150);

	console.log(myName.split(","));
}