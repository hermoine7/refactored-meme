const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
block =new Block(810,180,300,PI/2);
block2 = new Block2(700,240,70,70);
block3 = new Block2(920,240,70,70);
block4 = new Block2(700,145,70,70);
block5 = new Block2(920,145,70,70);
}

function draw() {
  background(255,255,255);  
  drawSprites();
 block.display();
 block2.display();
 block3.display();
}