"use strict";
// const {body} : {body: HTMLElement} = document;
// function handleData({nome, preco}: {nome:string; preco?: number}){
//   nome.includes("book");
//   preco?.toFixed();
// }
// handleData({
//   nome: "Notebook",
// })
// function handleClick({currentTarget, pageX}: {currentTarget: EventTarget | null; pageX: number}) {
//   console.log(currentTarget, pageX)
// }
// document.documentElement.addEventListener("click", handleClick);
function comparar(tipo, ...numeros) {
    console.log(tipo);
    console.log(numeros);
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log(comparar("menor", 4, 5, 3, 4, 17));
console.log(comparar("maior", 4, 5, 3, 4, 17));
