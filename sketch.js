var canvas;
var music;
var rect1, rect2, rect3, rect4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800,600);

ball = createSprite(Math.round(random(20,750)), 40, 40, 40);
  ball.shapeColor="white";
  ball.velocityX = 3;
  ball.velocityY = 3;
  
    //create 4 different surfaces
 rect1=createSprite(700,550,150,50);
 rect1.shapeColor = "yellow";
 rect2=createSprite(500, 550, 150, 50);
 rect2.shapeColor = "green";
 rect3=  createSprite(300, 550, 150, 50);
 rect3.shapeColor = "red";
 rect4=  createSprite(100, 550, 150, 50);
  rect4.shapeColor = "blue";

// Blue red green yellow
  
  
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  if (touching(ball, rect1)) {
    ball.bounceOff(rect1);
    ball.shapeColor = "yellow";
  }
  
  if (touching(ball, rect2)) {
    ball.bounceOff(rect2);
    ball.shapeColor = "green";
  }
  
  if (touching(ball, rect3)) {
    ball.collide(rect3);
    ball.shapeColor = "red";
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
  if(touching(ball, rect4)) {
    ball.bounceOff(rect4);
    ball.shapeColor = "blue";
    music.play();
  }
  


drawSprites()
    //add condition to check if box touching surface and make it box
}


