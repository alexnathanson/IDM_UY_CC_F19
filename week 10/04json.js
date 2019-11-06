/*unlike with CSVs, data types matter in JSON files
JSON data types: string, number, JSON object, array, boolean,null
*/

let aJSON;

function preload(){
	//movie data source: https://github.com/prust/wikipedia-movie-data
	aJSON = loadJSON('data/wikipedia-movie-data/movies.json');
}

function setup(){
	console.log(typeof aJSON);
	console.log(aJSON);
	console.log(JSON.stringify(aJSON));//stringify turns a JSON object into a string
	console.log(JSON.parse(JSON.stringify(aJSON)));//parse turns a string into a JSON object

	let anObject = {"class": "creative coding","teacher":"Alex","students": 17};
	console.log(anObject);
	let aJSONObject = JSON.stringify(anObject);
	console.log(aJSONObject);

	console.log(anObject.keys);
	//this creates an object wrapper that allows you to access JS object methods
	console.log(Object.keys(anObject));

	let className = anObject.class;
	console.log(className);

	console.log(typeof anObject.students);

}