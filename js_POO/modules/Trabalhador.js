import { Carro } from "./Carro.js";
import Pessoa from "./Pessoa.js";

// * Extends permite usar o conceito de heranca traz todas as caracteristicas do pai
class Trabalhador extends Pessoa {
  // * Classes estaticas estao ligadas a classe como um todo , e nao como uma instancia especifica
  static vontade = 100;
  #privateValue

  constructor(nome, altura, cargo, preco, ano,privateValue) {
    super(nome, altura);
    this.cargo = cargo;
    this.salario = 40000;
    // * Esse é o conceito de composição, quando uma classe tem outra classse dentro de si
    this.carro = new Carro(preco, ano);
    this.#privateValue = privateValue;
  }

  trabalhar() {
    console.log("trabalhar");
  }

  development(java) {
    console.log(`${this.nome} trabalha com ${java}`);
  }

  // * Essa função ja veio do pai, e atraves do conceito do polimorfismo, foi possivel modificar na classe filha
  // * Mesmo tendo a classe pai essa função, o filho para criar outra forma para ela, isso é o polimorfismo
  getMoney() {
    console.log("I work to get money.");
  }

  // * Polimorfismo no metodo static que foi herdado de Pessoa
  static pensar(){
    console.log('teste trabalhador pensar');
    
  }


  get privateValue() {
    return this.#privateValue
  }
  
  set privateValue(data){
    this.#privateValue = data
  }


}

export default Trabalhador;
