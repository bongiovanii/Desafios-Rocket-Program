//Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). Agora, o comprador pode colocar um cupom "PROMO15", que garante 15% de desconto no valor do produto. A pessoa pode colocar o código OU ganhar o desconto. 
 
//Vamos também inserir questão de frete para o envio da compra. O comprador precisa colocar o estado em que ele está. Se for de SP, o frete custa R$10,00. Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00


let valorProduto = 45.7
let recebeDesconto = Math.round(Math.random() * 1)
let promocao = "PROMO15"
let escolha = 1

switch(escolha){
    case 1:
        console.log("Voce escolheu: digitar o cógio promocional!")
        digitaCódigo()
        break;
    
    case 2:
        console.log("Voce escolheu: receber promoção randomica! ")
        recebePromocao()
        break;
    default:
        console.log("Opção inválida")

    
}

function digitaCódigo(){
    if(promocao == "PROMO15"){
        
        console.log("Valor original do produto: R$" + valorProduto)
        console.log("Voce recebeu um desconto de 15%! Aproveite")
        let desconto = 0.15 * valorProduto
        valorProduto = valorProduto - desconto

        console.log("Valor final do produto: R$" + valorProduto)
        console.log("Agora vamos calcular seu frete!")
        calculaFrete()
    }
    else{
        console.log("Voce digitou o código errado.")
    }
}

function recebePromocao(){
    if(recebeDesconto == 1){
        console.log("Voce recebeu um desconto de 15%! Aproveite")
        console.log("Valor original do produto: R$" + valorProduto)
        let desconto = 0.15 * valorProduto
        valorProduto = valorProduto - desconto
        
        console.log("Valor final do produto: R$" + valorProduto)
        console.log("Agora vamos calcular seu frete!")
        calculaFrete()
        
        
    }
    else if(recebeDesconto == 0){
        console.log("Valor original do produto: R$" + valorProduto)
        console.log("Sinto muito mas voce não receberá um desconto!")
        console.log("Agora vamos calcular seu frete!")
        calculaFrete()
    }
}

function calculaFrete(){
    let local = "São Paulo"
    let frete = 0

    switch(local){
        case "São Paulo":
            frete = 10
            console.log("Valor do Frete: R$"+frete)
            break;
        
        case "Rio de Janeiro":
            frete = 20
            console.log("Valor do Frete: R$"+frete)
            break;
        default:
            console.log("Valor do Frete: R$30")

    }
}