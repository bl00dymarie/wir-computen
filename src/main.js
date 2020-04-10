let game = new Game();

function preload() {
  fontRegular = loadFont('assets/Marvel-Regular.ttf');
  game.init()
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup()
}

function draw() {
  
  // if (game.start) {
  frameRate(40)
  if (frameCount >= 2400) {
    textFont(fontRegular)
    textSize(20)
    text("END", 30, 30)
    return 
  }
  game.display()
  let math = 2440
  math -= frameCount
  let counter = Math.floor(math / 40)
  textSize(20)
  textFont(fontRegular)
  text(counter, 30, 30)
  // } else {
  //   fill ('orange')
  //   rect(0,0,544,600)
  //   textSize(20)
  //   text("Press enter to start", 10,30)
  // }
}

function keyPressed() {
  
  const spaceBarCode = 32
  if (keyCode === spaceBarCode) {
    game.player.jump()
  }
  if (keyCode === 53) {
    game.player.jumpHigh()
  }
}

