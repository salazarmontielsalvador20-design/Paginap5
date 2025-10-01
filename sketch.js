function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(135, 206, 235);
  
  //sun in top-right corner
  fill("red");
  circle(550, 50, 100);
  fill("gray");
  rect(0, 200, 600, 200);
  //emojis
  textSize(75)
  text("😎", 150, 250) 
  text("😶‍🌫️", mouseX, mouseY)
}