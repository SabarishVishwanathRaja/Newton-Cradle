class Bob {
    constructor(x,y,r) {
        var options={
            restitution:0.3,
            density:1.5
        }
        this.body = Bodies . circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body)

    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill ("pink")
        ellipse(0,0,this.r,this.r);
        pop();

    }
}