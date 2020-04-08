class Player {
    constructor() {
        this.img = loadImage("../assets/run-yes.gif")
        this.gravity = 0.2
        this.speed = 0
    }

    setup() {
        this.img.resize(80, 0)
        this.height = this.img.height
        this.width = this.img.width
        this.x = 5
        this.y = height - this.height
    }

    jump() {
        this.speed = -5
    }

    display() {
        this.speed += this.gravity
        this.y += this.speed

        if (this.y > height - this.height) {
            this.y = height - this.height;
          }
        image(this.img, this.x, this.y + 10)
    }
}