class Chain {

    constructor (bodyX,bodyY) {
        var chainOptions = {
               bodyA : bodyX,
               bodyB : bodyY,
               stiffness : 0.04,
               length : 10
          }

        this.chainbody = Constraint.create (chainOptions);

        World.add (myWorld, this.chainbody);

        //console.log (this);
        
        
    }

    display () {
        var pointA = this.chainbody.bodyA.position;
        var pointB = this.chainbody.bodyB.position;
        strokeWeight (4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        
        

    }

}