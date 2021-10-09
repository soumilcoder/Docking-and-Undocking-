var database;
var bg_img;
var gameState =0;
var playerCount = 0;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4
var iss,spacebg
var spacecraft
var hasDocked=false





function preload(){
bg_img=loadImage("images/spacebg.jpg")
spacecraft_animation=loadAnimation("images/spacecraft1.png","images/spacecraft2.png","images/spacecraft3.png","images/spacecraft4.png")
spacecraft2_img=loadImage("images/spacecraft2.png")
spacecraft3_img=loadImage("images/spacecraft3.png")
spacecraft4_img=loadImage("images/spacecraft4.png")
spacecraft1_img=loadImage("images/spacecraft1.png")
iss_img=loadImage("images/iss.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  iss=createSprite(400,200,50,50);
  iss.scale=0.7
  iss.addImage(iss_img)
  spacecraft=createSprite(350,400)
  //spacecraft.addAnimation("working",spacecraft_animation)
  spacecraft.addImage(spacecraft1_img)
  spacecraft.scale=0.15
}


function draw() {
  background(bg_img);  
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft.x-=30
      spacecraft.addImage(spacecraft3_img)
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x+=30
      spacecraft.addImage(spacecraft4_img)
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y-=10
     // spacecraft.addImage(spacecraft4_img)
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2_img)
    }
  }

  if(spacecraft.y<=(iss.y+80)&&spacecraft.x<=(iss.x-25)){
    hasDocked=true
    console.log(hasDocked)
    textSize(24);
    fill(255)
    text("Docking Successful",300,350)
  }
  drawSprites();
}