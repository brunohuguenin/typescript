"use strict";
class Produto {
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto("A Guerra dos Tronos");
class Livro extends Produto {
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro("O Hobbt", "J. R. R Tolkien");
    }
    if (busca === 'Dark Souls') {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
const produto = buscarProduto('O Hobbit');
if (produto instanceof Livro) {
    console.log(produto.nome);
}
if (produto instanceof Jogo) {
    console.log(produto.nome);
}
