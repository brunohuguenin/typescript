"use strict";
// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const json = await response.json();
//   handleCursos(json);
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// fetchProduto();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log('É uma instancia de array')
//   }
//   if (Array.isArray(data)) {
//     console.log('É array')
//   }
// }
// function isString(value: unknown): value is string {
//   return typeof value === 'string';
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     console.log(data.toLocaleLowerCase());
//   }
// }
// handleData('Valeu, Natalina')
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
;
fetchProduto();
function isProduto(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
