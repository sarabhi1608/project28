class Box extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(4);
        fill(0,128,128);
        rect(0,0,this.width,this.height);
        pop();
    }
}