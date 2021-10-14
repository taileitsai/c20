function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,40,80);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
  
}

function draw() {
  background("green"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  drawSprites();
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
   fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 &&
   fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2 && 
   movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2 )
  {
  movingRect.shapeColor = "black";
  fixedRect.shapeColor = "black";
  }
  else
  {
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
  }
}