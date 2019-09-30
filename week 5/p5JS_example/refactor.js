/*mouse tracker using map + conditionals with key value + loops + custom functions
Part A
1) draw rectangle
2) draw another shape inside of that rectable
3) map the movement in the interior shape to the position of the mouse

Part B
1) add a conditional statement to change something based on keyboard input

Part C
1) Using a nested loop, set the background pixels inside of the rectangle

Part D
1) Move the interior shape to a custom function
2)
*/

let offsetX;
let offsetY;
let rColor;
let eColor;

let constrainedMouseX;
let contrainedMouseY;

function setup(){
 	createCanvas(800,800);
 	background(200);

 	offsetX = 100;
	offsetY = 100;
	rColor = color(255);
	eColor = color(0);

	console.log(displayWidth);
	console.log(displayHeight);
	console.log(width);
	console.log(height);

	//stroke(255,0,0);
	for(let x = 0; x < (width*.9); x++){
		for (let y = 0; y < (height*.9); y++){
		  //println(x + ", " + y);
		   let c = color(map(x,0,width, 0, 255),map(y,0, height,0, 255),map((x+y)*.5,0, height,0, 255));
		   set(x+int(width*.05),y+int(height*.05),c);
		}
	}
	updatePixels();
}


function draw(){
  //background(200);
  
  constrainedMouseX = constrain(mouseX,0,width);
  constrainMouseY = constrain(mouseY,0,height);

  if(constrainedMouseX>width/2){
    rColor= 255;
    eColor= 0;
  } else {
    rColor= 0;
    eColor= 255;
  }
  fill(rColor);
  rect(offsetX,offsetY,300, 300);
  
  fill(eColor);
  ellipse(map(constrainedMouseX,0,width,5,295)+offsetX,map(constrainMouseY,0,height,5,295)+offsetY,10,10);
}
