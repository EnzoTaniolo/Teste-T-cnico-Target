
function verificaFibonacci(numero) {
  let a = 0
  let b = 1

  if (numero === a || numero === b) {
    return `${numero} pertence à sequência de Fibonacci.`
  }

  while (b < numero) {
    const temp = a
    a = b
    b = temp + b
  }

  if (b !== numero) {
    return `${numero} não pertence à sequência de Fibonacci.`
  }
    
  return `${numero} pertence à sequência de Fibonacci.`

}

console.log(verificaFibonacci(1))
