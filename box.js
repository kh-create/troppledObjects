class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    //adding the bodies to the matter.world
    
    World.add(world, this.body);
  }
  display(){
    //specifyng the position of the body on the game world
    var pos =this.body.position;
    var angle = this.body.angle;
    //push the new transformation
    push();
    //translate will move the origin of the canvas
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    //pop removes the current transformation and takes to original
    pop();
  }
};
