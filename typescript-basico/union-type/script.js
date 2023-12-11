"use strict";
let total = 200;
function insNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return false;
    }
}
console.log(insNumber('Valeu'));
const button = document.querySelector('button');
button?.click();
