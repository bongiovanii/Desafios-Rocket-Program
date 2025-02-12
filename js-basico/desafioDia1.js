
let coefs = [1,5,6]

let delta = (coefs[1] ** 2) - 4 * (coefs[0] * coefs[2])
console.log("Delta = " + delta)

if(delta > 0){
    let x1 = (-coefs[1] + Math.sqrt(delta)) / 2*coefs[0]

    let x2 = (-coefs[1] - Math.sqrt(delta)) / 2*coefs[0]

    console.log("Resultado x' = " + x1 + "\nResultado x'' = " + x2)

}
else if(delta == 0){
     x1 = (-coefs[1] + Math.sqrt(delta)) / 2*coefs[0]
}

else if(delta < 0){
    console.log('A equação não possui raizes reais')
}



