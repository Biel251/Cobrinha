let frameRateJogo = 5;

let cobra = new Cobra(20);
let comida = new Comida();

function setup() {
  createCanvas(400, 400);
  frameRate(frameRateJogo);
  comida.criar(400, 400);
}

function draw() {
  background(220);

  cobra.desenhar();
  cobra.mover();

  if (cobra.comer(comida.x, comida.y)) {
    frameRateJogo += 2;
    frameRate(frameRateJogo); // Atualiza a velocidade do jogo
    comida.criar(400, 400);
  }

  if (cobra.verificarColisao()) {
    gameOver();
  }

  comida.desenhar();
}

function gameOver() {
  noLoop();
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over!", width / 2, height / 2);
}
