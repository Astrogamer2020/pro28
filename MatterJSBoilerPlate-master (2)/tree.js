class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("tree.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
    addPic(){

        var pos = this.body.position;
        push();
        fill("brown");
       image(this.image,pos.x,pos.y,width,height);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();



    }
}
