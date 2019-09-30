//var is scoped to the nearest function block
//let is scoped to the nearest enclosing {} block, which is smaller than function blocks (like in Processing...)

var var1 = 'var 1';
let let1 = 'let 1';
const const1 = 'const 1'; //not really necessary, but more efficient for constants - scoped to block, like let

function setup() {
	var var2 = 'var 2';
	let let2 = 'let 2';
	
	createCanvas(windowWidth, windowHeight);
	background(100);
	
	console.log(var1);
	console.log(let1);
	
	if(var1 == 'var 1'){
		console.log(var2);
		console.log(let2);
		
		//behind the scenes - JS is 'hoisting' var3 to the top of the function, which can lead to errors
		var var3= 'var 3';
		let let3= 'let 3';
	}
	
	console.log(var3);
	//this will throw an error
	//console.log(let3);
	
	setup2ndSketch();
}

function draw() {
	textSize(40);
	text(var1, 100, 30);
	text(let1, 100, 70);
	//both of these will throw an error
	text(var2, 100, 110);
	text(let2, 100, 150);
}

function setup2ndSketch(){
	//global variables from another file will be accessible
	console.log('2nd sketch: ' + var1);
	console.log('2nd sketch: ' + let1);
	
	//this will cause an error
	console.log('2nd sketch: ' + var2);
	console.log('2nd sketch: ' + let2);
	
}