class Game {
  constructor() {
    // this.start = false
    // this.finished = false
    // this.obstacles = []
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
  }

}
  