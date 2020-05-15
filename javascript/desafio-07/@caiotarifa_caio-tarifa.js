//
// Função que implementa o "crivo de Sundaram", lógica adaptada de Eratóstenes que questionou, ainda na Grécia Antiga,
// a viabilidade de descartar previamente os números que possuem divisores naturais. Essa técnica reduz a quantidade de
// possibilidades que serão testadas, o que melhora o tempo de resposta e permite alcançar números mais longínquos.
//
// Como trata-se de uma lógica conhecida, vi este desafio como uma oportunidade de converter matemática em código, com
// foco em performance, por isso algumas otimizações foram feitas.
//
// https://pt.wikipedia.org/wiki/Crivo_de_Sundaram
// https://pt.wikipedia.org/wiki/Crivo_de_Eratóstenes
//
function primeNumbers (max) {
  const odds = Math.ceil(max / 2)
  const array = Array(odds)

  for (let index = 1; index < (odds - 1) / 3; index++) {
    array[1 + 3 * index] = true
  }
  
  const limit = (Math.sqrt(4 + 8 * odds) - 2) / 4

  for (let i = 2; i <= limit; i++) {
    const checkpoint = (odds - i) / (1 + 2 * i)

    if (i % 3 - 1) {
      for (let j = i; j < checkpoint; j++) {
        array[i + j + 2 * i * j] = true
      }
    }
  }
  
  const result = []

  for (let index = 1; index < odds; index++) {
    !array[index] && result.push(index * 2 + 1)
  }

  max > 1 && result.unshift(2)

  return result
}

console.log(
  primeNumbers(0),
  primeNumbers(1),
  primeNumbers(2),
  primeNumbers(3),
  primeNumbers(5),
  primeNumbers(10),
  primeNumbers(100),
  primeNumbers(1000)

  // BÔNUS: 1B.
  // ,primeNumbers(10**9)
)
