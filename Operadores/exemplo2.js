const temidadepermitida = true;
const possuiidentidade = false;
const temautorizacaodospais = true;

const podeentrarsozinho = temidadepermitida && possuiidentidade;
console.log("pode entrar desacompanhado? " + podeentrarsozinho);

const possuiacesso = podeentrarsozinho || temautorizacaodospais;
console.log("possui autorizacao para o evento? " + possuiacesso);

const sistemaemmanutencao = false;
const sistemadisponivel = !sistemaemmanutencao;
console.log("o servidor esta online? " + sistemadisponivel);