//Lista de compras dinâmicas
//Programador: Gustavo Santos Bongiovani

const prompt = require("prompt-sync")();

let opc = 0
let listaDeCompras = new Array();

while(opc != 9){
    console.log("***** Lista de compras *****\n1-Adicionar Item\n2-Remover Item\n3-Exibir Lista\n9-Sair")
    opc = Number(prompt("Escolha uma opção: "));
    switch(opc){
        case 1:
            listaDeCompras = adicionaProduto(listaDeCompras);
            console.log('Item adicionado com sucesso!')
            break;
            case 2:
                listaDeCompras = removerProduto(listaDeCompras);
                console.log('Item removido com sucesso!')
            break;
        case 3:
            exibeLista();
            break;
        case 9:
            console.log("Fim do programa");
            break;
        default:
            console.log("Insira uma opção válida.")
            break;
        
    }
}

function adicionaProduto(array){
    array.push = prompt("Digite o nome do item: ");
    return array;
}

function removerProduto(array){
    let itemRemove = prompt("Digite o nome do item a ser removido (extamente como foi escrito)");

    for(let i = 0; i < array.length; i++){
        if(array[i] == itemRemove){
            array[i] = array.pop;
        }
        else{
            console.log("Digite o nome do item corretamente.")
        }
    }
    
    return array;
}

function exibeLista(){
   for(let i=0; i < listaDeCompras.length; i++){
       console.log(listaDeCompras[i] + "\n");
   }
}