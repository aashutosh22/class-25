class Boat{
    constructor(x,y,w,h,boatpoas){
      this.body = Bodies.rectangle(x,y,w,h)
      this.width = w
      this.height= h
      this.boatpoas = boatpoas
      this.image = loadImage("assets/boat.png")
      World.add(world,this.body)  
    }
    display(){
       push()
       translate(this.body.position.x,this.body.position.y)
       imageMode(CENTER)
       image(this.image,0,this.boatpoas,this.width,this.height)
       pop()
    }
}
