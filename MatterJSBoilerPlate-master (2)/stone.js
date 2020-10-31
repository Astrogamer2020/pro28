class Stone {
    constructor(x, y, radius) {
        var options = {
            isStatic :false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x, y, radius / 2, options);
        this.radius = radius / 2;
        this.image=loadImage("stone.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("black");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }

    addPic(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("black");
        ellipseMode(CENTER);
      //  ellipse(0,0, this.radius, this.radius);
       image(this.image,0,0,this.radius,this.radius);
        pop();


        
    }
}