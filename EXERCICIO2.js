
function pertenceAFibonacci(numero) {
  let a = 0
  let b = 1

  if (numero === a || numero === b) {
      return true
  }

  while (b < numero) {
      const temp = a
      a = b
      b = temp + b
  }

  return b === numero
}


const numero = 34
const pertence = pertenceAFibonacci(numero)

if (pertence) {
  console.log(`${numero} pertence à sequência de Fibonacci.`)
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`)
}
