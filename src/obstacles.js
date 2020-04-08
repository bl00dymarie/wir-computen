class Obstacles {
    constructor() {
        this.height = 25
        this.width = 25
        this.x = width
        this.y = random(0, height - this.height)
    }

    draw() {
        this.x--
        fill("pink")
        circle(this.x, this.y, 20,20)
    }
}