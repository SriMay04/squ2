const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bgImg, lampImg, squ1Img, squ2Img, squ3Img;
var score=0;


function preload(){
bgImg=loadImage("bg.jpg");

}
function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,399,2500,1);

    bg=createSprite(0,150,1000,400);
    bg.addImage(bgImg);
    bg.scale=5
    
    lamp1=new Lamp(200,250,50,300);
    col1=new Collision(200,100,20,5);
    //lamp2=new Lamp(400,250,50,320);
    lamp3=new Lamp(600,300,50,250);
    //lamp4=new Lamp(800,350,60,220);
    lamp5=new Lamp(1000,250,50,350);
    //lamp6=new Lamp(1200,250,50,300);
    lamp7=new Lamp(1400,250,60,200);
    //lamp8=new Lamp(1600,250,50,300);

    squirrel= new Squirrel(150,200,50,50);

    
}

function draw(){
    background("white");
    Engine.update(engine);


    drawSprites();

    ground.display();

    lamp1.display();
    //lamp2.display();
    lamp3.display();
    //lamp4.display();
    lamp5.display();
    //lamp6.display();
    lamp7.display();
    //lamp8.display();
    //lamp9.display();


    squirrel.display();
    col1.display();
    camera.position.x=squirrel.x

    textSize(20)
    fill(0)
    text("Score:"+score,40,40)
   
}

function keyPressed(){

    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(squirrel.body,squirrel.body.position,{x:200,y:-500})
    }

    if(keyCode===LEFT_ARROW){
        Matter.Body.applyForce(squirrel.body,squirrel.body.position,{x:-200,y:-500})
    }

    if(keyCode===RIGHT_ARROW){
        Matter.Body.applyForce(squirrel.body,squirrel.body.position,{x:200,y:0})
    }
}

