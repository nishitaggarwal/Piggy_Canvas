class Bird extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("sprites/bird.png");
  }

  display(Inp) {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    this.width = Inp;
    this.height = Inp;
    console.log()
    super.display();
  }
}
