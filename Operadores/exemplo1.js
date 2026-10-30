const precoproduto = 100;
const desconto = 15;
const frete = 20;

const precocomdesconto = precoproduto - desconto;
const precofinal = precocomdesconto + frete;
const parcelas = precofinal / 2;

console.log("preco final faturado: R$ " + precofinal);

console.log("valor de cada parcela: R$ " + parcelas);

const numeroalvo = 15;
const restodivisao = numeroalvo % 2;

const areaquadrada = 5 ** 2;

console.log("resto da divisão de 15 por 2: " + restodivisao);

console.log("resultado de 5 elevado ao quadrado: " + areaquadrada);