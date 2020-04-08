let game = new Game();

function preload() {
  game.init()
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup()
}

function draw() {
  
  // if (game.start) {
  frameRate(40)
  game.display()
  // } else {
  //   fill ('orange')
  //   rect(0,0,544,600)
  //   textSize(20)
  //   text("Press enter to start", 10,30)
  // }
}

function keyPressed() {
  let spaceBarCode = 32
  if (keyCode === spaceBarCode) {
    game.player.jump()
  }
}

