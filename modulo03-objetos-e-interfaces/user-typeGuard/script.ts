async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
};

fetchProduto();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É uma instancia de array')
  }
  if (Array.isArray(data)) {
    console.log('É array')
  }
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toLocaleLowerCase());
  }
}

handleData('Valeu, Natalina')