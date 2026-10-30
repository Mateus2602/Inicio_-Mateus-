const produto = "Notebook";
const preco = 3500.00;

//concatenado
resumo = "o valor do " + produto + " é R$ " + preco

\\interpolação de texto (string) com crase
resumo = `O valor do ${produto} é R$ ${preco.toFixed(2)}.`;

console.log(resumo);