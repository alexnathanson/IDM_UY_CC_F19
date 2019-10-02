let myArray = []; //create an array



function setup(){
	createCanvas(width, height);

	for (let a =0; a < 10; a++){
		if (a%2==0){
			myArray[a] = "string: " + a;
		} else if (a%3==0){
			myArray[a] = a;
		} else {
			myArray[a] = true;
		}
	}

	console.log(myArray.length);

}

function draw(){

	if(frameCount%30 ==0){

		for (let fI in myArray){
			//typeof is an operator
			console.log(typeof myArray[fI]);

			console.log("! " + switchExample(typeof myArray[fI]));

		}
	}
}


function switchExample(anArg){
	let returnThis;

	switch(anArg) {
	  case "boolean" :
	    // code block
	    returnThis = anArg + " is a boolean";
	    break;
	  case "string":
	    // code block
	    returnThis =anArg + " is a string";
	    break;
	  
	  default:
	    // code block
	    returnThis = anArg;

	} 
	return returnThis;
}