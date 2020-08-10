
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,dustbin,dustbinImg,ballImg;

function Preload(){
dustbinImg=loadImage("dustbin.png")
ballImg=loadImage("ball.png")
}

function setup() {
createCanvas(400, 400);


engine = Engine.create();
world = engine.world;

ball = new Ball(200,200,10,10);

dustbin = new Dustbin(200,400,40,40);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed() {
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:400});
  Matter.Body.applyForce(ball2.body,ball2.body.position,{x:200,y:400});
  Matter.Body.applyForce(ball3.body,ball3.body.position,{x:200,y:400});
  Matter.Body.applyForce(ball4.body,ball4.body.position,{x:200,y:400});
}

}