//html DOM methods reference: https://www.w3schools.com/js/js_htmldom_methods.asp


function setup(){
	createCanvas(400,400);
}

function draw(){
	background(100);
}

function keyPressed(){
	let newText = document.getElementById("header")
	newText.innerHTML= random(100);

	switch(key){
		case 'p':
			console.log(document);
			break;
	}
}