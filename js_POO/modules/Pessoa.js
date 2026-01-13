class Pessoa {
  nome;
  altura;
  static energia = 1000;

  constructor(nome, altura) {
    this.nome = nome;
    this.altura = altura;
  }

  getMoney() {
    console.log("I have money.");
  }

  static pensar(){
    console.log('pensar pessoa');
    
  }
}

export default Pessoa;
