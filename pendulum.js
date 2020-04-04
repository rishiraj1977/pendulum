class pendulum{
    constructor(x,y,radius){        
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }

    followMouse(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
    
    detachFromMouse(){
        this.body.position.x = xPos;
        this.body.position.y = yPos;
        xPos = this.body.position.x;
        yPos = this.body.position.y;
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill('red');
        ellipse(0,0,this.radius*2);
        pop();
    }
}