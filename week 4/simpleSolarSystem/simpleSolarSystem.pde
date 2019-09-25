float theta = 0;
int bckgrnd = 0;

void setup(){
  fullScreen();
  background(bckgrnd);

}

void draw(){
  background(bckgrnd);
  
  theta+=0.005;
  
  push();
    translate(width/2,height/2);
    rotate(theta);
    ellipse(0,0,200,200);//sun
    
    //earth
    push();
      translate(-350,350);
      rotate(theta*4);
      ellipse(0,0,50,50);
      translate(40,40);
      ellipse(0,0,10,10);
    pop();
    
    //some other planet
    push();
      rotate(theta*2);//if the rotation is placed ahead of the translate, it has the effect of adding to the previous rotate
      translate(250,250);
      ellipse(0,0,30,30);
      push();
        rotate(theta*4);
        translate(30,30);
        ellipse(0,0,12,12);
      pop();
      push();
        rotate(theta*10);
        translate(-20,20);
        ellipse(0,0,10,10);
      pop();
    pop();
    
  pop();
    
  
}
