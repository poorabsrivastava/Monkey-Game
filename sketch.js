
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)  
 
}


function draw() {
background("white");
  
 var survivalTime = 0;

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
 if (keyDown("space")&& monkey.y>100){
  monkey.velocityY = -10;
 }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0) {
  ground.x = ground.width / 2;
}
  
  monkey.collide(ground);

  spawnBanana();
  spawnObstacle();
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    var banana=createSprite(400,200,20,20);
    banana.addAnimation("moving", bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -8;
    banana.scale = 0.105;   
  }
}

function spawnObstacle(){
  if(frameCount % 300 === 0){
    var obstacle=createSprite(400,200,20,20);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX = -8;
    obstacle.scale = 0.105;  
    obstacle.lifetime = 100;
  }
}