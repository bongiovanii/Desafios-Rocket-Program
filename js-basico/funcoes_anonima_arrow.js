//Estudo de funções anonimas e de arrows

//Função anonima
/* const text = function(){
    console.log("Função anonima");
}

// O recurso setInterval do nodejs faz com que uma função seja executada em um determinado intervalo de tempo
// esse intervalo é definido pelo segundo parametro do recurso

setInterval(text, 1000);


const date = function(){
    console.log(new Date().toLocaleString())
}

setInterval(date,1000);

// mesma coisa que
setInterval(function(){
    console.log("Funcao ")
}, 1000)

*/

// diferenças 

const funcaoAnonima = function (){
    return "Função anonima"
}

const funcaoArrow = () => {
    return "Função arrow"
}


console.log(funcaoAnonima());
console.log(funcaoArrow());