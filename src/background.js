class Background {
    constructor() {
        this.random = 0
        this.imgs = [
            { src: loadImage("../assets/layers-hill/Hills Layer 01.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/layers-hill/Hills Layer 02.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/layers-hill/Hills Layer 03.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/layers-hill/Hills Layer 04.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/layers-hill/Hills Layer 05.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/layers-hill/Hills Layer 06.png"), x: 0, speed: 0 },
        ]
    }

    move(img) {
        img.x -= img.speed
        // image(img.src, 0,0)
        // image(we get the source of image, x coordinate, y coordinate )
        image(img.src, img.x, 0);
        image(img.src, img.x + width, 0);
        if (img.x <= -width) {
            img.x = 0;
        }
    }

    display() {
        this.imgs.forEach(image => {
            this.move(image)
        })
    }
}