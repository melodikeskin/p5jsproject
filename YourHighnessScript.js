let bgImage, level1Image, level2Image, level3Image, level4, lock;
let backButton;

function preload() {
  bgImage = loadImage("Images/levelselect.png");
  level1Image = loadImage("Images/Level1.png");
  level2Image = loadImage("Images/Level2.png");
  level3Image = loadImage("Images/Level3.png");
  level4 = loadImage("Images/Level4.png");
  lock = loadImage("Images/lock.icon.png");
  backButton = loadImage("Images/backButton.png");
  pixel = loadFont("Silkscreen/Silkscreen-Bold.ttf");
  bgm = loadSound('sound/levelOptionMusic.mp3');
  font = loadFont('Silkscreen/Silkscreen-Bold.ttf');

}

function setup() {
  createCanvas(1300, 800);

  bgm.play();
  bgm.setVolume(0.7);

  // Draw background image
  image(bgImage, 0, 0, width, height);

  // Draw images for levels and back button
  image(level1Image, 350, 220, 300, 135); // Adjusted position of Level1
  image(level2Image, 750, 220, 300, 135);
  image(level3Image, 350, 490, 300, 135); // Adjusted position of Level3
  image(level4, 745, 490, 300, 135);
  image(lock, 975, 525, 150, 100); // Adjusted position of lock
  image(backButton, width - 150, 10, 100, 100);
}

function mouseClicked() {
  // Check if the mouse is within the bounds of the Level1 image
  if (mouseX >= 350 && mouseX <= 650 && mouseY >= 220 && mouseY <= 355) {
    window.open("YourHighnessLevel1.html", "_self");
  }
  // Check if the mouse is within the bounds of the Level2 image
  else if (mouseX >= 750 && mouseX <= 1050 && mouseY >= 220 && mouseY <= 355) {
    window.open("https://1887a801-68a4-4a14-9203-4c61ca03559b-00-30v7qpoq2vyde.janeway.replit.dev/", "_self");
  }
  // Check if the mouse is within the bounds of the Level3 image
  else if (mouseX >= 350 && mouseX <= 650 && mouseY >= 490 && mouseY <= 625) {
    window.open("https://9ccf6d8b-de10-42e7-90de-48a9b85045e1-00-1yzva9yujxl5l.worf.replit.dev/", "_self");
  }
  // Check if the mouse is within the bounds of the back button
  else if (mouseX >= width - 150 && mouseX <= width - 50 && mouseY >= 10 && mouseY <= 110) {
    window.open("https://2a379f62-227b-4481-896e-b7297109e462-00-1pcmlvkkc7g5s.worf.replit.dev/", "_self");
  }
}
