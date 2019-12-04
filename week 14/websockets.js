//let text;     // variable for the text div you'll create
//let socket = new WebSocket("ws://localhost:8081");
let socket = new WebSocket("ws://10.18.65.16:8081");
let xPos=0;
let button;
let buttonBool = false;
let selEle, origText;

function setup() {
	createCanvas(windowWidth,600);

	 // The socket connection needs two event listeners:
   socket.onopen = openSocket;
   socket.onmessage = showData;
 
   // make a new div and position it at 10, 10:
 /*  text = createDiv("Sensor reading:");
   text.position(10,10);*/

   button = createButton("LED");
   button.mousePressed(pressedIt);

   selEle = select("h3");


}
 
function draw() {
	background(xPos);
	fill(255-xPos);
	rect(map(xPos,0,255,0,width-100),(height/2)-50,100,100);
}

function openSocket() {
    //text.html("Socket open");
   origText = selEle.elt.innerHTML;
    selEle.html(origText + " Socket open");
    socket.send("Hello server");
  }
 
function showData(result) {
    // when the server returns, show the result in the div:
    //text.html("Sensor reading:" + result.data);
    selEle.html(origText + " " + result.data);
    xPos = int(result.data);        // convert result to an integer
    //text.position(xPos, 10);        // position the text
  }

//you can call this function via browser console to send data
function sendData(someData){
	socket.send(someData);
}

function pressedIt(){
	buttonBool = !buttonBool;

	let led;
	if(buttonBool){
		led = 'l';
	} else {
		led = 'd';
	}
	socket.send(led);
}