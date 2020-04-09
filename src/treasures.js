class Treasures {
    constructor() {
        this.height = 20
        this.width = 20
        this.x = width
        this.y = random(0, height - this.height)
    }

    checkCollision(player) {
        let leftOfTreasure = this.x
        let rightOfTreasure = this.x + this.width
        let leftOfPlayer = player.x
        let rightOfPlayer = player.x + player.width
        let xCollision = 
            (leftOfTreasure > leftOfPlayer && leftOfTreasure < rightOfPlayer) ||
            (rightOfTreasure > leftOfPlayer && rightOfTreasure < rightOfPlayer)
        // let yCollision = (this.y < player.y + player.height && this.y + this.height > player.y)
        if (xCollision) {
            return true
        }
    }

    draw() {
        this.x--
        fill("pink")
        rect(this.x, this.y, this.width, this.height)
    }
}