class Newton{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          resititution:1,
          friction:0,
          density:0.5
      }
    this.radius=radius;
    this.body=Matter.Bodies.circle(x,y,this.radius,options)
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("black");
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius);
    pop();
  }
};