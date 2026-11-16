let paraDox
let slider
let sliderValue
let funnyDog

async function setup() {
  createCanvas(windowWidth, windowHeight);
  funnyDog = await loadImage('funny-dog-memes-hero.jpg')
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

  paraDox = createP('this text is on the webpage, made w/ p5')

  paraDox.style('background-color:blue')
  paraDox.style('margin: 0')
  paraDox.style('color: white')

  sliderValue = 16

  slider = createSlider(12,72,sliderValue)
  slider.position(0,40)
  slider.changed(sliderChanged)

  
  

}

function draw() {
  background(220);
  text('This is on the canvas',10,10)

  push()
  textSize(sliderValue)
  text(sliderValue, width/2, height/2)
  pop()
  push()
  image(funnyDog, width/2, height/3, sliderValue, sliderValue)
  pop()
}

function sliderChanged(){
  sliderValue = slider.value()
}