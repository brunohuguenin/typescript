const button = document.querySelector('button')
const config = localStorage.getItem('config')

if (button !== null) {
  button.click()
}

if (button) {
  button.click()
}

button?.click()

let total;

function teste() {

}
console.log(teste(), total)


interface Product {
  nome?: string;
}

const jogo: Product = {
  nome: "Ragnarok",
}

const livro: Product = {}

jogo.nome.toLocaleLowerCase()
livro.nome.toLocaleLowerCase()