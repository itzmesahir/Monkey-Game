
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var obstacleGroup



var PLAY = 1;
var END = 0;
var gameState = PLAY;

var time=0;
var ground;

var bananaGroup, bananaImage;
var obstaclesGroup, obstacle;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png",
                                 "sprite_2.png",
                                 "sprite_3.png",
                                 "sprite_4.png",
                                 "sprite_5.png",
                                 "sprite_6.png",
                                 "sprite_7.png",
                                 "sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600, 200);
  
  
  
  monkey = createSprite(50,155,20,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  
  
  ground = createSprite(0,190,1200,10);

  

  
obstaclesGroup = new Group();
  bananaGroup = new Group();
  
  
}


function draw() {
  
  
    
background("white")
  

 
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space") && monkey.y >= 150) {
      monkey.velocityY = -13;
    }
  
  if(monkey.isTouching(bananaGroup)){
     bananaGroup[0].destroy();
   }
  text("time :"+time,550,40)
  if(frameCount % 25===0){
  time = time + 1
}
  
  
  
  spawnObstacles();
  spawnBanana();
  drawSprites();
}
function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(50,120));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 220;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

    
    bananaGroup.add(banana);
    
     
   }}
  

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);    
    obstacle.velocityX=-5
    
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.13
    obstacle.lifetime=300
    obstaclesGroup.add(obstacle);
    }
  }
