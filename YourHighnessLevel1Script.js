//Coleder Sommers: edited position of knights, and sorted load image and load sound code
//Tanner Richins - Generated background image, created all items, created all audios, made the reset level function in game end, loaded in a lot of the images
//Haoxuan Yang - Basic Game Logic and Implementation of Dragging Function
//Skyler Bradley - Incorporated music and created the lose and win screens
//Abhay: Code of the approval bar(feedback , sound),loading images and sounds, importing sounds for the bgm and health bar, added sound effects.

let backgroundImage;
let buttonImage;
let knightList = [];
let itemList = [];
let knight1,knight2;
let dragging = false;
let currentDrag = -1;
let offSetX;
let offSetY;
let playMode = false;
let soundList = [];
let blank,correct,wrong,full,blank2s;
let chest,diamond;
let approval = 100;
let bgm,barsound,losemusic,winMusic,correctEffect; 
let losePlaying = false;
let winPlaying = false;
let kingQuestion;
let penalty = 20;
let font;


function preload() {
  // Load background image
  backgroundImage = loadImage('Images/yourhighness.background.png');
  bgm = loadSound('yourHighnessAudios/backgroundMusicYourHighness.mp3');
  blank2s = loadSound('Sounds/blank2s.mp3');
  blank = loadSound('Sounds/blank.mp3');
  correct = loadSound('Sounds/correct.mp3');
  wrong = loadSound('yourHighnessAudios/poly.incorrect.mp3');
  full = loadSound('yourHighnessAudios/neil.full.mp3');
  barsound = loadSound('Sounds/barsound.wav');
  losemusic = loadSound('Sounds/losemusic.wav');
  winMusic = loadSound('Sounds/winMusic.wav');
  correctEffect = loadSound('Sounds/Correctsound.mp3');
  kingQuestion = loadSound('yourHighnessAudios/king.question.mp3');
  // Load button image
  buttonImage = loadImage('Images/returntolevelselect.icon.png');
  knight1 = loadImage('Images/knight1.icon.png');
  knight2 = loadImage('Images/knight2.icon.png');
  knight3 = loadImage('Images/knight3.icon.png');
  knight4 = loadImage('Images/knight4.icon.png');
  chest = loadImage('Images/chest.icon.png');
  blueflag = loadImage('Images/blueflag.icon.png');
  chest = loadImage('Images/chest.icon.png');
  diamond = loadImage('Images/diamond.icon.png');
  feather = loadImage('Images/feather.icon.png');
  flag = loadImage('Images/blueflag.icon.png');
  goblet = loadImage('Images/copperchallace.icon.png');
  goldcoin = loadImage('Images/coin.icon.png');
  key = loadImage('Images/key.icon.png');
  shield = loadImage('Images/shield.icon.png');
  sword = loadImage('Images/sword.icon.png');
  torch = loadImage('Images/torch.icon.png');
  Curtain = loadImage('Images/curtain.icon.png');
  loseScreen = loadImage('Images/loseScreen.png');
  winScreen = loadImage('Images/winScreen.png');
  instructions = loadImage('Images/instructions.png');

  soundList[0] = loadSound('yourHighnessAudios/d.chest.mp3');
  soundList[1] = loadSound('yourHighnessAudios/d.diamond.mp3');
  soundList[2] = loadSound('yourHighnessAudios/neil.feather.mp3')
  soundList[3] = loadSound('yourHighnessAudios/neil.flag.mp3')
  soundList[4] = loadSound('yourHighnessAudios/neil.goblet.mp3')
  soundList[5] = loadSound('yourHighnessAudios/neil.goldcoin.mp3')
  soundList[6] = loadSound('yourHighnessAudios/q.key.mp3')
  soundList[7] = loadSound('yourHighnessAudios/q.shield.mp3')
  soundList[8] = loadSound('yourHighnessAudios/neil.sword.mp3')
  soundList[9] = loadSound('yourHighnessAudios/neil.torch.mp3')

  font = loadFont('Silkscreen/Silkscreen-Bold.ttf');


}

function setup() {
  // Calculate new width and height
  let newWidth = 1200;
  let newHeight = 900;
  createCanvas(newWidth, newHeight);
  knightList[0] = new Knight(050,667,100,200,knight1,0);
  knightList[1] = new Knight(250,669,100,200,knight2,1);
  knightList[2] = new Knight(450,660,100,200,knight3,2);
  knightList[3] = new Knight(650,660,100,200,knight4,3);

  itemList[0] = new Item(500,300,100,100,chest,0);
  itemList[1] = new Item(500,200,100,100,diamond,1);
  itemList[2] = new Item(600,200,100,100,feather,2);
  itemList[3] = new Item(600,300,100,100,flag,3);
  itemList[4] = new Item(300,1000,100,100,goblet,4);
  itemList[5] = new Item(300,1000,100,100,goldcoin,5);
  itemList[6] = new Item(300,1000,100,100,key,6);
  itemList[7] = new Item(300,1000,100,100,shield,7);
  itemList[8] = new Item(300,1000,100,100,sword,8);
  itemList[9] = new Item(300,1000,100,100,torch,9);

  bgm.play();
  bgm.setVolume(0.6);

    // Create button
  let button = createImg('Images/returntolevelselect.icon.png',"Return to Level Select");
  button.position(newWidth - 72, 10); // Position button at top right corner
  button.size(80, 75); // Set button size
  button.style('cursor', 'pointer'); // Set cursor to pointer when hovering over button
  button.mousePressed(openLink); // Call openLink function when button is pressed
 // playRequests();
  blank2s.play();
  blank2s.onended(playRequests);


}

function draw() {
  image(instructions, 200, 200);
  dragAndDisplay();
  approvalBar();
  checkEnding();

}

