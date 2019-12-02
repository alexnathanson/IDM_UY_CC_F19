let text;     // variable for the text div you'll create
let socket = new WebSocket("ws://localhost:8081");
let xPos=0;

function setup() {
	createCanvas(windowWidth,600);

	 // The socket connection needs two event listeners:
   socket.onopen = openSocket;
   socket.onmessage = showData;
 
   // make a new div and position it at 10, 10:
   text = createDiv("Sensor reading:");
   text.position(10,10);
}
 
function draw() {
	background(xPos);
	fill(255-xPos);
	rect(map(xPos,0,255,0,width-100),(height/2)-50,100,100);
}

function openSocket() {
    text.html("Socket open");
    socket.send("Hello server");
  }
 
function showData(result) {
    // when the server returns, show the result in the div:
    text.html("Sensor reading:" + result.data);
    xPos = int(result.data);        // convert result to an integer
    text.position(xPos, 10);        // position the text
  }

//you can call this function via browser console to send data
function sendData(someData){
	socket.send(someData);
}