const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en,world
var ground
var ball
var heli

function setup(){
  createCanvas(400,400)

  en=Engine.create()

  world=en.world

  var stop={
    isStatic: true
  }

  ground=Bodies.rectangle(200,385,400,10,stop)
  World.add(world,ground)

  heli=Bodies.rectangle(200,50,10,10,stop)
  World.add(world,heli)

  var bounc={
    restitution: 0.99
  }

  ball=Bodies.circle(200,50,10,bounc)
  World.add(world,ball)
  Matter.Body.setStatic(ball, true)

}
function draw(){
  background(0)
Engine.update(en)
rectMode(CENTER)

rect(ground.position.x,ground.position.y,400,10)

fill("Yellow")
rect(heli.position.x,heli.position.y,50,50)

fill("silver")
text("Press down arrow to drop",140,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10)

if(keyDown("down")){
  Matter.Body.setStatic(ball,false)
}
  
  drawSprites()
}
