class Chain {
    constructor(bodyA, pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:15
        }

        this.pointB = pointB

        this.Chain = Constraint.create(options)
        World.add(world, this.Chain)


    }

    fling(){
        this.Chain.bodyA = null
    }

    display(){
        if(this.Chain.bodyA){

        
        var pointA = this.Chain.bodyA.position
        var pointB = this.pointB

        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
    }

}

