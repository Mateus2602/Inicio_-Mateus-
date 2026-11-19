const rls = require("readline-sync")
let f1 = 0
let f2 = 0

function leitura(){
     f1 = rls.questionFloat("Digite o primeiro número: ")
     f2 = rls.questionFloat("Digite o segundo número: ")
}

function producto(num1, num2){
    return (num1 * num2)
}

function principal(){
    leitura()
    let resposta = producto(f1,f2)
    console.log(`O resultado do produto é: ${resposta}`)
}
principal()