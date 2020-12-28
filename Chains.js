class Chain{
    constructor(body1,body2, xOffset){
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.02
        }
        this.xOffset = xOffset
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var point1=this.chain.bodyA.position;
        var point2=this.chain.bodyB.position;

        line(point1.x,point1.y,point2.x + this.xOffset,point2.y);
    }
}