function mousePressed(){
  for (let i = 0; i < itemList.length; i++){
    if (itemList[i].hover()){
      dragging = true;
      currentDrag = i;
      offSetX = itemList[i].x - mouseX;
      offSetY = itemList[i].y - mouseY;
      break;
    }
  }
}

function mouseReleased(){
  if (dragging){
    if(playMode){
    checkDeliver(currentDrag);
    }
    dragging = false;
    itemList[currentDrag].reset();
    currentDrag = -1;
  }

}

function playRequests(){
  kingQuestion.play();
  kingQuestion.onended(function(){listPlayer(0)});
}

// Function to open link when button is pressed
function openLink() {
  window.open('https://065864d2-b3f6-4b64-ad46-7f46eaa9e9e9-00-2m2zccful3ict.kirk.replit.dev/','_self');
}

function checkDeliver(currentDrag){
  let knight;
  let deliver = false;
  let result;
  for (let i = 0; i < knightList.length; i++){
    if (knightList[i].hover()){
      knight = knightList[i];
      deliver = true;
      break;
    }
  }
  if (deliver){
  result = knight.checkItemCode(itemList[currentDrag].itemCode);
    if (result == -1){
      full.play();
    } else if (result == 1){
      wrong.play();
      approval = approval -penalty;
      //decreaseHealthSound()
    } else if (result == 0){
      itemList[currentDrag].show = false;
        correct.play();
    }
  }
}

function dragAndDisplay(){
  background(backgroundImage);
  if (dragging){
    let curr = itemList[currentDrag];
     curr.update(mouseX+offSetX, mouseY+offSetY);
  }
  for (let i = 0; i < knightList.length; i++){
    knightList[i].display();
  }
  if (playMode){
  for (let i = 0; i<itemList.length; i++){
    itemList[i].display();
  }
  }
}

function listPlayer(index){
  if (index<0||index>=knightList.length){
    playMode = true;
    return;
  } else {
    knightList[index].showBubble = true;
    soundList[index].play();
    soundList[index].onended(function(){
      if (index==knightList.length-1){
        knightList[index].showBubble = false;
        playMode = true;
        return;
      }
      blank.play();
      knightList[index].showBubble = false;
    }
    )
    blank.onended(function(){
      listPlayer(index+1);
    }
    )
}
}

function decreaseHealthSound() {
 if (approval<100){
   barsound.play();
 }
}

function approvalBar(){
  let barWidth = 200;
    let barHeight = 20;
    let barFill = (approval / 100) * barWidth;

    fill(255);
    rect(70, 350, barWidth, barHeight);

    if (approval >= 70) {
      fill(0, 255, 0);
    } else if (approval >= 30) {
      fill(255, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    rect(70, 350, barFill, barHeight);
}

function checkEnding(){
  if (approval<=0){
    gameEnd();
  }
  let allReceived = true;
  for (let i = 0;i<knightList.length;i++){
    allReceived = allReceived && knightList[i].receivedWanted;
  }
  if (allReceived){
    gameSuccess();
  } 
}

function gameEnd(){
  bgm.stop();
  if(!losePlaying){
    losemusic.play();
    losemusic.setVolume(0.7);
  }
  losePlaying = true;
  image(loseScreen, 0, 0, width, height);

  textAlign(CENTER, CENTER); // Set text alignment to center
  textSize(32); // Set text size
  textFont(font); // Set the font
  fill(255); // Set text color to white
  text("Retry", width/2, height/1.5); // Display the text in the middle of the screen

  // Check if the mouse is clicked within the boundaries of the "Retry" text
  if (mouseIsPressed && mouseX > width/2 - textWidth("Retry")/2 && mouseX < width/2 + textWidth("Retry")/2 &&
      mouseY > height/1.5 - textSize()/2 && mouseY < height/1.5 + textSize()/2) {
    losePlaying = false;
    window.open("https://dced4fb8-1357-4eea-aed7-a1ce38156116-00-cftetxt5dyaf.spock.replit.dev/", "_self");
  }

  // Create the return to level select button
  let button = createImg('Images/returntolevelselect.icon.png', "Return to Level Select");
  button.position(width - 72, 10); // Position button at top right corner
  button.size(80, 75); // Set button size
  button.style('cursor', 'pointer'); // Set cursor to pointer when hovering over button
  button.mousePressed(openLink); // Call openLink function when button is pressed
}

function gameSuccess(){
  bgm.stop();
  if(!winPlaying){
    winMusic.play();
  }
  winPlaying = true;
  image(winScreen, 0, 0, width, height);

  // Insert the image and link
  let linkImg = createImg('Images/nextlevel.icon.png'); // Path to the image
  let imgWidth = 250; // Adjust width as needed
  let imgHeight = 250; // Adjust height as needed
  linkImg.position(width - imgWidth - 75, height - imgHeight); // Position the image at the bottom right with some padding
  linkImg.size(imgWidth, imgHeight); // Set the size of the image
  linkImg.style('cursor', 'pointer'); // Set cursor to pointer when hovering over the image
  linkImg.mousePressed(function(){
    window.open("https://1887a801-68a4-4a14-9203-4c61ca03559b-00-30v7qpoq2vyde.janeway.replit.dev/", "_self");
  }); // Open the specified link when the image is clicked

  // Create the return to level select button
  let button = createImg('Images/returntolevelselect.icon.png',"Return to Level Select");
  button.position(width - 72, 10); // Position button at top right corner
  button.size(80, 75); // Set button size
  button.style('cursor', 'pointer'); // Set cursor to pointer when hovering over button
  button.mousePressed(openLink); // Call openLink function when button is pressed
}

