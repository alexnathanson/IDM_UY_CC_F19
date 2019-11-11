/*
string method references:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods
https://www.w3schools.com/jsref/jsref_obj_string.asp

array method references:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://www.w3schools.com/jsref/jsref_obj_array.asp
*/

let txtFile;

function preload(){
	//creates an array of strings, corresponding to the lines in the document
	txtFile = loadStrings('data/creativeCodingInfo.txt');
}

function setup(){
	let keyValuePairs = 'class = creative coding\nteacher = Alex\nstudents = 17';

	console.log(typeof txtFile);
	console.log(txtFile);

	console.log(typeof keyValuePairs);
	console.log(keyValuePairs);

	console.log(keyValuePairs.split('\n'));

	for(let i = 0;i<txtFile.length;i++){
		console.log(txtFile[i].split(' = '));
		let equ = txtFile[i].indexOf(' = ');
		console.log(equ);
		console.log(txtFile[i].slice(equ+3,txtFile[i].length));
	}

}
