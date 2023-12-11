"use strict";
let valor = 20;
valor = "30";
function preencherDdos(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>`;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
const notebook = {
    nome: "Notebook",
    preco: 3500,
    teclado: false,
};
preencherDdos(computador);
preencherDdos(notebook);
