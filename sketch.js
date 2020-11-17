var ground ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
	

	box1 = new Dustbin();
	box2 = new Dustbin();
	box3 = new Dustbin();
	ground = new Ground();
	ball = new Ball();
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55})
	}
}


