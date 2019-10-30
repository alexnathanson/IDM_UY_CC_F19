/*
HTML 5 video object functionality
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
*/
let vid, sSlider, vSlider;
let playing;
let vidVol;

function setup() {
  

	playing = true;
  	vidVol = .2;

  /*if the first argument is an array of version,
  it will automatically choose which version is playable.
  the 2nd element is a callback that handles the media*/
  vid = createVideo(
    'assets/Telephone_ChristianMarclay_1995.mp4',
    vidLoad
  );
  console.log(vid);
  //noCanvas
  createCanvas(2*vid.width,2*vid.height);
  vid.size(2*vid.width,2*vid.height);

  //.hide() removes the video from the DOM
  //vid.hide();

  vSlider = createSlider(0,100,50)
   sSlider = createSlider(0, 100, 10);
  
}

function draw(){
	background(200,220,183);

	//console.log(map(sSlider.value(),0,100,-3.0,3.0));
	vid.speed(map(sSlider.value(),0,100,0.0,10.0));
	vid.volume(map(vSlider.value(),0,100,0.0,1.0));

	image(vid,0,0,vid.width,vid.height);

	//we can apply the same filters to the canvas as we would normally
	filter(INVERT);
}

// This function is called when the video loads
function vidLoad() {

	if(playing){
		vid.loop();
		//vid.play();
  		vid.volume(vidVol);
	}

	//do something when you click on the DOM video
	vid.elt.onclick = (event)=>{
  			console.log('clicked!');
  		};

  	//do something when the video stops playing (different from pause)
	vid.elt.onended = (event) => {
	  console.log('Video stopped either because 1) it was over, ' +
	      'or 2) no further data is available.');
	};

	//enable video controls
	vid.elt.controls = true;
}

function keyPressed(){
	if(key=='p'){
		playing = !playing;

		if (playing){
			vid.loop();
  			vid.volume(vidVol);
		} else {
			vid.pause();
		}
	} else if (key == 'i'){
		//get video info
		console.log(vid.elt.duration);
		console.log(vid.elt.currentTime);

	} else if (key == 'j'){
		//this will work even when paused
		vid.elt.currentTime += 10;
	}
}