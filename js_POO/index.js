import Pessoa from "./modules/Pessoa.js";
import Trabalhador from "./modules/Trabalhador.js";

const pessoa = new Pessoa();
pessoa.altura = 30;
pessoa.nome = "gabriel";

console.log(pessoa);
pessoa.getMoney();

const trabalhador = new Trabalhador("tata", 30, "desenvolvedor", 36000, 1990,22);
console.log(trabalhador);
trabalhador.trabalhar();
trabalhador.development("javascript");
trabalhador.getMoney();
console.log("---------------------");
console.log("---------------------");
console.log(trabalhador.carro);
console.log(trabalhador.constructor.energia);
console.log(Trabalhador.energia, Trabalhador.vontade);
Trabalhador.pensar()

console.log("---------------------");
console.log("---------------------");

// * O sinal de # veio para colocar uma propriedade privada em js, antigamente usava _
console.log(trabalhador.privateValue)

// * para chamar o metodo set, chama com o mesmo nome de get mas passa-se um valor que será modificado dentro da classe
trabalhador.privateValue = 7

console.log(trabalhador.privateValue)

// * static nao deixa a instancia chamar a funcao, somente a classe pai ou que herdou
//trabalhador.pensar()

