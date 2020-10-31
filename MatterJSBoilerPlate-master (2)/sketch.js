const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1,ground1;
var mango1,mango2,mango3,mango4,mango5;
var boy1;
var slingshot1;
function preload()
{
	
}

function setup() {
	createCanvas(860, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree1=new Tree(7,6,2,10);
ground1=new Ground(400,690,800,20) 
mango1=new Mango(620,435,50);
mango2=new Mango(640,460,50);
mango3=new Mango(630,450,50);
mango4=new Mango(680,420,50);
mango5=new Mango(610,405,50);
boy1=new Boy(800,620,1,1);
stone1=new Stone(204,620,40);
slingshot1=new Slingshot(stone1.body,{x:200,y:620});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  keyPressed();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  tree1.addPic();
  ground1.display();
  mango1.addPic();
  mango2.addPic();
  mango3.addPic();
  mango4.addPic();
  mango5.addPic();
  boy1.addPic();
  stone1.addPic();
  slingshot1.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone1.body,{x :204,y:620});
		slingshot1.attach(stone1.body);
	}

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot1.fly();
}

function detectcollision(lstone,lmango)
{
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y);
	console.log(' dist:' + distance + ' rad:' + -lmango.radius+lstone.radius);
	if(distance < -lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
}