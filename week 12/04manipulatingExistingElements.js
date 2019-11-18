//manipulating existing DOM elements

function setup(){
	createP("my new paragraph. maybe the best paragraph ever written?")
}

function draw(){

}

function keyPressed(){
	switch(key){
		case "s":
			selectIt();
			break;
		case "a":
			selectItAll();
			break;
	}
}

function selectIt(){
	//select only selects the first instance
	let selEle = select("#header");
	selEle.style("background-color", "pink");

	let pa = select('#pId');
	pa.html("new text!!!! " + random(100));
}

function selectItAll(){
	//selectAll returns an array
	let selEle = selectAll("p");

	for(let sa = 0;sa<selEle.length;sa++){
		selEle[sa].style("background-color", "purple");
		selEle[sa].style("font-size", String(int(random(8,32)))+"pt");
	}
}