class Treasures {
    constructor() {
        this.img = loadImage("assets/banani.png")
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
        let topOfTreasure = this.y
        let bottomOfTreasure = this.y + this.height
        let topOfPlayer = player.y
        let bottomOfPlayer = player.y + player.height
        let yCollision =
            (topOfTreasure > topOfPlayer && topOfPlayer < bottomOfPlayer) ||
            (bottomOfTreasure < bottomOfPlayer && bottomOfTreasure > topOfPlayer)
        if (xCollision && yCollision) {
            return true
        }
    }

    draw() {
        this.x--
        image(this.img, this.x, this.y, this.width, this.height)
    }
}