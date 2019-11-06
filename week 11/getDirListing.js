let   mediaDirectory = 'assets/';
let imgs = [];
function preload(){
 /* img1 = loadImage(mediaDirectory + "1970-s-retro-television-set-1411612-1278x965.jpg");
  img2 = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
*/
  getDirectoryList("http://localhost:8000/week%209/assets");
  
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
  
 }


function draw(){
  background(0,255,0);
  
}


function getDirectoryList(adr){
  //based off of https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader
  let client = new XMLHttpRequest(adr);
  client.open("GET", , true);
  client.send();

  client.onreadystatechange = function() {
    if(this.readyState == this.HEADERS_RECEIVED) {
      let responseText = client.responseText;
      
      console.log(client);
    }
  }
}

function parseDirList(){

}