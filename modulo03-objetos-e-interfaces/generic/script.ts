// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// 1
// console.log(retorno<string>("Be more"))
// console.log(retorno(200))
// console.log(retorno(true))

// const numeros = [1,2,3,4,5,6,7,8,9,];
// const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Maçã'];

// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }

// console.log(firstFive(numeros));
// console.log(firstFive(frutas));

// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }

// notNull("Bruno")?.toLowerCase();
// notNull(200)?.toFixed();

function tipoDado<T>(a: T) {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true).tipo;
tipoDado(250).tipo;