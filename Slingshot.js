class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.image1,200,75,40,150)
        
        image(this.image2,173,65,40,100)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke("#3E1D0B");
            if(pointA.x < 210){
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y-3)
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y+5 )
            image(this.image3,pointA.x-25,pointA.y-10,10,30)
        }else{
            line(pointA.x+20,pointA.y,pointB.x-10,pointB.y-3)
            line(pointA.x+20,pointA.y,pointB.x+30,pointB.y+5 )
            image(this.image3,pointA.x+25,pointA.y-10,10,30)
        }
            pop();
            

           // line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}