function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

console.log(normalizar('Valeu, Natalina!'))
//console.log(normalizar(317))

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  manipularData(data)
}

fetchJSON('https://api.origamid.dev/json/cursos.json');

function manipularData(data: {nome: string}) {
  console.log(data.nome)
}