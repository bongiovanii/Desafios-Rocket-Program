const livro = {
    autor: "Nietzsche",
    data: "12/04/1872",
    material: "couro", 
    rasgar(){
        console.log(`o ${this.material} está rasgado`)
    }
    
};

livro.rasgar();
//--------------------------------------------------------------------------------

// criando um objeto utilizando um construtor

// Por que não consigo acessar o objeto desse modo???
// tem como criar uma função arrow ou anonima que sirva apenas para criar um objeto??? assim crio uma função para cada objeto difereten
// ai se eu armazar diferentes obejetos em diferentes variáveis eu poderia ter uma opção de escolha

const prompt = require("prompt-sync")();

function Pessoa(nome,idade,endereço,cpf){
    this.nome = nome;
    this.idade = idade;
    this.endereço = endereço;
    this.cpf =  cpf;
}

function carregaPessoa(pessoa){
    let array = ["Gustavo", 18, "Rua Sargento Antonio Jorge de lima", 52850328812]

    for(let i=0; i < array.length; i++){
        array[i] =  new Pessoa();
    }
}

opc = Number(prompt("Digite 1 ou 2"))

switch(opc){
    case 1:
        const pessoa = carregaPessoa(pessoa);
        break;
    case 2:

        break;

}

console.log(pessoa);