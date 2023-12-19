"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco === null || preco === void 0 ? void 0 : preco.toFixed();
}
handleData({
    nome: "Notebook",
});
function handleClick({ currentTarget, pageX }) {
    console.log(currentTarget, pageX);
}
document.documentElement.addEventListener("click", handleClick);
