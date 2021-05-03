var bg,bg2,form,system,code,security,ti;
var score=0,sv=0,s;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2=loadImage("treasure.jpg")
  s=loadSound("vaathi.mp3");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  if(sv===0){
    s.play();
  }
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}

