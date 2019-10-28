let   mediaDirectory = 'assets/';
let imgDimX,imgDimY;
let newImage;

function preload(){
  img1 = loadImage(mediaDirectory + "1970-s-retro-television-set-1411612-1278x965.jpg");
  img2 = loadImage(mediaDirectory + "stranger-things-gang.jpg"); 
  maskImg = loadImage(mediaDirectory + "bee.png");
}

 function setup(){
  createCanvas(windowWidth,windowHeight);
  
  pixelDensity(1);

  imgDimX = img1.width;
  imgDimY = img1.height;
  //masks one image with the alpha from a different image
  img2.mask(maskImg);

  //blend

  //filter
  //this works similarly as filter()

  //image(img1, 0, 0, imgDimX,imgDimY);

  //to use copy to crop an image, you need to create a new image
  newImage = createImage(img2.width,img2.height);
 }


function draw(){
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  //newImage.copy(img2,475,100,400,400,300,100,400,400);
  //image(newImage, 0, 0);
  background(0,100,45);
  image(img2,0,0);
}