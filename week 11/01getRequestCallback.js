//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader

let getThis;

//the URI can be either local or remote, as long as the server is configured to accept cross-origin requests
getThis = 'http://api.openweathermap.org/data/2.5/weather?q=Brooklyn&units=imperial&APPID=b0ca160d26b68a5f4da977ab337b8287';
//you could also try to get a local resource 
//getThis = 'http://localhost:8000/week%2010/index.html';

let getResponse;

//getThis = 'https://www.google.com/search?tbm=isch&q=election';
function setup(){
  createCanvas(windowWidth,windowHeight);

  getRequest(getThis,myCallback);

 }

function draw(){
  background(0,255,0);
}

function getRequest(adr,callback){


  let client = new XMLHttpRequest();
  //open initiates a request method
  //the default is asynchronous, but can be done synchronously
  client.open("GET", adr);

  //send sends the request to the server
  client.send();

  //this is an event handler that is called whenever the state changes
  client.onreadystatechange = function() {
    /*readyState codes are listed here:https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    readyState 4 indicates DONE
    status codes are listed here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    200 indicates a successful request i.e. the resource has been fetched*/
    if(client.readyState == 4 && client.status == 200) {
      let responseText = client.responseText; 
      
      console.log(client);
      callback(responseText);
    }
  }
}

function myCallback(response){
  console.log(typeof response);
  console.log(response);

 /* getResponse = JSON.parse(response);
  console.log(typeof getResponse);
  console.log(getResponse);*/
}