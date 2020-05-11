var canvas;
var pre;
var gameState=0;
function setup() {
 canvas= createCanvas(displayWidth,displayHeight-100);
  pre=new namePage();
}

function draw() {
  background("yellow");  
  pre.display();
  if(gameState === 1){
    pre.hide();
  }
  drawSprites();
}