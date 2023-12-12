let total: string | number = 200

function insNumber(value: string | number) {
  if (typeof value === 'number') {
    return true;
  } else {
    return false
  }
}

console.log(insNumber('Valeu'))

const button = document.querySelector('button')

button?.click()