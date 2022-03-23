var box ;





function setup() {
  createCanvas(400, 400);
  box = createSprite(50,50,25,25);
  
}

function draw() {
  background(220);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 2;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 2;
  }
}
