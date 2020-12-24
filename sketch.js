
var bg, backgroundImg,ironMan,ironManImg;
var stoneGroup,stoneImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
  stoneImg =loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=-6;


  ironMan =createSprite(500,500,80,90);
  ironMan.addImage(ironManImg);
  ironMan.scale =0.2;
  ironMan.debug=true;
  ironMan.setCollider("rectangle",100,0,200,400);

  stoneGroup = new Group();
  
 }

function draw() {
  if(keyDown("up")){
    ironMan.velocityY=-10;
  }
  
  if(keyDown("left")){
    ironMan.x=ironMan.x-5;
  }
  if(keyDown("right")){
    ironMan.x=ironMan.x+5;
  }
  ironMan.velocityY=ironMan.velocityY+0.5;
  
  
  if(bg.y<100){
    bg.y=bg.height/4;
  }
  generateStones();
  for(var i=0;i<(stoneGroup).length;i++){
    var temp=stoneGroup.get(i);
    if(temp.isTouching(ironMan)){
      ironMan.collide(temp);
    }
  }
    drawSprites();
   
}
function generateStones(){
  if(frameCount % 70===0){
    var stone=createSprite(random(580,100),300,40,20);
    stone.addImage(stoneImg);
    stone.velocityY=2;
    stone.scale=0.5;
    stoneGroup.add(stone);
    stone.lifetime=250;
  }
}
