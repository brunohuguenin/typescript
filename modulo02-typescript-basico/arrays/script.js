"use strict";
const numeros = [10, 20, 30, 40, 50, 3, 8, 9, "8", "15"];
const valores = [10, 'Taxa', 30, 'Imposto', 50, 'Produto', 80, 77, 9, "8", "15"];
function maiorQDez(data) {
    return data.filter((n) => n > 10);
}
function filtrarValores(data) {
    return data.filter((item) => typeof item === 'number');
}
console.log(maiorQDez(numeros));
console.log(filtrarValores(valores));
