//Desafio da tia Cin
/*
Boa tarde senhores e senhora!
 
Desafio de hoje está tranquilinho, está lúdico, está sextante! 
 
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho
*/

const prompt = require("prompt-sync")();

let equipe = [];

class Funcionario {
  constructor(nome, qntTarefas, pontos) {
    this.nome = nome;
    this.qntTarefas = qntTarefas;
    this.pontos = pontos;
  }
}

function carregaFuncionario(nome, qntTarefas, pontos) {
  const i = equipe.length;
  const min = 5;
  const max = 10;
  qntTarefas = Math.round(Math.random() * (max - min + 1) + min);
  equipe[i] = new Funcionario(nome, qntTarefas, pontos);
  return equipe[i];
}

function analisaTarefas() {
  let peso = true; //impar ---> peso = true   par ---> peso =  false
  let pontoPorTarefa = 0;

  for (let i = 0; i < equipe.length; i++) {
    for (
      let tarefaUnitaria = 0;
      tarefaUnitaria < equipe[i].qntTarefas;
      tarefaUnitaria++
    ) {
      pontoPorTarefa = Math.round(Math.random() * 10);

      if (tarefaUnitaria % 2 == 0) {
        peso = false; // tarefa par
      } else if (tarefaUnitaria % 2 != 0) {
        peso = true; // tarefa impar
      }

      if (peso == true) {
        pontoPorTarefa += pontoPorTarefa * 2;
      } else if (peso == false) {
        pontoPorTarefa = pontoPorTarefa;
      }
      equipe[i].pontos += pontoPorTarefa;
    }
  }
}

function mediaPonderada(equipe) {
  let soma = 0;
  for (let i = 0; i < equipe.length; i++) {
    soma += equipe[i].pontos;
  }

  let mediana = soma / 5;
  return mediana;
}

const funcionario1 = carregaFuncionario("Gustavo", 0, 0);
const funcionario2 = carregaFuncionario("Cintia", 0, 0);
const funcionario3 = carregaFuncionario("Pedro", 0, 0);
const funcionario4 = carregaFuncionario("Anna", 0, 0);
const funcionario5 = carregaFuncionario("renata", 0, 0);
console.log(equipe);

analisaTarefas();
let media = mediaPonderada(equipe);

for (let i = 0; i < equipe.length; i++) {
  console.log(
    "Nome: " +
      equipe[i].nome +
      "\nTarefas: " +
      equipe[i].qntTarefas +
      "\nPontos: " +
      equipe[i].pontos +
      "\n"
  );
  if (equipe[i].pontos > media) {
    equipe[i].pontos += 2;
    console.log(
      equipe[i].nome +
        " recebeu um bonus de 2 pontos por ter superado a média\n"
    );
  }
}

for (let x = 0; x < equipe.length; x++) {
  for (let y = 0; y < equipe.length - x - 1; y++) {
    if (equipe[y].pontos > equipe[y + 1].pontos) {
      let aux = equipe[y];
      equipe[y] = equipe[y + 1];
      equipe[y + 1] = aux;
    }
  }
}

console.log("Media: " + media);
console.log("Ganhador: " + equipe[equipe.length-1].nome);
