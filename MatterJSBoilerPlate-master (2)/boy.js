class Boy {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("boy.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("blue");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
    addPic(){

        var pos = this.body.position;
        push();
        fill("blue");
       image(this.image,100,200,width,height);
       // rectMode(CENTER);
        //rect(pos.x, pos.y, this.width, this.height);
        pop();



    }
}
