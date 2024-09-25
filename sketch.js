function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 245, 11);

  fill(0, 0, 0);

  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      ellipse(x, y, 30);
    }
  }

  for (let y = 50; y < height; y += 100) {
    for (let x = 50; x < width; x += 100) {
      ellipse(x, y, 30);
    }
  }

  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      ellipse(x, y, 10);
    }
  }
}

function draw() {}
