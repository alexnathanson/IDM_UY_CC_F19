/*let name = process.argv[2];

console.log("Hello, and welcome to node, " + name);
*/

//based off of https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/

//require tells node which modules to include
let SerialPort = require('serialport');
let WebSocketServer = require('ws').Server;

let SERVER_PORT = 8081;               // port number for the webSocket server
let wss = new WebSocketServer({port: SERVER_PORT}); // the webSocket server
let connections = new Array;          // list of connections to the server

let portName;
let oldData = "";
// list serial ports:
SerialPort.list().then(
  ports => {
  	ports.forEach(console.log);
  	portName = ports[0]['path'];
  	newPort()},
  err => console.error(err)
)

let myPort;

function newPort(){
	//open a new port
	myPort = new SerialPort(portName, 9600);

	let Readline = SerialPort.parsers.Readline; // make instance of Readline parser
	let parser = new Readline(); // make a new parser to read ASCII lines
	myPort.pipe(parser); // pipe the serial stream to the parser

	myPort.on('open', showPortOpen);
	parser.on('data', readSerialData);
	//myPort.on('data',readSerialData);
	myPort.on('close', showPortClose);
	myPort.on('error', showError);

}


function showPortOpen() {
   console.log('port open. ' + portName + ' Data rate: ' + myPort.baudRate);
}
 
function readSerialData(data) {
	if(data != oldData){
		console.log(data);
		oldData = data;

		//writeSerial('l');
	}

	 if (connections.length > 0) {
     broadcast(data);
   }
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}

function writeSerial(myChar){
	let charCode = myChar;
	//console.log(charCode);
	myPort.write(charCode)
	//myPort.write(Buffer.from(charCode))
}


//Here are the webSocket event listeners:
wss.on('connection', handleConnection);
 
function handleConnection(client) {
 console.log("New Connection"); // you have a new client
 connections.push(client); // add this client to the connections array
 
 client.on('message', sendToSerial); // when a client sends a message,
 
 client.on('close', function() { // when a client closes its connection
 console.log("connection closed"); // print it out
 var position = connections.indexOf(client); // get the client's position in the array
 connections.splice(position, 1); // and delete it from the array
 });
}

//broadcast data to websockets clients
function broadcast(data) {
 for (myConnection in connections) {   // iterate over the array of connections
  connections[myConnection].send(data); // send the data to each connection
 }
}

function sendToSerial(data) {
	if(data == "Hello server"){
		console.log(data);
	} else {
		console.log("sending to serial: " + data);
 		writeSerial(data);
	}

}