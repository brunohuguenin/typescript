// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(valor: number | string) {
  if (typeof valor === 'number') {
    return valor
  }
  else if (typeof valor === 'string') {
    return Number(valor)
  } else {
    throw "Valor deve ser um number | string"
  }
}

console.log(toNumber('5786'))
// console.log('valeu')