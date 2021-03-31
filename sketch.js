var gameState="loading"
var cars3,cars1,cars2;

function preload(){
track=loadImage("track.jpg")
car1img=loadImage("car1.jpg")
car2img=loadImage("car2.jpg")
car3img=loadImage("car3.jpg")


    
}
function setup(){
createCanvas(displayWidth,displayHeight);
form1=new form();
cars1=createSprite(50,displayHeight/2,50,50)
cars2=createSprite(50,displayHeight/3,50,50)
cars3=createSprite(50,displayHeight/4,50,50)
cars1.addImage(car1img)
cars2.addImage(car2img)
cars3.addImage(car3img)
cars1.scale=0.5
cars2.scale=0.5
cars3.scale=0.3
cars1.visible=false
cars2.visible=false
cars3.visible=false
}
function draw(){

if(gameState=="loading"){
background(5);
textSize(80);
fill("red");
text("loading...",displayWidth/2-150,displayHeight-100);

if(frameCount===100){
gameState="start";  
}

}

if(gameState=="start"){
clear()
background(125);
form1.display();
}


if(gameState==="training"){
    clear()
    background(124)
    textSize(25)
    text("to move front press up arrow",displayWidth/4,displayHeight/4)
    text("to move left press left aroow",displayWidth/4,displayHeight/4+200)
    text("and to move right press right arrow",displayWidth/4,displayHeight/4+400)
    text("press space bar to switch random colors",displayWidth/4,displayHeight/4+600)

}

if (gameState==="tour"){
clear()
background(track)
cars1.visible=true
cars2.visible=true
cars3.visible=true

drawSprites()

}




}