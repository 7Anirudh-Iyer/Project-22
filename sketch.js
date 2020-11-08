const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en,world
var ground
var ball
var heli
var b1,b2,b3

function setup(){
  createCanvas(400,400)

  en=Engine.create()

  world=en.world

  var stop={
    isStatic: true
  }

  ground=Bodies.rectangle(200,385,400,10,stop)
  World.add(world,ground)

  wall1=Bodies.rectangle(200,375,100,10,stop)
  World.add(world,wall1)
  wall2=Bodies.rectangle(145,350,10,60,stop)
  World.add(world,wall2)
  wall3=Bodies.rectangle(245,350,10,60,stop)
  World.add(world,wall3)

  heli=Bodies.rectangle(200,50,10,10,stop)
  World.add(world,heli)

  var bounc={
    restitution: 1
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

fill("red")
rect(200,375,100,10)
rect(145,350,10,60)
rect(245,350,10,60)

fill("silver")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10)

if(keyDown("down")){
  Matter.Body.setStatic(ball,false)
}
  
}
