const preco = 34.99
const desconto = 0.15

const valDesconto = preco * desconto
const novoValor = preco - valDesconto

console.log("O preço final é: R$ " + novoValor.toFixed(2))