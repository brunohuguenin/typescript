function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLocaleLowerCase();
  };
  if (typeof value === "number") {
    return value.toFixed();
  };
  if (value instanceof HTMLElement) {
    return value.innerText;
  };
};

console.log(typeGuard('Valeu, natalina'));

const obj = {
  nome: "Bruno",
}

if ('nome' in obj) {
  console.log('sim');
};

async function fetchProuto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(data: Produto) {
  console.log(data);
  if ("preco" in data) {
    document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Nome: ${data.preco + 100}</p>
  `;
  }
}

fetchProuto()