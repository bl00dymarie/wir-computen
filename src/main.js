const game = new Game();
// console.log("HELLLLLOOOOO, let's compute........")
const player = new Player(0,0);
// console.log(`This is where the player Freya is at the beginning: ${player.col}, ${player.row}`)
// console.log(player)

// player.moveRight()
// console.log(`this is where the player is now after movingRight: ${player.col}, ${player.row}`)
// console.log(player)

// player.moveDown()
// console.log(`this is where the player is now after movingDown: ${player.col}, ${player.row}`)
// console.log(player)

// player.moveLeft()
// console.log(`this is where the player is now after movingLeft: ${player.col}, ${player.row}`)
// console.log(player)

// player.moveUp()
// console.log(`this is where the player is now after movingUp: ${player.col}, ${player.row}`)
// console.log(player)

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
}


