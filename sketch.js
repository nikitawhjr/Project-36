var gameState = 0;
var playerCount = 0;
var form, game, player;
var database;
var allPlayers;
var car1, car2, car3, car4;
var cars;

function preload(){
    car1Image = loadImage("Images/car1.png");
    car2Image = loadImage("Images/car2.png");
    car3Image = loadImage("Images/car3.png");
    car4Image = loadImage("Images/car4.png");
    trackImage = loadImage("Images/track.jpg");
}
function setup(){
    game=new Game();
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

   
    game.getState();
    game.start();
   
    
}

function draw(){

    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
  
}

