let table,rowAmt;
let tableStats;
let plotWidth;
let plotX,plotY;

function preload(){

/*load table is an asynchronous function that can
load a local file or a remote URL.
the default format is csv,
must explicitly indicate if a header is present*/

//data source: https://data.cityofnewyork.us/City-Government/Borough-Boundaries-Water-Areas-Included-/tv64-9x69
 table = loadTable('data/nybbwi.csv', 'csv', 'header');
}

function setup(){
	createCanvas(windowWidth,600);

	//this will change depending on if header is specified
	rowAmt = table.getRowCount();
	console.log(rowAmt);
	//if header is specified this will return the column names
	console.log(typeof table.getColumn(2)[0]);
	console.log(table.getColumn(2)[0]);
	parseMultipolygon(table.getColumn(2)[0]);
	console.log(table.getRow(0));
	
	//tableStats = dataInfo(table);
	

	plot();
}

function draw(){

}

//arg either 'head' or 'tail'
function dataView(range){
	let index = 0;
	while(index<5){
		if(range == 'head'){
			rIndex = index;
		} else if(range == 'tail'){
			rIndex = table.getRowCount()-(5-index);
		}
		console.log(table.getRow(rIndex).arr);
		index++;
	}
}
function centerPoint(){
	
}

function plot(){
	stroke(0);
	let shapes = table.getColumn(2);
	for(let s =0;s< 5;s++){
		fill(random(255));
		let poly = parseMultipolygon(shapes[s]);
		beginShape();
			//loop through all the coordinates of each shape
			for(let coord=0;coord<poly.length;coord++){
				vertex(poly[coord][0],poly[coord][1]);
			}
		endShape(CLOSE);//close?
	}
}

function titlePlot(xAxis,yAxis){
	push();
	textSize(24);
	text(yAxis + " by " + xAxis, 10,50);
	pop();
}

function parseMultipolygon(aMP){
	//remove begining and end junk
	aMP = aMP.split('(((')[1];
	aMP = aMP.split(')))')[0];

	//turn the string into a 2d array
	aMP = aMP.split(', ');

	let parsedIt = [];
	for(let p = 0;p<aMP.length;p++){
		//split, convert to floats, and remap
		let coordPairs = aMP[p].split(' ');
		coordPairs[0] = map(parseFloat(coordPairs[0]),-75,-73,0,900);
		coordPairs[1] = map(parseFloat(coordPairs[1]),39,41,900,0);
		parsedIt.push(coordPairs);
	}

	console.log(parsedIt);
	return parsedIt;
}