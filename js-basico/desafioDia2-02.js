const prompt = require('prompt-sync')()

let numeroAleatorio = Math.round(Math.random() * 100)
let numeroEscolhido = Number(prompt("Digite um numero e tente adivinhar se o mesmo está correto!: "))
let tentativas = 0

console.log(numeroAleatorio)

while(numeroEscolhido != numeroAleatorio){
    if(numeroEscolhido > numeroAleatorio){
        console.log("O numero que voce digitou está MAIOR doque o numero a ser adivinhado")
        numeroEscolhido = Number(prompt("\nVoce errou! Tente novamente!"))
    }
    else if(numeroEscolhido < numeroAleatorio){
        console.log("O numero que voce digitou está MENOR doque o numero a ser adivinhado")
        numeroEscolhido =  Number(prompt("\nVoce errou! Tente novamente!"))
    }
    else{
        console.log("Digite um numero válido")
        continue;
    }
    tentativas++
}

if(numeroEscolhido == numeroAleatorio){
    console.log('Parabéns! Você acertou o número a ser adivinhado!' + '\nVoce utilizou ' + tentativas + 'tentativas.' + '\o numero correto era ' + numeroAleatorio)
}