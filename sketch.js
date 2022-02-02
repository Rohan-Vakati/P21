
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var engine, world;

var ground, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}


	

	//Create the Bodies Here.
	
	ball = Bodies.circle(50,30,20,ball_options);
	World.add(world, ball);
	
  
	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1350, 600, 20, 120);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y,20,20);
  ground.display()
  leftSide.display()
  rightSide.display()
 
  
 
}

function keyPressed(){
	if(keyDown("up")){
		Matter.Body.applyForce(ball, ball.position, {x: 95, y: -95})

	}


}

