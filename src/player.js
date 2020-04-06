class Player {
    constructor(col, row){
        this.col = col,
        this.row = row
    }
    moveUp() {
        // make the player move up
        // y -= 1
        return this.col -= 1;
    }
    
    moveDown() {
        // player moves one down
        // y += 1
        return this.col += 1
    }

    moveLeft() {
        //player moves left
        // x -= 1
        return this.row -= 1
    }

    moveRight() {
        //player moves lright
        // x += 1
        return this.row += 1
    }
}