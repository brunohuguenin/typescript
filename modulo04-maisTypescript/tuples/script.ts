const produto1 = ['Notebook', 2500];

if (typeof produto1[0] === 'number') {
  produto1[0].toFixed(2)
}

const produto2: [string, number] = ['Notebook', 2500];
produto2[0].toUpperCase();
produto2[1].toExponential();

const [nome, preco] = produto2;
nome;
preco;
console.log(nome);

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText('button');
if (button) {
  button[0] = 'teste'
}
console.log(button)