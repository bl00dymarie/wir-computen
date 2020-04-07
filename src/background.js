class Background {
    constructor() {
        this.imgs = [
            { src: loadImage("../assets/parallax-mountain-foreground-trees.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/parallax-mountain-montain-far.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/parallax-mountain-mountains.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/parallax-mountain-trees.png"), x: 0, speed: 0 },
        ]
    }

    show(img) {
        image(img.src, 0,0)
    }

    display() {
        this.imgs.forEach(image => {
            this.show(image)
        })
    }
}