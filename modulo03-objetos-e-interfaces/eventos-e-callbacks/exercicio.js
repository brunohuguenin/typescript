"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const nav = document.getElementById('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-expand", "false");
            button.setAttribute("arial-label", "Abrir Menu");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-expand", "true");
            button.setAttribute("arial-label", "Fechar Menu");
        }
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener('pointerdown', toggleMenu);
