const rls = require("readline-sync")
let n1 = 0
let n2 = 0

function leitura(){
     n1 = rls.questionFloat("Digite o primeiro número: ")
     n2 = rls.questionFloat("Digite o segundo número: ")
}

function soma(num1, num2){
    return (num1 + num2)
}

function media(num1, num2){
    return (num1 + num2) / 2
}

function principal(){
    leitura()
    let resposta = soma(n1,n2)
    let mediaResposta = media(n1, n2)

    console.log(`O resultado da soma é: ${resposta}`)
    console.log(`A média é: ${mediaResposta}`)
}
principal()