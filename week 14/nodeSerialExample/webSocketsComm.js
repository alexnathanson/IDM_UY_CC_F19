//based off of https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/

//require tells node which modules to include
let WebSocketServer = require('ws').Server;

let SERVER_PORT = 8081;               // port number for the webSocket server
let wss = new WebSocketServer({port: SERVER_PORT}); // the webSocket server
let connections = new Array;          // list of connections to the server

//Here are the webSocket event listeners:
wss.on('connection', handleConnection);
 
let myPort;
let portName;
let oldData = "";

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
 		//writeSerial(data);
	}
}