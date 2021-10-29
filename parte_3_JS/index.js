class Cliente {
  nome;
  cpf;
}

class ContaCorrente{
  agencia;
  saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Edson";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Jose";
cliente2.cpf = 88822233309;

const contaCorrenteEdson = new ContaCorrente()
contaCorrenteEdson.saldo = 0
contaCorrenteEdson.agencia = 1001

const contaCorrenteJose = new ContaCorrente()
contaCorrenteJose.saldo = 0
contaCorrenteJose.agencia = 1001

console.log(cliente1);
console.log(cliente2);