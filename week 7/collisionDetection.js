
let myObstacles = [];
let myPlayer;
//let round = 1;
//let gameSpeed = round;
//let lives = 3;
//let shape;
let myGame;

let racingSounds, explosionSound;

function preload(){
	//racing sounds source: https://archive.org/details/aporee_33170_38130
	racingSounds = loadSound("assets/racing.mp3");

	//explosion sounds source: https://archive.org/details/explosion_239
	explosionSound = loadSound("assets/explosion.mp3")
}

function setup(){
	createCanvas(windowWidth,500);
	
	racingSounds.loop();
	racingSounds.setVolume(0.5);
	myGame = new GamePlay();
	myGame.gShape=floor(random(2));

	createObstacles(myGame.roundNumber);

	myPlayer = new Player(random(width),random(height),10,10,myGame.gShape);

}

function draw(){
	background(255,255,255,2);

	myGame.drawChecker(0,0,40,height,0,200,0);
	myGame.drawChecker(width-40,0, 40,height,200,0,0);

	myGame.displayGameInfo(20, 20);

	//position is a setter function
	
	if(!myGame.newRoundAnimation()){
		myPlayer.position = myGame.checkKey();
	}

	for (let mO = 0; mO < 20 * myGame.roundNumber; mO++){
		myObstacles[mO].checkCollision(myPlayer.position);
		myObstacles[mO].display();
	}

	myPlayer.display();

}

function createObstacles(arg){
	let obst = 25 * arg;
	for(let m = 0; m < obst; m++){
		myObstacles[m] = new Obstacles(floor(random(width)),floor(random(height)),random(10,50),random(10,50),myGame.gShape);
	}
}