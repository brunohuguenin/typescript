// function somar(a: number, b: number): number {
//   return a + b;
// }

// console.log(somar(6, 73));

// function pintarTela(cor: string) {
//   document.body.style.background = cor;
// }

// pintarTela('tomato');

// const btn = document.querySelector('button');

// btn?.click();


// function isString(value: any) {
//   if (typeof value === 'string') {
//     return true;
//   }
// }

// console.log(isString('teste'))
// console.log(isString(200));

// function abortar(mensagem: string): never {
//   throw new Error(mensagem)
// }

// abortar("Um erro ocorreu")
// console.log('Tente novamente')

// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === 'string') {
//     return valor.trim().toLocaleLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLocaleLowerCase())
//   }
// }

// console.log(normalizar('Produto'));
// console.log(normalizar([' Banana', 'UVA    ']))