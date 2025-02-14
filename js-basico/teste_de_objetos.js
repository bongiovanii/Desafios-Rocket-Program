const livro = {
  autor: "Nietzsche",
  data: "12/04/1872",
  material: "couro",
  rasgar() {
    console.log(`o ${this.material} está rasgado`);
  },
};

livro.rasgar();
//--------------------------------------------------------------------------------

// criando um objeto utilizando um construtor

// Por que não consigo acessar o objeto desse modo???
// tem como criar uma função arrow ou anonima que sirva apenas para criar um objeto??? assim crio uma função para cada objeto difereten
// ai se eu armazar diferentes obejetos em diferentes variáveis eu poderia ter uma opção de escolha

const prompt = require("prompt-sync")();
let array = [];

// construtor
function Pessoa(nome, idade, endereço, cpf) {
  this.nome = nome;
  this.idade = idade;
  this.endereço = endereço;
  this.cpf = cpf;
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

// função que carrega uma pessoa em uma determinada posição do array
function carregaPessoa(nome, idade, endereço, cpf) {
  const i = array.length;
  array[i] = new Pessoa(nome, idade, endereço, cpf);
  return array[i];
}

function acessaContaBancaria(agencia, conta, saldo) {}
opc = Number(
  prompt(
    "**** BANCO ITAU ****\n1-Carregar novo usuário\n2-Acessar conta bancária"
  )
);

switch (opc) {
  case 1:
    const pessoa = carregaPessoa(
      "Gustavo",
      18,
      "Rua Sargento Antonio Jorge de lima",
      52850328812,
      "Campanella",
      215,
      1200
    );
    const pessoa1 = carregaPessoa(
      "Arnaldo",
      81,
      "Rua Sargento Antonio Jorge de lima",
      52850328812,
      "Centro",
      324,
      1450
    );
    console.log(array);
    break;
  case 2:
    acessaContaBancaria();
    break;
}
