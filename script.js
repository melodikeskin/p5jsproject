//Tanner Richins -  Put links in the open link function for the YourHighness and Tavern Madness 
//Skyler Bradley - Made the majority of the graphics for this page including the portals, title, sign along with editing the sizes to fit the page.
//Haoxuan Yang - Implementation of clickable image button and the background image. 


let button_Knight, button_Maze, button_YourHighness;
//commented by Ayca, pls use project url instead of the instance of its run
//let knightLink = "https://fbeac09e-01da-438e-8f0f-9ad2fadeb870-00-3a2eqvehw09qt.kirk.replit.dev/"
let tavernLink = "https://2aa2c45b-4f34-449b-8c3b-47b235a1c402-00-3n2o2v5hloz8k.kirk.replit.dev/"
let knightLink = "https://6833339a-1d19-4b71-bfe8-2239574596ea-00-2s2z7edh5ckxn.kirk.replit.dev/"
//let yourHighnessLink = "https://065864d2-b3f6-4b64-ad46-7f46eaa9e9e9-00-2m2zccful3ict.kirk.replit.dev/"
let yourHighnessLink = "yourHighness.html"
let titleScreenMusic;
let backgroundPic,bluePortal,redPortal,cyanPortal,dragon,sign;
//dimensions of buttons
let button_width = 280;
let button_height = 200;
let k_x = 280;
let k_y = 190;
let m_x = 60;
let m_y = 15;
let yh_x = 20;
let yh_y = 260;
let pixelfont;



function setup(){
  createCanvas(1200,800);
  titleScreenMusic.setVolume(0.25);
  titleScreenMusic.loop();
}

function preload(){ //loadImages
  backgroundPic = loadImage("titlePage/background.png");
  bluePortal = loadImage("titlePage/bluePortal.png");
  redPortal = loadImage("titlePage/redPortal.png");
  cyanPortal = loadImage("titlePage/cyanPortal.png");
  dragon = loadImage("titlePage/dragon.png");
  sign = loadImage("titlePage/sign.png");
  arcadesign = loadImage("titlePage/arcadesign.png");
  titleCard = loadImage("titlePage/titleCard.png");
  titleScreenMusic = loadSound('titleScreenMusic.mp3');
  pixelfont = loadFont("Silkscreenfont/Silkscreen-Bold.ttf");
}

function draw(){
  showBackground();
  tavernButton();
  knightButton();
  yourHighnessButton();
}

function mousePressed(){ //check if mouse is clicking on portals
  if(mouseX > k_x && mouseX < (k_x+button_width) && mouseY > k_y && mouseY < (k_y+button_height)){
    window.open(tavernLink,"_self");
  }else if(mouseX > m_x && mouseX < (m_x+button_width) && mouseY > m_y && mouseY < (m_y+button_height)) {
    window.open(knightLink,"_self");
  }else if (mouseX > yh_x && mouseX < (yh_x+button_width) && mouseY > yh_y && mouseY < (yh_y+button_height)) {
    window.open(yourHighnessLink,"_self");
  }
}

function showBackground(){
  image(backgroundPic,0,0,width,height);
  image(sign,400,380,920,540);
  image(arcadesign,600,460,540,160);
  image(titleCard,480,20,700,200)

}

function tavernButton (){
  image(bluePortal,280,190,300,160);
  textFont(pixelfont);
  textSize(25);
  textAlign(CENTER);
  fill(255)
  text("Tavern \nMadness",445,260)
}
function knightButton (){
  image(cyanPortal,60,15,280,200);
  textFont(pixelfont);
  textSize(25);
  textAlign(CENTER);
  fill(255)
  text("Labyrinth \nLegends",200,125)
}

function yourHighnessButton (){
  image(redPortal,20,260,280,200);
  textFont(pixelfont);
  textSize(25);
  textAlign(CENTER);
  fill(255)
  text("Your \nHighness",160,350)
}
