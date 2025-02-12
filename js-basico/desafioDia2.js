const coefs = [1,5,6]

if(coefs[0] < 0 || coefs[0] == 0){
    console.log('Erro, insira um valor acima de zero no coeficiente A')
}
else{
    let delta = (coefs[1] ** 2) - 4 * (coefs[0] * coefs[2])
    console.log("Delta = " + delta)

    if(delta < 0){
        console.log("Não existem raizes nesta equação.")
    }
    else if(delta == 0){
        console.log('Existe apenas uma raiz.')

    let x1 = (-coefs[1] + Math.sqrt(delta)) / 2*coefs[0]
        console.log("Raiz: " + x1)
    }
    else if(delta > 0){
        console.log("Existem duas raizes.")
        let x1 = (-coefs[1] + Math.sqrt(delta)) / 2*coefs[0]

        let x2 = (-coefs[1] - Math.sqrt(delta)) / 2*coefs[0]

        console.log("X´ = " + x1 + "\nX´´ = " + x2)

    }

}