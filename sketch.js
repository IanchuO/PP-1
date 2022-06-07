var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg;
var boomImg, boomSound

function preload(){

  boomSound = loadSound("assets/explosion.Mp3")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {


  createCanvas(windowWidth,windowHeight);
  zombiesGroup = new Group()

  //adding the background image
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

  //creating the player sprite
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
    player.scale = 0.3
    player.debug = true
    player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0);   

    //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
    if (player.y >=510) {
      player.y = player.y-30 
    }
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    if (player.y <=810) {
      player.y = player.y+30 
    }
  }

  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
    player. addSound(boomSound)
  }
  zombiesSpawn();
  drawSprites();
  console.log(player.position.y)
}

function zombiesSpawn() {
  if (frameCount %240 === 0) {
    var ran = Math.round(random(510, 600))
    var ran2 = Math.round(random(1200, 1500))
    var zombie = createSprite(ran2, ran)
    zombie. addImage(zombieImg)
    zombie. velocityX = 0
    zombie.scale = 0.2
  }
}