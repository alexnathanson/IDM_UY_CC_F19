int variance = 3;
float numShapes = 10.0;
int spacing = 10;
int quadDim;
int quadX;
int sqrY = 200;
int quadY;

void setup(){
  size(800,800);
  
  quadDim = int(float(width)/numShapes)-spacing-(spacing/10);
  //println(quadDim);
  
  float amt = int(float(width)/float(quadDim + (spacing)));

  for (int shapes = 0; shapes < numShapes; shapes++){
        
    square((float(quadDim) * float(shapes)) + (float(spacing)*float(shapes))+spacing, sqrY, quadDim);
    quadY = sqrY + quadDim + spacing;
    square((float(quadDim) * float(shapes)) + (float(spacing)*float(shapes))+spacing, quadY, quadDim);
    quadY = quadY + quadDim + spacing+100;
    drawRandom(shapes);
    quadY = quadY + quadDim + spacing;
    drawRandom(shapes);

  }

}

void draw(){
  
}

int getVariance(){
  return int(random(variance)-variance);
}

void drawRandom(int thisQuad){
  quadX = int((float(quadDim) * float(thisQuad)) + (float(spacing)*float(thisQuad))+spacing);
  
  quad(quadX + getVariance(), quadY + getVariance(),quadX + quadDim + getVariance(), quadY + getVariance(),quadX + quadDim + getVariance(),  quadY + quadDim + getVariance(),quadX + getVariance(), quadY + quadDim + getVariance());

}
