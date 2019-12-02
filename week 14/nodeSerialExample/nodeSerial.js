//based off of https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/

//require tells node which modules to include
let SerialPort = require('serialport');

let portName;
let oldData = "";
let myPort;

// list serial ports:
SerialPort.list().then(
  ports => {
  	ports.forEach(console.log);
  	portName = ports[0]['path'];
  	newPort()},
  err => console.error(err)
)


function newPort(){
	//open a new port
	myPort = new SerialPort(portName, 9600);

	let Readline = SerialPort.parsers.Readline; // make instance of Readline parser
	let parser = new Readline(); // make a new parser to read ASCII lines
	myPort.pipe(parser); // pipe the serial stream to the parser

	//event listeners
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
	}
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}
