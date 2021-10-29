import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Edson", 11122233309);
const cliente2 = new Cliente("Jose", 88822233309);

const contaCorrenteEdson = new ContaCorrente(cliente1, 1001);
contaCorrenteEdson.depositar(1000);
console.log(contaCorrenteEdson);

const conta2 = new ContaCorrente(cliente2, 2002);
console.log(cliente2);
console.log(conta2.cliente);

console.log(ContaCorrente.numeroDeContas);
