class Game {
    drawGrid() {
      for (let y = 0; y <= WIDTH; y += WIDTH / 10) {
        for (let x = 0; x <= HEIGHT; x += HEIGHT / 10) {
          line(x, 0, x, HEIGHT);
          line(0, y, WIDTH, y);
          strokeWeight(2);
        }
      }
    }
  }
  