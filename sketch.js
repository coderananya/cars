var car, wall
var speed, weight

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car = createSprite(50,200,50,50)
  car.velocityx = speed

  wall = createSprite(1500,200,60,height/2)
  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background(255,255,255);
  if (wall.x - car.x <  (car.width*wall.width)/2)  
{
  car.vilocityx
  var deformation = 0.5 * weight * speed * speed/2509;
  if (deformation * 180)
  {
  car.shapecolour=(255,0,0)
}
if (deformation<180 && deformation >100)
{
  car.shapecolour=(230,230,0)
}
if (deformation<100)
{
  car.shapecolour = (0,255,0)
}

}
  drawSprites();
}