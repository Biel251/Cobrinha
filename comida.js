class Comida {
    constructor() { // Corrigido de "construtor" para "constructor"
      this.x = 0;
      this.y = 0;
      this.tamanho = 20;
    }
  
    desenhar() {
      fill(255, 0, 0);
      rect(this.x, this.y, this.tamanho, this.tamanho);
    }
  
    criar(widthTela, heightTela) {
      let cols = floor(widthTela / this.tamanho);
      let rows = floor(heightTela / this.tamanho);
      this.x = floor(random(cols)) * this.tamanho;
      this.y = floor(random(rows)) * this.tamanho;
    }
  }
  
