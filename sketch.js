function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  car=createSprite(700,200,50,50);
  bike=createSprite(700,500,50,50);
  car.velocityY=5
  bike.velocityY=-5
  car.shapeColor="red"
  bike.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
 if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="lightgreen"
  fixedrect.shapeColor="lightgreen"
 }
 else{
  movingrect.shapeColor="yellow"
  fixedrect.shapeColor="yellow" 
 }
 bounceoff(car,bike)
  drawSprites();
}
