//inicio do programa
let estoqueCamisa = 50
const precoUnitario = 49.90

console.log("Estoque inicial:" + estoqueCamisa + " unidades")

let qtdaVendida = 3

estoqueCamisa = qtdaVendida

let valorVenda = qtdaVendida * precoUnitario

console.log("--- Venda realizada ---")
console.log("Camisetas restantes no estoque: " + estoqueCamisa)
console.log("Valor total faturado: R$ " + valorVenda.toFixed(2))

//fim do programa