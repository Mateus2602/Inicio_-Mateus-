const rls = require("readline-sync")
let base = 0
let altura = 0

function leitura(){
     base = rls.questionFloat("Digite a base do retângulo: ")
     altura = rls.questionFloat("Digite a altura do retângulo: ")
}

function dobrobase(num1){
    return (num1 * 2)
}

function dobrealtura(num2){
    return (num2 * 2)
}

function principal(){
    leitura()
    let resposta = dobrobase(base)
    let mediaResposta = dobrealtura(altura)

    console.log(`O dobro da base é: ${resposta}`)
    console.log(`O dobro da altura é: ${mediaResposta}`)
}
principal()