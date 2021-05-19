const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

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
    bin = createSprite(964,520,20,20,{isStatic:false});
    bin.addImage(binImg);
    bin.scale = 0.5

    ground = new Ground();
     

    
    binPart1 = new Dustbin(900,505,10,150);
    binPart2 = new Dustbin(960,580,130,10);
    binPart3 = new Dustbin(1025,505,10,150);

    Paper= new Paper(250,530,20);
   
    

   
Slingshot = new SlingShot(Paper.body,{x:200,y:100}) 
}

function draw(){
    background("white");
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
 //   bin.display();
    ground.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
    Paper.display();
    Slingshot.display();
    
    drawSprites();
}

/*function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-80});
    }
}*/

function mouseDragged(){
    Matter.Body.setPosition(Paper.body,{x:mouseX,y:mouseY})
    
    
    }
    
    
    
    function mouseReleased(){
    
    Slingshot.fly()
    }    