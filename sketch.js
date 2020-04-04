const{Engine, World, Bodies, Constraint} = Matter;
var engine, world;
var platform;
var bob;
var chain;
var xPos, yPos;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  platform = new Platform(400, 200, 300, 30);
  bob = new pendulum(400,500, 50);
  chain = new Chain(platform.body, bob.body);
}

function draw() {
  background(0,13,77);
  Engine.update(engine);

  if(keyCode === 32){
    bob.followMouse();
  }
  if(keyCode === 8){
    bob.detachFromMouse();
  }

  push();
  textSize(25);
  fill(355);
  text("Press space to make the pendulum move according to the mouse", 70, 40);
  text("Press enter to detach the pendulum from the mouse", 100, 80);
  pop();
  platform.display();
  bob.display();
  chain.display();
}