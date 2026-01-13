import Pessoa from "./modules/Pessoa.js";
import Trabalhador from "./modules/Trabalhador.js";

const pessoa = new Pessoa();
pessoa.altura = 30;
pessoa.nome = "gabriel";

console.log(pessoa);
pessoa.getMoney();

const trabalhador = new Trabalhador("tata", 30, "desenvolvedor", 36000, 1990);
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
//trabalhador.pensar()

