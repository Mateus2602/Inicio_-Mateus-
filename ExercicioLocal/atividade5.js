const rls = require("readline-sync")
let raio = 0

function leitura(){
     raio = rls.questionFloat("Digite o raio do círculo: ")
}

function diametro(num1){
    return (num1 * 2)
}

function principal(){
    leitura()
    let resposta = diametro(raio)

    console.log(`O diâmetro do círculo é: ${resposta}`) 
}
principal()