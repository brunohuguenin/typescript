type NumberOrString = number | string

let valor: NumberOrString = 20;
valor = "30"


interface InterfaceProduto  {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDdos(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim': 'não'}</p>
  </div>`
}

const computador: InterfaceProduto = {
  nome: "Computador",
  preco: 2000,
  teclado: true,
}

const notebook: InterfaceProduto = {
    nome: "Notebook",
    preco: 3500,
    teclado: false,
}

preencherDdos(computador)

preencherDdos(notebook)

