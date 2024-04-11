class Knight{
  constructor(x,y,width,height,image,itemCode){
    this.x = x;
    this.y = y;
    this.image = image;
    this.itemCode = itemCode;
    this.width = width;
    this.height = height;
    this.showBubble = false;
    this.messageBubble = loadImage('Images/bubble.gif');
    this.receivedWanted = false;
  }

  hover(){
    let lowerX = this.x;
    let upperX = this.x+this.width;
    let lowerY = this.y+this.height;
    let upperY = this.y;
    if (mouseX>lowerX&&mouseX<upperX&&mouseY<lowerY&&mouseY>upperY){
      return true;
    }
    return false;
  }
  display(){
    image(this.image,this.x,this.y,this.width,this.height);
    if (this.showBubble){
      image(this.messageBubble,this.x + this.width/2,this.y - 50,100,100);
      this.messageBubble.play();
    }
  }
  update(x,y){
    this.x = x;
    this.y = y;
  }
  setItemCode(itemCode){
    this.itemCode = itemCode;
  }
  checkItemCode(itemCode){
    if (this.receivedWanted){
      return -1;
    }
    if (this.itemCode == itemCode){
      console.log("Thank You Sire");
      this.receivedWanted = true;
      return 0;
    } else {
      console.log("This is not what I asked Sire");
      return 1;
    }
  }

}
