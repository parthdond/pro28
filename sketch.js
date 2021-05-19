const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
     

    
    binPart1 = new Dustbin(900,505,10,150);
    binPart2 = new Dustbin(960,580,130,10);
    binPart3 = new Dustbin(1025,505,10,150);
    crumpledPaper= new Paper(250,530,20);
    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

   

}

function draw(){
    background(0);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
   
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
    crumpledPaper.display();
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-80});
    }
}
