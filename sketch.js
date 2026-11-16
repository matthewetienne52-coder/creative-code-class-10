let paraDox

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

  paraDox = createP('this text is on the webpage, made w/ p5')
  

}

function draw() {
  background(220);
  text('This is on the canvas',10,10)
}