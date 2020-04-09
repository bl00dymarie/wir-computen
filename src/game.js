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
    if (frameCount % 60 === 0) {
      this.treasures.push(new Treasures())
    }
    this.treasures.forEach(treasure => {
      treasure.draw()
    })
  }

}
  