let name = process.argv[2];

console.log("Hello, and welcome to node, " + name);


/*
//require tells node which modules to include
let SerialPort = require('serialport');

let portName;
let oldData = "";
// list serial ports:
SerialPort.list().then(
  ports => {
  	ports.forEach(console.log);
  	portName = ports[0]['path'];
  	myPorts()},
  err => console.error(err)
)

function myPorts(){
	console.log("i has serial ports");
}*/