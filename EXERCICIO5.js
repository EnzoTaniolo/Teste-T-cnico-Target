function inverterString(str) {
  let array = []
  for (let i = 0; i < str.length; i++) {
      array.push(str[i])
  }

  let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
  }

  let resultado = arrayInvertido.join('')
  return resultado
}

const stringOriginal = "String invertida"
const stringInvertida = inverterString(stringOriginal)

console.log(`String Invertida: ${stringInvertida}`)