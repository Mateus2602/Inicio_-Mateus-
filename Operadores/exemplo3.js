const limiteCredito = 500.00;
const valorCompra = 120.00;
// Comparações de Grandeza (Relacionais)
const compraAprovada = valorCompra <= limiteCredito;
const estoqueCritico = valorCompra > 1000;
console.log("O saldo é suficiente? " + compraAprovada);
// Saída: true
console.log("Ativou o alerta de estoque? " + estoqueCritico);
// Saída: false
/* Igualdade Ampla vs. Igualdade Estrita
(O perigo da coerção de tipos) */
const idRegistrado = 2026;
const idDigitado = "2026";
// Uma string capturada de um formulário
const igualdadeAmpla = idRegistrado == idDigitado;
// Ignora o tipo de dado
const igualdadeEstrita = idRegistrado === idDigitado;
// Valida valor E tipo
console.log("Os IDs são iguais na comparação? " + igualdadeAmpla);
// Saída: true
console.log("Os IDs também são iguais no tipo? " + igualdadeEstrita);
// Saída: false