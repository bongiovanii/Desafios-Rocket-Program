/*
Desafio da tia Cin
Bom dia senhores e senhorita!
 
Vamos jogar dados?
 
O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos

2 - Se o resultado do dado for par, o jogador perde 5 pontos.

3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontos

4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos

5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
Vocês não podem usar arrays para a execução do desafio

Utilizem os conceitos estudados até o momento para executar

O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.

A pontuação final deverá ser exibida na última rodada.

Poderá ser exibido em tela avisos de ganho e perda de pontos
 
Divirtam-se!
 
*/

// se alterar o player pra 0 a porcentagem de vitórias e derrotas fica equilibrada
let player = 0;
let rodada = 0;

console.log("Vamos jogar dados? Jogue um dado de 6 faces para ver oque acontece...");

let dado = Math.round(Math.random()*6);

for(let i = 0; i < 20; i++){
    dado = Math.round(Math.random()*6);
    rodada++;
    if(dado == 0){
        dado += 1;
    }
    console.log("Voce tirou " + dado)
    if(dado % 2 != 0){
        console.log("Rodada: " + rodada);
        console.log("Voce ganhou 10 pontos!");
        player += 10;
    }
    else if(dado % 2 == 0){
        console.log("Rodada: " + rodada);
        console.log("Que pena... voce perdeu 5 pontos!");
        player -= 5;
        
    }
    else if(rodada % 3 == 0){
        console.log("Rodada: " + rodada);
        console.log("Essa rodada é multipla de 3! Voce ganhou 15 pontos")
        player += 15
    }
    else if(rodada % 4 == 0){
        console.log("Rodada: " + rodada);
        console.log("Essa rodada é multipla de 4! Que pena... Voce perdeu 20 pontos")
        player += 20
    }
    else if(player < 0){
        player = playerCounter(player);
    }

}

if(player >= 50){
    console.log("Parabéns! Voce ganho! Ao final das 20 rodadas voce teve: "+ player+" pontos");
}
else{
    console.log("Sinto muito mas voce não ganhou.... sua pontuação não chegou a pontuação desejada")
}

function playerCounter(player){
    while(player < 0){
        player += player * 2;
    }
    return player;
}