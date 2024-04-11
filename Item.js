class Item{
  constructor(x,y,width,height,image,itemCode){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=image;
    this.itemCode = itemCode;
    this.originX = x;
    this.originY = y;
    this.show = true;
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
    if (this.show){
    image(this.image,this.x,this.y,this.width,this.height);
    }
  }
  update(x,y){
    this.x = x;
    this.y = y;
  }
  reset(){
    this.x = this.originX;
    this.y = this.originY;
  }
  setItemCode(itemCode){
    this.itemCode = itemCode;
  }

}