var gameState = "play"
var END = 0


var ground
var ninja, ninja_img, ninja_anima
var bg, bg_img
var star,star_anima


function preload(){
  ninja_img = loadImage("ninja.png")
  bg_img = loadImage("bg.png")
  
  star_img = loadImage("star1.png")
  star_anima = loadAnimation("star2.png","star3.png")
  
}


function setup(){
  
  createCanvas(600,300)
  
  ground = createSprite(285,290,600,5)
  ground.visible = false
  
  
  ninja = createSprite(100,200,5,5)
  ninja.scale = 0.3
  ninja.addImage(ninja_img)
  
  star = createSprite(600,151,1,1)
  star.scale = 0.3
  star.velocityX = -1
  star.addAnimation("spinning",star_anima)
  
}


function draw(){
  
  background(bg_img)
  
  if(keyDown(UP_ARROW)){
   ninja.velocityY=-5
  }
  
  
  ninja.velocityY = ninja.velocityY +0.8
  
  if(ninja.isTouching(star)){
    
  }
  
  ninja.collide(ground)
  
  drawSprites()
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}