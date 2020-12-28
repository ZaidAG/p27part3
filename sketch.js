
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
 
var newton1,newton2,newton3,newton4,newton5

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   newton1=new Newton(300,500,50);
   newton2=new Newton(350,500,50);
   newton3=new Newton(400,500,50);
   newton4=new Newton(450,500,50);
   newton5=new Newton(500,500,50);
   roofTop=new Roof(400,100,600,30);
   rope1=new Chain(newton1.body,roofTop.body,-200);
   rope2=new Chain(newton2.body,roofTop.body,-100);
   rope3=new Chain(newton3.body,roofTop.body,0);
   rope4=new Chain(newton4.body,roofTop.body,100);
  rope5=new Chain(newton5.body,roofTop.body,200);
   //,+newtonDiameter*2,0

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roofTop.display();
  newton1.display();
  newton2.display();
  newton3.display();
  newton4.display();
  newton5.display();
  
  rope1.display();
 rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Body.applyForce(newton1.body,newton1.body.position,{x:-100,y:-50})
  }
}


