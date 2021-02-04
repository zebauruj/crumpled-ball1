
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;

var ball,ground,box1,box2,box3;
function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
  

	

box1=new Box(900,380,200,20);
box2=new Box(800,340,20,100);
box3=new Box(1000,340,20,100);
ground= new Ground(600,390,1200,10)	;
  ball=new Ball(40,100,20);
}


function draw() {
  background(0);
	fill("white");
	textSize(25);
	text("Press up arrow key to throw the ball in dustbin",100,100);
  Engine.update(engine);
 

 ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

