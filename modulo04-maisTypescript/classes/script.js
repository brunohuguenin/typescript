"use strict";
class Product {
    constructor(nome, preco) {
        this.tipo = 'produto';
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
}
const livro = new Product('12 Regras para a vida', 150);
console.log(livro.tipo);
console.log(livro.nome);
console.log('R$ ' + livro.preco);