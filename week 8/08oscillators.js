
let sine,triangle,saw,square,osc;

function setup(){
		//sine wave is a semetrical repeating form
		//frequency is measured in hz (cycles per second)
	sine = new p5.Oscillator(440,'sine');
	sine.start();
	sine.amp(0);

	triangle = new p5.Oscillator(60,'triangle');
	triangle.start();
	triangle.amp(0);

	square = new p5.Oscillator(60,'square');
	square.start();
	square.amp(0);

	saw = new p5.Oscillator(60,'saw');
	saw.start();
	saw.amp(0);

	//this is another way to make a sine wave oscillator
	osc = new p5.Oscillator();
	osc.amp(0);
	osc.freq(60);
	osc.setType('sine');
	osc.start();

}

function draw(){
	createCanvas(windowWidth,600);



}

function keyReleased(){
	if (key == 'a'){
		square.amp(0,.5);
		triangle.amp(0,.5);
		saw.amp(0,.5);
/*		sine.amp(0,.5);
*/		osc.amp(0,.5);

		sine.amp(1,1);
		console.log('sine');

	} else if (key=='s'){
/*		square.amp(0,.5);
*/		triangle.amp(0,.5);
		saw.amp(0,.5);
		sine.amp(0,.5);
		osc.amp(0,.5);

		square.amp(1,1);
		console.log('square');

	} else if (key=='d'){
		square.amp(0,.5);
/*		triangle.amp(0,.5);
*/		saw.amp(0,.5);
		sine.amp(0,.5);
		osc.amp(0,.5);

		triangle.amp(1,1);
		console.log('triangle');

	} else if (key =='f'){
		square.amp(0,.5);
		triangle.amp(0,.5);
/*		saw.amp(0,.5);
*/		sine.amp(0,.5);
		osc.amp(0,.5);

		saw.amp(1,1);
		console.log('saw');
	} else if (key =='g'){
		square.amp(0,.5);
		triangle.amp(0,.5);
		saw.amp(0,.5);
		sine.amp(0,.5);
/*		osc.amp(0,.5);
*/
		osc.amp(1,1);
		console.log('osc');
	}
}

function mouseDragged(){
	osc.freq(map(mouseX,0,width,20,5000));
}