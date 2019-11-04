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
 table = loadTable('data/nybb.csv', 'csv', 'header');
}

function setup(){
	createCanvas(windowWidth,600);

	//this will change depending on if header is specified
	rowAmt = table.getRowCount();
	console.log(rowAmt);
	//if header is specified this will return the column names
	//console.log(typeof table.getColumn(2)[0]);
	//console.log(table.getColumn(2)[0]);
	//console.log(table);

	parseMultipolygon(table.getColumn(1)[0]);//1 without water, 2 with
	
	//tableStats = dataInfo(table);
	scale(2.5);
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
	let shapes = table.getColumn(1);//1 without water, 2 with
	for(let s =0;s< 5;s++){
		fill(255*.2*(s+1),255-(255*.2*(s+1)),random(255));
		let poly = parseMultipolygon(shapes[s]);
		//console.log(poly);
		for(let p =0; p<poly.length;p++){
			beginShape();
			//loop through all the coordinates of each shape
			for(let coord=0;coord<poly[p].length;coord++){
				vertex(poly[p][coord][0],poly[p][coord][1]);
			}
			endShape(CLOSE);//close?
		}
		
	}
}

function titlePlot(xAxis,yAxis){
	push();
	textSize(24);
	text(yAxis + " by " + xAxis, 10,50);
	pop();
}

function parseMultipolygon(aMP){
	//console.log(aMP);
	//remove begining and end junk
	aMP = aMP.split('(((')[1];
	aMP = aMP.split(')))')[0];

	//split up all the little islands
	aMP = aMP.split(')), ((');
	//console.log(aMP);

	let parsedIt = [];
	for(let i =0;i<aMP.length;i++){
		let parsedIs = [];
		//turn the strings into a 2d array
		let islands = aMP[i].split(', ');
		for(let p = 0;p<islands.length;p++){
			//split, convert to floats, and remap
			let coordPairs = islands[p].split(' ');
			coordPairs[0] = map(parseFloat(coordPairs[0]),-75,-73,0,900);
			coordPairs[1] = map(parseFloat(coordPairs[1]),39,41,900,0);
			parsedIs.push(coordPairs);
		}
		parsedIt.push(parsedIs);
	}

	//console.log(parsedIt);
	return parsedIt;
}