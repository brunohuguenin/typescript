"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function typeGuard(value) {
    if (typeof value === "string") {
        return value.toLocaleLowerCase();
    }
    ;
    if (typeof value === "number") {
        return value.toFixed();
    }
    ;
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
    ;
}
;
console.log(typeGuard('Valeu, natalina'));
const obj = {
    nome: "Bruno",
};
if ('nome' in obj) {
    console.log('sim');
}
;
function fetchProuto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
function handleProduto(data) {
    console.log(data);
    if ("preco" in data) {
        document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Nome: ${data.preco + 100}</p>
  `;
    }
}
fetchProuto();
