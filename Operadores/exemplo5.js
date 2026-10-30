const produto = "Notebook";
const preco = 3500.00;
// Interpolação moderna com substituição direta via crases e ${}
const resumo = `O valor do ${produto} é R$ ${preco.toFixed(2)}.`;
console.log(resumo);
// Saída: O valor do Notebook é R$ 3500.00.