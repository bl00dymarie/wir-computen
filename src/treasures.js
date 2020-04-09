class Treasures {
    constructor() {
        this.height = 25
        this.width = 25
        this.x = width
        this.y = random(0, height - this.height)
    }

    checkCollision(player) {
        let points = 0
        let leftOfTreasure = this.x
        let rightOfTreasure = this.x + this.width
        let leftOfPlayer = player.x
        let rightOfPlayer = player.x + player.width
        console.log(leftOfTreasure > leftOfPlayer && leftOfTreasure < rightOfPlayer)
        console.log(rightOfTreasure > leftOfPlayer && rightOfTreasure < rightOfPlayer)
        let xCollision = 
            (leftOfTreasure > leftOfPlayer && leftOfTreasure < rightOfPlayer) ||
            (rightOfTreasure > leftOfPlayer && rightOfTreasure < rightOfPlayer)
        // let yCollision = (this.y < player.y + player.height && this.y + this.height > player.y)
        console.log(xCollision)
        if (xCollision) {
            return points += 10
        }
        console.log(points)
    }

    draw() {
        this.x--
        fill("pink")
        rect(this.x, this.y, 20,20)
    }
}