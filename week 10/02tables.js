let table,rowAmt;
let tableStats;
let plotWidth;
let plotX,plotY;

function preload(){

/*load table is an asynchronous function that can
load a local file or a remote URL.
the default format is csv,
must explicitly indicate if a header is present*/

//data source: https://data.cityofnewyork.us/Environment/Water-Consumption-In-The-New-York-City/ia2d-e54m
 table = loadTable('data/Water_Consumption_In_The_New_York_City.csv', 'csv', 'header');
}

function setup(){
	createCanvas(windowWidth,600);

	//this will change depending on if header is specified
	rowAmt = table.getRowCount();
	//console.log(rowAmt);
	//if header is specified this will return the column names
	//console.log(table.columns);

	//console.log(table.get(0,0));
	//console.log(table.columns[1]);
	console.log(table.getRow(0).obj['New York City Population']);

	dataView('head');

	plotWidth = width/rowAmt;
	
	tableStats = dataInfo(table);

	plotX = 0;
	plotY = 3;
	//there are multiple ways to write code that retrieves the same thing when dealing with data
	/*console.log(table.getRow(9)['arr'][3]);
	console.log(table.getRow(9).arr[3]);*/

	
}

function draw(){
	background(255);
	plot(plotX,plotY);

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
		//console.log(table.getRow(rIndex).arr);
		index++;
	}
}
function dataInfo(aTable){
	let dInfo = [];
	for(let col = 0; col<aTable.columns.length;col++){
		let aColumn = aTable.getColumn(col);
		let cInfo = []
		cInfo.push(min(aColumn));
		cInfo.push(max(aColumn));
		dInfo.push(cInfo);
	}

	return dInfo;
}

function plot(xAxis,yAxis){
	titlePlot(table.columns[xAxis],table.columns[yAxis]);

	push();
	for(let r = 0; r < rowAmt;r++){
		//plot(table.getRow(r));
		stroke(0);
		noFill();
		let mY = map(table.getRow(r).arr[yAxis],0,tableStats[yAxis][1],height,100)
		rect(r*plotWidth,mY,plotWidth,height);
		textAlign(CENTER);
		//x axis
		text(table.getRow(r).arr[xAxis],r*plotWidth+(plotWidth/2),height-25);
		//y axis
		text(table.getRow(r).arr[yAxis],r*plotWidth+(plotWidth/2),mY+25);
	}
	pop();
}

function titlePlot(xAxis,yAxis){
	push();
	textSize(24);
	text(yAxis + " by " + xAxis, 10,50);
	pop();
}

function keyPressed(){
	switch (key){
		case '1':
			plotY=1;
			break;
		case '2':
			plotY = 2;
			break;
		case '3':
			plotY = 3;
			break;
	} 
}