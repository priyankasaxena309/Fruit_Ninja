var PLAY=1;
var END=0;
var gameState=1;
var knife,fruit,bomb,fruitGroup,bombGroup,score,randomFruit,position
var knifeImage,fruit1,fruit2,fruit3,fruit4,fruit5,bombImage,gameOverImage;
var gameOverSound,knifeSwoosh;

function preload(){
knifeImage=loadImage("assets/knife.png");
bombImage=loadImage("assets/alien1.png");
fruit1=loadImage('assets/fruit1.png');
fruit2=loadImage('assets/fruit2.png');
fruit3=loadImage('assets/fruit3.png');
fruit4=loadImage('assets/fruit4.png');

}

function setup(){
    createCanvas(600,600);
   // background=createSprite(250,350,800,800);
    //background.addImage(backgroundImage);
    //background.scale=4;


    // creating a knife
    knife=createSprite(40,200,20,20);
    knife.addImage(knifeImage);
    knife.scale=0.7
    knife.setCollider("rectangle",0,0,40,40);
    score=0;
    fruitGroup=createGroup();
    bombGroup=createGroup()
    
}
function draw(){
   background("lightblue") 
    if(gameState==PLAY){
        fruits()
        bomb()
        knife.y=mouseY;
    knife.x=mouseX;
    if(fruitGroup.isTouching(knife)){
        fruitGroup.destroyEach()
        score=score+2
    }
    else{
        if(bombGroup.isTouching(knife)){
            gameState=END;
            fruitGroup.destroyEach()
            bombGroup.destroyEach()
            fruitGroup.setVelocityXEach(0)
            bombGroup.setVelocityXEach(0)
            knife.x=300;
            knife.y=300;
           
        }
    }


    }
    drawSprites()
    textSize(25)
    text("Score: "+score,250,250)
}
function bomb(){
    if(World.frameCount%200==0){
        bomb1=createSprite(400,200,20,20);
        bomb1.addAnimation("moving",bombImage);
        bomb1.y=Math.round(random(100,550));
        bomb1.velocityX=-(8+(score/10));
        bomb1.setLifetime=50
        bombGroup.add(bomb1)
    }
}
function fruits(){
    if(World.frameCount%80==0){
        position=Math.round(random(1,2));
        fruit=createSprite(400,200,20,20);
        if(position==1){
            fruit.x=600;
            fruit.velocityX=-(7+(score/4));
        }
        else{
            if(position==2){
                fruit.x=0;
                fruit.velocityX=-(7+(score/4));
            }
        }
        fruit.scale=0.2;
        r=Math.round(random(1,4));
        if(r==1){
            fruit.addImage(fruit2)
        }
        else if(r==2){
            fruit.addImage(fruit3);
        }

        else if(r==3){
            fruit.addImage(fruit4);
        }
        else{
            fruit.addImage(fruit5);
        }
   fruit.y=Math.round(random(50,550));
   fruit.setLifetime=100;
   fruitGroup.add(fruit)

}
}
