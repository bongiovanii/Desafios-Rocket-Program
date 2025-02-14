//Lista de compras dinâmicas
//Programador: Gustavo Santos Bongiovani

const prompt = require("prompt-sync")();

let opc = 0;
let listaDeCompras = [];

while (opc != 9) {
  console.log(
    "***** Lista de compras *****\n1-Adicionar Item\n2-Remover Item\n3-Exibir Lista\n9-Sair"
  );
  opc = Number(prompt("Escolha uma opção: "));
  switch (opc) {
    case 1:
      adicionaProduto();
      console.log("Item adicionado com sucesso!");
      break;
    case 2:
      removerProduto();
      console.log("Item removido com sucesso!");
      break;
    case 3:
      exibeLista();
      break;
    case 9:
      console.log("Fim do programa");
      break;
    default:
      console.log("Insira uma opção válida.");
      break;
  }
}

function adicionaProduto() {
  listaDeCompras.push(prompt("Digite o nome do item: "));
}

function removerProduto() {
  let itemRemove = prompt(
    "Digite o nome do item a ser removido (extamente como foi escrito)"
  );

  for (let i = 0; i < listaDeCompras.length; i++) {
    if (listaDeCompras[i] == itemRemove) {
      listaDeCompras.splice(i, 1);
    } else {
      console.log("Digite o nome do item corretamente.");
    }
  }
}

function exibeLista() {
  for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(listaDeCompras[i]);
  }
}
