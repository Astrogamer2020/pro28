class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 30
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA=null;
    }

    attach(stone1)
    {
        this.sling.bodyA=stone1;
    }

    display(){
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
