var p1, p2;
var board, boardImg;

function preload() {
  boardImg = loadImage("Board.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  board = createSprite(displayWidth/2-330, displayHeight/2-30);
  board.addImage(boardImg);
  board.scale = 0.35;

  p1 = createSprite(100, 100, 50, 50);
  p1.shapeColor = "blue";

  p2 = createSprite(100, 100, 50, 50);
  p2.shapeColor = "blue";
}

function draw() {
  background(0);

  drawSprites();
}