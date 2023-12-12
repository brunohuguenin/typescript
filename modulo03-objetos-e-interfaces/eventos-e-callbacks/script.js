"use strict";
// const button = document.querySelector('button')
// function handleClick(event: PointerEvent) {
//   console.log(event.pageX)
// }
// button?.addEventListener('pointerdown', handleClick)
// function ativarMenu(event: Event) {
//   console.log(event.type);
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX);
//   }
// }
// document.documentElement.addEventListener('mousedown', ativarMenu);
// document.documentElement.addEventListener('touchstart', ativarMenu);
// document.documentElement.addEventListener('pointerdown', ativarMenu);
const button = document.querySelector('button');
function handleClick(event) {
    console.log(this);
}
button === null || button === void 0 ? void 0 : button.addEventListener('pointerdown', handleClick);
