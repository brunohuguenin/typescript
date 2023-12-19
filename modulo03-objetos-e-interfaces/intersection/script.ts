type Produto = {
  preco: number;
  nome: string;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutCar(dados: Produto & Carro) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutCar({
  preco: 20000,
  rodas: 4,
  portas: 5,
  nome: "Honda"
});
