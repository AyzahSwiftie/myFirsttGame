
var box;
function preload(){
  

}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  //create a box sprite
  box = createSprite(windowWidth/2,windowHeight/2 ,20,50);
}

function draw(){
  background("blue");

  if (keyDown(DOWN_ARROW)){
    background("purple")
  }

  if(keyDown(UP_ARROW)){
    background("green")

  }
  if( keyDown(RIGHT_ARROW) )   {
    box.x = box.x+5;
  }
  if(keyDown(LEFT_ARROW)  ){
    box.x = box.x-5;

  }

  drawSprites();
}
