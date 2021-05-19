class Paper{
    constructor(x,y,radius){
        var options ={
            
            restitution :0.06,
            friction :0.5,
            density :1.2
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius
        this.width =33;
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.width);
    }
}