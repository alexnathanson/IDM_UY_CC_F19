//let weatherData;
let nytData;
let nytKey = 'oUnrCI11T3dpNiZFniNtrAW23yXSBHJh';

let articlesearch = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
let query = 'election';

let filters = '&fq=news_desk:("Sports")&glocations:("NEW YORK CITY")';

function preload(){
	//weatherData = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Brooklyn&units=imperial&APPID=b0ca160d26b68a5f4da977ab337b8287');
	nytData = loadJSON(articlesearch+query +filters + '&api-key='+nytKey);
}

function setup(){
	console.log(nytData);
}

function draw(){

}