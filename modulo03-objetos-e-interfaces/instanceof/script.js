"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("A Guerra dos Tronos", 200);
console.log(livro.precoReal(200));
class Livro {
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro("J. R. R Tolkien");
    }
    if (busca === 'Dark Souls') {
        return new Jogo(1);
    }
    return null;
}
const produto = buscarProduto('O Hobbit');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
