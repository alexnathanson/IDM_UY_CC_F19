let myArray = []; //create an array

//js doesn't have an explicit multidimensional array type, but arrays can always be placed inside of other arrays
//this is a 2 dimensional array (4x4)
let myDimensionalArray = [
	[1,0,0,0],
	[0,1,0,0],
	[0,0,1,0],
	[0,0,0,1]
];


let myPosArray = [];

let startColor,endColor;

function setup(){
	createCanvas(800, 800);

//this array has different data types!
	for (let a =0; a < 10; a++){
		if (a%2==0){
			myArray.push("string: " + a);
		} else if (a%3==0){
			myArray.push(a);
		} else {
			myArray.push(true);
		}
	}

	console.log(myArray);
	//this is a simplified for loop
	for (let fI in myArray){
			//typeof is an operator
			console.log(typeof myArray[fI]);

			console.log(myArray[fI]);

		}

	//lerp colors
	startColor = color(50,150,200);
	endColor = color(200,100,50);


	for(let xy = 0; xy < 10; xy++){
		myPosArray.push([int(random(width)),int(random(height)),int(random(255))]);
	}
/*
	//this would also work
	for(let xy = 0; xy < 10; xy++){
		myPosArray[xy]=[int(random(width)),int(random(height)),int(random(255))];
	}
*/
	console.log(myPosArray);

}

function draw(){

	background(lerpColor(startColor,endColor,(0.5 * sin(millis()/1000))+0.5));

	if(frameCount%30 ==0){

		for (let fI in myArray){
			//typeof is an operator
			//console.log(typeof myArray[fI]);

			//console.log("! " + switchExample(typeof myArray[fI]));

		}
	}

	displayThis(myPosArray);
}

function displayThis(anArray){
	for(let aR in anArray){
		fill(anArray[aR][2]);
		//console.log(anArray);
		rect(anArray[aR][0],anArray[aR][1],10,10);
	}
}
