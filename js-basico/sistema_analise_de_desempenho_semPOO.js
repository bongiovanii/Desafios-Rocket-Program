<<<<<<< HEAD
/*
Desafio da tia Cin
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

const equipeNomes = ["Gustavo", "Ana", "Julia", "Mateus"];
const equipeTarefas = [7, 8, 5, 10];
const equipePontos = [0, 0, 0, 0];
const equipeGeral = [];

geraPontuaçãoTarefa();
geraMedia();
analiseMediana();
concatenaVetor();
ordenaVetor();

console.log("Dados Gerais: ")
console.log(equipeGeral);

function geraPontuaçãoTarefa() {
  equipeTarefas.forEach((tarefa, index) => {
    for (let i = 0; i < tarefa; i++) {
      let pontuaçãoTarefa = Math.round(Math.random() * 10);
      if (tarefa % 2 != 0) {
        pontuaçãoTarefa += pontuaçãoTarefa * 2;
      } else {
        pontuaçãoTarefa += pontuaçãoTarefa;
      }

      equipePontos[index] = pontuaçãoTarefa;
    }
  });

  
}

function geraMedia() {
  let media = 0;
  equipePontos.forEach((ponto, index) => {
    media += equipePontos[index];
  });

  media = media / 4;
  console.log("Média: "+media);
}

function concatenaVetor() {
  for (let i = 0; i < equipeNomes.length; i++) {
    equipeGeral.push([equipeNomes[i], equipeTarefas[i], equipePontos[i]]);
  }
}

function analiseMediana() {
  equipePontos.forEach((ponto, index) => {
    if (ponto >= 8) {
      ponto += 2;
      console.log(
        equipeNomes[index] +
          " recebeu um bonus de 2 pontos por superar a media 8 de pontos"
      );
    }
  });

  for (let i = 0; i < equipeGeral.length; i++) {
    for (let j = 0; j < equipeGeral.length - i - 1; j++) {
      if (equipePontos[j] > equipePontos[j + 1]) {
        let aux = equipeGeral[j];
        equipeGeral[j] = equipeGeral[j + 1];
        equipeGeral[j + 1] = aux;
      }
    }
  }
}

function ordenaVetor() {
  equipeGeral.sort((a, b) => {
    const pa = a[2];
    const pb = b[2];

    return pa - pb;
  });

  const i = equipeGeral.length - 1;
  if(i >= 0){
      const [nome, ,pontos ] = equipeGeral[i];
      console.log("Ganhador:" + nome,pontos);
   }
   const [nome, , pontos] = equipeGeral[0];
   console.log("Perdedor:" + nome,pontos);
 
  
}
=======
/*
Desafio da tia Cin
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

const equipeNomes = ["Gustavo", "Ana", "Julia", "Mateus"];
const equipeTarefas = [7, 8, 5, 10];
const equipePontos = [0, 0, 0, 0];
const equipeGeral = [];

geraPontuaçãoTarefa();
geraMedia();
analiseMediana();
concatenaVetor();
ordenaVetor();

console.log("Dados Gerais: ")
console.log(equipeGeral);

function geraPontuaçãoTarefa() {
  equipeTarefas.forEach((tarefa, index) => {
    for (let i = 0; i < tarefa; i++) {
      let pontuaçãoTarefa = Math.round(Math.random() * 10);
      if (tarefa % 2 != 0) {
        pontuaçãoTarefa += pontuaçãoTarefa * 2;
      } else {
        pontuaçãoTarefa += pontuaçãoTarefa;
      }

      equipePontos[index] = pontuaçãoTarefa;
    }
  });

  
}

function geraMedia() {
  let media = 0;
  equipePontos.forEach((ponto, index) => {
    media += equipePontos[index];
  });

  media = media / 4;
  console.log("Média: "+media);
}

function concatenaVetor() {
  for (let i = 0; i < equipeNomes.length; i++) {
    equipeGeral.push([equipeNomes[i], equipeTarefas[i], equipePontos[i]]);
  }
}

function analiseMediana() {
  equipePontos.forEach((ponto, index) => {
    if (ponto >= 8) {
      ponto += 2;
      console.log(
        equipeNomes[index] +
          " recebeu um bonus de 2 pontos por superar a media 8 de pontos"
      );
    }
  });

  for (let i = 0; i < equipeGeral.length; i++) {
    for (let j = 0; j < equipeGeral.length - i - 1; j++) {
      if (equipePontos[j] > equipePontos[j + 1]) {
        let aux = equipeGeral[j];
        equipeGeral[j] = equipeGeral[j + 1];
        equipeGeral[j + 1] = aux;
      }
    }
  }
}

function ordenaVetor() {
  equipeGeral.sort((a, b) => {
    const pa = a[2];
    const pb = b[2];

    return pa - pb;
  });

  const i = equipeGeral.length - 1;
  if(i >= 0){
      const [nome, ,pontos ] = equipeGeral[i];
      console.log("Ganhador:" + nome,pontos);
   }
   const [nome, , pontos] = equipeGeral[0];
   console.log("Perdedor:" + nome,pontos);
 
  
}
>>>>>>> 71708e97b45c9c961fdba49d029db3ad13034085
