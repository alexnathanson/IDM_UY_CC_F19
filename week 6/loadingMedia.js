/*
Typically JS uses callbacks to load external media
P5.JS uses the preload() function
*/



/***** PRELOAD ********/
let img;

//preload runs once before setup and forces the program to wait until it is finished
function preload(){
	img = loadImage("1970-s-retro-television-set-1411612-1278x965.jpg");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	image(img,0,0);
	

}

function draw(){
	
}




/***** CALLBACK **********/
/*
function setup(){
	createCanvas(windowWidth, windowHeight);
	//no need for a global variable, because loadImage passes whatever is returned to the callback
	loadImage("1970-s-retro-television-set-1411612-1278x965.jpg", drawImage);

}

function draw(){
	line(pmouseX,pmouseY,mouseX,mouseY);
}

function drawImage(img){
	image(img,0,0);
}
*/