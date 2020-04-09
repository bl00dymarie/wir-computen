class Game {
  constructor() {
    // this.start = false
    // this.finished = false
    this.treasures = []
    this.score = 0
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
    // as soon as you hit treasures you want to get rid out of the array filter method; pull it out of the array
    this.treasures.forEach(treasure => {
      if (treasure.checkCollision(this.player)) {
        this.score += 10
        this.treasures.splice(this.treasures.indexOf(treasure), 1)
      } 
    })
    document.querySelector('h2 span').innerHTML = this.score
  }

}
