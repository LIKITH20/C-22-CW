
//nameSpacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object1;
var ground;
var ball;

function setup(){
  var canvas=createCanvas(400,400);

  engine=Engine.create();

  world=engine.world;

  var Groundoptions ={
     isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,20,Groundoptions);
  World.add(world,ground);

  var ballOptions={
    restitution:0.8
  }
  ball=Bodies.circle(200,50,10,ballOptions);
  World.add(world,ball);
}
function draw()
{
  background(0);

  Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,10,10);
  
  
  
}
