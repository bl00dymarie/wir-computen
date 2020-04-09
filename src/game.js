class Game {
  constructor() {
    // this.start = false
    // this.finished = false
    this.treasures = []
  }

  init() {
    this.background = new Background()
    this.player = new Player()
  }

  setup() {
    this.player.setup()
  }

  display() {
    clear()
    this.background.display()
    this.player.display()

    if (frameCount % 100 === 0) {
      this.treasures.push(new Treasures())
    }
    this.treasures.forEach(treasure => {
      treasure.draw()
    })
    this.treasures.forEach(treasure => {
      console.log("Here we are checkin every treasure")
      console.log(treasure.checkCollision(this.player))
    })
  }

}
  