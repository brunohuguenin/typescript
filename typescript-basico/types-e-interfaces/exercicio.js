"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h3>R$ ${data.preco}</h3>
      <p>${data.descricao}</p>
      <div>Fabricante: ${data.empresaFabricante.nome}</div>
      <div>Empresa Montadora: ${data.empresaMontadora.nome}</div>
    </div>
  `;
}
